import Timer from "./Timer"
import CountdownInput from "./CountdownInputs"
import Timebar from "./Timebar"
import TimerButtonsStarted from "./TimerButtonsStarted"
import TimerButtonsNotStarted from "./TimerButtonsNotStarted"
import ReactAnime from 'react-animejs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import PlaySound from "./PlaySound"

const CountdownSection = ({ currentTomato, handleCloseCountdown, timePercent, timeLeft, totalTime, beenStarted, validateNumbers, handlePause, handleStart, running, currentHours, currentMinutes,currentSeconds, hours, minutes, sound, setSound, alarmSound, numberIsValid }) => {

	const { Anime, stagger } = ReactAnime

	return (
		<section className={beenStarted && timeLeft> -1 ? "countdown-container countdown-container-started":"countdown-container"}>
			{ 
				beenStarted ? 
				null
				:<>
					<h1 className="countdown-header">Start Countdown</h1> 
					<CountdownInput validateNumbers={validateNumbers} numberIsValid={numberIsValid} /> 
				</>
			}
			{
				beenStarted && timeLeft < 0 ? 
				<>
					<PlaySound sound={sound} alarmSound={alarmSound} />
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
						<FontAwesomeIcon icon={faBell} className="times-up-fa-bell" />
						<h1 id="timesUp">Time's up!!</h1>
					</Anime>
				</>
				:null
			}

			{ 
				beenStarted &&  timeLeft > 0  ? 
				<Timer currentHours={currentHours} currentMinutes={currentMinutes} currentSeconds={currentSeconds} sound={sound} /> 
				: null
				
			}
			{
				currentTomato ? 
				<h3>{currentTomato.name}</h3>
				:null
			}
			{ 
				beenStarted && timeLeft > -1 ?
				<TimerButtonsStarted 
					currentTomato={currentTomato} handleCloseCountdown={handleCloseCountdown} sound={sound} setSound={setSound} beenStarted={beenStarted} timePercent={timePercent} handlePause={handlePause} handleStart={() =>handleStart()} running={running} hours={hours} minutes={minutes} 
				/>

				:<TimerButtonsNotStarted handleStart={() => handleStart()} hours={hours} minutes={minutes} running={running} />
			}
			{ 
				beenStarted && timeLeft > -1 ? 
				<Timebar timePercent={timePercent} totalTime={totalTime} timeLeft={timeLeft} /> 
				:null 
			}
		</section>
	)
}

export default CountdownSection

