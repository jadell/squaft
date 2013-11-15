require('views/application');
require('routes/boxes');
require('routes/boxes/new');
require('routes/box');

App.Router = Ember.Router.extend({});

App.Router.map(function() {

	this.resource('boxes', { path: '/'}, function () {
		this.route('new');
		this.resource('box', { path: '/box/:box_id'});
	});

});
