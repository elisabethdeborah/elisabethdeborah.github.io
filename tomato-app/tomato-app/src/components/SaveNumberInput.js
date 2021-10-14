
const SaveNumberInput = ({stopwatchTime, setTomatoHours, setTomatoMinutes, setTomatoSeconds}) => {
	return (
		<section className="save-number-input">	
			<input type="number" defaultValue={parseInt(stopwatchTime/60/60)} min='0' max="24" name="hours" placeholder="HH" onChange={(e) => setTomatoHours(parseInt(e.target.value))} />
			<input type="number" min="0" max="59" defaultValue={parseInt(stopwatchTime/60)} name="minutes" placeholder="MM" onChange={(e) => setTomatoMinutes(parseInt(e.target.value))} />
			<input type="number" min="0" max="59" defaultValue={stopwatchTime%60} name="seconds" placeholder="SS" onChange={(e) => setTomatoSeconds(parseInt(e.target.value))} />
		</section>
	)
}

export default SaveNumberInput