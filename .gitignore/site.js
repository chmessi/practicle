jQuery(document).ready(function($) {

	/* vars */

	var $window = $(window);
	var bgLoader = window.bgPreload;
	var colorLoader = window.colorPreload;
	var heightLoader = window.heightPreload;
	var ismobile=navigator.userAgent.match(/(iPhone)|(iPod)|(android)|(webOS)/i);
	var homeSection = $('.home-section');
	var sloganHeight = $('#slogan').outerHeight();

	/* End Vars */

	/* Parallax Effect */

	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this); // assigning the object
		$(window).scroll(function() {
			var yPos = -( ($window.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));
			// Put together our final background position
			var coords = '50% '+ yPos + 'px';
			// Move the background
			$bgobj.css({ backgroundPosition: coords });
		});
	});

	/* End Parallax Effect */

	if(homeSection.length) {
		if( (!ismobile && window.full !== '1')) {
			$('.home-section').addClass('full-home');
			$('.home-section').css('height', window.innerHeight+'px');
			$(window).resize(function() {
				$('.home-section').css('height', window.innerHeight+'px');
			});
		}
	}
	if(ismobile) {
		$('.video-bg').remove();
	}
	$('#slogan').css("height", sloganHeight);

	/* Preloading Single Page */

	if ( !$('html').hasClass('ie8') ) {
		$("body").queryLoader2({
		    percentage        : true,
		    barHeight         : heightLoader,
		    minimumTime       : 1000,
		    maxTime						: 15000,
		    barColor          : colorLoader,
		    backgroundColor   : bgLoader,
		    onComplete: function() {
		    	if ( $('.fw-slider').length ) {
			    	$('.fw-slider').owlCarousel( {
								autoPlay: window.sliderAutoplay,
								pagination: window.sliderPagination,
								navigation: window.sliderNavigation,
								navigationText : ['<span class="fa fa-chevron-left">','<span class="fa fa-chevron-right">'],
								paginationSpeed : 6000,
						    singleItem: true,
						   	transitionStyle : window.sliderEffect
						});
			    }
		    	TweenMax.to( $('#menu-top'), 1, {css:{top:0,opacity:1}});
		    	$('.portfolio-wrp').each(function() {
						sortable($(this));
		    	});
		    	
			    var leftProduct = $('.left-product');
			    var rightProduct = $('.right-product');
			      if(leftProduct.length) {
			      	TweenMax.to( $('.left-product'), 1, {css:{bottom:0,opacity:1}});
			      }
			      if(rightProduct.length) {
			      	TweenMax.to( $('.right-product'), 1, {css:{top:0,opacity:1}});
			      }
			   },
		});
	} else {
		$('.video-bg').remove();
	}
	jQuery(window).load(function(){
      $('#prepage').fadeOut().remove();
  });

	/* End Preloading */

	$('.section-page').last().addClass('last-section');

	/* Swipebox */

	$(".swipebox, .gallery-icon a").swipebox( {
		hideBarsDelay : 0,
		useSVG : false
	});

	/* End Swipebox */

	$("div.gallery a img").each(function() {
	  var $this = jQuery(this);
	  $this.parent().attr('title', $this.attr('alt'));
	});
	/* Youtube Video Bg */

	$(".player").YTPlayer();

	/* End Youtube Video Bg */

	/* Same Height products name shop page */

	function equalizeHeights(selector) {
		var heights = new Array();

		// Loop to get all element heights
		$(selector).each(function() {

			// Need to let sizes be whatever they want so no overflow on resize
			$(this).css('min-height', '0');
			$(this).css('max-height', 'none');
			$(this).css('height', 'auto');

			// Then add size (no units) to array
	 		heights.push($(this).height());
		});

		// Find max height of all elements
		var max = Math.max.apply( Math, heights );

		// Set all heights to max height
		$(selector).each(function() {
			$(this).css('height', max + 'px');
		});
	}
	if ( $('.item-meta-info').length ) {
		$(window).load(function() {
			// Fix heights on page load

			equalizeHeights('.item-meta-info .item-title-stars');

			// Fix heights on window resize
			$(window).resize(function() {

				// Needs to be a timeout function so it doesn't fire every ms of resize
				setTimeout(function() {
		    	equalizeHeights('.item-meta-info .item-title-stars');
				}, 120);
			});
		});
	}

	/* Particles Effect */

	if (window.particlesOn == 1) {
		particlesJS("particles-js", {
		  "particles": {
		    "number": {
		      "value": 100,
		      "density": {
		        "enable": true,
		        "value_area": 1000
		      }
		    },
		    "color": {
		      "value": window.particlesDotsColor
		    },
		    "shape": {
		      "type": "circle",
		      "stroke": {
		        "width": 0,
		        "color": "#000000"
		      },
		      "polygon": {
		        "nb_sides": 5
		      }
		    },
		    "opacity": {
		      "value": 10,
		      "random": false,
		      "anim": {
		        "enable": false,
		        "speed": 3,
		        "opacity_min": 0.1,
		        "sync": false
		      }
		    },
		    "size": {
		      "value": 2,
		      "random": true,
		      "anim": {
		        "enable": false,
		        "speed": 100,
		        "size_min": 0.1,
		        "sync": false
		      }
		    },
		    "line_linked": {
		      "enable": true,
		      "distance": 20,
		      "color": window.particlesLinesColor,
		      "opacity": 10,
		      "width": 2
		    },
		    "move": {
		      "enable": true,
		      "speed": window.particlesSpeed,
		      "direction": "none",
		      "random": false,
		      "straight": false,
		      "out_mode": "out",
		      "bounce": false,
		      "attract": {
		        "enable": false,
		        "rotateX": 600,
		        "rotateY": 1200
		      }
		    }
		  },
		  "interactivity": {
		    "detect_on": "window",
		    "events": {
		      "onhover": {
		        "enable": true,
		        "mode": "grab"
		      },
		      "onclick": {
		        "enable": true,
		        "mode": "push"
		      },
		      "resize": true
		    },
		    "modes": {
		      "grab": {
		        "distance": 250,
		        "line_linked": {
		          "opacity": 1
		        }
		      },
		      "bubble": {
		        "distance": 400,
		        "size": 40,
		        "duration": 2,
		        "opacity": 8,
		        "speed": 3
		      },
		      "repulse": {
		        "distance": 200,
		        "duration": 0.4
		      },
		      "push": {
		        "particles_nb": 4
		      },
		      "remove": {
		        "particles_nb": 2
		      }
		    }
		  },
		  "retina_detect": true
		});
	}
});

/* End Particles */

function portfolioItem(element) {
	$('div.portfolio-loading').fadeOut('slow');
	$('.portfolio-carousel').carousel('pause');
	element.find('div.portfolio-item .button-controls').append('<li><a href="#" class="close-item nav-control"><span class="fa fa-times"></span></a></li>');
	$('.carousel-inner .item').first().addClass('active');
	element.find('div.portfolio-item').hide().delay(1000).slideDown(1000, function() {
		$('.description-btn').click(function(e) {
			$('#overlay').fadeIn(400);
			element.find(".description-item").slideDown('slow');
			$(this).toggleClass('active-description');
			e.preventDefault();
			$('.close-description').click(function(e) {
				$('#overlay').fadeOut(400);
				$(".description-item").slideUp('slow');
				e.preventDefault();
			});
		});
		$('.portfolio-item .close-item').on('click', function() {
			$(this).closest('.portfolio-item').slideUp(1000, function() {
				$(this).closest('.portfolio-detail-container').empty();
				element.find('.filter').slideDown('slow');
			});
			return false;
		});
		//click() ends
	});
	//slideDown ends
}

/* Opening Porfolio Items */
function loadItem() {
	var source = $(this).attr("href"),
			portfolioWrapper = $(this).closest('.portfolio-wrp'),
			itemContainer = $(this).closest('.portfolio-container').find('.portfolio-detail-container'),
			itemLoading = $(this).closest('.portfolio-container').find('.portfolio-loading');
	portfolioWrapper.find('.filter').slideUp('slow');
	$('html,body').animate({
		scrollTop : portfolioWrapper.offset().top
	}, 'slow', function() {
		var prevItem = portfolioWrapper.find('.portfolio-item');
		if (prevItem.length) {
			prevItem.slideUp(1000, function() {
				itemLoading.fadeIn('slow');
				itemContainer.load(source+' .section-page > *', function() {
					portfolioItem(portfolioWrapper);
				});
				//load() ends
			});
		} else {
			itemLoading.fadeIn('slow');
			itemContainer.load(source+' .section-page > *', function() {
				portfolioItem(portfolioWrapper);
			});
		}
	});
	return false;
}
$('body').on('click', '.open-link', loadItem);

/* End Opening Porfolio Items */

/* Navigation */

var lastId,
    topMenu = $(".top-nav"),
    scrollDown = $(".scroll-down"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).parent().not('.custom-link,.sub-menu li').children().attr("href"));
      if (item.length) { return item; }
    });


var homeSection = $('.home-section');
if(homeSection.length) {
	var id = $('.home-section').attr('id');
	$('#mini-logo a').attr("href","#"+id);
}
if ($('#menu-top').length) {
  menuItems.add(scrollDown).click(function(e){
    var href = this.hash,
    offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+window.topOffset;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, window.speed, 'easeInOutExpo');
    e.preventDefault();
  });


  $('.home-link a,#mini-logo a').add(scrollDown).click(function(e) {
    var href = this.hash,
    offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+window.topOffset;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, window.speed, 'easeInOutExpo');
    e.preventDefault();
  });
}
var homeBubble = $('#nav-home li').each(function() {
    if (!$(this).hasClass('custom-link')) {
      $('#nav-home a').add(scrollDown).click(function(e){
        var href = this.hash,
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+window.topOffset;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, window.speed, 'easeInOutExpo');
        e.preventDefault();
    });
  }
  return this;
});



var ismobile=navigator.userAgent.match(/(iPhone)|(iPod)|(iPad)|(android)|(webOS)/i);
if( (ismobile)) {
	$('.nav-collapse a').click(function(e) {
		$('.nav-collapse').slideUp(400, function () {
			$('.nav-collapse').css('height','0');
			$('.btn-navbar').click(function() {
				$('.nav-collapse').toggleClass('menu-height');
				$('.nav-collapse').slideDown(400);
			});
		});
	});
}


var stickyHeaderTop = 500;

// Bind to scroll
$(window).bind('scroll', function() {
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });

   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }
   if( jQuery(window).scrollTop() > stickyHeaderTop && $("#menu-top").hasClass('hide-menu')) {
        jQuery('.hide-menu').fadeIn();
    } else {
        jQuery('.hide-menu').fadeOut();
    }
});

/* End Navigation */
function sortable(element) {
  var $portfolioClone = element.find(".portfolio-wrapper").clone();
	element.find(".filter a").click(function(e){
	  element.find(".filter li").removeClass("current");
	  var $filterClass = $(this).parent().attr("class");
	  if ($filterClass == "all") {
	    var $filteredPortfolio = $portfolioClone.find(".item");
	  }
	  else {
	    var $filteredPortfolio = $portfolioClone.find(".item[data-type~="+$filterClass+"]");
	  }
	  $('body').off('click', '.open-link', loadItem);
    element.find(".portfolio-wrapper").quicksand($filteredPortfolio, {
    	adjustHeight: false,
    	adjustWidth: false
    }, function() {
    	$('body').on('click', '.open-link', loadItem);
    });
	  $(this).parent().addClass("current");
	  e.preventDefault();
	});
}
$(".nav-tabs li").click(function() {

  $(this).parent().find('.active').removeClass("active");
  $(this).addClass("active");
  $(this).closest('.tabs-wrapper').find(".tab-pane").hide();

  var activeTab = $(this).find("a").attr("href");
  $(activeTab).fadeIn(700);
  return false;
});
