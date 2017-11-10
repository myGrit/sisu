// Initialize Firebase
var config = {
	apiKey: "AIzaSyDNJ4bHrhTKKnQu59EcFaAa7YzzIZMU5HI",
	authDomain: "mygrit-01.firebaseapp.com",
	databaseURL: "https://mygrit-01.firebaseio.com",
	projectId: "mygrit-01",
	storageBucket: "mygrit-01.appspot.com",
	messagingSenderId: "20968145830"
};
firebase.initializeApp(config);


// Identify active tab
$('select').change(function() {
	if ($(this).children('option:first-child').is(':selected')) {
	  $(this).addClass('placeholder');
	} else {
	 $(this).removeClass('placeholder');
	}
});

