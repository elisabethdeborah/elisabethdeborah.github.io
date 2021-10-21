
import { useContext } from 'react'
import AirRaid from '../assets/AirRaidSirens.mp3'
import BicycleBell from '../assets/BicycleBell.mp3'
import CarHorn from '../assets/CarHorn.mp3'
import CatMeows from '../assets/CatMeows.mp3'
import CitySideStreet from '../assets/CitySideStreet.mp3'
import DogsBarking from '../assets/DogsBarking.mp3'
import KurrawongCallDista from '../assets/KurrawongCallDista.mp3'
import MotionHumMorph from '../assets/MotionHumMorph.mp3'
import MustangHotRevs from '../assets/MustangHotRevs.mp3'
import PoliceSiren from '../assets/PoliceSiren.mp3'
import TrainStnPassLounge from '../assets/TrainStnPassLounge.mp3'
import React, { useState, useEffect } from 'react';
import { AppContext } from '../context';

const Settings = ({ setSettings }) => {
	const { settings } = useContext(AppContext)
	console.log('settings', settings);
	return (
		<section className="settings-container">
			<h1>Settings</h1>
			<ul className="settings-list">	
				<li className="theme">
					<h3>Color theme</h3>
					<article className="settings-option">
						<input type="radio" value="clean" name="theme" defaultChecked onChange={(e) => setSettings({ ...settings, colorTheme: e.target.value })} />
						<p>Clean</p>
					</article>
					<article className="settings-option">
						<input type="radio" name="theme" value="colorful" onChange={(e) => setSettings({ ...settings, colorTheme: e.target.value })} />
						<p>Colorful</p>
					</article>
				</li>
				<li className="visual-language">
					<h3>Visual language</h3>
					<article className="settings-option">
						<input type="radio" name="visual" value="mixed" defaultChecked onChange={(e) => setSettings({ ...settings, visualLanguage: e.target.value })} />
						<p>Mixed</p>
					</article>
					<article className="settings-option">
						<input type="radio" name="visual" value="text" onChange={(e) => setSettings({ ...settings, visualLanguage: e.target.value })} />
						<p>Text</p>
					</article>
					<article className="settings-option">
						<input type="radio" name="visual" value="pictures" onChange={(e) => setSettings({ ...settings, visualLanguage: e.target.value })} />
						<p>Pictures</p>
					</article>
				</li>
				<li className="lanugage">
					<h3>Language</h3>
					<article className="settings-option">
						<input type="radio" name="language" value="english" defaultChecked onChange={(e) => setSettings({ ...settings, language: e.target.value })} />
						<p>English</p>
					</article>
					<article className="settings-option">
						<input type="radio" name="language" value="svenska" onChange={(e) => setSettings({ ...settings, language: e.target.value })}/>
						<p>Svenska</p>
					</article>
				</li>
				<li>
					<h3>Alarm sound</h3>
					<article className="settings-option alarm-settings">
						<select 
							id="alarm-select" 
							onChange={(e) => setSettings({ ...settings, alarmSound: e.target.value })}
						>
							<option value={BicycleBell} >Bicycle Bell</option>
							<option value={AirRaid}>Air Siren</option>
							<option value={PoliceSiren}>Police Siren</option>
							<option value={CarHorn}>Car Horn</option>
							<option value={MustangHotRevs}>Mustang Revs</option>
							<option value={CatMeows}>Cat Meows</option>
							<option value={DogsBarking}>Dogs Barking</option>
							<option value={KurrawongCallDista}>Kurrawong Call Dista</option>
							<option value={CitySideStreet}>City Side Street</option>
							<option value={TrainStnPassLounge}>Train Station</option>
							<option value={MotionHumMorph}>Motion Hum Morph</option>
						</select>
					</article>
				</li>
			</ul>
		</section>
	)
}

export default Settings