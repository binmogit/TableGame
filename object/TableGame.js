var TableGame = TableGame || {};
TableGame.UPDATES_AREA = document.getElementById('updates-area');
TableGame.SHOP_AREA = document.getElementById('shop-area');
TableGame.SHOP_PRODUCT_AREA = document.getElementById('shop-product-area');
TableGame.Game = {};
TableGame.Game.init = function() {
	this.ui = TableGame.UI;
	this.shop = TableGame.Shop;
	this.shop.init();
	this.player = TableGame.Player;
	this.player.init();
	this.player.game = this;
	this.player.ui = this.ui;
	this.player.shop = this.shop;
	this.ui.game = this;
	this.ui.player = this.player;
	this.ui.shop = this.shop;
	
	this.shop.game = this;
	this.shop.player = this.player;
	this.shop.ui = this.ui;
	this.gameActive = true;;
	this.ui.refreshStats();
	document.getElementById('step').addEventListener('click', this.step.bind(this));
	this.ui.notify('Game started', 'system')
};
TableGame.Game.step = function() {
	this.updateGame();
}
TableGame.Game.updateGame = function() {	
	this.player.day++;
	this.player.updateDistance();
	//this.shop.updateShop();
	
	this.ui.notify('Complete', 'system');
	this.ui.refreshStats();
}
TableGame.Game.init();
