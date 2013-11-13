require('controllers/boxes');
require('views/boxes');

App.IndexRoute = Ember.Route.extend({

	renderTemplate: function () {
		this.render('box', { outlet: 'main'});
		this.render('boxes', {
			outlet: 'sidebar',
			controller: this.controllerFor('boxes')
		});
	}

});