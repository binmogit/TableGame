var TableGame = TableGame || {};
TableGame.Player = {};
TableGame.Player.BASE_SPEED = 0.15;
TableGame.Player.init = function() {
    this.day = 0;
    this.distance = 0;
    this.mass = 1;
    this.speed = this.BASE_SPEED;
};
TableGame.Player.updateDistance = function() {
	this.distance += this.speed;
	//this.speed = (this.day / this.distance);
};
