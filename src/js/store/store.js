require('store/adapter');

App.Store = DS.Store.extend({
	adapter: App.ApplicationAdapter
});