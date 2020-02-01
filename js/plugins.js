// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());



// Place any jQuery/helper plugins in here.
$(document).ready(function(){
    // Navbar script
    $(".navbar-brand").click(function(){
        $(".side-bar").toggleClass("side-bar-active");
        $(".page-body").toggleClass("page-active");
        $("body").toggleClass("body-active");
    })
    $(".page-body").click(function(){
        $(".side-bar").removeClass("side-bar-active");
        $(".page-body").removeClass("page-active");
        $("body").removeClass("body-active");
    })
    
})