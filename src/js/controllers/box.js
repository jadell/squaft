App.BoxController = Ember.ObjectController.extend({

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