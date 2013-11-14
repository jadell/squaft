require('models/box');
require('controllers/boxes');

App.ApplicationRoute = Ember.Route.extend({

	setupController: function (controller, model) {
		this._super(controller, model);

		var store = this.get('store');
		window.store = store;

		store.findAll('box').then(function (boxes) {
			this.controllerFor('boxes').set('content', boxes);
		}.bind(this));
	}

});