require('models/box');
require('controllers/boxes/new');

App.BoxesNewRoute = Ember.Route.extend({

	model: function () {
		return this.get('store').createRecord('box', {
			description: 'New box',
			height: 1,
			width: 1
		});
	}

});