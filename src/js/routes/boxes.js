require('models/box');
require('views/boxes');
require('controllers/boxes');

App.BoxesRoute = Ember.Route.extend({

	model: function () {
		var store = this.get('store');
		window.store = store;
		return store.findAll('box');
	}

});