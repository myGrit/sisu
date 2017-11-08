// // Select all tabs
// $('#fixtab').click(function(){
//     console.log("how button clicked");
//     $(this).tab('show');
// })

// // Select tab by name
<<<<<<< HEAD
// $('.nav-tabs a[href="#how"]').tab('show')
=======
// $('.nav-tabs a[href="#how"]').tab('show')
$('select').change(function() {
    if ($(this).children('option:first-child').is(':selected')) {
      $(this).addClass('placeholder');
    } else {
     $(this).removeClass('placeholder');
    }
   });
>>>>>>> 910d8c812d05f3af55da6d9adc453d59f5fdfa37
