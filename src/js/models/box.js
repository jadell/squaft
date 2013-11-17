App.Box = DS.Model.extend({
	description: DS.attr(),
	height: DS.attr('number'),
	width: DS.attr('number'),

	rows: function () {
		var rows = Ember.A(),
			height = this.get('height'),
			width = this.get('width'),
			row;

		for (var i = 0; i < height; i++) {
			row = Ember.A();
			rows.push(row);
			for (var j = 0; j < width; j++) {
				row.push({
					x: j,
					y: i
				});
			}
		}

		return rows;

	}.property('height', 'width')

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
