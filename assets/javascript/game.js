
//load stuff
$(document).ready(function () {

	// Initialize Firebase
	let config = {
		apiKey: "AIzaSyDv5rZU0ZW_kJohQ6A2c5PVnT91fz1jee0",
		authDomain: "starfleet-patrol.firebaseapp.com",
		databaseURL: "https://starfleet-patrol.firebaseio.com",
		projectId: "starfleet-patrol",
		storageBucket: "starfleet-patrol.appspot.com",
		messagingSenderId: "590431002658"
	};

	firebase.initializeApp(config);

	// Create a variable to reference the database
	let database = firebase.database();

	// Initial Values

	// --------------------------------------------------------------

	// Whenever a user clicks the launch button
	$("#addship").on("click", function (event) {
		event.preventDefault();

		let audioElement = document.createElement("audio");
		audioElement.setAttribute("src", "assets/sound/button3.mp3");
		audioElement.play();

		// Save the new date in Firebase. This will cause our "value" callback above to fire and update the UI.
		database.ref("/shiplist1").push({
			starship: starship,
			registery: registery,
			starbase: starbase,
			launchTime: launchTime,
			duration: duration
		});
	});

	// --------------------------------------------------------------

// Current Time
let currentTime = moment();
let currentTimeE = moment(currentTime).format('MMM Do YYYY');
console.log("Current Earth date: " + currentTimeE);

		$("#earthdate").text("Current Earth Date: " + currentTimeE);


		let dateSD = moment(currentTime).format("DDDD");
		let hourSD = moment(currentTime).format("HH");
		let stardateH = 2.74 * hourSD / 24
		let stardateL = stardateH + 5000 + 1000 * dateSD / 365

		let stardateR = Math.round(stardateL * 10) / 10
		console.log("Stardate: " + stardateR);
		$("#stardate").text("Current Stardate: " + stardateR);

});










