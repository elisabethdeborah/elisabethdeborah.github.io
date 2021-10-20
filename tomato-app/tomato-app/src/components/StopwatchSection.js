
import SaveForm from "./SaveForm"
import Stopwatch from "./Stopwatch"

const StopwatchSection = ({handleCloseCountdown, setTomatoHours, tomatoHours, setTomatoMinutes, tomatoMinutes, setTomatoSeconds,tomatoSeconds, stopwatchTime, setStopwatchTime, countingStarted, counting, setViewStopwatch, viewStopwatch, viewSaveForm, handleWatchStart, handleWatchReset, setViewSaveForm, saveTomatoObj, nameIsValid, setTomatoName, validateName}) => {

	
	const toggleViewStopwatch=() => {
		setViewStopwatch(true)
		setViewSaveForm(false)
	}
	const toggleViewSaveForm=() => {
		setViewStopwatch(false)
		setViewSaveForm(true)
	}
	
	return (
		<>
			{ 
				!viewStopwatch && !viewSaveForm ?
				<section className="stopwatch-create-container">
					<h1 onClick={() => toggleViewStopwatch()} className="time-tomato-header">Time New Tomato</h1>
					<h1 onClick={() => toggleViewSaveForm()} className="time-tomato-header">Create New Tomato</h1>
				</section> 
				: null
			}

			{
				!viewSaveForm && viewStopwatch ?
				<Stopwatch 
					toggleViewSaveForm={toggleViewSaveForm} countingStarted={countingStarted} handleCloseCountdown={handleCloseCountdown} stopwatchTime={stopwatchTime} handleWatchStart={handleWatchStart} handleWatchReset={handleWatchReset} counting={counting} 
				/>
				: null
			}
			{
				viewSaveForm && !viewStopwatch ?
				<SaveForm 
					handleCloseCountdown={handleCloseCountdown}  setTomatoHours={setTomatoHours} setTomatoMinutes={setTomatoMinutes} setTomatoSeconds={setTomatoSeconds} tomatoHours={tomatoHours} tomatoMinutes={tomatoMinutes} tomatoSeconds={tomatoSeconds} saveTomatoObj={saveTomatoObj} stopwatchTime={stopwatchTime} nameIsValid={nameIsValid} setStopwatchTime={setStopwatchTime} setTomatoName={setTomatoName} validateName={validateName} 
				/>
				:null
			}
		</>

	)
}

export default StopwatchSection

