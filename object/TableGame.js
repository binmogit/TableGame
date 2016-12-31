var TableGame = TableGame || {};
TableGame.UPDATES_AREA = document.getElementById('updates-area');
TableGame.SHOP_AREA = document.getElementById('shop-area');
TableGame.SHOP_PRODUCT_AREA = document.getElementById('shop-product-area');
TableGame.Game = {};
TableGame.Game.init = function() {
	//debugger;
	this.gameActive = true;
	this.ui = TableGame.UI;
	this.shop = TableGame.Shop;
	this.player = TableGame.Player;
	this.shop.init();
	this.player.init();
	this.ui.refreshStats(this.player);
	this.ui.notify('Game started', 'system', this.player);
	document.getElementById('step').addEventListener('click', this.updateGame.bind(this));
};
TableGame.Game.updateGame = function() {	
	this.player.day++;
	this.player.updateDistance();
	this.shop.addItem(this.shop.newItem('test', 300));
	
	this.ui.notify('Day started', 'system', this.player);
	this.ui.refreshStats(this.player);
}
TableGame.Game.init();
