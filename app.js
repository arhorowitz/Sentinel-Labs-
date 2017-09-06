$(document).ready(function() {
  console.log('script is linked')

    $('#fullpage').fullpage({
        anchors:['home', 'about', 'solutions', 'opportunities', 'contact'],
        slidesNavigation: true,
        menu: '#myMenu',
        scrollBar: true,
        autoScrolling: false,
        fitToSection: false
      //   afterRender: function () {
       //
      //      //playing the video
      //      $('#vid').get(0).play();
      //  }
    });

  });


function submitForm(form) {
  console.log('here', form)
  emailjs.sendForm('default_service', 'template_tbXI1h1K', form);
  $('#contact-form').get(0).reset();
  history.back()
  return false;
}
