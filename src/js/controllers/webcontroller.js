angular.module("myApp").controller('webController', function() {
    var me = this;
	
	me.webList= [
		{
			name: "Cube Fusion Papertoys",
			downloadLink: "",
			githubLink: "https://github.com/Nenrei/CubeFusionPapertoys",
			playLink: "http://cubefusionpapertoys.com",
			image: "webs/cubefusion",
			description: "Website to storage of paper toys of manga, anime and videogames.",
			subDescription: ""
		}
	];
});