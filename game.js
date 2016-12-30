function next(){
	if(!this.player){
		document.body.appendChild(document.createElement('script')).setAttribute("src", "player.js");
	}
	
	if(!this.player.name){
		if(document.getElementById("gameInput").value){
			this.player.name = document.getElementById("gameInput").value;
		}
	}
	
	if(this.player && this.player.name){
		this.player.nextTurn();
	}

	
	
	
	
}
