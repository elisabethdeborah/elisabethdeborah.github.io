
/* import data from '../myTomatoes.json' */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch, faEdit, faTimes, faTasks, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import SaveNumberInput from './SaveNumberInput';


const MyTomatoes = ({handleStart, setCurrentTomato, tomatoData, setTomatoData, setRunning, setTimeLeft, setTotalTime, setBeenStarted, timePercent, setCurrentHours, setCurrentMinutes, setCurrentSeconds, todoData, setTodoData}) => {
	
	const [ editMatch, setEdit ] = useState('')
	const [ newName, setNewName ] = useState('')
	const [ newHours, setNewHours ] = useState(0)
	const [ newMinutes, setNewMinutes ] = useState(0)
	const [ newSeconds, setNewSeconds ] = useState(0)


	const handleStartTomato = (tomato) => {
		handleStart(tomato.time)
		setCurrentTomato(tomato)
	}

	const handleEdit = (tomato, index) => {
		console.log('index', index);
		let name;
		let hours;
		let minutes;
		let seconds;

		newName ? name=newName : name=tomato.name
		newHours ? hours = newHours : hours = Math.floor((tomato.time/60/60)%60)
		newMinutes ? minutes = newMinutes : minutes = Math.floor((tomato.time/60)%60)
		newSeconds ? seconds = newSeconds : seconds = Math.floor(tomato.time%60)

		let editedTomato = {
			id: tomato.id,
			name: name,
			time: (hours*60*60 )+ (minutes*60) + seconds,
		}

		setEdit('')

		if(editedTomato.name === tomato.name && editedTomato.time === tomato.time ) {
			console.log("NO CHANGE" , editedTomato)
		} else {
			console.log('CHANGE', editedTomato);
			let match = tomatoData.find(x => x.id === tomato.id) 
			let index = tomatoData.findIndex(x => x.id === tomato.id)

			console.log(match, 'index', index);

			let newDataArray = [...tomatoData]
			newDataArray.splice(index, 1, editedTomato)
			console.log(newDataArray);
			setTomatoData(newDataArray)
		}
		
	
		
	}
	

	const deleteTomato = (tomato) => {
			console.log('click '+ tomato.name)
	
			let match = tomatoData.find(x => x.id === tomato.id) 
			let index = tomatoData.findIndex(x => x.id === tomato.id)
	
			console.log(match, 'index', index);
	
			let newDataArray = [...tomatoData]
			newDataArray.splice(index, 1)
			console.log(newDataArray);
			setTomatoData(newDataArray)
	}

	const addToTodoList = (tomato) => {
		tomato.checked = false;
		let newTodoArray = [...todoData, tomato]
		setTodoData(newTodoArray)
	}

	return (
		<section className="mytomatoes-container">
			<h1>My Tomatoes</h1>
			{tomatoData.map((tomato, index) => {
				return (
					<article className="tomato-article" key={tomato.id}>
					{ editMatch===tomato ?
						<section onClick={() => console.log('click '+ tomato.name)} className="tomato-text-group tomato-edit">
							<h3><input type="text" defaultValue={tomato.name} onChange={(e) => setNewName(e.target.value)} /></h3>
							<section className="tomato-time-format">
								<input type="number" defaultValue={Math.floor((tomato.time/60/60)%60) } min='0' max="24" name="hours" placeholder="HH" onChange={(e) => setNewHours(parseInt(e.target.value))} />
								<input type="number" min="0" max="59" defaultValue={Math.floor((tomato.time/60)%60)} name="minutes" placeholder="MM" onChange={(e) => setNewMinutes(parseInt(e.target.value))} />
								<input type="number" min="0" max="59" defaultValue={Math.floor(tomato.time%60)} name="seconds" placeholder="SS" onChange={(e) => setNewSeconds(parseInt(e.target.value))} />
							</section>
						</section>
						
						: 
						<section onClick={() => console.log('click '+ tomato.name)} className="tomato-text-group">
							<h3>{tomato.name}</h3>
							<section className="tomato-time-format">
							<h4>{(Math.floor((tomato.time/60/60)%60)) <10 ? '0'+ (Math.floor((tomato.time/60/60)%60)) : (Math.floor((tomato.time/60/60)%60)) }</h4>
							<h4>{(Math.floor((tomato.time/60)%60)) < 10 ? '0'+(Math.floor((tomato.time/60)%60)):((Math.floor((tomato.time/60))%60))}</h4>
							<h4>{(Math.floor(tomato.time%60)) < 10 ? '0'+(Math.floor(tomato.time%60)%60):((Math.floor(tomato.time%60)%60))}</h4>
							</section>
						</section>
					}

					{	editMatch===tomato ?
					
						<section className="tomato-btn-group">
							<button className="edit-btn edit-button-active" onClick={() => handleEdit(tomato, index)} ><FontAwesomeIcon icon={faEdit} /></button>
							<Link to="/"><button className="stopwatch-btn" ><FontAwesomeIcon icon={faStopwatch} onClick={() => handleStartTomato(tomato)} /></button></Link>
							<button className="task-btn"onClick={() =>addToTodoList(tomato)}><FontAwesomeIcon icon={faTasks} /></button>
							<button className="trash-btn" onClick={() => deleteTomato(tomato)} ><FontAwesomeIcon icon={faTrashAlt} /></button>
						</section>
						:
						<section className="tomato-btn-group">
							<button className="edit-btn" onClick={() => setEdit(tomato)} ><FontAwesomeIcon icon={faEdit} /></button>
							<Link to="/"><button className="stopwatch-btn" ><FontAwesomeIcon icon={faStopwatch} onClick={() => handleStartTomato(tomato)} /></button></Link>
							<button className="task-btn" onClick={() =>addToTodoList(tomato)}><FontAwesomeIcon icon={faTasks} /></button>
							<button className="trash-btn" onClick={() => deleteTomato(tomato)} ><FontAwesomeIcon icon={faTrashAlt} /></button>
						</section>
					}
					</article>
				)
			})}

		</section>
	)
}

export default MyTomatoes