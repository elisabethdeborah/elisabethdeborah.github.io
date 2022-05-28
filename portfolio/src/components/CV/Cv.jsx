import clsx from 'clsx';
import React from 'react';
import { useState } from 'react';
import styles from '../CV/cv.module.scss';
import CvCard from './CvCard/CvCard';
import CvCardTwo from './CvCard/CvCardTwo';

const Cv = ({ cvData, cvFrontendData }) => {

	const [infoIsVisible, setInfoIsVisible] = useState(false);
	const [showAllCv, setShowAllCv] = useState(false);

	const handleClickCard = (index, program, type) => {
		if (!infoIsVisible) {
			setInfoIsVisible({...infoIsVisible, showInfo: true})
			setTimeout(() => {
				setInfoIsVisible({showInfo: true, showIndex: index, program: program, type: type});
			}, 100);
		} else {
			setInfoIsVisible(false);	
		}
	};

	return (
		<section id="cv" className={styles.cvWrapper}>
			<section className={styles.experience}>
				<h2>CV - frontendutveckling</h2>
				<div className={styles.cardContainer}>
				{cvFrontendData.map((obj, index) => (
					<article className={styles.cvItem} key={`${obj.type}frontend-${index}-${obj.items.dates}`}>
						<h3>{obj.type}</h3>
						
						{obj.items.map((program, index) => (
							<CvCard key={`task-${index}-${program.title}-${program.dates}-${obj.type}-${program}`} obj={obj} index={index} program={program} infoIsVisible={infoIsVisible} handleClickCard={handleClickCard} />
						))}
					</article>
				))}
				</div>
			</section>
			<div className={styles.allHeader}>
				<h2>CV - alla kategorier</h2>
				<h2 className={clsx(styles.plus, {[styles.up]:showAllCv})} onClick={() => setShowAllCv(!showAllCv)}>&#10507;</h2>
			</div>
			{ showAllCv && (
			<section className={styles.experience}>
				{cvData.map((obj, index) => (
					<article className={styles.cvItem} key={`${obj.type}-${index}-${obj.items.dates}-hey`}>
						<h3>{obj.type}</h3>
						{obj.type !== 'Utbildning' ? (
							<div className={styles.cardContainer}>
								{obj.items.map((program, index) => (
									<CvCard key={`${obj.type}-${index}-${program.dates}-one`} obj={obj} index={index} program={program} infoIsVisible={infoIsVisible} handleClickCard={handleClickCard}  />
								))}
							</div>
						) : (
							obj.items.map((item, index) => (
								<CvCardTwo key={`${obj.type}-${index}-${item.dates}-two`} obj={obj} index={index} item={item} infoIsVisible={infoIsVisible} handleClickCard={handleClickCard}  />
							))
						)}
					</article>
				))}
			</section>
			)}
		</section>
	);
};

export default Cv;