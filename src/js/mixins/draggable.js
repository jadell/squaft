App.Draggable = Ember.Mixin.create({

	makeDraggable: function () {
		this.$().draggable({
			appendTo: $('body'),
			cursorAt: {
				top: 2,
				left: 2,
			},
			helper: function () {
				return $(this).clone();
			},
			revert: true,
			revertDuration: 100
		});
	}.on('didInsertElement')

});