Router.route('/', {
	name: 'home',
	template:'home',
	title: 'Adamas Consultoria e Negócios'
});
Router.configure({
	layoutTemplate:'main',
	title: 'Adamas Consultoria e Negócios'
});

Router.route('/about',{
	name: 'about',
	template:'about',
	title: 'Adamas - Consultoria Empresarial Comprometida com a Inovação e Sucesso'
});
Router.route('/services',{
	name: 'services',
	template:'services',
	title: 'Áreas de Atuação de Planejamento Estratégico a Lean Manufacturing'
});
Router.route('/clients',{
	name: 'clients',
	template:'clients',
	title: 'Confira o depoimento de nossos clientes'
});
Router.route('/publications',{
	name: 'publications',
	template:'publications',
	title: 'Adamas - Publicações que podem contribuir com o seu negócio'
});
Router.route('/contact',{
	name: 'contact',
	template:'contact',
	title: 'Adamas - Entre em contato com nosso time de especialistas'
});
Router.route('/planodenegocios',{
	name: 'planodenegocios',
	template:'planodenegocios',
	title: 'Livro: Plano de Negócios - Estratégia para Micro e Pequenas Empresas'
});
Router.route('/mde',{
	name: 'mde',
	template:'mde',
	title: 'Método de Diagnóstico de Empresa - Melhoria de Desempenho da Organização'
});
Router.route('/mde2',{
	name: 'mde2',
	template:'mde2',
	title: 'Enterprise Diagnostic Method - Organization Performance Improvement'
});
Router.route('/cocim',{
	name: 'cocim',
	template:'cocim',
	title: 'Análise Comparativa entre Métodos de Modelos de Negócios'
});

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
