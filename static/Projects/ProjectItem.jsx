import React from 'react';
import clsx from 'clsx';
import styles from './projects.module.scss';
import GoTo from '../../assets/images/go-to.png';
import BtnGroup from '../BtnGroup/BtnGroup';
import GithubIcon from '../../assets/images/github.png';
import { useState } from 'react';

const ProjectItem = ({project, index, allLogos}) => {
	const [infoIsVisible, setInfoIsVisible] = useState(false);

//\x20\x0b 
	//&#173;

	return (
		<article onClick={() => setInfoIsVisible(!infoIsVisible)} className={clsx(styles.projectItem, {
				[styles.item1]: index === 0,
				[styles.item2]: index === 1,
				[styles.item3]: index === 2,
				[styles.item4]: index === 3,
				[styles.item5]: index === 4,
				[styles.item6]: index === 5,
				[styles.item7]: index === 6,
			})}
		>
			<div className={styles.projectLinks}>
				{ project.githubRepo ? (
				<>
					<a href={project.url} target="_blank" rel="noreferrer">{project.title !== 'Examensarbete: - "Tomatodo"'? project.title : 'Tomatodo'}
						<span>
							<img className={styles.goToIcon} src={GoTo} alt="hyperlinkicon" />
						</span>
					</a>
					<a href={project.githubRepo} target="_blank" rel="noreferrer">
						{` github-repo`}
						<span>
							<img className={styles.goToIcon} src={GoTo} alt="hyperlinkicon" />
						</span>
					</a>
				</>
				) : (
				<>
					<a href={project.prototype} target="_blank" rel="noreferrer">{'prototype'}
						<span>
							<img className={styles.goToIcon} src={GoTo} alt="hyperlinkicon" />
						</span>
					</a>
					<a href={project.figma} target="_blank" rel="noreferrer">
						{'figma-skiss'}
						<span>
							<img className={styles.goToIcon} src={GoTo} alt="hyperlinkicon" />
						</span>
					</a>
				</>
				)}
			</div>
			<h1 
				className={clsx(styles.bigHeader, {
					[styles.hide]: infoIsVisible
				})}
			>
				{project.category ? 
					<>
					{project.category} <span className={styles.h3Span}>{project.title}</span>
					</>
					: project.title
				}
			</h1>
			<section className={clsx(styles.showInfo, {[styles.visible]: infoIsVisible})}>
				<div className={styles.textContent}>
					<h3 className={styles.projectItemHeader}>{project.title}</h3>
					<p>{project.description}</p>
				</div>
				<div className={styles.iconsAndLinks}>
					{project.list && (
						<ul className={styles.subList}>
							{project.list.map((listItem => (
								<li key={`${project}-${listItem}`}>{listItem}</li>
							)))}
						</ul>
					)}
					<ul className={styles.projectInfo}>
						{ 
						project.tools.map((logo, index) => (
							<div  key={`project-${index}-${project.title}`}>
								{allLogos[logo] ? (
									<img key={`project-${index}-${logo}`} index={index} className={clsx(styles.logoMain, {
										[styles.pixi]: logo === 'Pixi.js',
										[styles.js]: logo === 'JavaScript',
										[styles.api]: logo === 'SMHI API' || logo === 'Flickr API',
										[styles.heroku]: logo === 'Heroku'
									})} src={allLogos[logo]} alt={`${allLogos[logo]}-logga`} />
								) : (
									<article className={styles.logoPlaceholder}>
										<h5>{logo}</h5>
									</article>
								)}
							</div>
						))
						}
					</ul>
					<div className={styles.projectLinks}>
						<BtnGroup hrefs={[project.url, project.githubRepo]}  target="_blank">
							{project.title !== 'Examensarbete: - "Tomatodo"'? (project.title !== "Sinus Skateboard webshop" ? project.title : 'sinus skateboard') : 'Tomatodo'}
							<>
							{ project.githubRepo ?
							(<>
								{"repo"} 
								<img className={styles.icon} src={GithubIcon} alt="githubIcon" />
							</> ) : ("figma")
							}
							</>
						</BtnGroup>
					</div>
				</div>
			</section>
		</article>
	);
};

export default ProjectItem;