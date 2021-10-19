import Timer from "./Timer"
import CountdownInput from "./CountdownInputs"
import CloseButton from "./CloseButton"
import Timebar from "./Timebar"
import TimerButtonsStarted from "./TimerButtonsStarted"
import TimerButtonsNotStarted from "./TimerButtonsNotStarted"
import ReactAnime from 'react-animejs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import Sound from 'react-sound'
import PlaySound from "./PlaySound"
import { useState } from 'react/cjs/react.development'
import BicycleBellRing from '../assets/BicycleBell.mp3'
import AirRaidSirens from '../assets/AirRaidSirens.mp3'

const CountdownSection = ({ isPlaying, setIsPlaying, currentTomato, handleCloseCountdown, timePercent, timeLeft, totalTime, beenStarted, validateNumbers, handlePause, handleStart, running, currentHours, currentMinutes,currentSeconds, hours, minutes, sound, setSound, setPagePath, pagePath}) => {

	const { Anime, stagger } = ReactAnime

	return (

		
		
		<section className={beenStarted && timeLeft> -1 ? "countdown-container countdown-container-started":"countdown-container"}>
			{ 
			beenStarted ? 
				null:<> <h1 className="countdown-header">Start Countdown</h1> 
				<CountdownInput validateNumbers={validateNumbers} /> </>
			}
			{
				beenStarted && timeLeft < 0 ? 
				<>
				<PlaySound isPlaying={isPlaying} sound={sound} />
				<Anime initial={[
					{
						targets: ".fa-bell",
						keyframes: [
							{
								rotate: 30,
							},
							{
								rotate:-30,
							},
							{
								rotate: 30,
							},
						],
						easing: 'spring',
						duration: 250,
						loop: true
					}
				]} >
				<FontAwesomeIcon icon={faBell} size={'6x'} />
				<h1 id="timesUp">Time's up!!</h1>
				</Anime>
				</>
				:null
			}

			{ 
			beenStarted &&  timeLeft > 0  ? 
				<Timer currentHours={currentHours} currentMinutes={currentMinutes} currentSeconds={currentSeconds} sound={sound} /> : null
				
			}
			{
			currentTomato ? 
			<h3>{currentTomato.name}</h3>
			:null
			}
			{ 
			beenStarted && timeLeft > -1 ?
				<TimerButtonsStarted currentTomato={currentTomato} handleCloseCountdown={handleCloseCountdown} sound={sound} setSound={setSound} beenStarted={beenStarted} timePercent={timePercent} handlePause={handlePause} handleStart={() =>handleStart()} running={running} hours={hours} minutes={minutes} pagePath={pagePath} setPagePath={setPagePath}  />
				:<TimerButtonsNotStarted handleStart={() => handleStart()} hours={hours} minutes={minutes} running={running} pagePath={pagePath} setPagePath={setPagePath} />
			}
			{ 
			beenStarted && timeLeft > -1 ? 
				<Timebar timePercent={timePercent} totalTime={totalTime} timeLeft={timeLeft} /> :null }
		</section>
	)
}

export default CountdownSection

