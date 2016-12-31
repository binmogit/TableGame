var TableGame = TableGame || {};
TableGame.Player = {};
TableGame.Player.init = function(stats) {
    this.day = stats.day;
    this.distance = stats.distance;
    this.mass = stats.mass;
    this.speed = stats.speed;
};
TableGame.Player.updateDistance = function() {
	this.distance += this.speed;
};
TableGame.Player.updateMass = function() {
	
};
TableGame.Player.updateSpeed = function() {
	
};
