//swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//tabs
  document.querySelectorAll('.features__nav__element-link').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
  const path = e.currentTarget.dataset.path;
  document.querySelectorAll('.features__nav__element-link').forEach(function(btn){
  btn.classList.remove('features__nav__element-link-active')});
  e.currentTarget.classList.add('features__nav__element-link-active');
  document.querySelectorAll('.features__box-tabe').forEach(function(tabsBtn){
  tabsBtn.classList.remove('features__box-tabe-active')});
  document.querySelector(`[data-target="${path}"]`).classList.add('features__box-tabe-active');
});
});


//accordion
$(".ui-accordion").accordion({
  heightStyle: "content",
  collapsible: true,
  icons: false,
  active: 1,
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

//menu
document.querySelectorAll('.burger').forEach(function(burgerActive) {
  burgerActive.addEventListener('click', function() {
  document.querySelectorAll('.burger__help').forEach(function(burger) {
    burger.classList.toggle('burger__line__activ');
    burger.classList.toggle('burger__line');
});
  document.querySelectorAll('.nav').forEach(function(burgerActive) {
  burgerActive.classList.toggle('nav-active')});
})
});

document.querySelectorAll('.header__nav').forEach(function(menuNav){
menuNav.addEventListener('click', function(){
  document.querySelectorAll('.nav').forEach(function(element) {
   element.classList.remove('nav-active');})
   document.querySelectorAll('.burger__help').forEach(function(burger) {
    burger.classList.toggle('burger__line__activ');
    burger.classList.toggle('burger__line');})
})
})


//поиск
document.querySelectorAll('.header__search-btn').forEach(function(search) {
  search.addEventListener('click', function() {
  document.querySelectorAll('.header__search_box').forEach(function(searchActive) {
    searchActive.classList.toggle('header__search_box-active');});
})});

document.querySelectorAll('.header__reset_form').forEach(function(search) {
  search.addEventListener('click', function() {
  document.querySelectorAll('.header__search_box').forEach(function(searchActive) {
    searchActive.classList.toggle('header__search_box-active');});
})});







