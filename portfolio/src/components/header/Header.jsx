import React from 'react';
import styles from './header.module.scss';
import Hero from './Hero';

const Header = ({ data, scrollRef }) => {
	return (
		<section ref={scrollRef} className={styles.headerWrapper}>
			<Hero faerdigheter={data.faerdigheter} intro={data.om_mig.intro}  />
		</section>
	)
};

export default Header;