import React from 'react';
import styles from './navigation.module.scss';
import clsx from 'clsx';

const Navigation = ({ data, isStuck }) => {
	let mapData = Object.keys(data);
	let sorted = mapData.reverse();

	return (
		<section className={clsx(styles.navWrapper, {[styles.stuck]: isStuck})}>
			<div className={styles.navBar}>
				<ul className={styles.navList}>
					{sorted.map((x, index) => {
						return (
							x !== 'faerdigheter' && x !== 'cvRegular' && x !== 'om_mig' && (
							<li key={`nav-link-${index+1}`} className={styles.navListItem}>
								<a href={`#${x}`} className={styles.navLink}>{x.split('_').join(' ').split('ae').join('ä')}</a>
							</li>)
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default Navigation;