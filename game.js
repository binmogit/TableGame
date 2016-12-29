$(document).ready(function(){
	//this.nameForm = new inputForm();
	this.nameForm = {
		e : document.createElement("form"),
		textArea1 : {
			e : document.createElement("input")
		},
		button1 : {
			e : document.createElement("input")
		}
	};
	//$(this.nameForm.textArea1.e).attr("type", "text");
	//$(this.nameForm).append(this.nameForm.textArea1.e);
	//$(this.nameForm.button1.e).attr("type", "button");
	//$(this.nameForm.button1.e).attr("value", "Go");
	//$(this.nameForm.button1).click(function(){
		//document.player = new player($(document.nameForm.textArea1).val());
		//$(document.nameForm.textArea1).attr("disabled", "1");
		//$(this).remove();
		//console.log(document.player);
	//});
	//$(this.nameForm.e).append(this.nameForm.button1.e);
	
	$(this.body).append(this.nameForm.e);
	console.log(this.nameForm);
});
