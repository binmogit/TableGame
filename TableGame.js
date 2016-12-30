var TableGame = TableGame || {};
TableGame.Game = {};
TableGame.Game.init = function() {
	this.ui = TableGame.UI;
	this.player = TableGame.Player;
	this.player.init({
		day: 0,
		distance: 0
	});
	this.player.ui = this.ui;
	this.ui.game = this;
	this.ui.player = this.player;
	this.startGame();
};
TableGame.Game.startGame = function() {
	this.gameActive = true;
	this.ui.notify('Game started', 'system');
	this.ui.refreshStats();
	document.getElementById('step').addEventListener('click', this.step.bind(this));
}
TableGame.Game.step = function(timestamp) {
	this.updateGame();
}
TableGame.Game.updateGame = function() {	
	this.player.day++;
	this.player.updateDistnce();
	this.ui.refreshStats();
}
TableGame.Game.init();