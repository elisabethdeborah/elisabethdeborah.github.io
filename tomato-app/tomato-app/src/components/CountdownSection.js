import Timer from "./Timer"
import CountdownInput from "./CountdownInputs"
import CloseButton from "./CloseButton"
import Timebar from "./Timebar"
import TimerButtonsStarted from "./TimerButtonsStarted"
import TimerButtonsNotStarted from "./TimerButtonsNotStarted"

const CountdownSection = ({ handleCloseCountdown, timePercent, timeLeft, totalTime, beenStarted, validateNumbers, handlePause, handleStart, running, currentHours, currentMinutes,currentSeconds, hours, minutes}) => {

	return (
		<section className={beenStarted && timeLeft> -1 ? "countdown-container countdown-container-started":"countdown-container"}>
			{ 
			beenStarted ? 
				<CloseButton handleCloseCountdown={handleCloseCountdown} /> 
				:<> <h1 className="countdown-header">Start Countdown</h1> 
				<CountdownInput validateNumbers={validateNumbers} /> </>
			}
			{ 
			beenStarted ? 
				<Timer currentHours={currentHours} currentMinutes={currentMinutes} currentSeconds={currentSeconds} /> : null}
			{ 
			beenStarted && timeLeft > -1 ?
				<TimerButtonsStarted beenStarted={beenStarted} timePercent={timePercent} handlePause={handlePause} handleStart={handleStart} running={running} hours={hours} minutes={minutes} />
				:<TimerButtonsNotStarted handleStart={handleStart} hours={hours} minutes={minutes} running={running} />
			}
			{ 
			beenStarted && timeLeft > -1 ? 
				<Timebar timePercent={timePercent} totalTime={totalTime} timeLeft={timeLeft} /> :null }
		</section>
	)
}

export default CountdownSection

