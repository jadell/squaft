/**
 * Main application entry point
 */

// 3rd party libraries
require('../../bower_components/underscore/underscore');
require('../../bower_components/jquery/jquery');
require('../../bower_components/jquery-ui/ui/jquery-ui');
require('../../bower_components/handlebars/handlebars.runtime');
require('../../bower_components/ember/ember');
require('../../bower_components/ember-data/ember-data');
require('../../bower_components/bootstrap/dist/js/bootstrap');
require('templates');

App = Ember.Application.create({
	rootElement: '#squaft',
	LOG_TRANSITIONS: true
});

// Application libraries
require('store/store');
require('router');
