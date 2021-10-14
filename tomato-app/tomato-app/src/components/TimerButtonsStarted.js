const TimerButtonsStarted = ({ beenStarted, timePercent, handlePause, handleStart, running, hours, minutes }) => {
	return (
		<section className="timer-buttons">
			{ beenStarted && timePercent!==100 ? 
				<button type="submit" onClick={handlePause} disabled={ ( !hours > 0 && !minutes > 0 ) ? true : false } >
					{running ? 'Pause' : 'Resume'}
				</button>
				:null}
				<button type="submit" onClick={handleStart} disabled={ ( !hours > 0 && !minutes > 0 ) ? true : false }>
					{running ? 'Stop' : 'Restart'}
				</button>
		</section> 
	)
}

export default TimerButtonsStarted