

const CountdownInput = ({ validateNumbers, numberIsValid }) => {
	return (
		<section className="countdown-inputs">
			<input type="number" min='0' max="24" name="hours" placeholder="HH" onChange={(e) => validateNumbers(e.target.value, 'hours')} style={ !numberIsValid ? {border: '2px solid red'}: { border: '2px solid green'} } />
			<input type="number" min="0" max="59" name="minutes" placeholder="MM" onChange={(e) => validateNumbers(e.target.value, 'minutes')} style={ !numberIsValid ? {border: '2px solid red'}: { border: '2px solid green'} } />
		</section>
	)
}

export default CountdownInput;