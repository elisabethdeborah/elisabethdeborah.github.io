import React from 'react';
import styles from './projects.module.scss';
import ProjectItem from './ProjectItem';

const Projects = ({ projects, allLogos }) => (
	<section id="projekt" className={styles.projectsWrapper}>
		<h2 className={styles.pageHeader}>
			Mina projekt
		</h2>
		<main className={styles.mainContent}>
			{ projects.map((project, index) => (
				<ProjectItem key={`${project}-${index}`} project={project} index={index} allLogos={allLogos} />
			))}
		</main>
	</section>
);

export default Projects;