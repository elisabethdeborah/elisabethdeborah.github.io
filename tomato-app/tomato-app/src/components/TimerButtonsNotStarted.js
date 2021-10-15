
const TimerButtonsNotStarted = ({handleStart, hours, minutes, running}) => {
	return (
		<section className="timer-buttons">
			{console.log(hours, minutes)}
			<button type="submit" onClick={handleStart} disabled={ ( !hours > 0 && !minutes > 0 ) ? true : false } >
				{running ? 'Stop' : 'Start'}
			</button>	
		</section>
	)
}

export default TimerButtonsNotStarted