import * as fs from 'fs-extra';
import * as path from 'path';
import walk from 'walk-sync';

export default function requireDir(dirpath: string, options: { recurse?: false } = {}): { [moduleName: string]: any } {
  let modules: { [moduleName: string]: any } = {};
  let paths;
  if (options.recurse === false) {
    paths = fs.readdirSync(dirpath);
  } else {
    paths = <string[]>walk(dirpath);
  }
  paths.forEach((filepath) => {
    let absolutepath = path.join(dirpath, filepath);
    if (fs.statSync(absolutepath).isFile() && /\.js$/.test(filepath)) {
      let moduleName = filepath.slice(0, filepath.length - 3);
      let mod = require(absolutepath);
      modules[moduleName] = mod.default || mod;
    }
  });
  return modules;
}
