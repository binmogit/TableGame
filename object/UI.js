var TableGame = TableGame || {};
TableGame.UI = {
};

TableGame.UI.notify = function(message, type){
	var d = document.createElement('div');
	d.setAttribute('class', ('update-' + type));
	d.innerHTML = ('Day ' + this.player.day + ': ' + message);
	TableGame.UPDATES_AREA.insertBefore(d, TableGame.UPDATES_AREA.childNodes[0]);
};

TableGame.UI.refreshStats = function(){
	document.getElementById('stat-day').innerHTML = this.player.day;
	document.getElementById('stat-distance').innerHTML = this.player.distance;
	document.getElementById('stat-mass').innerHTML = this.player.mass;
	document.getElementById('stat-speed').innerHTML = this.player.speed;
}
