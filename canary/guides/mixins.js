<!DOCTYPE html>
<html>
  <head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Mixins</title>
  <meta name="description" content="">

  <link href='https://fonts.googleapis.com/css?family=Inconsolata|Lato:400,700|Open+Sans:400,400italic,700|Montserrat+Alternates:700' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="/css/main.css">
  <link rel="canonical" href="http://denali.github.com/denali/guides/mixins.js">
</head>

  <body>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-2.2.2.min.js"><\/script>')</script>
    <nav class="navbar navbar-full navbar-dark">
  <div class='container'>
    <a href='/' class='navbar-brand'>
      <img class='logo-light' src='/images/logo.png' alt='Denali'>
      <span class='project-name'>denali</span>
    </a>

    <div class='nav navbar-nav pull-xs-right'>
      <li class='nav-item'>
        <a class='nav-link' href='/canary/guides/quickstart'>Quickstart</a>
      </li>
      <li class='nav-item'>
        <a class='nav-link' href='/canary/guides/introduction'>Guides</a>
      </li>
      <li class='nav-item'>
        <a class='nav-link' href='/canary/api'>API</a>
      </li>
      <li class='nav-item'>
        <a class='nav-link' href='https://github.com/davewasmer/denali' target='_blank'>Github</a>
      </li>
      <li class='nav-item'>
        <a class='nav-link' href='https://github.com/davewasmer/denali/issues' target='_blank'>Issues</a>
      </li>
    </div>
  </div>
</nav>

<div class='container'>
  <div class="row">
    <div class='guides-nav col-md-3'>

  <div class='nav-section'>
  <div class='nav-header'>Version</div>
  <select id='versions'>
    
      <option value='canary' selected='selected'>canary</option>
    
  </select>
</div>


  
    <div class='nav-section'>
      
      
        <a href='/canary/guides/introduction/' class='nav-link'>Introduction</a>
      
        <a href='/canary/guides/quickstart/' class='nav-link'>Quickstart</a>
      
        <a href='/canary/guides/app-structure/' class='nav-link'>App Structure</a>
      
    </div>
  
    <div class='nav-section'>
      
        <div class='nav-header'>Application</div>
      
      
        <a href='/canary/guides/routing/' class='nav-link'>Routing</a>
      
        <a href='/canary/guides/actions/' class='nav-link'>Actions</a>
      
        <a href='/canary/guides/services/' class='nav-link'>Services</a>
      
        <a href='/canary/guides/errors/' class='nav-link'>Errors</a>
      
        <a href='/canary/guides/mailers/' class='nav-link'>Mailers</a>
      
    </div>
  
    <div class='nav-section'>
      
        <div class='nav-header'>Data</div>
      
      
        <a href='/canary/guides/models/' class='nav-link'>Models</a>
      
        <a href='/canary/guides/serializers/' class='nav-link'>Serializers</a>
      
        <a href='/canary/guides/orm-adapters/' class='nav-link'>ORM Adapters</a>
      
    </div>
  
    <div class='nav-section'>
      
        <div class='nav-header'>Testing</div>
      
      
        <a href='/canary/guides/integration/' class='nav-link'>Integration</a>
      
        <a href='/canary/guides/unit/' class='nav-link'>Unit Testing</a>
      
    </div>
  
    <div class='nav-section'>
      
        <div class='nav-header'>Configuration</div>
      
      
        <a href='/canary/guides/environment/' class='nav-link'>Environment</a>
      
        <a href='/canary/guides/middleware/' class='nav-link'>Middleware</a>
      
        <a href='/canary/guides/initializers/' class='nav-link'>Initializers</a>
      
    </div>
  
    <div class='nav-section'>
      
        <div class='nav-header'>Utilities</div>
      
      
        <a href='/canary/guides/mixins.js' class='nav-link'>Mixins</a>
      
        <a href='/canary/guides/addons/' class='nav-link'>Addons</a>
      
        <a href='/canary/guides/instrumentation/' class='nav-link'>Instrumentation</a>
      
    </div>
  
    <div class='nav-section'>
      
        <div class='nav-header'>CLI</div>
      
      
        <a href='/canary/guides/generate/' class='nav-link'>denali generate</a>
      
        <a href='/canary/guides/serve/' class='nav-link'>denali serve</a>
      
        <a href='/canary/guides/test/' class='nav-link'>denali test</a>
      
        <a href='/canary/guides/build/' class='nav-link'>denali build</a>
      
        <a href='/canary/guides/addon/' class='nav-link'>denali addon</a>
      
        <a href='/canary/guides/console/' class='nav-link'>denali console</a>
      
    </div>
  
</div>

    <div class='col-md-9 guides-body'>
      <a class="btn btn-info pull-xs-right" target="_blank" href="https://github.com/davewasmer/denali/edit/master/guides/mixins.js">Improve this page</a>
      # Mixins

**Coming soon ...**

We are hard at work fleshing out the remaining docs. Want to help? Just click
the "edit this guide" link and chip in!

    </div>
  </div>
</div>

<footer class="footer">

</footer>

<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
<script>
    (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
    function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
    e=o.createElement(i);r=o.getElementsByTagName(i)[0];
    e.src='//www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
    ga('create','UA-XXXXX-X','auto');ga('send','pageview');
</script>


  </body>
</html>