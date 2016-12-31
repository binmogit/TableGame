var TableGame = TableGame || {};
TableGame.UI = {
};

TableGame.UI.notify = function(message, type, p){
	var d = document.createElement('div');
	d.setAttribute('class', ('update-' + type));
	d.innerHTML = ('Day ' + p.day + ': ' + message);
	TableGame.UPDATES_AREA.insertBefore(d, TableGame.UPDATES_AREA.childNodes[0]);
};

TableGame.UI.refreshStats = function(p){
	document.getElementById('stat-day').innerHTML = p.day;
	document.getElementById('stat-distance').innerHTML = p.distance;
	document.getElementById('stat-mass').innerHTML = p.mass;
	document.getElementById('stat-speed').innerHTML = p.speed;
}
