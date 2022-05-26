import React, { useEffect, useState, useRef } from 'react';
import './globals.module.scss';
import Header from './components/header/Header';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Cv from './components/CV/Cv';
import Footer from './components/Footer/Footer';
import * as importedData from './data';
import Navigation from './components/Navigation/Navigation';
import NextjsLogo from './assets/images/nextlogo.svg';
import Sanity from './assets/images/sanitylogo.svg';
import Nodejs from './assets/images/nodelogo.png';
import TypeScript from './assets/images/typescript.png';
import Express from './assets/images/express.png';
import Gsap from './assets/images/gsap-greensock.svg';
import ReactIcon from './assets/images/react.png';
import Pixijs from './assets/images/pixilogo.png';
import Html from './assets/images/html.png';
import Css from './assets/images/css.png';
import Javascript from './assets/images/javascript.png';
import Sass from './assets/images/sass.png';
import Webflow from './assets/images/webflowlogo.png';
import Firestore from './assets/images/firestorelogo.svg';
import Heroku from './assets/images/herokulogo.png';
import Api from './assets/images/api.png';
import Figma from './assets/images/figma-1.svg';

function App() {
let data ={...importedData};

const scrollRef = useRef(null);
const [isIntersecting, setIsIntersecting] = useState(false);

const obsFunc = entries => {
	entries.forEach(entry => {
	 const intersecting = entry.isIntersecting;
	setIsIntersecting(intersecting);
	})
};

useEffect(() => {
	let current = scrollRef.current;
	const options = {
		threshold: 0,
	};
	const observer = new IntersectionObserver(obsFunc, options)
	current && observer.observe(current);
	return () => observer.unobserve(current);
}, []);

const allLogos = {
	HTML: Html,
	CSS: Css,
	JavaScript: Javascript,
	React: ReactIcon,
	Sass: Sass,
	'Node.js': Nodejs,
	Express: Express,
	TypeScript: TypeScript,
	'Next.js': NextjsLogo, 
	Sanity: Sanity, 
	Webflow: Webflow,
	Gsap: Gsap,
	'Pixi.js': Pixijs,
	Heroku: Heroku,
	Firestore: Firestore,
	'Flickr API': Api,
	'SMHI API': Api,
	Figma: Figma,
};

  return (
    <div className="App">
		<Header scrollRef={scrollRef} data={data}  />
		<Navigation data={data} isStuck={isIntersecting} />
		<Experience allLogos={allLogos} faerdigheter={data.faerdigheter} />
		<Projects allLogos={allLogos} projects={data.projekt} />
		<Cv cvData={data.cvRegular} cvFrontendData={data.cv} />
		<Footer contact={data.kontakta_mig} />
    </div>
  );
};

export default App;
