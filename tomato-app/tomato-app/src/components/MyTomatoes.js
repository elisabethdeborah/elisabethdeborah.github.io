
import data from '../myTomatoes.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch, faEdit, faTimes, faTasks } from '@fortawesome/free-solid-svg-icons'



const MyTomatoes = ({tomatoData, setTomatoData}) => {

	return (
		<section className="mytomatoes-container">
			<h1>My Tomatoes</h1>
			{data.map(tomato => {
				return (
					<article className="tomato-article" key={tomato.id}>

						<section onClick={() => console.log('click '+ tomato.name)} className="tomato-text-group">
							<h3>{tomato.name}</h3>
							<h4>{tomato.time}</h4>
						</section>

						<section className="tomato-btn-group">
							<button><FontAwesomeIcon icon={faEdit} /></button>
							<button><FontAwesomeIcon icon={faStopwatch} /></button>
							<button><FontAwesomeIcon icon={faTasks} /></button>
							<button><FontAwesomeIcon icon={faTimes} /></button>
						</section>

					</article>
				)
			})}

		</section>
	)
}

export default MyTomatoes