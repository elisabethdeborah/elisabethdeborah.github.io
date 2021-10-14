/* import { useState } from 'react';
import { Link } from 'react-router-dom';
 */
const Settings = () => {
	return (
		<section className="settings-container">
			<h1>Settings</h1>
			<ul className="settings-list">
				<li className="theme">
					<h2>Color theme</h2>
					<article className="settings-option">
					<h3>Colorful</h3>
					<h3>Clean</h3>
					</article>
				</li>
				<li className="visual-language">
					<h2>Visual language</h2>
					<article className="settings-option">
					<h3>Mixed</h3>
					<h3>Text</h3>
					<h3>Pictures</h3>
					</article>
				</li>
				<li className="lanugage">
					<h2>Language</h2>
					<article className="settings-option">
					<h3>English</h3>
					<h3>Svenska</h3>
					</article>
				</li>
				<li>
				</li>
			</ul>
		</section>
	)
}

export default Settings