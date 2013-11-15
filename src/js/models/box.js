App.Box = DS.Model.extend({
	description: DS.attr(),
	height: DS.attr('number'),
	width: DS.attr('number')
});

App.Box.FIXTURES = [{
	id: 1,
	description: "Box 1",
	height: 2,
	width: 8
},{
	id: 2,
	description: "Box 2",
	height: 4,
	width: 4
},{
	id: 3,
	description: "Box 3",
	height: 2,
	width: 4
}];
