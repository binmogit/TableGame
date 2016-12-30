var TableGame = TableGame || {};
TableGame.Game = {};
TableGame.Game.init = function() {
    this.player = TableGame.Player;
    this.player.init({
        day: 0,
        distance : 0
    });
};
TableGame.Game.init();
console.log(TableGame.Game.player);
//function next() {
//if (!this.tableGame) {
//document.body.appendChild(document.createElement('script')).setAttribute("src", "player.js");
//}
//if (!this.player.name) {
//if (document.getElementById("gameInput").value) {
//this.player.name = document.getElementById("gameInput").value;
//}
//}
//if (this.player && this.player.name) {
//this.player.nextTurn();
//}
//}
