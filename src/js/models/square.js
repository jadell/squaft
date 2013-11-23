require('models/plant');

App.Square = DS.Model.extend({
	plant: DS.belongsTo('plant'),
	x: DS.attr('number'),
	y: DS.attr('number'),
});

App.Square.FIXTURES = [
	// 8x2
	{id: 1,  x:0, y:0},
	{id: 2,  x:1, y:0},
	{id: 3,  x:2, y:0},
	{id: 4,  x:3, y:0},
	{id: 5,  x:4, y:0},
	{id: 6,  x:5, y:0},
	{id: 7,  x:6, y:0},
	{id: 8,  x:7, y:0},
	{id: 9,  x:0, y:1},
	{id: 10, x:1, y:1},
	{id: 11, x:2, y:1},
	{id: 12, x:3, y:1},
	{id: 13, x:4, y:1},
	{id: 14, x:5, y:1},
	{id: 15, x:6, y:1},
	{id: 16, x:7, y:1},
	// 4x4
	{id: 17, x:0, y:0},
	{id: 18, x:1, y:0},
	{id: 19, x:2, y:0},
	{id: 20, x:3, y:0},
	{id: 21, x:0, y:1},
	{id: 22, x:1, y:1},
	{id: 23, x:2, y:1},
	{id: 24, x:3, y:1},
	{id: 25, x:0, y:2},
	{id: 26, x:1, y:2},
	{id: 27, x:2, y:2},
	{id: 28, x:3, y:2},
	{id: 29, x:0, y:3},
	{id: 30, x:1, y:3},
	{id: 31, x:2, y:3},
	{id: 32, x:3, y:3},
	// 4x2
	{id: 33, x:0, y:0},
	{id: 34, x:1, y:0},
	{id: 35, x:2, y:0},
	{id: 36, x:3, y:0},
	{id: 37, x:0, y:1},
	{id: 38, x:1, y:1},
	{id: 39, x:2, y:1},
	{id: 40, x:3, y:1},
];
