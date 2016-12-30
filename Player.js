var TableGame = TableGame || {};
TableGame.Player = {};
TableGame.Player.init = function(stats) {
    this.day = stats.day;
    this.distance = stats.distance;
};
TableGame.Player.updateDistnce = function() {
    this.distance++;
    //gameOutput.prepend(document.createElement('div').innerHTML = ("Name: " + this.name + "<br>Turn: " + this.currentTurn));
    //console.log(this);
}	
