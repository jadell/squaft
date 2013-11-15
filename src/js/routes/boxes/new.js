require('models/box');

App.BoxesNewRoute = Ember.Route.extend({

	model: function () {
		return this.get('store').createRecord('box', {
			description: 'New box',
			height: 1,
			width: 1
		});
	}

});