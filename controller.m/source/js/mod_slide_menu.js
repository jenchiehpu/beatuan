(function() {
  var slideMenu = document.getElementById("slide_menu");
  if (!slideMenu) {
    return;
  }
  var slideMenuTrigger = document.getElementById("slide_menu_trigger");
  var slideContainer = document.getElementById('slide_container');

  slideMenuTrigger.addEventListener("click", function() {
    if(slideMenu.classList.contains('menu_opened')){
        slideMenu.classList.remove('menu_opened');
        slideContainer.classList.remove('fixed');
        slideMenuTrigger.classList.remove('toggle_label_on');
    }else{
        slideMenu.classList.add('menu_opened');
        slideContainer.classList.add('fixed');
        slideMenuTrigger.classList.add('toggle_label_on');
    }
  });
})();
