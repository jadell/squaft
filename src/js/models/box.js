require('models/square');

App.Box = DS.Model.extend({
	description: DS.attr(),
	height: DS.attr('number'),
	width: DS.attr('number'),
	squares: DS.hasMany('square', {async:true}),

	rows: function () {
		var store = this.get('store'),
			squares = this.get('squares'),
			height = this.get('height'),
			width = this.get('width'),
			total = height * width,
			rows, current, x, y;

		rows = _.map(_.range(0,height), function () {
			return Ember.A();
		});

		_.each(_.range(0, total), function (idx) {
			x = idx % width;
			y = Math.floor(idx / width);
			current = squares.objectAt(idx);
			if (!current) {
				current = store.createRecord('square');
				squares.pushObject(current);
			}
			current.setProperties({
				x: x,
				y: y
			});

			rows.objectAt(y).pushObject(current);
		});

		return rows;

	}.property('height', 'width')

});

App.Box.FIXTURES = [{
	id: 1,
	description: "Box 1",
	height: 2,
	width: 8,
	squares: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
},{
	id: 2,
	description: "Box 2",
	height: 4,
	width: 4,
	squares: [17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]
},{
	id: 3,
	description: "Box 3",
	height: 2,
	width: 4,
	squares: [33,34,35,36,37,38,39,40]
}];
