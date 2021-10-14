import Timer from "./Timer"
import CountdownInput from "./CountdownInputs"
import CloseButton from "./CloseButton"

const CountdownSection = ({ handleCloseCountdown, timePercent, timeLeft, setTotalTime, totalTime, beenStarted, setBeenStarted, validateNumbers, handlePause, handleStart, setRunning, running, currentHours, currentMinutes,currentSeconds, hours, minutes}) => {




	return (
		<section className={beenStarted && timeLeft> -1 ? "countdown-container countdown-container-started":"countdown-container"}>

		{beenStarted ? 
			<CloseButton handleCloseCountdown={handleCloseCountdown} />
			:
			<>
				<h1 className="countdown-header">Start Countdown</h1> 
				<CountdownInput validateNumbers={validateNumbers} />
			</>
		}
		{beenStarted ? <Timer currentHours={currentHours} currentMinutes={currentMinutes} currentSeconds={currentSeconds} /> : null}
		{
			beenStarted && timeLeft > -1 ?
				<section className="timer-buttons">
					{ beenStarted && timePercent!==100 ? <button type="submit" onClick={handlePause} disabled={ ( !hours > 0 && !minutes > 0 ) ? true : false } >
						{running ? 'Pause' : 'Resume'}
					</button>:null}
					<button type="submit" onClick={handleStart} disabled={ ( !hours > 0 && !minutes > 0 ) ? true : false }>
						{running ? 'Stop' : 'Restart'}
					</button>
				</section>  
				:<section className="timer-buttons">
					<button type="submit" onClick={handleStart} disabled={ ( !hours > 0 && !minutes > 0 ) ? true : false } >
						{running ? 'Stop' : 'Start'}
					</button>	
				</section>
		}
		{
			 beenStarted && timeLeft > -1 ?  
			<section className="passed-time-container">
				<article className="timebar-container">
				{console.log('Timebar: ', timePercent)}
					<section className="timebar" style={{ width: 100-timePercent +'%'}}></section>
				</article>
				<article className="time-passed-container">
					<h3 className="time-passed">{ parseInt(((totalTime-1) - timeLeft)/60/60)} hours</h3> 
					<h3 className="time-passed">{ parseInt(((totalTime-1) - timeLeft)/60) } min</h3> 
					<h3 className="time-passed">{ ((totalTime-1) - timeLeft)%60 > -1? ((totalTime-1) - timeLeft)%60: 0 } seconds</h3>
				</article>
			</section>
			:null
		}
		</section>
	)
}

export default CountdownSection