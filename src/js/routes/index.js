require('controllers/boxes');
require('views/boxes');
require('models/box');

App.IndexRoute = Ember.Route.extend({

	renderTemplate: function () {
		this.render('box', { outlet: 'main'});
		this.render('boxes', {
			outlet: 'sidebar',
			controller: this.controllerFor('boxes')
		});
	}

});