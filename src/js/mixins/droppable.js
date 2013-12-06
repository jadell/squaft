App.Droppable = Ember.Mixin.create({

	makeDroppable: function () {
		this.$().droppable({
			tolerance: 'pointer',

			drop: function (event, ui) {
				this.handleDrop(ui.draggable.data('dropped-view'));
			}.bind(this)
		});
	}.on('didInsertElement'),

	handleDrop: function (droppedView) {
		console.log('Implement this in the mixed in view', droppedView);
	}

});