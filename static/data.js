const om_mig = {
	intro: 
		"Jag är frontend-utvecklare som tar examen från Handelsakademin i Göteborg i juni 2022. Jag älskar känslan när jag kan få en applikation att fungera precis som jag vill och tycker att det är jättespännande att känna att jag utvecklas som frontendare.",
	aboutMe: 
		"Jag är frontend-utvecklare som tar examen från Handelsakademin i Göteborg i juni 2022. Jag brinner för kreativ design och känner att jag verkligen har hittat rätt i frontendutveckling.\nJag har alltid varit intresserad av färg och form, och gillar att rita och skapa på olika sätt. Därför tycker jag att det är extra roligt att kunna skapa interaktiv design. Jag älskar känslan när jag kan få en applikation att fungera precis som jag vill och tycker att det är jättespännande att känna att jag utvecklas som frontendare.."
};

const faerdigheter = {
	allStuff: [
		"HTML", "CSS", "JavaScript",
		"React", 
		"Sass",
		"Next.js", 
		"Node.js", 
		"Express", 
		"TypeScript", 
		
		"Sanity", 
		"Webflow",
		"Gsap", 
		"Pixi.js",
	],
	schoolStuff: [
		"React", 
		"Sass",
		"Node.js", 
		"TypeScript", 
		"Express", 
		"HTML", "CSS", "JavaScript",
	],
	internshipStuff: [
		"React", 
		"Sass", 
		"Webflow",
		"Gsap", 
		"Pixi.js", 
	],
	finalProjectStuff: [
		"Next.js", 
		"Sanity", 
		"Sass", 
	],
};

const cv = [
	{
		type: "LIA",
		items : [
			{
				place: "Hoy Multimedia, Göteborg",
				title: "Frontend developer",
				dates: "november 2021 - februari 2022, mars 2022 - juni 2022",
				tasks: [
					"React", 
					"Sass", 
					"Gsap", 
					"Pixijs", 
					"Webflow",
				],
				other: "LIA som frontendutvecklare på Hoy, 2 perioder på totalt 24 veckor. Jag har jobbat mycket i React för att göra interaktiva informationssidor som ska visas vid lanseringar och mässor. Jag har även gjort en hemsida i Webflow och har uppdaterat delar av ett gammalt Wordpress-projekt. Samtliga projekt har byggts med Sass utifrån Figmaskisser. I några projekt har jag använt Gsap och Pixi.js för animationer och grafer."
			},
		]
	},
	{
		type: "Utbildning",
				items: [ 
					{
						degree: "Frontend developer",
						title: "Frontend developer",
						place: "Handelsakademin, Göteborg",
						dates: "HT 2020 - VT 2022",
						credits: "400 YP",
						kurser: [
							"HTML och CSS",
							"JavaScript 1",
							"Grafiska verktyg för gränssnittsdesign",
							"UX och Usability",
							"JavaScript 2",
							"Att arbeta i projekt med agila metoder",
							"Arbetsmetodik för utvecklare",
							"Dynamisk webbutveckling",
							"Lärande i arbete (LIA) 1",
							"Examensarbete",
							"Lärande i arbete (LIA) 2",
						], 
						other: "Yrkeshögskoleutbildning i frontendutveckling där vi även gjort vissa fullstackprojekt. Vi har framför allt jobbat i React, med och utan Typescript. Vi har även byggt egna backends i Node.js och Express. Vi har berört state management, med Redux och lite snabbt med Recoil.\n\nMycket av stylingen har gjorts med Sass och CSS-moduler. Genom hela utbildningen har vi använt Github för versionshantering. Utöver kodandet har vi också jobbat mycket med Figma och designat alla våra projekt där. Vi har även lärt oss grundläggande UX och UI-design, med fokus på användarvänlighet och tillgänglighetsanpassning."
					},
				],
			},
];

const cvRegular = [
	{
		type: "LIA och praktik",
		items : [
			{
				place: "Hoy Multimedia, Göteborg",
				title: "Frontend-utvecklare",
				dates: "november 2021 - februari 2022, mars 2022 - juni 2022",
				tasks: [
					"React", 
					"Sass", 
					"Gsap", 
					"Pixijs", 
					"Webflow",
				],
				other: "LIA som frontendutvecklare på Hoy, 2 perioder på totalt 24 veckor. Jag har jobbat mycket i React för att göra interaktiva informationssidor som ska visas vid lanseringar och mässor. Jag har även gjort en hemsida i Webflow och har uppdaterat delar av ett gammalt Wordpress-projekt. Samtliga projekt har byggts med Sass utifrån Figmaskisser. I några projekt har jag använt Gsap och Pixi.js för animationer och grafer."
			},
			{
				place: "Jerusalem Institute of Justice, Jerusalem",
				title: "Jurist",
				dates: "september 2014 - november 2014",
				tasks: ["Skriva rapporter", "Genomföra intervjuer", "Göra rättsutredningar"],
				other: "Praktik som jurist, totalt 3 månader på plats i Jerusalem, Israel."
			},
			{
				place: "Wittulsbergs Juridiska AB, Uppsala",
				title: "Jurist",
				dates: "2013 - 2014",
				tasks: ["Skriva inlagor och överklaganden av asylärenden", "Göra rättsutredningar inom migrationsrätt"],
				other: "Praktik som jurist, ca 4 timmar/vecka vid sidan av studier."
			}
		]
	},
	{
		type: "Utbildning",
		items: [
			{
				title: "Examen",
				items: [ 
					{
						degree: "Frontend developer",
						name: "Frontend developer",
						place: "Handelsakademin, Göteborg",
						dates: "HT 2020 - VT 2022",
						credits: "400 YP",
						kurser: [
							"HTML och CSS",
							"JavaScript 1",
							"Grafiska verktyg för gränssnittsdesign",
							"UX och Usability",
							"JavaScript 2",
							"Att arbeta i projekt med agila metoder",
							"Arbetsmetodik för utvecklare",
							"Dynamisk webbutveckling",
							"Lärande i arbete (LIA) 1",
							"Examensarbete",
							"Lärande i arbete (LIA) 2",
						], 
						other: "Yrkeshögskoleutbildning i frontendutveckling där vi även gjort vissa fullstackprojekt. Vi har framför allt jobbat i React, med och utan Typescript. Vi har även byggt egna backends i Node.js och Express. Vi har berört state management, med Redux och lite snabbt med Recoil.\n\nMycket av stylingen har gjorts med Sass och CSS-moduler. Genom hela utbildningen har vi använt Github för versionshantering. Utöver kodandet har vi också jobbat mycket med Figma och designat alla våra projekt där. Vi har även lärt oss grundläggande UX och UI-design, med fokus på användarvänlighet och tillgänglighetsanpassning."
					},
					{
						degree: "Jurist",
						name: "Juristexamen",
						place: "Uppsala universitet",
						dates: "HT 2010 - HT 2014",
						credits: "270 HP",
						kurser: [			
							"Terminskurs 1: Grundläggande juridisk metod, statsrätt och konstitutionell EU-rätt",
							"Terminskurs 2: Civilrätt - avtalsrätt, skadeståndsrätt",
							"Terminskurs 3: Civilrätt - sakrätt, immaterialrätt",
							"Terminskurs 4: Straffrätt och processrätt",
							"Terminskurs 5: Associationsrätt och skatterätt",
							"Terminskurs 6: Förvaltningsrätt och internationell rätt",
							"Migrationsrätt", 
							"Rätt och psykologi", 
							"Examensarbete \"Religionsfriheten under den Palestinska myndigheten i ljuset av Palestinska myndighetens tillträde till ICCPR\".", 
						],
						other: "Jag gjorde uppsatspraktik på Jerusalem Institute of Justice (JIJ) i Jerusalem, Israel. Där arbetade jag med att skriva rapporter om mänskliga rättigheter, intervjua personer inför rapporterna samt hjälpte till vid event som anordnades av JIJ."
					}
				]
			},
			{
				title: "Kurser",
				items: [
					{
						name: "Hebreiska A2, modern inriktning",
						place: "Uppsala universitet",
						dates: "HT 2016",
						credits: "30 HP"
					},
					{
						name: "Ryska Fortsättningskurs B",
						place: "Uppsala universitet",
						dates: "VT 2016",
						credits: "30 HP"
					},
					{
						name: "Ryska baskurs A",
						place: "Uppsala universitet",
						dates: "VT 2015",
						credits: "30 HP"
					}
				]
			}
		]
	},
	{
		type:	"Arbetslivserfarenhet",
		items: [
			{
				place: "Kriminalvården, Anstalten Borås, Borås",
				title : "Kriminalvårdare",
				dates: "2021 - pågående",
				tasks: [],
				other: "Sommarvikarie på heltid somrarna 2021 och 2022, extrajobb timmar vid sidan av studier 2021-2022"
			},
			{
				place: "Borås tingsrätt, Borås",
				title : "Tingsnotarie",
				dates: "april 2017 – oktober 2019",
				tasks: ["Förberett och handlagt domstolsärenden", "Skrivit egna beslut i domstolsärenden och tvistemål", "Skrivit förslag till domar i tvistemål och brottmål", "Skrivit egna domar i brottmål", "Suttit som ordförande i egna domstolsförhandlingar i brottmål" ],
				other: "Sedvanlig notarietjänstgöring vid tingsrätt."
			},
			{
				place: "Scandinavian Human Rights Lawyers, Uppsala",
				title : "Biträdande jurist",
				dates: "januari 2017 – mars 2017",
				tasks: ["Skriva inlagor och överklaganden av asylärenden", "Göra rättsutredningar inom migrationsrätt"],
				other: "Extrajobb, migrationsrätt"
			},
			{
				place : "Wittulsbergs Juridiska AB, Uppsala",
				title : "Biträdande jurist",
				dates: "juni 2015 - december 2015",
				tasks: ["Skriva inlagor och överklaganden av asylärenden", "Göra rättsutredningar"],
				other: "Heltid, asyl- och migrationsrätt samt avtalsrätt."
			},
			{
				place : "Wittulsbergs Juridiska AB, Uppsala",
				title : "Juristassistent",
				dates: "2014 - 1015",
				tasks: [],
				other: "Extrajobb vid sidan av studier."
			}
		]
	},
];

const kontakta_mig = [
	{
		name: "Github",
		url: "https://github.com/elisabethdeborah",
	},
	{
		name: "LinkedIn",
		url: "https://linkedin.com/in/elisabethrumar",
	},
	{
		name: "Epost",
		url: "mailto: elisabeth.rumar@gmail.com",
	}
];

const projekt = [
	{
		title: "Toma\u00ADtodo",
		url: "/tomatodo/",
		githubRepo: "https://github.com/elisabethdeborah/tomatodo",
		description: "Tomatodo är mitt examensarbete under utbildningen till frontend developer. Jag har använt mig av next.js, och sanity för att skapa en app för time management.\n\nAppen kombinerar en todo-list-app med ett bibliotek för att spara tidtagna uppgifter, som sedan kan läggas till i todo-listor. Todo-objekten kan sedan starta en nedräkning, som visar tiden genom att ändra bakgrundsfärgen från grön till röd, utöver att visa siffror och animera tidsåtgången med en pie-chart och en progressbar. Användaren skapar en egen profil och sparar sin egen data.",
		tools: ["Next.js", "Sanity", "Sass", "GROQ"],
		imgSrc: "assets/images/exjobb.png",
		alt: "Tomatodo screenshot",
		gridNo: 1
	},
	{
		title: "Hams\u00ADter Wars",
		url: "https://hamster-wars2.herokuapp.com",
		githubRepo: "https://github.com/elisabethdeborah/hamster-wars-2",
		description: "Appen går ut på att jämföra två hamstrar i taget och välja den som är sötast. Varje hamster uppdateras sedan utifrån resultatet, och man kan se hur många matcher hamstern vunnit eller förlorat, samt det totala antalet matcher hamstern har deltagit i.\n\nSlutuppgift i kursen \"Dynamisk webbutveckling\"",
		tools: ["React", "Node.js", "TypeScript", "Express", "Sass", "Firestore", "Heroku"],
		imgSrc: "assets/images/hamsterWars",
		alt: "Hamster Wars screenshot",
		gridNo: 2
	},
	{
		title: "Flickr API",
		url: "/flickr-projekt/",
		githubRepo: "https://github.com/elisabethdeborah/flickr-projekt",
		description: "Hämtar data från Flickr:s API utifrån användarens input.\n\nSlutuppgift i kursen JavaScript 1.",
		tools: ["HTML", "CSS", "JavaScript", "Flickr API"],
		imgSrc: "assets/images/fickr2.png",
		alt: "Flickr API screenshot",
		gridNo: 3
	},
	{
		title: 'Lunch\u00ADtips',
		url: "/lunchtips/", 
		githubRepo: "https://github.com/elisabethdeborah/lunchtips",
		description: "Ett projekt jag gjorde för skojs skull när jag precis började lära mig JavaScript.\n\nProjektet rekommenderar ett eller flera av mina tio favorit-lunchställen i Borås centrum baserat på väder och temperatur. Rekommendationen görs för lunchtid, kl 11-14, samma dag eller dagen efter och väderprognoserna kommer från SMHI.",
		tools: ["HTML", "CSS", "JavaScript", "SMHI API"],
		imgSrc: "assets/images/lunchtips2.png",
		alt: "Lunchtips screenshot",
		gridNo: 4,
	},
	{
		title: "Hang Man",
		url: "/hang-man/",
		githubRepo: "https://github.com/elisabethdeborah/hang-man",
		description: "Hänga gubbe, på tid.\n\nVidareutveckling av ett grupparbete i skolan.",
		tools: ["HTML", "CSS", "JavaScript"],
		imgSrc: "assets/images/hangman2.png",
		alt: "Hang Man screenshot",
		gridNo: 5,
	},
	{
		title: "quickfix",
		category: "UX",
		figma: "https://www.figma.com/file/9QsN1GkAdIs6imeamewjXr/Stickan-%E2%80%93-Elisabeth-Rumar?node-id=0%3A1",
		prototype: "https://www.figma.com/proto/9QsN1GkAdIs6imeamewjXr/Stickan-%E2%80%93-Elisabeth-Rumar?node-id=139%3A867&scaling=scale-down&page-id=0%3A1&starting-point-node-id=139%3A867",
		description: "App-design för utlåningsbibliotek med verktyg, på uppdrag från en fikttiv samfällighetsförening.\n\nSlutuppgift i kursen \"UX och Usability\"",
		tools: ["Figma"],
		list : ["Målgruppsanalyser och användartester", "Lätthanterliga och lättbegripliga gränssnitt", "Wireframes"],
	},
	{
		title: "Sinus Skateboard webshop",
		category: "De\u00ADsign",
		figma: "https://www.figma.com/file/b6LEaZrtsDdTeZlg5MXYb4/Sinus-Webshop-Elisabeth-Rumar",
		prototype: "https://www.figma.com/proto/b6LEaZrtsDdTeZlg5MXYb4/Sinus-Webshop-Elisabeth-Rumar?scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=1%3A2&node-id=1%3A2",
		description: "Desktopesign för webshopen \"Sinus skateboards\".\n\nSlutuppgift i kursen \"Grafiska verktyg för gränssnittsdesign\"",
		tools: ["Figma"],
		list: ["Design och layout", "Färglära", "Typografi"],
	}
];

export { projekt, om_mig, cv, cvRegular, kontakta_mig, faerdigheter, };