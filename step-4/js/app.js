(function () {
	// Card Elements
	var githubCard = document.querySelector(".github__card");
	var avatarElement = githubCard.querySelector(".github__header img");
	var profileLinkElement = githubCard.querySelector(".github__link");
	var githubBodyElement = githubCard.querySelector(".github__body-content");
	var nameElement = githubBodyElement.querySelector(".name span");
	var bioElement = githubBodyElement.querySelector(".bio .text");
	var locationElement = githubBodyElement.querySelector(".location span");
	var githubFooterElement = githubCard.querySelector(".github__footer-content");
	var repoElement = githubFooterElement.querySelector(".repos .text");
	var followersElement = githubFooterElement.querySelector(".followers .text");
	var followingElement = githubFooterElement.querySelector(".following .text");
	var headerElement = document.querySelector('.header');
	var menuHeaderElement = document.querySelector('.menu__header');

	//TODO: IMPLEMENT FETCH API AND FETCH USER DETAILS USING GITHUB API

	//Once the DOM is loaded, check for connectivity
	document.addEventListener('DOMContentLoaded', function(event) {
		if (!navigator.onLine) {
			goOffline();
		}

		//Offline event listener
		window.addEventListener("offline", function () {
			goOffline();
		});

		//Online event listener
		window.addEventListener("online", function () {
			goOnline()
		});
	});

	function goOffline() {
		headerElement.style.background = '#9E9E9E';
		menuHeaderElement.style.background = '#9E9E9E';
	}

	function goOnline() {
		headerElement.style.background = '';
		menuHeaderElement.style.background = '';
	}
})();
