
import { useEffect } from "react"
import CloseButton from "./CloseButton"
import SaveNumberInput from "./SaveNumberInput"

const SaveForm = ({setTomatoHours, setTomatoMinutes, setTomatoSeconds, tomatoHours, tomatoMinutes,tomatoSeconds, setTomatoName, saveTomatoObj, stopwatchTime, setStopwatchTime, nameIsValid, handleCloseCountdown}) => {
	
	useEffect(() => {
			setStopwatchTime((tomatoHours*60*60) + (tomatoMinutes*60) + tomatoSeconds)
	}, [tomatoHours, tomatoMinutes, tomatoSeconds])



	return (
		<form className="save-form" method="POST" >
			<h1 className="save-form-header">Save Tomato</h1>
			<input className="tomato-name-input" type="text" placeholder="tomato name" onChange={(e) => setTomatoName(e.target.value)} required />
			<SaveNumberInput stopwatchTime={stopwatchTime} setTomatoHours={setTomatoHours} setTomatoMinutes={setTomatoMinutes} setTomatoSeconds={setTomatoSeconds} />
			
			<section className="countdown-settings">
			<button type="button" value="save tomato" disabled={!nameIsValid} onClick={() => saveTomatoObj()}>Save tomato</button>
			<CloseButton 
				handleCloseCountdown={handleCloseCountdown} 
			/>
			</section>
		</form>
	)
}

export default SaveForm;
