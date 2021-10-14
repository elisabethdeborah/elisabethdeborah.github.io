import CloseButton from "./CloseButton"

const Stopwatch = (props) => {

	const handleSaveButton = () => {
		props.setViewSaveForm(true)
		props.setViewStopwatch(false)
	}

	return (
		<section className="stopwatch-container">
			<CloseButton handleCloseCountdown={props.handleCloseCountdown} />
			<h1 className="time-tomato-header">Time New Tomato</h1>
			{props.stopwatchTime > 59 ? 
			
			<article className="time-passed-container">
						<h3 className="time-passed">{ parseInt((props.stopwatchTime)/60/60)} hours</h3> 
						<h3 className="time-passed">{ parseInt((props.stopwatchTime)/60) } min</h3> 
						<h3 className="time-passed">{ (props.stopwatchTime)%60 > -1? (props.stopwatchTime)%60: 0 } seconds</h3>
			</article>
			: <h2 className="stopwatch-second-header">{props.stopwatchTime} seconds</h2>
		}

		{
			props.countingStarted ?
				<section className="stopwatch-buttons">
					<button type="submit" onClick={props.handleWatchStart} >
						{props.counting ? 'Pause' : 'Resume'}
					</button>
					<button type="submit" onClick={props.handleWatchReset}>
						Reset
					</button>
					<button type="submit" onClick={() => props.toggleViewSaveForm()} disabled={props.counting ? true : false} > Save </button>
				</section>  
			:<button type="submit" onClick={props.handleWatchStart} >
				{props.counting ? 'Stop' : 'Start'}
			</button>	
		}
		</section>
	)
}

export default Stopwatch