

const CountdownInput = ({ validateNumbers }) => {
	return (
		<section className="countdown-inputs">
			<input type="number" min='0' max="24" name="hours" placeholder="HH" onChange={(e) => validateNumbers(e.target.value, 'hours')} />
			<input type="number" min="0" max="59" name="minutes" placeholder="MM" onChange={(e) => validateNumbers(e.target.value, 'minutes')} />
		</section>
	)
}

export default CountdownInput;