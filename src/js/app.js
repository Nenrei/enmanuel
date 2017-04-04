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
                ES: "Spanish",
                GA: "Galician"
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
                DESC: "Website for storing manga and anime character paper toys.",
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
                BIRTH: "08 September 1992, La Coru&ntilde;a, Galicia, Spain"
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
                    PLACE: "La Coru&ntilde;a",
                    JOB: "Frontend developer",
                    DESC: "Development of InCMS, a web application to manage all the commercial cicle of an energy company(payment, billing, customer service, etc)."
                }
            ],
            EDUC: [
                {
                    DURATION: "2 years",
                    CENTER: "CIFP Rodolfo Ucha Pi&ntilde;eiro",
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
                ES: "Espa&ntilde;ol",
                GA: "Gallego"
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
                DESC: "Cl&aacute;sico juego de naves espaciales en el que tendremos que destruir las naves enemigas y permanecer vivos el m&aacute;ximo tiempo posible.",
                SUB_DESC: "Curso 'Aprende Unity 5: de cero a experto' de Udemy."
            },
            {
                DESC: "En este juego un curioso npc nos asignar&aacute; una misi&oacute;n que debemos completar.",
                SUB_DESC: "Curso 'Aprende Unity 5: de cero a experto' de Udemy."
            },
            {
                DESC: "Sitio web para almacenar figuras de papel de personajes manga y anime.",
                SUB_DESC: ""
            }
        ],
        CURRIC:{
            EDUCATION: "Educaci&oacute;n",
            EXPERIENCE: "Experiencia",
            COMP_EDUCATION: "Educaci&oacute;n Comp.",
            TEC_KNOWLEDGE: "Conocimientos T&eacute;cnicos",
            OTHER: "Otros Datos de Inter&eacute;s",
            PERS_DATA: {
                BIRTH: "09 Septiembre 1992, La Coru&ntilde;a, Galicia, Espa&ntilde;a"
            },
            JOBS: [
                {
                    DURATION: "2 meses",
                    CENTER: "Grupo Tecnol&oacute;gico Artabria",
                    PLACE: "Ferrol",
                    JOB: "Estudiante en Pr&aacute;cticas",
                    DESC: "Desarrollo de dos sencillas aplicaciones para Android. Una para que los empleados pudieran ver las tareas asignadas y otra para poder consultar la facturaci&oacute;n de una o varias empresas en gr&aacute;ficas."
                },
                {
                    DURATION: "3 a&ntilde;os",
                    CENTER: "Indra Software Labs",
                    PLACE: "La Coru&ntilde;a",
                    JOB: "Desarrollador Frontend",
                    DESC: "Desarrollo de InCMS, una aplicaci&oacute;n web para gestionar todo el ciclo comercial de una empresa energ&eacute;tica (pago, facturaci&oacute;n, atenci&oacute;n al cliente, etc.)."
                }
            ],
            EDUC: [
                {
                    DURATION: "2 a&ntilde;os",
                    CENTER: "CIFP Rodolfo Ucha Pi&ntilde;eiro",
                    PLACE: "Ferrol",
                    JOB: "T&eacute;cnico Superior en Desarrollo de Aplicaciones Multiplatforma"
                }
            ],
            COMP_EDUC: {
                JAVAEE6: "Desarrollo de Aplicaciones con Java EE6",
                PATTERNS: "Patrones de Java EE5",
                ANGULAR: "Introducci&oacute;n a AngularJS",
            },
            KNOWLEDGE: {
                FRONT: "Desarrollo Frontend",
                BACK: "Desarrollo Backend",
                OTHER: "Otras Utilidades"
            },
            OTHER_DATA: {
                DRIVE: "Permiso de conducir B y veh&iacute;culo propio"
            }
        },
        FOOTER: {
            IN_DEVELOP: "Web en Desarrollo.",
            THEME: "Tema base 'Cover' por "
        }
    };

    var translationsGA = {
        MENU: {
            HOME: "Inicio",
            CURRIC: "Curriculum",
            WEB: "Webs",
            GAMES: "Xogos",
            LANG: "Idioma"
        },
        MAIN: {
            WORK: "Desenvolvedor Frontend"
        },
        OPTION: {
            TRANSLATE: {
                EN: "Ingl&eacute;s",
                ES: "Espa&ntilde;ol",
                GA: "Galego"
            }
        },
        MADEWITH: {
            UNITY: "Desenvolto en Unity"
        },
        PROJECTS: [
            {
                DESC: "O obxectivo deste xogo é recoller todas as moedas do escenario.",
                SUB_DESC: "Curso 'Aprende Unity 5: de cero a experto' de Udemy."
            },
            {
                DESC: "Xogo de naves clásico onde tes que destruír naves inimigas e permanecer vivo o maior tempo posible.",
                SUB_DESC: "Curso 'Aprende Unity 5: de cero a experto' de Udemy."
            },
            {
                DESC: "Neste partido un curioso npc nos atribúe unha misión que debe ser completada.",
                SUB_DESC: "Curso 'Aprende Unity 5: de cero a experto' de Udemy."
            },
            {
                DESC: "Sitio web para almacear figuras de papel de personaxes manga e anime.",
                SUB_DESC: ""
            }
        ],
        CURRIC:{
            EDUCATION: "Educaci&oacute;n",
            EXPERIENCE: "Experiencia",
            COMP_EDUCATION: "Educaci&oacute;n Comp.",
            TEC_KNOWLEDGE: "Coñecementos T&eacute;cnicos",
            OTHER: "Outros Datos de Intererese",
            PERS_DATA: {
                BIRTH: "09 Setembro 1992, A Coru&ntilde;a, Galicia, Espa&ntilde;a"
            },
            JOBS: [
                {
                    DURATION: "2 meses",
                    CENTER: "Grupo Tecnol&oacute;xico Artabria",
                    PLACE: "Ferrol",
                    JOB: "Estudante en Pr&aacute;cticas",
                    DESC: "Desenvolvemento de duos sencillas aplicacións para Android. Unha para que o persoal poida ver as tarefas asignadas e outra para poder consultar a facturaci&oacute;n de unha ou varias empresas en gr&aacute;ficas."
                },
                {
                    DURATION: "3 anos",
                    CENTER: "Indra Software Labs",
                    PLACE: "A Coru&ntilde;a",
                    JOB: "Desenvolvedor Frontend",
                    DESC: "Desenvolvemento de InCMS, unha aplicaci&oacute;n web para xestionar todo o ciclo comercial de unha empresa enerx&eacute;tica (pago, facturaci&oacute;n, atenci&oacute;n ó cliente, etc.)."
                }
            ],
            EDUC: [
                {
                    DURATION: "2 anos",
                    CENTER: "CIFP Rodolfo Ucha Pi&ntilde;eiro",
                    PLACE: "Ferrol",
                    JOB: "T&eacute;cnico Superior en Desenvolvemento de Aplicacións Multiplatforma"
                }
            ],
            COMP_EDUC: {
                JAVAEE6: "Desenvolvemento de Aplicacións con Java EE6",
                PATTERNS: "Patróns de Java EE5",
                ANGULAR: "Introducci&oacute;n a AngularJS",
            },
            KNOWLEDGE: {
                FRONT: "Desenvolvemento Frontend",
                BACK: "Desenvolvemento Backend",
                OTHER: "Outras Utilidades"
            },
            OTHER_DATA: {
                DRIVE: "Permiso de conducir B e veh&iacute;culo propio"
            }
        },
        FOOTER: {
            IN_DEVELOP: "Web en Desenvolvemento.",
            THEME: "Tema base 'Cover' por "
        }
    };



    $translateProvider.translations('en', translationsEN);
    $translateProvider.translations('es', translationsES);
    $translateProvider.translations('ga', translationsGA);

    $translateProvider.preferredLanguage('es');
    $translateProvider.fallbackLanguage('es');

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