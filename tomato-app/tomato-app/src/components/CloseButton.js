import { Link } from "react-router-dom"

const CloseButton = ({ handleCloseCountdown, currentTomato }) => {

	return (
		<aside className="close-timer">
			{ 
				currentTomato ?  
				<Link to={currentTomato.hasOwnProperty('checked') ? '/myTodos': '/myTomatoes'}>
					<button onClick={() => handleCloseCountdown()}>
						<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
							<line x1="2.12132" y1="3" x2="21.2132" y2="22.0919" stroke="white" strokeWidth="3" strokeLinecap="round"/>
							<line x1="2.3934" y1="21.4852" x2="21.4853" y2="2.39336" stroke="white" strokeWidth="3" strokeLinecap="round"/>
						</svg>
					</button>
				</Link>
				:<button onClick={() => handleCloseCountdown()}>
					<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line x1="2.12132" y1="3" x2="21.2132" y2="22.0919" stroke="white" strokeWidth="3" strokeLinecap="round"/>
						<line x1="2.3934" y1="21.4852" x2="21.4853" y2="2.39336" stroke="white" strokeWidth="3" strokeLinecap="round"/>
					</svg>
				</button>
			}
		</aside>
	)
}

export default CloseButton