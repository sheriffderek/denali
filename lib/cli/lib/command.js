/**
 * @module denali
 * @submodule cli
 */
import path from 'path';
import findup from 'findup-sync';
import ora from 'ora';
import ui from './ui';
import forIn from 'lodash/forIn';
import padEnd from 'lodash/padEnd';
import includes from 'lodash/includes';

/**
 * Represents a subcommand of the `denali` CLI.
 *
 * @class Command
 * @letructor
 * @private
 */
export default class Command {

  /**
   * Description of what the command does. Displayed when `denali` is run
   * without arguments.
   *
   * @property description
   * @type String
   */
  description = null;

  /**
   * An array of positional paramters to this command. For example,
   *
   *     params: [ 'foo', 'bar' ]
   *
   * When run with:
   *
   *     $ denali mycommand Hello World
   *
   * Would result in:
   *
   *     run(params) {
   *       params.foo // "Hello"
   *       params.bar // "World"
   *     }
   *
   * @property params
   * @type Array
   */
  params = [];

  /**
   * Configuration for which flags the command accepts. Flags start with `-` or
   * `--`, and can be booleans (i.e. the flag is present or not), strings (i.e.
   * `--environment production`), or arrays of strings (i.e. `--files foo bar`).
   *
   * @property flags
   * @type {Object}
   * @example
   *     // i.e. $ denali mycommand --environment production --debug
   *     flags: {
   *       environment: {
   *         description: 'The environment to run under',
   *         defaultValue: 'development',
   *         type: 'string'
   *       },
   *       debug: {
   *         description: 'Start in debug mode',
   *         defaultValue: false,
   *         type: 'boolean'
   *       }
   *     }
   */
  flags = {};

  /**
   * Show a spinner to indicate activity
   *
   * @method startSpinner
   */
  startSpinner(msg) {
    this.spinner = ora(msg);
    this.spinner.start();
  }

  /**
   * Stop showing the busy spinner
   *
   * @method stopSpinner
   */
  stopSpinner() {
    this.spinner.stop();
  }

  /**
   * Run the command.
   *
   * @method run
   * @param params {Object} an object containing the values of any configured
   * positional params
   * @param flags {Object} an object containing the values of any configured
   * flags
   */
  run() {
    throw new Error('You must implement a `run()` method');
  }

  _run(argTokens, commands) {
    if (includes(argTokens, '-h') || includes(argTokens, '--help')) {
      return this.printHelp();
    }
    if (this.runsInApp) {
      if (this.isDenaliApp()) {
        this.run(this.parseArgs(argTokens), argTokens, commands);
      } else {
        ui.error('This command can only be run inside a Denali app');
      }
    } else {
      if (this.isDenaliApp()) {
        ui.error('This command cannot be run inside a Denali app');
      } else {
        this.run(this.parseArgs(argTokens), argTokens, commands);
      }
    }
  }

  isDenaliApp() {
    let pkgpath = findup('package.json');
    if (pkgpath) {
      const pkg = require(path.resolve(pkgpath));
      return pkg.dependencies && pkg.dependencies.denali;
    }
    return false;
  }

  printHelp() {
    let paramsHelp = this.params.map((param) => `<${ param }>`).join(' ');
    ui.info(`usage: denali ${ this.constructor.commandName } ${ paramsHelp }\n`);
    ui.info(this.constructor.longDescription.trim());
    if (Object.keys(this.flags).length > 0) {
      ui.info('\nOptions:');
      let pad = Object.keys(this.flags).reduce((length, flag) => Math.max(length, flag.length), 0);
      forIn(this.flags, (config, name) => {
        ui.info(`  ${ padEnd(name, pad) }  ${ config.description }`);
      });
    }
    ui.info('');
  }

  parseArgs(argTokens) {
    // Parse the arguments - there are two types of args: flags (i.e. --flag) and
    // params (i.e. positional args)
    let args = argTokens.slice(0);
    let params = {};
    let flags = {};
    let lastParamName = null;
    while (args.length > 0) {
      let arg = args.shift();

      // It's a flag if the first char is '-'
      if (arg.charAt(0) === '-') {
        arg = arg.match(/--?(.*)/)[1];

        // Find the matching flag - this allows for partial flag names, i.e.
        // --env will match --environment
        let flagConfig;
        let flagName;
        forIn(this.flags, (config, name) => {
          if (name.startsWith(arg)) {
            flagName = name;
            flagConfig = config;
          }
        });

        // No preconfigured flag was found, so ...
        if (!flagConfig) {
          // Every command has --help/-h flag
          if ('help'.startsWith(arg)) {
            flagName = 'help';
          // Otherwise, warn the user that flag isn't supported
          } else {
            if (this.allowExtraArgs !== true) {
              ui.warn(`WARNING: ${ arg } is not a recognized option for the ${ this.constructor.commandName } command`);
            }
            continue;
          }
        }

        if (flagConfig.type === Boolean) {
          flags[flagName] = true;
        } else if (flagConfig.type === Number) {
          flags[flagName] = Number(args.shift());
        } else {
          flags[flagName] = args.shift();
        }

      // It's a param
      } else {

        // If there's still positional params available, use the next one
        if (this.params.length > 0) {
          let paramName = this.params.shift();
          params[paramName] = arg;
          lastParamName = paramName;
        } else {

          // Otherwise, if this command doesn't take any positional params at all,
          // warn the user.
          if (!lastParamName && !this.allowExtraArgs) {
            ui.warn(`The ${ this.constructor.commandName } command doesn't take any arguments.`);

          // If it does take positional params, but they've all been used up,
          // convert the last positional param to an array and add this arg to it.
          // This allows for variable param lengths.
          } else {
            if (!Array.isArray(params[lastParamName])) {
              params[lastParamName] = [ params[lastParamName], arg ];
            } else {
              params[lastParamName].push(arg);
            }
          }

        }

      }

      return { params, flags };
    }

  }

}