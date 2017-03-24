angular.module("myApp").controller('gamesController', function() {
    var me = this;
	
	me.gameList= [
		{
			name: "Coins Collector",
			downloadLink: "https://mega.nz/#!c9w1ATra!RQI1znhStBpH2kfpyhwxWQqUiTliuy0fHVsJoeg-IGs",
			githubLink: "https://github.com/Nenrei/Unity/tree/master/Coins%20Collector/CoinsCollector",
			playLink: "http://enmanuelvalencia.com/gamesDirectory/coins_collector/",
			image: "games/coincollector",
			description: "The purpose of this game is to collect all the coins that are on the stage.",
			//description: "El objetivo de este juego es recolectar todas las monedas que hay por el escenario.",
			subDescription: "'Learn Unity 5: from zero to expert' Udemy's course."
			//subDescription: "Primer proyecto del curso 'Aprende Unity 5: de cero a experto' de Udemy."
		},
		{
			name: "Space Wars",
			downloadLink: "https://mega.nz/#!JwplhDBL!S4Jjv5RXm4UY2WvDzD4MffcVa0G_FNQJgXnLj-eeQts",
			githubLink: "https://github.com/Nenrei/Unity/tree/master/Space%20Wars/Space%20Wars",
			playLink: "http://enmanuelvalencia.com/gamesDirectory/space_wars/",
			image: "games/spacewars",
			description: "Classic game of spaceships in which we will have to destroy the enemy ships and stay alive as long as possible.",
			//description: "Clásico juego de naves espaciales en el que tendremos que destruir las naves enemigas y permanecer vivos el máximo tiempo posible.",
			subDescription: "'Learn Unity 5: from zero to expert' Udemy's course."
			//subDescription: "Segundo proyecto del curso 'Aprende Unity 5: de cero a experto' de Udemy."
		},
		{
			name: "Dark Raider",
			downloadLink: "https://mega.nz/#!IgwC1S6K!1tviuRsGe6l6Dt12htwtZctzEawj1XHSHC6HgT_4OWc",
			githubLink: "https://github.com/Nenrei/Unity/tree/master/Dark%20Raider/Dark%20Raider",
			playLink: "http://enmanuelvalencia.com/gamesDirectory/dark_raider/",
			image: "games/darkraider",
			description: "In this game a curious npc will assign us a mission that we must complete.",
			//description: "En este juego un curioso npc nos asignará una misión que debemos completar.",
			subDescription: "'Learn Unity 5: from zero to expert' Udemy's course."
			//subDescription: "Tercer proyecto del curso 'Aprende Unity 5: de cero a experto' de Udemy."
		}
	];
});