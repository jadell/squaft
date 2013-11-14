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
},{
	id: 4,
	description: "Box 4",
	height: 2,
	width: 4
},{
	id: 5,
	description: "Box 5",
	height: 2,
	width: 4
},{
	id: 6,
	description: "Box 6",
	height: 2,
	width: 4
}];
