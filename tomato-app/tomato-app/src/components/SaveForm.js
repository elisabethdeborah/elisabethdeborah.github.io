

const SaveForm = ({setTomatoName, saveTomatoObj, stopwatchTime, setStopwatchTime, nameIsValid}) => {
	return (
		<form method="POST" >
			<input type="text" placeholder="tomato name" onChange={(e) => setTomatoName(e.target.value)} required />
			<input type="number" defaultValue={stopwatchTime} min="1" onChange={(e) => setStopwatchTime(e.target.value)} />
			<input type="button" value="save tomato" disabled={!nameIsValid} onClick={() => saveTomatoObj()} />
		</form>
	)
}

export default SaveForm;