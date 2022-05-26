import React from 'react';
import styles from './footer.module.scss';
import Github from '../../assets/images/github.png';
import LinkedIn from '../../assets/images/linkedin.png';
import Epost from '../../assets/images/email.png';

const Footer = ({ contact }) => {
	const icons = {Github, LinkedIn, Epost};
	return (
		<section className={styles.footerWrapper}>
			<h2 id="kontakta_mig">Kontakta mig</h2>
			<div className={styles.contact}>
			{ 
				contact.map((link, index) => {
					return (
						<a key={`contact-${index}`} href={link.url} target="_blank" rel="noreferrer">
							<article index={index}>
								<img className={styles.icon} src={icons[link.name]} alt={`${link.name}-ikon`} />
							</article>
						</a>
					)
				})
			}
			</div>
		</section>
	);
};

export default Footer;