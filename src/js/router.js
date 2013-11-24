require('routes/application');
require('routes/boxes');
require('routes/boxes/new');
require('routes/box');

App.Router = Ember.Router.extend({});

App.Router.map(function() {

	this.route('boxes.new', { path: '/boxes/new'});
	this.resource('box', { path: '/box/:box_id'});
});
