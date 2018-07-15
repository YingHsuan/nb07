$('#fullpage').fullpage({
    sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
  });

$('html').bind('mousewheel DOMMouseScroll', function() {
  var activeSection = fullpage_api.getActiveSection();
  var isFirstOrLast = activeSection.isFirst || activeSection.isLast;
  if (isFirstOrLast) {
    $('.header').addClass('hide');
  } else {
    $('.header').removeClass('hide');
  }
});
$('.arrow').on('click', function() {
  fullpage_api.moveSectionDown();
})
$('.gototop').on('click', function() {
  fullpage_api.moveTo(1);
})