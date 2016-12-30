var TableGame = TableGame || {};

TableGame.UI = {
};

TableGame.UI.notify = function(message, type){
  document.getElementById('updates-area').innerHTML = '<div class="update-' + type + '">Day '+ this.player.day + ': ' + message+'</div>' + document.getElementById('updates-area').innerHTML;
};

TableGame.UI.refreshStats = function(){
	  document.getElementById('stat-day').innerHTML = this.player.day;
	  document.getElementById('stat-distance').innerHTML = this.player.distance;
}

TableGame.UI.step = function (){
	
}
