
import { useState } from "react/cjs/react.development"
import SaveForm from "./SaveForm"
import Stopwatch from "./Stopwatch"
import CloseButton from "./CloseButton"

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
			<h1 onClick={() => toggleViewStopwatch()} className="time-tomato-header">Time New </h1>
			<h1 onClick={() => toggleViewSaveForm()} className="time-tomato-header">Input New Tomato</h1>
			{/* {	!props.viewStopwatch && !props.counting?
				<h1 onClick={() => toggleViewStopwatch()} className="time-tomato-header">Time New </h1>
				:null
			}
			{	!props.viewSaveForm && !props.counting ?
				<h1 onClick={() => toggleViewSaveForm()} className="time-tomato-header">Input New Tomato</h1>
				:null
			} */}
		</section> 
		: null
		}

		{
		!props.viewSaveForm && props.viewStopwatch ?
		<Stopwatch toggleViewSaveForm={toggleViewSaveForm} setViewSaveForm={props.setViewSaveForm} countingStarted={props.countingStarted} handleCloseCountdown={props.handleCloseCountdown} stopwatchTime={props.stopwatchTime} handleWatchStart={props.handleWatchStart} handleWatchReset={props.handleWatchReset} counting={props.counting} />
/* 		<section className="stopwatch-container">
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
						<button type="submit" onClick={() => props.setViewSaveForm(true)} disabled={props.counting ? true : false} > Save </button>
					</section>  
				:<button type="submit" onClick={props.handleWatchStart} >
					{props.counting ? 'Stop' : 'Start'}
				</button>	
			}
		</section> */
		: null
}
{
	props.viewSaveForm && !props.viewStopwatch ?
		<SaveForm handleCloseCountdown={props.handleCloseCountdown}  setTomatoHours={props.setTomatoHours} setTomatoMinutes={props.setTomatoMinutes} setTomatoSeconds={props.setTomatoSeconds} tomatoHours={props.tomatoHours} tomatoMinutes={props.tomatoMinutes} tomatoSeconds={props.tomatoSeconds} setViewSaveForm={props.setViewSaveForm} viewSaveForm={props.viewSaveForm} saveTomatoObj={props.saveTomatoObj} stopwatchTime={props.stopwatchTime} nameIsValid={props.nameIsValid} setStopwatchTime={props.setStopwatchTime} setTomatoName={props.setTomatoName} validateName={props.validateName} />
		:null}
		</>
	)
}

export default StopwatchSection