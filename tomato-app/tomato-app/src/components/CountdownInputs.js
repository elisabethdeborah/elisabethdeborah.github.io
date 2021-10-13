

const CountdownInput = (props) => {
	return (
		<section className="countdown-inputs">
			<input type="number" min='0' max="24" name="hours" placeholder="HH" onChange={(e) => props.validateNumbers(e.target.value, 'hours')} />
			<input type="number" min="0" max="59" name="minutes" placeholder="MM" onChange={(e) => props.validateNumbers(e.target.value, 'minutes')} />
		</section>
	)
}

export default CountdownInput;