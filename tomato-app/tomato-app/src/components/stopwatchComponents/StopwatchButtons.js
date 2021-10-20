
const StopwatchButtons = ({handleWatchStart, handleWatchReset, counting, toggleViewSaveForm}) => {

	return (
		<section className="stopwatch-buttons">
			<button type="submit" onClick={handleWatchStart} >
				{counting ? 'Pause' : 'Resume'}
			</button>
			<button type="submit" onClick={handleWatchReset}>
				Reset
			</button>
			<button type="submit" onClick={() => toggleViewSaveForm()} disabled={counting ? true : false} > 
				Save 
			</button>
		</section> 
	)
}

export default StopwatchButtons