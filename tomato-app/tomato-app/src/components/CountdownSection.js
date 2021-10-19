import Timer from "./Timer"
import CountdownInput from "./CountdownInputs"
import CloseButton from "./CloseButton"
import Timebar from "./Timebar"
import TimerButtonsStarted from "./TimerButtonsStarted"
import TimerButtonsNotStarted from "./TimerButtonsNotStarted"

const CountdownSection = ({ currentTomato, handleCloseCountdown, timePercent, timeLeft, totalTime, beenStarted, validateNumbers, handlePause, handleStart, running, currentHours, currentMinutes,currentSeconds, hours, minutes, sound, setSound, setPagePath, pagePath}) => {

	return (

		
		
		<section className={beenStarted && timeLeft> -1 ? "countdown-container countdown-container-started":"countdown-container"}>
			{ 
			beenStarted ? 
				null:<> <h1 className="countdown-header">Start Countdown</h1> 
				<CountdownInput validateNumbers={validateNumbers} /> </>
			}

			{
				beenStarted && timeLeft < 0 ? 
				<h1>Time's up!!</h1>:null
			}

			{ 
			beenStarted ? 
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

