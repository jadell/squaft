/**
 * Main application entry point
 */

// 3rd party libraries
require('vendor/underscore-1.5.2');
require('vendor/jquery-1.10.2');
require('vendor/handlebars.runtime-v1.1.2');
require('vendor/ember-v1.1.2');
require('vendor/ember-data-1.0.0');
require('vendor/bootstrap-v3.0.2');
require('templates');

App = Ember.Application.create({
	rootElement: '#squaft',
	LOG_TRANSITIONS: true
});

// Application libraries
require('store/store');
require('router');
