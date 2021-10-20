
import Sound from 'react-sound'

const PlaySound = ({isPlaying, sound, alarmSound}) => {
	console.log( alarmSound);
		return (
			<Sound
				url={alarmSound}
				playStatus={ sound ? Sound.status.PLAYING: Sound.status.STOPPED}
				playFromPosition={100}
				loop={true}
			/>
		) 
}

export default PlaySound

