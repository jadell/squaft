App.Plant = DS.Model.extend({
	name: DS.attr(),
	icon: DS.attr()
});

App.Plant.FIXTURES = [{
	id: 1,
	name: "Peas",
	icon: {
		small: 'http://placehold.it/32x32/00ff00',
		large: 'http://placehold.it/64x64/00ff00'
	}
},{
	id: 2,
	name: "Carrots",
	icon: {
		small: 'http://placehold.it/32x32/ff8500',
		large: 'http://placehold.it/64x64/ff8500'
	}
},{
	id: 3,
	name: "Tomatoes",
	icon: {
		small: 'http://placehold.it/32x32/ff0000',
		large: 'http://placehold.it/64x64/ff0000'
	}
}];
