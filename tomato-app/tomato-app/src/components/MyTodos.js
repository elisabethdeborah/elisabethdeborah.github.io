
import data from '../myTomatodos.json'

const MyTodos = (props) => {
	return (
		<section className="mytomatoes-container">
			<h1>My TomaToDos</h1>
			{data.map(tomato => {
				return (
					<article className="tomato-article" key={tomato.id}>
					<aside className= {props.checked ? "check-mark checked":"check-mark"} onClick={props.handleChecked}></aside>
					<section className="tomato-text-group">
							<h3>{tomato.name}</h3>
							<h4>{tomato.time}</h4>
						</section>
						<section className="tomato-btn-group">
							<button>Edit</button>
							<button>Start timer</button>
							<button>Add to Todos</button>
							<button>Delete</button>
						</section>
					</article>
				)
			})}

		</section>
	)
}

export default MyTodos