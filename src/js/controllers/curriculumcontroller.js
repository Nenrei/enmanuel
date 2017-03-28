angular.module("myApp").controller('curriculumController', function() {
    var me = this;
	 
    me.personalData = {
        name: "Enmanuel Valencia Vilela",
        birth: "CURRIC.PERS_DATA.BIRTH",
        mail: "contact@enmanuelvalencia.com"
    };

	me.jobList = [
        {
			startYear: 2013,
			endYear: 2013,
            duration: "CURRIC.JOBS.0.DURATION",
			center: "CURRIC.JOBS.0.CENTER",
			place: "CURRIC.JOBS.0.PLACE",
			job: "CURRIC.JOBS.0.JOB",
			description: "CURRIC.JOBS.0.DESC"
		},
		{
			startYear: 2014,
			endYear: null,
            duration: "CURRIC.JOBS.1.DURATION",
			center: "CURRIC.JOBS.1.CENTER",
			place: "CURRIC.JOBS.1.PLACE",
			job: "CURRIC.JOBS.1.JOB",
			description: "CURRIC.JOBS.1.DESC"
		}
	];

	me.educList = [
		{
			startYear: 2011,
			endYear: 2013,
            duration: "CURRIC.EDUC.0.DURATION",
			center: "CURRIC.EDUC.0.CENTER",
			place: "CURRIC.EDUC.0.PLACE",
			job: "CURRIC.EDUC.0.JOB",
		}
	];

	me.compEducList = [
		{
			year: 2014,
			description: "CURRIC.COMP_EDUC.JAVAEE6",
			hours: 20
		},
		{
			year: 2015,
			description: "CURRIC.COMP_EDUC.PATTERNS",
			hours: 15
		},
		{
			year: 2016,
			description: "CURRIC.COMP_EDUC.ANGULAR",
			hours: 20
		}
	];

	me.knowledgeList = [
		{
			category: "CURRIC.KNOWLEDGE.FRONT",
			tec: [
                "HTML5, CSS3 (SASS, Bootstrap3)",
                "Javascript (AngularJS 1.5, ExtJS 4.5/6)"
            ]
		},
		{
			category: "CURRIC.KNOWLEDGE.BACK",
			tec: [
                "JavaSE, JavaEE"
            ]
		},
		{
			category: "CURRIC.KNOWLEDGE.OTHER",
			tec: [
				"Eclipse, Webstorm, SublimeText",
				"Adobe Photoshop, Flash, Premiere"
			]
		}

	];

	me.interestDataList = [
		"CURRIC.OTHER_DATA.DRIVE"
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