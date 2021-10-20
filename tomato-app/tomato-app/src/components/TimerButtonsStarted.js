import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBellSlash, faBell } from '@fortawesome/free-solid-svg-icons'
import CloseButton from './CloseButton'

const TimerButtonsStarted = ({ currentTomato, timeLeft, beenStarted, timePercent, handlePause, handleStart, running, hours, minutes, sound, setSound, handleCloseCountdown }) => {
	return (
		<section className="timer-buttons">
			<section className="countdown-settings">
				<button className="soundOnOff" onClick={() => setSound(!sound)}>
					{
						sound ? 
						<FontAwesomeIcon icon={faBellSlash} />
						:<FontAwesomeIcon icon={faBell} />
					}
				</button>
				<CloseButton currentTomato={currentTomato} handleCloseCountdown={handleCloseCountdown} /> 
			</section>
			{ 
				beenStarted && timePercent!==100 ? 
				<button type="submit" onClick={handlePause} disabled={ ( !hours > 0 && !minutes > 0 && timeLeft === 0 ) ? true : false } >
					{running ? 'Pause' : 'Resume'}
				</button>
				:null
			}
			<button type="submit" onClick={handleStart} disabled={ ( !hours > 0 && !minutes > 0 && timeLeft === 0  ) ? true : false }>
				{running ? 'Stop' : 'Restart'}
			</button>
		</section> 
	)
}

export default TimerButtonsStarted