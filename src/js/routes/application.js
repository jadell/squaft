require('models/box');
require('models/plant');
require('controllers/boxes');
require('controllers/plants');

App.ApplicationRoute = Ember.Route.extend({

	setupController: function (controller, model) {
		this._super(controller, model);
		this.controllerFor('boxes').set('model', this.get('store').find('box'));
		this.controllerFor('plants').set('model', this.get('store').find('plant'));
	}

});