require("mixins/droppable");
App.BoxSquareView = Ember.View.extend(App.Droppable, {
	classNames: ['box-square'],

	handleDrop: function (droppedView) {
		console.log('Box square', this.get('content.id'), 'got dropped view', droppedView.get('content.name'));
	}
});