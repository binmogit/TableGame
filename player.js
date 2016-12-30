var player = {
	currentTurn : 0,
	events : [],
	nextTurn : function(){
		this.currentTurn++;
		var newOutput = document.createElement('div');
		newOutput.innerHTML=("Name: " + this.name + "<br>Turn: " + this.currentTurn);
		gameOutput.prepend(newOutput);
		console.log(this);
	}
		
};
