
const TimePassed = ({stopwatchTime}) => {
	return (
		<article className="time-passed-container">
			<h3 className="time-passed">
				{ parseInt((stopwatchTime)/60/60)} hours
			</h3> 
			<h3 className="time-passed">
				{ parseInt((stopwatchTime)/60) } min
			</h3> 
			<h3 className="time-passed">
				{ (stopwatchTime)%60 > -1? (stopwatchTime)%60: 0 } seconds
			</h3>
		</article>
	)
}

export default TimePassed
