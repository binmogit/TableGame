var TableGame = TableGame || {};
TableGame.Player = {};
TableGame.Player.init = function() {
    this.day = 0;
    this.distance = 0;
    this.mass = 0;
    this.speed = 0;
};
TableGame.Player.updateDistance = function() {
	this.distance += this.speed;
};
TableGame.Player.updateMass = function() {
	
};
TableGame.Player.updateSpeed = function() {
	
};
