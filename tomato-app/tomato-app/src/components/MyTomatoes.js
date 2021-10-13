
import data from '../myTomatoes.json'

const MyTomatoes = () => {
	return (
		<section className="mytomatoes-container">
			<h1>My Tomatoes</h1>
			{data.map(tomato => {
				return (
					<article className="tomato-article" key={tomato.id}>
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

export default MyTomatoes