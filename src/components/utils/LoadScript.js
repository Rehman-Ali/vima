exports.Css = url => {
  return new Promise((resolve, reject) => {
    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    link.onload = function() {
      resolve();
      console.log('style has loaded');
    };

    let headScript = document.querySelector('script');
    headScript.parentNode.insertBefore(link, headScript);
  });
};

// for load scripts
exports.Script = src => {
  return new Promise(function(resolve, reject) {
    //document.body.removeChild(script);

    var script = document.createElement('script');
    script.src = src;
    script.addEventListener('load', function() {
      resolve();
      console.log('script has loaded');
    });
    script.addEventListener('error', function(e) {
      reject(e);
    });
    document.body.appendChild(script);
    //document.body.removeChild(script);
    let headLink = document.querySelector('link');
    // headLink.parentNode.insertAfter(script, headLink);
    // headLink.parentNode.removeChild(headLink);
  });
};

exports.loadHeaderScript = () => {
  this.Script("assets/js/ion.rangeSlider.min.js");
  this.Script("assets/js/swiper.min.js");
  this.Script("assets/js/jquery.min.js");
  this.Script("assets/js/popper.min.js");
  this.Script("assets/js/bootstrap.min.js");
  this.Script("assets/js/jquery.magnific-popup.min.js");
  this.Script("assets/js/jquery.nice-select.min.js");
  this.Script("assets/js/main.js");


 

};


exports.loadHeaderCSS = () => {
  this.Css("assets/css/swiper.min.css");
  this.Css("assets/css/ion.rangeSlider.min.css");


};
