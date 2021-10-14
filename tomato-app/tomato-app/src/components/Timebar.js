
const Timebar = ({timePercent, totalTime, timeLeft}) => {
	return (
		<section className="passed-time-container">
				<article className="timebar-container">
					<section className="timebar" style={{ width: 100-timePercent +'%'}}></section>
				</article>
				<article className="time-passed-container">
					<h3 className="time-passed">{ parseInt(((totalTime-1) - timeLeft)/60/60)} hours</h3> 
					<h3 className="time-passed">{ parseInt(((totalTime-1) - timeLeft)/60) } min</h3> 
					<h3 className="time-passed">{ ((totalTime-1) - timeLeft)%60 > -1? ((totalTime-1) - timeLeft)%60: 0 } seconds</h3>
				</article>
			</section>
	)
}

export default Timebar