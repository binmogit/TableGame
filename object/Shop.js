var TableGame = TableGame || {};
TableGame.Shop = {};
TableGame.Shop.init = function(){
	this.name = 'shop';
	this.addItem(this.newItem('test', 300));
	// = (this.item.name + " " + this.item.cost);
}

TableGame.Shop.newItem = function(name, cost){
	var item = {};
	item.name = name;
	item.cost = cost;
	return item;
}

TableGame.Shop.addItem = function(item){
	var d = document.createElement('div');
	d.setAttribute('class', 'item');
	d.innerHTML = ('Name: ' + item.name + ', Cost: ' + item.cost);
	TableGame.SHOP_PRODUCT_AREA.insertBefore(d, TableGame.SHOP_PRODUCT_AREA.childNodes[0]);
}
