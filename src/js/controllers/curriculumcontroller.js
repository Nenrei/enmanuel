angular.module("myApp").controller('curriculumController', function() {
    var me = this;
	
    me.personalData = {
        name: "Enmanuel Valencia Vilela",
        birth: "08 September 1992, A Coruña, Galicia, Spain",
        mail: "contact@enmanuelvalencia.com"
    };

	me.jobList = [
        {
			startYear: 2013,
			endYear: 2013,
            duration: "2 months",
			center: "Grupo Tecnológico Artabria",
			place: "Ferrol",
			job: "Practicas",
			description: "Development of two simple Android aplications. One so that the employees could see their assigned tasks and another to be able to consult the billing of one or several companies in graphs."
		},
		{
			startYear: 2014,
			endYear: null,
            duration: "3 years",
			center: "Indra Software Labs",
			place: "A Coruña",
			job: "Frontend developer",
			description: "Development of InCMS, a web application to manage all the commercial cicle of an energy company(payment, billing, customer service, etc)."
		}
	];

	me.educList = [
		{
			startYear: 2011,
			endYear: 2013,
            duration: "2 years",
			center: "CIFP Rodolfo Ucha Piñeiro",
			place: "Ferrol, A Coruña",
			job: "Senior Technician in Multiplatform Application Development"
		}
	];

	me.compEducList = [
		{
			year: 2014,
			description: "Application Development with Java EE6",
			hours: 20
		},
		{
			year: 2015,
			description: "Java EE5 Patterns",
			hours: 15
		},
		{
			year: 2016,
			description: "Introduction to AngularJS",
			hours: 20
		}
	];

	me.knowledgeList = [
		{
			category: "Frontend Development",
			tec: [
                "HTML5, CSS3 (SASS, Bootstrap3)",
                "Javascript (AngularJS 1.5, ExtJS 4.5/6)"
            ]
		},
		{
			category: "Backend Development",
			tec: [
                "JavaSE, JavaEE"
            ]
		},
		{
			category: "Other Tools",
			tec: [
				"Eclipse, Webstorm, SublimeText",
				"Adobe Photoshop, Flash, Premiere"
			]
		}

	];

	me.interestDataList = [
		"Drive license B and own vehicle"
	];


	me.getPeriod = function (startYear, endYear) {
        var period = "";        
        
        if(startYear === endYear){
            period= startYear;
        }
        
        if(endYear == null){
            period = startYear + " - Present";
        }else{
            period = startYear + " - " + endYear;
        }
        
        return period;        
	}
});