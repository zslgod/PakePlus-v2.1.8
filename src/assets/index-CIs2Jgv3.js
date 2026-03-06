function a(e,n){var t=null;return function(){var r=this,u=arguments;clearTimeout(t),t=setTimeout(function(){e.apply(r,u)},n)}}export{a as d};
