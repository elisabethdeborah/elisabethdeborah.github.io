
import Sound from 'react-sound'
import { useState } from 'react/cjs/react.development'
import BicycleBellRing from '../assets/BicycleBell.mp3'
import AirRaidSirens from '../assets/AirRaidSirens.mp3'

const PlaySound = ({isPlaying, sound}) => {
	
		return (
			<Sound
				url={AirRaidSirens}
				playStatus={ isPlaying && sound ? Sound.status.PLAYING: Sound.status.STOPPED}
				playFromPosition={100}
				loop={true}
			/>
		) 
}

export default PlaySound
//props.isPlaying ?	Sound.status.PLAYING : Sound.status.STOPPED

/* function startGame() {
    myMusic = new sound("arcade_game_alarm_long.mp3");
    myMusic.play();
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.loop=true;
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
}
 */