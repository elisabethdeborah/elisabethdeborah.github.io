
const TimerButtonsNotStarted = ({ handleStart, hours, minutes, running }) => {
	return (
		<section className="timer-buttons">
			<button type="submit" onClick={handleStart} disabled={ ( !hours > 0 && !minutes > 0 && !running) ? true : false } >
				{running ? 'Stop' : 'Start'}
			</button>	
		</section>
	)
}

export default TimerButtonsNotStarted