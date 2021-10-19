import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBellSlash, faBell } from '@fortawesome/free-solid-svg-icons'

const Timer = ({ currentHours, currentMinutes, currentSeconds, sound}) => {

	return (
		<section className="timer-container">
			<article className="number numberHours">
				<h2>{ currentHours  < 10 && currentHours.toString().split('')[1] !=='0' ? 
				'0' + currentHours : currentHours }</h2>
			</article>
			<article className="number numberMinutes">
				<h2>{ currentMinutes  < 10 && currentMinutes.toString().split('')[1] !=='0' ? '0' + currentMinutes : currentMinutes }</h2>
			</article>
			<article className="number numberSeconds">
				<h2>{currentSeconds  < 10 && currentSeconds.toString().split('')[1] !=='0' ? '0' + currentSeconds : currentSeconds }</h2>
			</article>
			<article >{!sound ? <FontAwesomeIcon icon={faBellSlash} />:<FontAwesomeIcon icon={faBell} />}</article>
		</section>
	);
  };

  export default Timer;