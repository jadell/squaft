require('views/application');
require('routes/boxes');
//require('routes/index');

App.Router = Ember.Router.extend({});

App.Router.map(function() {

	this.resource('boxes', { path: '/'}, function () {
		this.resource('box', { path: '/box/:box_id'});
	});

});
