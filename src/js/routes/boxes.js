require('models/box');
require('models/plant');
require('views/boxes');
require('controllers/boxes');

App.BoxesRoute = Ember.Route.extend({

	model: function () {
		var store = this.get('store');
		window.store = store;
		return store.findAll('box');
	},

	setupController: function (controller, model) {
		this._super(controller, model);
		controller.set('plants', this.get('store').find('plant'));
	}

});