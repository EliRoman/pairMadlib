Template.index.events({
	'click #submit-btn': function(){
		console.log("hello world");
		var exclamation = $("#exclamation").val();
		console.log(exclamation);
		var adverb = $("#adverb").val();
		console.log(adverb);
		var verb = $("#verb").val();
		console.log(verb);
		var noun = $("#noun").val();
		console.log(noun);
		var mad_lib = ("whenever I "+adverb +" "+verb+" my "+noun+" I say "+exclamation+".");
		console.log(mad_lib);
	}

});