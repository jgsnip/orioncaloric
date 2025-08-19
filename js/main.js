// Orion Landing – Progressive enhancement
(function(){
  // Smooth scroll for anchor links
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.addEventListener('click', function(e){
    var a = e.target.closest('a[href^="#"]');
    if(!a) return;
    var id = a.getAttribute('href').slice(1);
    var el = document.getElementById(id);
    if(el){
      e.preventDefault();
      if(prefersReduced){ el.scrollIntoView(); }
      else{ el.scrollIntoView({behavior:'smooth', block:'start'}); }
      el.setAttribute('tabindex', '-1'); el.focus({preventScroll:true});
    }
  }, {passive:true});

  // Lazy load SVGs that use data-src
  var lazyImgs = [].slice.call(document.querySelectorAll('img[data-src]'));
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          var img = entry.target; img.src = img.getAttribute('data-src'); img.removeAttribute('data-src');
          io.unobserve(img);
        }
      });
    }, {rootMargin: '200px 0px'});
    lazyImgs.forEach(function(img){ io.observe(img); });
  } else {
    lazyImgs.forEach(function(img){ img.src = img.getAttribute('data-src'); img.removeAttribute('data-src'); });
  }

  // Simple form validation enhancement
  var form = document.querySelector('form[data-enhanced="true"]');
  if(form){
    form.addEventListener('submit', function(e){
      if(!form.checkValidity()){
        e.preventDefault();
        var firstInvalid = form.querySelector(':invalid');
        if(firstInvalid){ firstInvalid.focus(); }
      }
    });
  }
})();
