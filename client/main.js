Router.route('/', {
	name: 'home',
	template:'home'
});
Router.configure({
	layoutTemplate:'main'
});

Router.route('/about');
Router.route('/services');
Router.route('/clients');
Router.route('/publications');
Router.route('/contact');

Template.carousel.rendered = function() {
      $("#owl-demo").owlCarousel({
 	      navigation : true, 
	      slideSpeed : 800,
	      paginationSpeed : 400,
	      items : 1,
	      autoplay:true,
	      loop:true,
	      autoplayHoverPause:true,
	  });
};
