
	$(document).ready(function() {
		function openNav() {
			document.getElementById("mySidebar").style.width = "250px";
			document.getElementById("main").style.marginLeft = "250px";
		  }
		  
		  function closeNav() {
			document.getElementById("mySidebar").style.width = "0";
			document.getElementById("main").style.marginLeft= "0";
		  }

		//   carousel
		$("#owl-csel1").owlCarousel({
			items: 4,
			autoplay: true,
			autoplayTimeout: 3000,
			startPosition: 0,
			rtl: false,
			loop: true,
			margin: 15,
			dots: true,
			nav: true,
			navText: [
						'<i class="fa fa-angle-left" aria-hidden="true"></i>',
						'<i class="fa fa-angle-right" aria-hidden="true"></i>'
					],
			navContainer: '.main-content .custom-nav',
			responsive:{
				0: {
					items: 1,						
				},
				767: {
					items: 2,						
				},

				992: {
					items: 2,						
				},

				1200: {
					items: 1,						
				}
			}
		});



		//   slide-option
		$(".1").click(function(){
			$(".row-1").slidedown();
		});

		$(".2").click(function(){
			$(".row-2").slideToggle();
		});


		  // change css to scrool top
		$(window).scroll(function(){
			if($(this).scrollTop() > 100){
				$(" .header-logo-area").css(
					{
						"padding":"0",
						"transition":"2s",
					}
				);
			}
			else {
				$(" .header-logo-area").css({
					"padding":"10px 0",
					"transition":"0s",
				});
			}
		});


	

	


	});