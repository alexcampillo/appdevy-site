(function($) {

	$(document).ready(function () {

		var demoSwitcher = $("#demo-switcher"),
			demoSwitcherToggle = demoSwitcher.find(".demo-toggle"),
			demoSwitcherWidth = demoSwitcher.outerWidth(),
			demoSwitcherAnimationTime = 600,
			demoSwitcherAnimationEasing,
			demoSwitcherActiveClass = "switcher-active";

		demoSwitcher.css({ left : '-' + demoSwitcherWidth + 'px' });

		demoSwitcherToggle.on('click', function(event) {

			event.preventDefault();

			if( demoSwitcher.hasClass(demoSwitcherActiveClass) ) {

				demoSwitcher.stop().animate({ left : '-' + demoSwitcherWidth + 'px' }, demoSwitcherAnimationTime, demoSwitcherAnimationEasing).removeClass(demoSwitcherActiveClass);

			} else {

				demoSwitcher.stop().animate({ left : 0 }, demoSwitcherAnimationTime, demoSwitcherAnimationEasing).addClass(demoSwitcherActiveClass);

			}

		});

		/* ==============================================
		Custom Theme 
		=============================================== */

		$(".home-set-fullscreen").on('click', function(event) {

			event.preventDefault();
			
			$("#home").addClass('fullscreen').animate({ height: $(window).height() }, function() {

				$(window).trigger( 'resize' );

			});

			$(".home-set-default").removeClass('demo-active');

			$(this).addClass('demo-active');

		});

		$(".home-set-default").on('click', function(event) {

			event.preventDefault();
			
			$("#home").removeClass('fullscreen').animate({ height: '500px' });

    		$(window).trigger( 'resize' );

    		$(".home-set-fullscreen").removeClass('demo-active');

    		$(this).addClass('demo-active');

		});

		$('.template-set-color a').on('click', function(event) {

			event.preventDefault();

			var cssFile = $(this).data('color');	

			$('#demo-color-css').attr('href', 'css/' + cssFile + '.css');

			$('.about-skills').empty().html('<div class="col-md-4 text-center">\
						<div class="pie-chart bottom-margin" data-percent="85">85%</div>\
						<h4>Web Design</h4>\
						<p class="pie-chart-text">Suspendisse vel eros lorem. Nunc facilisis enim in sapien volutpat tincidunt.</p>\
					</div>\
					<div class="col-md-4 text-center">\
						<div class="pie-chart bottom-margin" data-percent="70">70%</div>\
						<h4>Photography</h4>\
						<p class="pie-chart-text">Suspendisse vel eros lorem. Nunc facilisis enim in sapien volutpat tincidunt.</p>\
					</div>\
					<div class="col-md-4 text-center">\
						<div class="pie-chart bottom-margin" data-percent="30">30%</div>\
						<h4>Identity</h4>\
						<p class="pie-chart-text">Suspendisse vel eros lorem. Nunc facilisis enim in sapien volutpat tincidunt.</p>\
					</div>');

			var newBarColor = $(this).data('color-code');

			var pieChartClass = 'pie-chart';

		    function initPieCharts() {
		        var chart = $('.' + pieChartClass);

		        chart.appear();

		        chart.each(function() {

		            var $this = $(this);

		            if( !$this.hasClass('pie-chart-loaded') ) {
		                $this.easyPieChart({
		                    animate: 2000,
		                    barColor: newBarColor,
		                    trackColor: "#eeeeee",
		                    size: 200,
		                    lineWidth: 5,
		                    lineCap: 5,
		                    scaleColor: false
		                }).addClass('pie-chart-loaded');
		            }
		        });
		        
		    }

		    initPieCharts();

	    });

		$(".portfolio-set-default").on('click', function(event) {

			event.preventDefault();

			$('.portfolio').css({ width: '100%' }).isotope({ layoutMode : 'fitRows' });
			$('.portfolio').isotope('reLayout');

			$(".portfolio-set-center").removeClass('demo-active');

    		$(this).addClass('demo-active');

		});

		$(".portfolio-set-center").on('click', function(event) {

			event.preventDefault();

			$('.portfolio').isotope({ layoutMode : 'masonry' });
			$('.portfolio').isotope('reLayout');

			$(".portfolio-set-default").removeClass('demo-active');

    		$(this).addClass('demo-active');

		});



	});

})(jQuery);