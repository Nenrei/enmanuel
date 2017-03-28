angular.module("myApp").controller('gamesController', function() {
    var me = this;
	
	me.gameList= [
		{
			id: 0,
			name: "Coins Collector",
			downloadLink: "https://mega.nz/#!c9w1ATra!RQI1znhStBpH2kfpyhwxWQqUiTliuy0fHVsJoeg-IGs",
			githubLink: "https://github.com/Nenrei/Unity/tree/master/Coins%20Collector/CoinsCollector",
			//playLink: "http://enmanuelvalencia.com/gamesDirectory/coins_collector/",
			playLink: "",
			image: "games/coincollector",
			description: "PROJECTS.GAME.0.DESC."
		},
		{ 
			id: 1,
			name: "Space Wars",
			downloadLink: "https://mega.nz/#!JwplhDBL!S4Jjv5RXm4UY2WvDzD4MffcVa0G_FNQJgXnLj-eeQts",
			githubLink: "https://github.com/Nenrei/Unity/tree/master/Space%20Wars/Space%20Wars",
			//playLink: "http://enmanuelvalencia.com/gamesDirectory/space_wars/",
			playLink: "",
			image: "games/spacewars",
			description: "PROJECTS.GAME.1.DESC."
		},
		{
			id: 2,
			name: "Dark Raider",
			downloadLink: "https://mega.nz/#!IgwC1S6K!1tviuRsGe6l6Dt12htwtZctzEawj1XHSHC6HgT_4OWc",
			githubLink: "https://github.com/Nenrei/Unity/tree/master/Dark%20Raider/Dark%20Raider",
			//playLink: "http://enmanuelvalencia.com/gamesDirectory/dark_raider/",
			playLink: "",
			image: "games/darkraider"
		}
	];
});