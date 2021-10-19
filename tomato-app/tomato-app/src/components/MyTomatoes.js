
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch, faEdit, faTimes, faTasks, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import SaveNumberInput from './SaveNumberInput';
import TomatoTodoInfo from './TomatoTodoInfo';
import StopwatchSection from './StopwatchSection';


const MyTomatoes = ({handleStart, setCurrentTomato, tomatoData, setTomatoData, setRunning, setTimeLeft, setTotalTime, setBeenStarted, timePercent, setCurrentHours, setCurrentMinutes, setCurrentSeconds, todoData, setTodoData, setPagePath, pagePath, newHours, newMinutes, newSeconds,
	handleStartTomato, handleEdit, deleteTomato, addToTodoList,editMatch, setEdit,setNewName, setNewHours, setNewMinutes, setNewSeconds, setViewStopwatch, handleCloseCountdown, countingStarted, setTomatoHours, tomatoHours, setTomatoMinutes, tomatoMinutes, setTomatoSeconds, tomatoSeconds, stopwatchTime, viewStopwatch, viewSaveForm, handleWatchStart, counting, handleWatchReset, setViewSaveForm, saveTomatoObj, nameIsValid, setStopwatchTime, setTomatoName, validateName, saveTodoObj, generateId, toggleViewSaveForm
}) => {


	const startEdit = (tomato) => {
		setEdit(tomato)
		setNewHours(Math.floor((tomato.time/60/60)%60))
		setNewMinutes(Math.floor((tomato.time/60)%60))
		setNewSeconds(Math.floor(tomato.time%60))
	}

	return (

		<section className="mytomatoes-container">
			
			<h1>My Tomatoes</h1>
			{tomatoData[0] === undefined ? 
			
			<section className="no-tomatoes">
				<h1>:(</h1>
				<h1>You don't have any tomatoes.</h1>
				<Link to="createTomato"> <h3> Would you like to add one? </h3> </Link>
				<h3> Would you like to add one? </h3>
			</section>:null}
			{tomatoData.map((tomato, index) => {
				return (
					<article className="tomato-article" key={tomato.id}>
						<>
			<svg className="logo" width="1804" height="1808" viewBox="0 0 1804 1808" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="tomato-kropp" d="M811.602 1660.5C1029.23 1696.18 1236.89 1667.68 1396.83 1592C1556.7 1516.35 1670.24 1392.72 1695.61 1237.96C1720.99 1083.2 1652.87 929.791 1525.52 807.048C1398.13 684.253 1210.44 590.936 992.812 555.255C775.184 519.574 567.527 548.072 407.586 623.756C247.713 699.408 134.174 823.033 108.8 977.794C83.4267 1132.55 151.544 1285.96 278.89 1408.71C406.289 1531.5 593.974 1624.82 811.602 1660.5Z"  strokeWidth="80"/>
                                <path className="tomato-blast" d="M534.22 318.32L875.719 461.819L875.719 120.317L1051.72 384.819L1292.92 230.32L1217.22 461.819L1503.22 461.819L1292.92 615.818L1580.22 725.819L919.72 670.82L534.22 318.32Z" strokeWidth="50"/>
                            </svg> 
		</>
					<TomatoTodoInfo newHours={newHours} newMinutes={newMinutes} newSeconds={newSeconds} index={index} tomato={tomato} timePercent={timePercent} setCurrentHours={setCurrentHours} setCurrentMinutes={setCurrentMinutes} setCurrentSeconds={setCurrentSeconds} setBeenStarted={setBeenStarted} setCurrentTomato={setCurrentTomato} setRunning={setRunning} setTimeLeft={setTimeLeft} setTotalTime={setTotalTime} tomatoData={tomatoData} setTomatoData={setTomatoData} handleStart={handleStart} todoData={todoData} setTodoData={setTodoData} handleStartTomato={handleStartTomato} setEdit={setEdit} editMatch={editMatch} setNewName={setNewName} setNewHours={setNewHours} setNewMinutes={setNewMinutes} setNewSeconds={setNewSeconds} />

					{	editMatch===tomato ?
					
						<section className="tomato-btn-group">
							<button className="edit-btn edit-button-active" onClick={() => handleEdit(tomato, tomatoData)} ><FontAwesomeIcon icon={faEdit} /></button>
							<Link to="/"><button className="stopwatch-btn" ><FontAwesomeIcon icon={faStopwatch} onClick={() => handleStartTomato(tomato)} /></button></Link>
							<button className="task-btn"onClick={() =>addToTodoList(tomato)}><FontAwesomeIcon icon={faTasks} /></button>
							<button className="trash-btn" onClick={() => deleteTomato(tomato, tomatoData)} ><FontAwesomeIcon icon={faTrashAlt} /></button>
						</section>
						:
						<section className="tomato-btn-group">
							<button className="edit-btn" onClick={() => startEdit(tomato)} ><FontAwesomeIcon icon={faEdit} /></button>
							<Link to="/"><button className="stopwatch-btn" ><FontAwesomeIcon icon={faStopwatch} onClick={() => handleStartTomato(tomato)} /></button></Link>
							<button className="task-btn" onClick={() =>addToTodoList(tomato)}><FontAwesomeIcon icon={faTasks} /></button>
							<button className="trash-btn" onClick={() => deleteTomato(tomato, tomatoData)} ><FontAwesomeIcon icon={faTrashAlt} /></button>
						</section>
					}
					</article>
				)
			})}

		</section>
	)
}

export default MyTomatoes