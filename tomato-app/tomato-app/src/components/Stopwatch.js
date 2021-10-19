import CloseButton from "./CloseButton"
import StopwatchButtons from "./StopwatchButtons"
import TimePassed from "./TimePassed"

const Stopwatch = (props) => {

	return (
		<section className="stopwatch-container">
			<h1 className="time-tomato-header">Time New Tomato</h1>
			{props.stopwatchTime > 59 ? 
			<TimePassed stopwatchTime={props.stopwatchTime} />
			: <h2 className="stopwatch-second-header">{props.stopwatchTime} seconds</h2>
		}
		<CloseButton handleCloseCountdown={props.handleCloseCountdown} />
		{
			
			props.countingStarted ?

			<StopwatchButtons handleWatchStart={props.handleWatchStart} handleWatchReset={props.handleWatchReset} counting={props.counting} toggleViewSaveForm={props.toggleViewSaveForm} />
			:<button type="submit" onClick={props.handleWatchStart} >
				{props.counting ? 'Stop' : 'Start'}
			</button>	
		}
		</section>
	)
}

export default Stopwatch

