angular.module("myApp",['ngRoute', 'ngMaterial', 'ngMessages', 'pascalprecht.translate']);

angular.module("myApp").config(function($routeProvider, $locationProvider, $translateProvider) {
    
    $routeProvider
        .when('/', {
            templateUrl : 'template/main.html',
            controller  : 'mainController'
        })
        .when('/games', {
            templateUrl	: 'template/games.html',
            controller 	: 'gamesController'
        })
		.when('/web', {
            templateUrl	: 'template/web.html',
            controller 	: 'webController'
        })
        .when('/curriculum', {
            templateUrl : 'template/curric.html',
            controller  : 'curriculumController'
        });
    
    $locationProvider.html5Mode(true);


    var translationsEN = {
        MENU: {
            HOME: "Home",
            CURRIC: "Curriculum",
            WEB: "Webs",
            GAMES: "Games",
            LANG: "Language"
        },
        MAIN: {
            WORK: "Frontend Developer"
        },
        OPTION: {
            TRANSLATE: {
                EN: "English",
                ES: "Spanish"
            }
        },
        MADEWITH: {
            UNITY: "Developed with Unity"
        },
        PROJECTS: [
            {
                DESC: "The purpose of this game is to collect all the coins that are on the stage.",
                SUB_DESC: "'Learn Unity 5: from zero to expert' Udemy's course."
            },
            {
                DESC: "Classic game of spaceships in which we will have to destroy the enemy ships and stay alive as long as possible.",
                SUB_DESC: "'Learn Unity 5: from zero to expert' Udemy's course."
            },
            {
                DESC: "In this game a curious npc will assign us a mission that we must complete.",
                SUB_DESC: "'Learn Unity 5: from zero to expert' Udemy's course."
            },
            {
                DESC: "Website to storage of paper toys of manga, anime and videogames.",
                SUB_DESC: ""
            }
        ],
        CURRIC:{
            EDUCATION: "Education",
            EXPERIENCE: "Experience",
            COMP_EDUCATION: "Comp. Education",
            TEC_KNOWLEDGE: "Tec. Knowledge",
            OTHER: "Other Data of Interest",
            PERS_DATA: {
                BIRTH: "08 September 1992, La Coruña, Galicia, Spain"
            },
            JOBS: [
                {
                    DURATION: "2 months",
                    CENTER: "Technological Group Artabria",
                    PLACE: "Ferrol",
                    JOB: "Trainee",
                    DESC: "Development of two simple Android aplications. One so that the employees could see their assigned tasks and another to be able to consult the billing of one or several companies in graphs."
                },
                {
                    DURATION: "3 years",
                    CENTER: "Indra Software Labs",
                    PLACE: "La Coruña",
                    JOB: "Frontend developer",
                    DESC: "Development of InCMS, a web application to manage all the commercial cicle of an energy company(payment, billing, customer service, etc)."
                }
            ],
            EDUC: [
                {
                    DURATION: "2 years",
                    CENTER: "CIFP Rodolfo Ucha Piñeiro",
                    PLACE: "Ferrol",
                    JOB: "Senior Technician in Multiplatform Application Development"
                }
            ],
            COMP_EDUC: {
                JAVAEE6: "Application Development with Java EE6",
                PATTERNS: "Java EE5 Patterns",
                ANGULAR: "Introduction to AngularJS",
            },
            KNOWLEDGE: {
                FRONT: "Frontend Development",
                BACK: "Backend Development",
                OTHER: "Other Tools"
            },
            OTHER_DATA: {
                DRIVE: "Drive license B and own vehicle"
            }
        },
        FOOTER: {
            IN_DEVELOP: "Website in Development.",
            THEME: "Base Theme 'Cover' by "
        }
    };

    var translationsES = {
        MENU: {
            HOME: "Inicio",
            CURRIC: "Curriculum",
            WEB: "Webs",
            GAMES: "Juegos",
            LANG: "Idioma"
        },
        MAIN: {
            WORK: "Desarrollador Frontend"
        },
        OPTION: {
            TRANSLATE: {
                EN: "Ingl&eacute;s",
                ES: "Espa&ntilde;ol"
            }
        },
        MADEWITH: {
            UNITY: "Desarrollado en Unity"
        },
        PROJECTS: [
            {
                DESC: "El objetivo de este juego es recolectar todas las monedas que hay por el escenario.",
                SUB_DESC: "Curso 'Aprende Unity 5: de cero a experto' de Udemy."
            },
            {
                DESC: "Clásico juego de naves espaciales en el que tendremos que destruir las naves enemigas y permanecer vivos el máximo tiempo posible.",
                SUB_DESC: "Curso 'Aprende Unity 5: de cero a experto' de Udemy."
            },
            {
                DESC: "En este juego un curioso npc nos asignará una misión que debemos completar.",
                SUB_DESC: "Curso 'Aprende Unity 5: de cero a experto' de Udemy."
            },
            {
                DESC: "Sitio web para el almacenamiento de figuras de papel de personajes manga, anime y videojuegos.",
                SUB_DESC: ""
            }
        ],
        CURRIC:{
            EDUCATION: "Educación",
            EXPERIENCE: "Experiencia",
            COMP_EDUCATION: "Educación Comp.",
            TEC_KNOWLEDGE: "Conocimientos Técnicos",
            OTHER: "Otros Datos de Interés",
            PERS_DATA: {
                BIRTH: "09 Septiembre 1992, La Coruña, Galicia, España"
            },
            JOBS: [
                {
                    DURATION: "2 meses",
                    CENTER: "Grupo Tecnológico Artabria",
                    PLACE: "Ferrol",
                    JOB: "Estudiante en Prácticas",
                    DESC: "Desarrollo de dos sencillas aplicaciones para Android. Una para que los empleados pudieran ver las tareas asignadas y otra para poder consultar la facturación de una o varias empresas en gráficas."
                },
                {
                    DURATION: "3 años",
                    CENTER: "Indra Software Labs",
                    PLACE: "La Coruña",
                    JOB: "Desarrollador Frontend",
                    DESC: "Desarrollo de InCMS, una aplicación web para gestionar todo el ciclo comercial de una empresa energética (pago, facturación, atención al cliente, etc.)."
                }
            ],
            EDUC: [
                {
                    DURATION: "2 años",
                    CENTER: "CIFP Rodolfo Ucha Piñeiro",
                    PLACE: "Ferrol",
                    JOB: "Técnico Superior en Desarrollo de Aplicaciones Multiplatforma"
                }
            ],
            COMP_EDUC: {
                JAVAEE6: "Desarrollo de Aplicaciones con Java EE6",
                PATTERNS: "Patrones de Java EE5",
                ANGULAR: "Introducción a AngularJS",
            },
            KNOWLEDGE: {
                FRONT: "Desarrollo Frontend",
                BACK: "Desarrollo Backend",
                OTHER: "Otras Utilidades"
            },
            OTHER_DATA: {
                DRIVE: "Permiso de conducir B y vehículo propio"
            }
        },
        FOOTER: {
            IN_DEVELOP: "Web en Desarrollo.",
            THEME: "Tema base 'Cover' por "
        }
    };

    $translateProvider.translations('en', translationsEN);
    $translateProvider.translations('es', translationsES);
    $translateProvider.preferredLanguage('en');
    $translateProvider.fallbackLanguage('en');

});



angular.module("myApp").controller('mainController', function() {
    var me = this;

});

angular.module("myApp").controller('menuController', function($translate) {

    var me = this;
    me.currLang = 'en';

    me.changeLanguage = function (langKey) {
        me.currLang = langKey;
        $translate.use(langKey);
    };

});