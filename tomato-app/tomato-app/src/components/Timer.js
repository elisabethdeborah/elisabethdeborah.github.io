import useState from 'react';
import { useEffect, useRef } from 'react';

const Timer = ({ timeLeft, currentHours, currentMinutes, currentSeconds}) => {



	//OBS DUBBELKOLLA VAD SOM HÄNDER NÄR DET GÅTT ÖVER 1 TIMME, STÅR DET FORTFARANDE 0 TIMMAR?
	/* console.log('currentHours: ', currentHours, 'mins elapsed: ', Math.abs(currentMinutes-currentHours*60)+1, 'hours count: ', currentMinutes/60%60); */
	return (
		<section className="timer-container">
			{/* <h1>{timeLeft}</h1> */}
			<article className="number numberHours">
				<h2>{ currentHours  < 10 && currentHours.toString().split('')[1] !=='0' ? '0' + currentHours : currentHours }</h2>
			</article>
			<article className="number numberMinutes">
				<h2>{ currentMinutes  < 10 && currentMinutes.toString().split('')[1] !=='0' ? '0' + currentMinutes : currentMinutes }</h2>
			</article>
			<article className="number numberSeconds">
				<h2>{currentSeconds  < 10 && currentSeconds.toString().split('')[1] !=='0' ? '0' + currentSeconds : currentSeconds }</h2>
			</article>
			{/* <h3>{ Math.abs(Math.floor(currentMinutes/60%60)) + ' WROOONG!!! hours and ' + Math.abs(currentMinutes-currentHours*60+1) +' minutes have passed'}</h3> */}
		</section>
	);
  };

  export default Timer;