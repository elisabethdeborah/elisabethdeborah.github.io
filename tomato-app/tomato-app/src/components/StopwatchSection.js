
import SaveForm from "./SaveForm"

const StopwatchSection = (props) => {
	return (
		<section className="stopwatch-container">
		<h2>{props.stopwatchTime}</h2>
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
		{
			props.viewSaveForm ? 
			<>
			<SaveForm saveTomatoObj={props.saveTomatoObj} stopwatchTime={props.stopwatchTime} nameIsValid={props.nameIsValid} setStopwatchTime={props.setStopwatchTime} setTomatoName={props.setTomatoName} validateName={props.validateName} />
			</>
			:<></>
		}
	</section>
	)
}

export default StopwatchSection