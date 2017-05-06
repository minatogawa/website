Router.route('/', {
	name: 'home',
	template:'home',
	title: 'Adamas Consultoria e Negócios',
	meta: {
	    keywords: {
	      name: 'keywords',
	      itemprop: 'keywords',
	      content: 'consultoria, gestão, plano de negócios, lean manufacturing, modelos de negócios, manufatura enxuta, gestão da qualidade'
	    },
	    description: {
	      name: 'description',
	      itemprop: 'description',
	      content: 'Consultoria Empresarial de Campinas com especialistas com mais de 30 anos de experiência. Atua com foco nas áreas de manufatura enxuta (lean manufacturing) e gestão empresarial. Presta serviços que vão da aplicação das práticas de lean até a criação de planos de negócios'
	    },
	    robots: {
	      name: 'robots',
	      itemprop: 'robots',
	      content: 'index, follow '
	    },
    }
});
Router.configure({
	layoutTemplate:'main',
	title: 'Adamas Consultoria e Negócios'
});

Router.route('/about',{
	name: 'about',
	template:'about',
	title: 'Adamas - Consultoria Empresarial Comprometida com a Inovação e Sucesso',
	meta: {
	    keywords: {
	      name: 'keywords',
	      itemprop: 'keywords',
	      content: 'Adamas, Sucesso, Clientes'
	    },
	    description: {
	      name: 'description',
	      itemprop: 'description',
	      content: 'A Adamas é uma empresa de consultoria empresarial, que está inserida num pólo de conhecimento e tecnologia na cidade de Campinas, estado de São Paulo. '
	    },
	    robots: {
	      name: 'robots',
	      itemprop: 'robots',
	      content: 'index, follow '
	    },
    }
});
Router.route('/services',{
	name: 'services',
	template:'services',
	title: 'Áreas de Atuação de Planejamento Estratégico a Lean Manufacturing',
	meta: {
	    keywords: {
	      name: 'keywords',
	      itemprop: 'keywords',
	      content: 'lean, Manufacturing, plano de negócios, modelo de negócios, manufatura enxuta, consultoria'
	    },
	    description: {
	      name: 'description',
	      itemprop: 'description',
	      content: 'A Adamas atua como consultoria nas áreas de lean manufacturing e plano de negócios'
	    },
	    robots: {
	      name: 'robots',
	      itemprop: 'robots',
	      content: 'index, follow '
	    },
    }
});
Router.route('/clients',{
	name: 'clients',
	template:'clients',
	title: 'Confira o depoimento de nossos clientes',
	meta: {
	    keywords: {
	      name: 'keywords',
	      itemprop: 'keywords',
	      content: 'clientes'
	    },
	    description: {
	      name: 'description',
	      itemprop: 'description',
	      content: 'Confira o depoimento dos clientes da Adamas Consultoria'
	    },
	    robots: {
	      name: 'robots',
	      itemprop: 'robots',
	      content: 'index, follow '
	    },
    }
});
Router.route('/publications',{
	name: 'publications',
	template:'publications',
	title: 'Adamas - Publicações que podem contribuir com o seu negócio',
	meta: {
	    keywords: {
	      name: 'keywords',
	      itemprop: 'keywords',
	      content: 'lean manufacturing, plano de negócios, modelo de negócio'
	    },
	    description: {
	      name: 'description',
	      itemprop: 'description',
	      content: 'Confira as principais publicações da Adamas Consultoria'
	    },
	    robots: {
	      name: 'robots',
	      itemprop: 'robots',
	      content: 'index, follow '
	    },
    }
});
Router.route('/contact',{
	name: 'contact',
	template:'contact',
	title: 'Adamas - Entre em contato com nosso time de especialistas',
	meta: {
	    keywords: {
	      name: 'keywords',
	      itemprop: 'keywords',
	      content: 'contato, telefone, Campinas'
	    },
	    description: {
	      name: 'description',
	      itemprop: 'description',
	      content: 'Entre em contato com a consultoria mais inovadora de Campinas'
	    },
	    robots: {
	      name: 'robots',
	      itemprop: 'robots',
	      content: 'index, follow '
	    },
    }
});
Router.route('/planodenegocios',{
	name: 'planodenegocios',
	template:'planodenegocios',
	title: 'Livro: Plano de Negócios - Estratégia para Micro e Pequenas Empresas',
	meta: {
	    keywords: {
	      name: 'keywords',
	      itemprop: 'keywords',
	      content: 'Plano de negócios, business plan, Campinas, consultoria'
	    },
	    description: {
	      name: 'description',
	      itemprop: 'description',
	      content: 'Veja como a Adamas pode contribuir na elaboração do plano de negócio da sua empresa'
	    },
	    robots: {
	      name: 'robots',
	      itemprop: 'robots',
	      content: 'index, follow '
	    },
    }
});
Router.route('/mde',{
	name: 'mde',
	template:'mde',
	title: 'Método de Diagnóstico de Empresa - Melhoria de Desempenho da Organização',
	meta: {
	    keywords: {
	      name: 'keywords',
	      itemprop: 'keywords',
	      content: 'MDE, método de Diagnóstico de Empresa, lean manufacturing'
	    },
	    description: {
	      name: 'description',
	      itemprop: 'description',
	      content: 'Veja como a Adamas pode aplicar o lean manufacturing em sua empresa'
	    },
	    robots: {
	      name: 'robots',
	      itemprop: 'robots',
	      content: 'index, follow '
	    },
    }
});
Router.route('/mde2',{
	name: 'mde2',
	template:'mde2',
	title: 'Enterprise Diagnostic Method - Organization Performance Improvement',
	meta: {
	    keywords: {
	      name: 'keywords',
	      itemprop: 'keywords',
	      content: 'MDE, método de Diagnóstico de Empresa, lean manufacturing'
	    },
	    description: {
	      name: 'description',
	      itemprop: 'description',
	      content: 'Veja como a Adamas pode aplicar o lean manufacturing em sua empresa'
	    },
	    robots: {
	      name: 'robots',
	      itemprop: 'robots',
	      content: 'index, follow '
	    },
    }
});
Router.route('/cocim',{
	name: 'cocim',
	template:'cocim',
	title: 'Análise Comparativa entre Métodos de Modelos de Negócios',
	meta: {
	    keywords: {
	      name: 'keywords',
	      itemprop: 'keywords',
	      content: 'Modelo de negócio, business model, consultoria, Campinas'
	    },
	    description: {
	      name: 'description',
	      itemprop: 'description',
	      content: 'Veja como a Adamas pode contribuir com o desenvolvimento do modelo de negócios de sua empresa'
	    },
	    robots: {
	      name: 'robots',
	      itemprop: 'robots',
	      content: 'index, follow '
	    },
    }
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
