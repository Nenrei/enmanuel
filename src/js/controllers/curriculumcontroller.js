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
			endYear: 2017,
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
			hours: "20"
		},
		{
			year: 2016,
			description: "CURRIC.COMP_EDUC.ANGULAR",
			hours: "20"
		},
		{
			year: 2017,
			description: "CURRIC.COMP_EDUC.UNITY",
			hours: "21,5"
		}
	];

	me.knowledgeList = [
		{
			category: "CURRIC.KNOWLEDGE.FRONT",
			tec: [
                {
                	text: "HTML5",
                	level: "50"
                },
                {
                	text: "CSS3",
                	level: "50"
                },
                {
                	text: "AngularJS 1.5",
                	level: "25"
                },
                {
                	text: "ExtJS 4.5/6",
                	level: "75"
                }
            ]
		},
		{
			category: "CURRIC.KNOWLEDGE.BACK",
			tec: [
                {
                	text:"JavaSE", 
                	level: "25"
                },
                {
                	text:"JavaEE",
                	level: "25"
                },
                {
                	text:"C#",
                	level: "25"
                }
            ]
		},
		{
			category: "CURRIC.KNOWLEDGE.OTHER",
			tec: [
				{
					text: "Eclipse", 
					level: "50"
				},
				{
					text: "Webstorm", 
					level: "50"
				},
				{
					text: "SublimeText",
					level: "50"
				},
				{
					text: "Photoshop", 
					level: "75"
				},
				{
					text: "Flash", 
					level: "25"
				},
				{
					text: "Premiere",
					level: "50"
				},
				{
					text: "Unity 3D",
					level: "25"
				}
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