
import SaveForm from "./SaveForm"
import Stopwatch from "./Stopwatch"

const StopwatchSection = (props) => {
	
	const toggleViewStopwatch=() => {
		props.setViewStopwatch(true)
		props.setViewSaveForm(false)
	}
	const toggleViewSaveForm=() => {
		props.setViewStopwatch(false)
		props.setViewSaveForm(true)
	}
	
	return (
		<>
		{ !props.viewStopwatch && !props.viewSaveForm ?
		<section className="stopwatch-create-container">
			<h1 onClick={() => toggleViewStopwatch()} className="time-tomato-header">Time New Tomato</h1>
			<h1 onClick={() => toggleViewSaveForm()} className="time-tomato-header">Create New Tomato</h1>
		</section> 
		: null
		}

		{
		!props.viewSaveForm && props.viewStopwatch ?
		<Stopwatch 
			toggleViewSaveForm={toggleViewSaveForm} setViewSaveForm={props.setViewSaveForm} countingStarted={props.countingStarted} handleCloseCountdown={props.handleCloseCountdown} stopwatchTime={props.stopwatchTime} handleWatchStart={props.handleWatchStart} handleWatchReset={props.handleWatchReset} counting={props.counting} />
		: null
}
{
	props.viewSaveForm && !props.viewStopwatch ?
		<SaveForm 
			handleCloseCountdown={props.handleCloseCountdown}  setTomatoHours={props.setTomatoHours} setTomatoMinutes={props.setTomatoMinutes} setTomatoSeconds={props.setTomatoSeconds} tomatoHours={props.tomatoHours} tomatoMinutes={props.tomatoMinutes} tomatoSeconds={props.tomatoSeconds} setViewSaveForm={props.setViewSaveForm} viewSaveForm={props.viewSaveForm} saveTomatoObj={props.saveTomatoObj} stopwatchTime={props.stopwatchTime} nameIsValid={props.nameIsValid} setStopwatchTime={props.setStopwatchTime} setTomatoName={props.setTomatoName} validateName={props.validateName} />
		:null}
		</>
	)
}

export default StopwatchSection

