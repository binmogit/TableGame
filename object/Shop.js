var TableGame = TableGame || {};
TableGame.Shop = {};
TableGame.Shop.init = function(){
	this.item = {
		name : 'item1',
		cost : 300
	};
	TableGame.SHOP_PRODUCT_AREA.innerHTML = (this.item.name + " " + this.item.cost);
}

TableGame.Shop.newItem = function(stats){
	this.item.name = stats.name;
	this.item.cost = stats.cost;
};
