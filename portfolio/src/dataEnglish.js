const om_mig = {
	intro: 
		"Jag är frontend-utvecklare som tar examen från Handelsakademin i Göteborg i juni 2022. Jag älskar känslan när jag kan få en applikation att fungera precis som jag vill och tycker att det är jättespännande att känna att jag utvecklas som frontendare.",
	aboutMe: 
		"Jag är frontend-utvecklare som tar examen från Handelsakademin i Göteborg i juni 2022. Jag brinner för kreativ design och känner att jag verkligen har hittat rätt i frontendutveckling.\nJag har alltid varit intresserad av färg och form, och gillar att rita och skapa på olika sätt. Därför tycker jag att det är extra roligt att kunna skapa interaktiv design. Jag älskar känslan när jag kan få en applikation att fungera precis som jag vill och tycker att det är jättespännande att känna att jag utvecklas som frontendare."
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
		type: "internships",
		items : [
			{
				place: "Hoy Multimedia, Göteborg",
				title: "Frontend developer",
				dates: "November 2021 - February 2022, Mars 2022 - June 2022",
				tasks: [
					"ReactIcon", 
					"Sass", 
					"Gsap", 
					"Pixijs", 
					"Webflow",
				],
				other: "Frontend developer internship at digital agency Hoy, 2 periods, for a total of 24 weeks."
			},
			{
				place: "Jerusalem Institute of Justice, Jerusalem",
				title: "Lawyer",
				dates: "September 2014 - November 2014",
				tasks: [],
				other: "Legal internship for a total of 3 months."
			},
			{
				place: "Wittulsbergs Juridiska AB, Uppsala",
				title: "Lawyer",
				dates: "2013 - 2014",
				tasks: ["Skriva inlagor och överklaganden av asylärenden", "Göra rättsutredningar inom migrationsrätt"],
				other: "Legal internship for about 4 hours/week."
			}
		]
	},
	{
		type:	"workExperience",
		items: [
			{
				place: "Kriminalvården, Anstalten Borås, Borås",
				title : "Kriminalvårdare",
				dates: "2021 - current",
				tasks: [],
				other: "Sommarvikarie på heltid 2021 och 2022, extrajobb timmar 2021-2022"
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
				other: "Extrajobb"
			}
		]
	},
	{
		type: "education",
		items: [
			{
				type: "Degrees",
				items: [ 
					{
						name: "Frontend developer",
						place: "Handelsakademin, Göteborg",
						dates: "HT 2020 - VT 2022",
						credits: "400 YP"
					},
					{
						name: "Juristprogrammet",
						place: "Uppsala universitet",
						dates: "HT 2010 - HT 2014/VT2015 (februari)",
						credits: "270 HP"
					}
				]
			},
			{
				Courses: [
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
	}
];


const kontakta_mig = [
	{
		name: "Github",
		url: "https://github.com/elisabethdeborah",
		icon: ""
	},
	{
		name: "LinkedIn",
		url: "https://linkedin.com/in/elisabethrumar",
		icon: ""
	}
];




const projekt = [
	{
		title: "Final Project - \"Tomatodo\"",
		url: "/#",
		description: "Final project of my degree. It is based on my first ever JavaScript project I did for fun before I decided to get a degree.",
		tools: ["Next.js", "Sanity", "Sass"],
		imgSrc: "/assets/images/exjobbScreenshot",
		alt: "Tomatodo screenshot",
		gridNo: 1
	},
	{
		title: "Hamster Wars",
		url: "/#",
		description: "School project for the course \"Dynamisk webbutveckling\"",
		tools: ["React", "Node.js", "TypeScript", "Express", "Sass"],
		imgSrc: "/assets/images/hamserWars",
		alt: "Hamster Wars screenshot",
		gridNo: 2
	},
	{
		title: "Flickr API",
		url: "/#",
		description: "School project for the course JavaScript 1.",
		tools: ["Flickr API", "fetch", "JavaScript modules"],
		imgSrc: "/assets/images/api-project.jpg",
		alt: "Flickr API screenshot",
		gridNo: 3
	},
	{
		title: "Lunchtips",
		url: "/#",
		description: "A project I did for fun when I was just starting out",
		tools: ["SMHI API", "JSON", "async/await"],
		imgSrc: "/assets/images/lunchtips-screenshot.jpg",
		alt: "Lunchtips screenshot",
		gridNo: 4,
		about: {
			header: "Har du svårt att välja vad du ska äta till lunch?",
			paragraphs: [
				"Lunchtips Borås rekommenderar ett eller flera av mina tio favorit-lunchställen i Borås centrum baserat på väder och temperatur (maten är förstås god på alla ställen). Rekommendationen görs för lunchtid, kl 11-14, samma dag eller dagen efter och väderprognoserna kommer från SMHI.",
				"Matchningen mellan lunchställe och väder görs helt baserat på min egna uppfattning av vilken mat som passar vilket väder. Jag har också tagit hänsyn till om du kan sitta och äta (bekvämt) på lunchstället eller om det passar bättre att hämta maten och äta utomhus.",
				"Flera av lunchställena dyker inte upp i listor över Borås bästa lunchrestauranger, men maten är enligt min åsikt bättre än på flera ställen som syns upp i listorna."
			]
		}
	},
	{
		title: "Hang Man",
		url: "/#",
		description: "Further development of a school group project.",
		tools: ["Array methods", "Loops", "Countdown timer"],
		imgSrc: "/assets/images/hang-man.png",
		alt: "Hang Man screenshot",
		gridNo: 5,
		about : {
			header: "Do you have trouble estimating the time a certain task take?",
			paragraphs: [
				"Do you put a hundred things on your to-do list and expect that you will be able to fit everything in without realising every task actually takes time?",
				"Do you forget how long you have spent on a specific task or get surprised when you run out of time?",
				"TomaTo-Do is a time management resource, combining the Pomodoro technique with a simple to-do list. The Pomodoro technique is the method of using a countdown timer (which sometimes have the design of a tomato, hence the name \"pomodoro\") to break down work into intervals.",
				"You can use TomaTo-Do as a regular countdown timer, using the Quick Start timer, or you can time a specific task and save it as a Tomato to your own library",
				"In your library you can collect different Tomatoes that you add by timing doing the task or simply putting in an estimated time directly. The format of timing your own Tomatoes will be saved in hours and minutes.",
				"The good thing about timing yourself is that you vill know for sure how long the task takes for you, and if you are the type of person (like myself) that tends to overestimate how efficient you are, this will help you plan realisticly. After adding your Tomato to your library, you can click on the timer button in the list and the countdown will begin.",
				"You also have the option of adding the to the TomaTo-Do list by clicking the button with the list icon. The will be saved to the  list.",
				"The TomaTo-Do list functions as a regular to-do list, but you can also click the timer button to start the countdown. You can add either a tomato with a saved time or add a todo without any time connected to it. ",
				"When the timer is counting down, the background of the page will change from green to red, according to how much time has passed/is left for the specific task.",
				"This makes it easier to get a grasp of the time status just by catching a glimps of the screen, without having to look at the actual numbers. There is both an audible and a visual signal for when time is up.",
				"The inspiration for TomaTo-Do came from two videos about time management on the How To ADHD Youtube channel. These videos has helped me a lot and I really recommend checking them out."
			],
			links: {
				howtoadhd: "https://www.youtube.com/channel/UC-nPM1_kSZf91ZGkcgy_95Q",
				video1: "https://www.youtube.com/watch?v=siHBuHdOhCY&t=206s",
				video2: "https://www.youtube.com/watch?v=KecZYC7kP78"
			}
		}
	}
];

export { projekt, kontakta_mig, faerdigheter, cv, om_mig };