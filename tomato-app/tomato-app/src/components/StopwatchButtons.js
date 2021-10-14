const StopwatchButtons = (props) => {
	return (
		<section className="stopwatch-buttons">
			<button type="submit" onClick={props.handleWatchStart} >
				{props.counting ? 'Pause' : 'Resume'}
			</button>
			<button type="submit" onClick={props.handleWatchReset}>
				Reset
			</button>
			<button type="submit" onClick={() => props.toggleViewSaveForm()} disabled={props.counting ? true : false} > Save </button>
		</section> 
	)
}

export default StopwatchButtons