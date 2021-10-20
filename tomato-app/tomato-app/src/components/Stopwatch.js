import CloseButton from "./CloseButton"
import StopwatchButtons from "./StopwatchButtons"
import TimePassed from "./TimePassed"

const Stopwatch = ({toggleViewSaveForm, countingStarted, handleCloseCountdown, stopwatchTime, handleWatchStart, handleWatchReset, counting}) => {

	return (
		<section className="stopwatch-container">
			<h1 className="time-tomato-header">Time New Tomato</h1>
			{
				stopwatchTime > 59 ? 
				<TimePassed stopwatchTime={stopwatchTime} />
				: <h2 className="stopwatch-second-header">{stopwatchTime} seconds</h2>
			}
			<CloseButton handleCloseCountdown={handleCloseCountdown} />
			{
				countingStarted ?
				<StopwatchButtons 
					handleWatchStart={handleWatchStart} handleWatchReset={handleWatchReset} counting={counting} toggleViewSaveForm={toggleViewSaveForm} 
				/>
				:<button type="submit" onClick={handleWatchStart} >
					{counting ? 'Stop' : 'Start'}
				</button>	
			}
		</section>
	)
}

export default Stopwatch

