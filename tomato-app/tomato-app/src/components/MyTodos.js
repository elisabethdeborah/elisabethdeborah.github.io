import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch, 
		faEdit, 
		faTimes, 
		faTasks, 
		faCheck,
		faCheckCircle,
		faPause,
		faPlay, 
		faBellSlash,
		faBell,
		faHistory,
		faListUl,
		faStopwatch20,
		faClock,
		faUndoAlt,
		faTrashAlt
	} from '@fortawesome/free-solid-svg-icons'
//import data from '../myTomatodos.json'

const MyTodos = (props) => {

	const checked = (tomato) => {
		console.log('click '+ tomato.name, tomato.checked)

		let match = props.todoData.find(x => x.id === tomato.id) 
		let index = props.todoData.findIndex(x => x.id === tomato.id)

		console.log(match, 'index', index);

		if (tomato.checked) {
			tomato.checked = false
		} else if (!tomato.checked) {
			tomato.checked = true
		}

		console.log(match);

		let newDataArray = [...props.todoData]
		newDataArray.splice(index, 1, match)
		console.log(newDataArray);
		props.setTodoData(newDataArray)
	}
	return (
		<section className="mytomatoes-container">
			<h1>My TomaToDos</h1>
			{/* //{props.todoData.map((x) => console.log(x))} */}
			{props.todoData.map(tomato => {
				return (
					<article className="tomato-article" key={tomato.id}  style={tomato.checked ? {border:'3px inset green' }:null}>
					<aside className="check-mark" /* {tomato.checked ? "check-mark checked":"check-mark"} */ onClick={() => checked(tomato)}>
					<FontAwesomeIcon icon={faCheck} size={ tomato.checked ? "3x" : "xs"} style={!tomato.checked ? {opacity: '0'}:null} />
					</aside>
					<section onClick={() => checked(tomato)} className="tomato-text-group">
							<h3>{tomato.name}</h3>
							<h3>{tomato.checked}</h3>
							<h4>{tomato.time}</h4>
						</section>
						<section className="todo-btn-group">
						<button className="edit-btn"><FontAwesomeIcon icon={faEdit} /></button>
							<button className="stopwatch-btn"><FontAwesomeIcon icon={faStopwatch} /></button>
							<button className="trash-btn"><FontAwesomeIcon icon={faTrashAlt} /></button>
						</section>
					</article>
				)
			})}

		</section>
	)
}

export default MyTodos