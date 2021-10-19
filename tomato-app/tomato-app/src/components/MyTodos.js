import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch, 
		faEdit, 
		faCheckCircle,
		faTrashAlt,
	} from '@fortawesome/free-solid-svg-icons'
import TomatoTodoInfo from './TomatoTodoInfo'
import SaveForm from './SaveForm'
import AddTodoForm from './AddTodoForm'

const MyTodos = ({nameIsValid, saveTomatoObj, setTodoName, viewAddTodoForm, setViewAddTodoForm, handleStart, setCurrentTomato, currentTomato, tomatoData, setTomatoData, setRunning, setTimeLeft, setTotalTime, setBeenStarted, timePercent, setCurrentHours, setCurrentMinutes, setCurrentSeconds, todoData, setTodoData, handleStartTomato, handleEdit, editMatch, setEdit, deleteTomato, addToTodoList, setNewName, setNewHours, setNewMinutes, setNewSeconds, setPagePath, pagePath, todoName}) => {




	const checked = (todo) => {

		let match = todoData.find(x => x.id === todo.id) 
		let index = todoData.findIndex(x => x.id === todo.id)

		console.log(match, 'index', index);

		if (todo.checked) {
			todo.checked = false
		} else if (!todo.checked) {
			todo.checked = true
		}

		console.log(match);

		let newDataArray = [...todoData]
		newDataArray.splice(index, 1, match)
		console.log(newDataArray);
		setTodoData(newDataArray)

		console.log('click '+ todo.name, todo.checked)
	}

	const startEdit = (tomato) => {
		setEdit(tomato)
		setNewHours(Math.floor((tomato.time/60/60)%60))
		setNewMinutes(Math.floor((tomato.time/60)%60))
		setNewSeconds(Math.floor(tomato.time%60))

	}

	let notCheckedTodos = todoData.filter(x => !x.checked) 

	return (
		<section className="mytomatoes-container">
			<h1>My TomaToDos</h1>
			{
				notCheckedTodos.length ===0 && todoData[0] !== undefined? 
				<section className="all-checked">
				<h1>Yay, every task is checked!</h1>
				<h2>Take a moment to feel accomplished!</h2> 
				<h2>You are awesome!</h2>
				<FontAwesomeIcon icon={faCheckCircle} size={'6x'} />
				</section>
				:null
			}

			{todoData[0] === undefined ? 
			
			<section className="no-tomatoes">
				<p>Looks like you don't have any TomaTodos.</p>
				<h3 onClick={() => setViewAddTodoForm(!viewAddTodoForm)} className="time-tomato-header">Would you like to add one?</h3>
			{viewAddTodoForm ? <AddTodoForm todoName={todoName} viewAddTodoForm={viewAddTodoForm} setViewAddTodoForm={setViewAddTodoForm} setTodoData={setTodoData} saveTomatoObj={saveTomatoObj} nameIsValid={nameIsValid} objType="todo" setTodoName={setTodoName} />:null}
			</section>
			
			:<section className="stopwatch-create-container">
			<h3 onClick={() => setViewAddTodoForm(!viewAddTodoForm)} className="time-tomato-header">Add New Todo</h3>
			{viewAddTodoForm ? <AddTodoForm todoName={todoName} viewAddTodoForm={viewAddTodoForm} setViewAddTodoForm={setViewAddTodoForm} setTodoData={setTodoData} saveTomatoObj={saveTomatoObj} nameIsValid={nameIsValid} objType="todo" setTodoName={setTodoName} />:null}
		</section> }

			{
			todoData.map((todo, index) => {
				return (
					
					<article key={todo.id} className={ todo.checked ? "tomato-article  checked-background": "tomato-article" } >
						


						<section className="todo-svg-container" onClick={ editMatch ?() => checked(todo):null}  >
							
			
						{
							todo.checked ? 
					
							<FontAwesomeIcon icon={faCheckCircle} onClick={() => checked(todo)} className="logo" style={{zIndex: '1', fill: '#555858'}} />
						
							
							:
							
							<svg onClick={() => checked(todo)}  className="logo" width="1804" height="1808" viewBox="0 0 1804 1808" fill="none" xmlns="http://www.w3.org/2000/svg"> 
							<path className="tomato-kropp" d="M811.602 1660.5C1029.23 1696.18 1236.89 1667.68 1396.83 1592C1556.7 1516.35 1670.24 1392.72 1695.61 1237.96C1720.99 1083.2 1652.87 929.791 1525.52 807.048C1398.13 684.253 1210.44 590.936 992.812 555.255C775.184 519.574 567.527 548.072 407.586 623.756C247.713 699.408 134.174 823.033 108.8 977.794C83.4267 1132.55 151.544 1285.96 278.89 1408.71C406.289 1531.5 593.974 1624.82 811.602 1660.5Z"  strokeWidth="80"/>
							<path className="tomato-blast" d="M534.22 318.32L875.719 461.819L875.719 120.317L1051.72 384.819L1292.92 230.32L1217.22 461.819L1503.22 461.819L1292.92 615.818L1580.22 725.819L919.72 670.82L534.22 318.32Z" strokeWidth="50"/>
							</svg> 

						}
                               
						</section>

						<TomatoTodoInfo editMatch={editMatch} index={index} tomato={todo}  setCurrentHours={setCurrentHours} setCurrentMinutes={setCurrentMinutes} setCurrentSeconds={setCurrentSeconds} setBeenStarted={setBeenStarted} setCurrentTomato={setCurrentTomato}  currentTomato={currentTomato} setRunning={setRunning} setTimeLeft={setTimeLeft} setTotalTime={setTotalTime} tomatoData={tomatoData} setTomatoData={setTomatoData} handleStart={handleStart} todoData={todoData} setTodoData={setTodoData} handleStartTomato={handleStartTomato}  setEdit={setEdit}
						timePercent={timePercent} setNewName={setNewName} setNewHours={setNewHours} setNewMinutes={setNewMinutes} setNewSeconds={setNewSeconds} />

				{	editMatch===todo ?	
				
						<section className="tomato-btn-group">
							<button className="edit-btn edit-button-active" onClick={() => handleEdit(todo, todoData)} >
								<FontAwesomeIcon icon={faEdit} />
							</button>
							<Link to="/">
								{todo.time > 0 ? <button className="stopwatch-btn" >
									<FontAwesomeIcon icon={faStopwatch} onClick={() => handleStartTomato(todo)} />
								</button>:null
								}
							</Link>
							<button className="trash-btn" onClick={() => deleteTomato(todo, todoData)} >
								<FontAwesomeIcon icon={faTrashAlt} />
							</button>
						</section>
					:
						<section className="tomato-btn-group">
							<button className="edit-btn" onClick={() => startEdit(todo)} >
								<FontAwesomeIcon icon={faEdit} />
							</button>
							<Link to="/">
								{todo.time > 0 ? <button className="stopwatch-btn" >
									<FontAwesomeIcon icon={faStopwatch} onClick={() => handleStartTomato(todo)} />
								</button>:null
								}
							</Link>
							<button className="trash-btn" onClick={() => deleteTomato(todo, todoData)} >
								<FontAwesomeIcon icon={faTrashAlt} />
							</button>
						</section>
				}
					</article>
				)
				})
			}

		</section>
	)
}

export default MyTodos


