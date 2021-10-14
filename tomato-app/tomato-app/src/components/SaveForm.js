
import { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import CloseButton from "./CloseButton"

const SaveForm = ({setTomatoHours, setTomatoMinutes, setTomatoSeconds, tomatoHours, tomatoMinutes,tomatoSeconds, setViewSaveForm,viewSaveForm, setTomatoName, saveTomatoObj, stopwatchTime, setStopwatchTime, nameIsValid, handleCloseCountdown}) => {
	
	//const [ converted, setConverted] = useState(0)
	
	
	useEffect(() => {
		
		/* 	setConverted(((tomatoHours*60*60) + (tomatoMinutes*60) + tomatoSeconds))
		
			console.log('change', stopwatchTime, converted, stopwatchTime===converted);
		console.log('converted: ', converted); */
		
			setStopwatchTime((tomatoHours*60*60) + (tomatoMinutes*60) + tomatoSeconds)
		
		//calculateStopwatchTime()
	}, [tomatoHours, tomatoMinutes, tomatoSeconds])


/* 
	const calculateStopwatchTime = () => {
		let convertedToSeconds = (tomatoHours*60*60) + (tomatoMinutes*60) + tomatoSeconds
		setConverted(convertedToSeconds)
		console.log('(tomatoHours*60*60) + (tomatoMinutes*60) + tomatoSeconds: ', convertedToSeconds)
		
		console.log('converted:', converted, 'stopwatchTime:', stopwatchTime, 'total:', converted+stopwatchTime);
	} */



	return (
		<form className="save-form" method="POST" >
			<CloseButton handleCloseCountdown={handleCloseCountdown} />
			<h1 className="save-form-header">Save Tomato</h1>
			<input className="tomato-name-input" type="text" placeholder="tomato name" onChange={(e) => setTomatoName(e.target.value)} required />
			<section className="save-number-input">
				
			<input type="number" defaultValue={parseInt(stopwatchTime/60/60)} min='0' max="24" name="hours" placeholder="HH" onChange={(e) => setTomatoHours(parseInt(e.target.value))} />
			<input type="number" min="0" max="59" defaultValue={parseInt(stopwatchTime/60)} name="minutes" placeholder="MM" onChange={(e) => setTomatoMinutes(parseInt(e.target.value))} />
			<input type="number" min="0" max="59" defaultValue={stopwatchTime%60} name="seconds" placeholder="SS" onChange={(e) => setTomatoSeconds(parseInt(e.target.value))} />
		
			</section>
			<button type="button" value="save tomato" disabled={!nameIsValid} onClick={() => saveTomatoObj()}>Save tomato</button>
		</form>
	)
}

export default SaveForm;