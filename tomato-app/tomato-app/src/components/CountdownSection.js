import Timer from "./Timer"
import CountdownInput from "./CountdownInputs"

const CountdownSection = ({handleCloseCountdown, timePercent, timeLeft, setTotalTime, totalTime, beenStarted, setBeenStarted, validateNumbers, handlePause, handleStart, setRunning, running, currentHours, currentMinutes,currentSeconds, hours, minutes}) => {




	return (
		<section className={beenStarted ? "countdown-container countdown-container-started":"countdown-container"}>


		{beenStarted ? <aside className="close-timer"><button onClick={() => handleCloseCountdown()}>
		<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
			<line x1="2.12132" y1="3" x2="21.2132" y2="22.0919" stroke="white" strokeWidth="3" strokeLinecap="round"/>
			<line x1="2.3934" y1="21.4852" x2="21.4853" y2="2.39336" stroke="white" strokeWidth="3" strokeLinecap="round"/>
		</svg>
			</button></aside>: <CountdownInput validateNumbers={validateNumbers} />}
		{beenStarted ? <Timer currentHours={currentHours} currentMinutes={currentMinutes} currentSeconds={currentSeconds} /> : null}
		{
			beenStarted ?
				<section className="timer-buttons">
					<button type="submit" onClick={handlePause} disabled={ ( !hours > 0 && !minutes > 0 ) ? true : false } >
						{running ? 'Pause' : 'Resume'}
					</button>
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
			/* beenStarted ?  */
			<article className="timebar-container">
			{console.log('Timebar: ', timePercent)}
				<section className="timebar" style={{ width: 100-timePercent +'%'}}></section>
			</article> /* : null */
		}
		<article className="time-passed-container">
			<h3 className="time-passed">{ parseInt(((totalTime-1) - timeLeft)/60/60)} hours</h3> 
			<h3 className="time-passed">{ parseInt(((totalTime-1) - timeLeft)/60) } min</h3> 
			<h3 className="time-passed">{((totalTime-1) - timeLeft)%60 } seconds</h3>
		</article>
	</section>
	)
}

export default CountdownSection