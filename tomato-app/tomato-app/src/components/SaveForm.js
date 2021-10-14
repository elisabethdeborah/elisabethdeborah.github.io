
import { useEffect } from "react"
import CloseButton from "./CloseButton"
import SaveNumberInput from "./SaveNumberInput"

const SaveForm = ({setTomatoHours, setTomatoMinutes, setTomatoSeconds, tomatoHours, tomatoMinutes,tomatoSeconds, setTomatoName, saveTomatoObj, stopwatchTime, setStopwatchTime, nameIsValid, handleCloseCountdown}) => {
	
	useEffect(() => {
			setStopwatchTime((tomatoHours*60*60) + (tomatoMinutes*60) + tomatoSeconds)
	}, [tomatoHours, tomatoMinutes, tomatoSeconds])



	return (
		<form className="save-form" method="POST" >
			<CloseButton 
				handleCloseCountdown={handleCloseCountdown} 
			/>
			<h1 className="save-form-header">Save Tomato</h1>
			<input className="tomato-name-input" type="text" placeholder="tomato name" onChange={(e) => setTomatoName(e.target.value)} required />
			<SaveNumberInput stopwatchTime={stopwatchTime} setTomatoHours={setTomatoHours} setTomatoMinutes={setTomatoMinutes} setTomatoSeconds={setTomatoSeconds} />
			<button type="button" value="save tomato" disabled={!nameIsValid} onClick={() => saveTomatoObj()}>Save tomato</button>
		</form>
	)
}

export default SaveForm;


	{/* <section className="save-number-input">	
				<input type="number" defaultValue={parseInt(stopwatchTime/60/60)} min='0' max="24" name="hours" placeholder="HH" onChange={(e) => setTomatoHours(parseInt(e.target.value))} />
				<input type="number" min="0" max="59" defaultValue={parseInt(stopwatchTime/60)} name="minutes" placeholder="MM" onChange={(e) => setTomatoMinutes(parseInt(e.target.value))} />
				<input type="number" min="0" max="59" defaultValue={stopwatchTime%60} name="seconds" placeholder="SS" onChange={(e) => setTomatoSeconds(parseInt(e.target.value))} />
			</section> */}