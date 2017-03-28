angular.module("myApp").controller('webController', function() {
    var me = this;
	
	me.webList= [
		{
			id: 3,
			name: "Cube Fusion Papertoys",
			downloadLink: "",
			githubLink: "https://github.com/Nenrei/CubeFusionPapertoys",
			playLink: "http://cubefusionpapertoys.com",
			image: "webs/cubefusion"
		}
	];
});