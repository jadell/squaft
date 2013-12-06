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

		this.$().data("dropped-view", this);
	}.on('didInsertElement')

});