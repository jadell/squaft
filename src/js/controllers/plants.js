require('controllers/plant');
require('views/plant');

App.PlantsController = Ember.ArrayController.extend({
	itemController: 'plant'
});