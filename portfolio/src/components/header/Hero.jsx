import React from 'react';
import styles from './header.module.scss';

const Hero = ({ faerdigheter, intro }) => { 

	return (
		<section className={styles.heroWrapper}>
			<article className={styles.imgContainer} />
			<section className={styles.textContainer}>
				<h1 className={styles.heroHeader}>Elisabeth Rumar</h1>
				<h2>– frontend developer</h2>
				<p className={styles.intro}>{intro}</p>
				<div className={styles.heroBtns}>
					<a href="#projekt">Mina projekt</a>
					<a href="#kontakta_mig">Kontakta mig</a>
				</div>
			</section>
			<div className={styles.headerList}>
					{
					faerdigheter.schoolStuff.map((x, index) => {
						return (
							<h5 className={styles.heroparagraph} key={`faerdigheter-${index + 1}`}>{x}</h5>
						)
					})
					}
			</div>
		</section>
	);
};

export default Hero;
