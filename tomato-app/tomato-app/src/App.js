
import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import CountdownSection from './components/CountdownSection';
import StopwatchSection from './components/StopwatchSection';
import Header from './components/Header'
import MyTodos from './components/MyTodos';
import MyTomatoes from './components/MyTomatoes';
import Settings from './components/Settings';




///////////CONTEXT TILL SÅNT SOM INTE ÄNDRAS SÅ OFTA, RECOIL FÖR ANNAT!!!


function App() {
	//COUNTDOWN
	const [ hours, setHours ] = useState(0)
	const [ minutes, setMinutes ] = useState(0)
	const [ seconds, setSeconds ] = useState(0)
	const [ running, setRunning ] = useState(false)
	const [ beenStarted, setBeenStarted ] = useState(false)
	const [ timeLeft, setTimeLeft ] = useState(0);
	const [ currentHours, setCurrentHours ] = useState(hours)
	const [ currentMinutes, setCurrentMinutes ] = useState(minutes)
	const [ currentSeconds, setCurrentSeconds ] = useState(seconds)
	const [ totalTime, setTotalTime ] = useState(0)
	const [ timePeriod, setTimePeriod ] = useState('')
	const [ timePercent, setTimePercent ] = useState(0)
	const [ colorCode, setColorCode ] = useState('')

	//STOPWATCH
	const [ stopwatchTime, setStopwatchTime ] = useState(0)
	const [ counting, setCounting ] = useState(false)
	const [ countingStarted, setCountingStarted ] = useState(false)
	const [ viewStopwatch, setViewStopwatch ] = useState(false)

	//MY TOMATOES

	const [ tomatoName, setTomatoName ] = useState('')
	const [ nameIsValid, setNameIsValid ] = useState(false)
	const [ viewSaveForm, setViewSaveForm ] = useState(false)
	const [ tomatoHours, setTomatoHours ] = useState(0)
	const [ tomatoMinutes, setTomatoMinutes ] = useState(0)
	const [ tomatoSeconds, setTomatoSeconds ] = useState(0)

	//MY TOMATODOS
	const [ checked, setChecked ] = useState(false)



//USEEFFECT-FUNCTIONS

	//COUNTDOWN
	useEffect(() => {
		if ( running ) {
		// exit early when we reach 0
		if (timeLeft<0) return;

		// save intervalId to clear the interval when the component re-renders
		const intervalId = setInterval(() => {
		setTimeLeft(timeLeft - 1);
		setCurrentHours(parseInt((timeLeft/60)/60))
		//console.log('minutes: ', parseInt(timeLeft/60)-currentHours*60);
		setCurrentMinutes(parseInt(timeLeft/60)-currentHours*60)
		setCurrentSeconds( timeLeft%60 )
		}, 1000);

		// clear interval on re-render to avoid memory leaks
		return () => clearInterval(intervalId);
		// add timeLeft as a dependency to re-rerun the effect when we update it
	}
	}, [timeLeft, running]);

	//COUNTDOWN - COLOR BACKGROUND

	useEffect(() => { 
		let percent = (parseInt(timeLeft/totalTime*100))
		setTimePercent(percent)
		if (percent >= 66) {
			setTimePeriod('stage-1') 
		} else if(percent >= 33) {
			setTimePeriod('stage-2') 
		}else if(percent >= 12.5 ) {
			setTimePeriod('stage-3') 
		} else if (percent <12.5 ) {
			setTimePeriod('stage-4')
		}
		handleBackgroundColor()
	}, [timeLeft])


	//STOPWATCH
	useEffect(() => {
		if ( counting ) {
		// save intervalId to clear the interval when the component re-renders
		const intervalId = setInterval(() => {
		setStopwatchTime(stopwatchTime + 1);
		}, 1000);
		setTomatoHours(parseInt(stopwatchTime/60/60))
		setTomatoMinutes(parseInt(stopwatchTime/60))
		setTomatoSeconds(stopwatchTime%60)
		// clear interval on re-render to avoid memory leaks
		return () => clearInterval(intervalId);
		// add timeLeft as a dependency to re-rerun the effect when we update it
	}
	}, [stopwatchTime, counting]);


	useEffect(() => {
		validateName()
	}, [tomatoName])



//COUNTDOWN HELP FUNCTIONS
	const handleStart = () => {
		setTimeLeft((Number(hours)*60*60)+(Number(minutes)*60)+Number(seconds))
		setRunning(!running)
		setBeenStarted(true)
		setTotalTime((Number(hours)*60*60)+(Number(minutes)*60)+Number(seconds))
		if (timePercent!==100) {
			setCurrentHours(0)
			setCurrentMinutes(0)
			setCurrentSeconds(0)
		}
	}

	const handlePause = () => {
		setTimeLeft(timeLeft)
		setRunning(!running)
	}

	const handleCloseCountdown = () => {
		setBeenStarted(false)
		setTimePeriod('')
		setTotalTime(0)
		setTimeLeft(0)
		setCurrentHours(0)
		setCurrentMinutes(0)
		setCurrentSeconds(0)
		setMinutes(0)
		setSeconds(0)
		setHours(0)
		setViewStopwatch(false)
		setViewSaveForm(false)
		setCounting(false)
		setCountingStarted(false)
		setTomatoHours(0)
		setTomatoMinutes(0)
		setTomatoSeconds(0)
	}


	const handleBackgroundColor = () => {
		if (timePeriod === 'stage-1'){
			setColorCode(`hsl(${parseInt(((timeLeft/totalTime)*100)*1.3)}, 100%, ${parseInt((1-(timeLeft/totalTime))*65)+25}%`)
		} else if (timePeriod !== 'stage-1'){
			setColorCode(`hsl(${parseInt(((timeLeft/totalTime)*100)*1.3)}, 100%, 50%)`)
		} 
	}

///////

//STOPWATCH HELP FUNCTIONS

	const handleWatchStart = () => {
		console.log('stopwatchTime inside handlewatch: ', stopwatchTime);
			setCounting(!counting)
			setCountingStarted(true)
			setViewSaveForm(false)
	}

	const handleWatchReset = () => {
		setStopwatchTime(0)
		setCounting(false)
		setCountingStarted(false)
		setViewSaveForm(false)
	}



//////

//Save tomato

	const generateId = () => {
		let date = new Date()
		let year = date.getUTCFullYear().toString()
		let month = date.getUTCMonth().toString()
		let day = date.getUTCDate().toString()
		let hour = date.getUTCHours().toString()
		let minute = date.getUTCMinutes().toString()
		let second = date.getUTCSeconds().toString()
		let ms = date.getUTCMilliseconds().toString()
		let random = Math.ceil(Math.random()*(99-10)+10).toString()
		let newId = Number(year+month+day+hour+minute+second+ms+random)
		return newId;
	}

	const saveTomatoObj = () => {
	console.log('time: ', stopwatchTime);
		let id = generateId()
		let newTomato = {
			id: id,
			name: tomatoName,
			time: stopwatchTime
		}
		console.log('newTomato inside savetomato: ', newTomato);
		handleWatchReset()
		setCounting(false)
		setCountingStarted(false)
		setViewSaveForm(false)
		handleCloseCountdown()
		setTomatoName('')
		setNameIsValid(false)
	}


	const saveTodoObj = () => {
		let id = generateId()
		let newTodo = {
			id: id,
			name: tomatoName,
			time: parseInt(stopwatchTime),
			checked: false,
			/* checkedDate: , */
		}
		console.log('newTodo inside savetodo: ', newTodo);
	}


	const validateName = () => {
		setNameIsValid(tomatoName.length > 0)
	}


	const validateNumbers = (input, value) => {
		if (value === 'hours') {
			setHours(Number(input))
		} else if ( value === 'minutes' ) {
			setMinutes(Number(input))
		}
	}

	const handleChecked = () => {
		setChecked(!checked)
	}



	return (

		<div className={ beenStarted ? `App app-started ${timePeriod}`: "App"} 
		style={timeLeft < totalTime ? {
			backgroundColor: colorCode
		  }:null}>

		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<CountdownSection timePercent={timePercent} timeLeft={timeLeft} handleCloseCountdown={handleCloseCountdown} totalTime={totalTime} beenStarted={beenStarted}  validateNumbers={validateNumbers} handlePause={handlePause} handleStart={handleStart} running={running} currentHours={currentHours} currentMinutes={currentMinutes} currentSeconds={currentSeconds} hours={hours} minutes={minutes} />
				</Route>
				<Route path="/createTomato">
					<StopwatchSection handleCloseCountdown={handleCloseCountdown} setTomatoHours={setTomatoHours} tomatoHours={tomatoHours} setTomatoMinutes={setTomatoMinutes} tomatoMinutes={tomatoMinutes} setTomatoSeconds={setTomatoSeconds} tomatoSeconds={tomatoSeconds} stopwatchTime={stopwatchTime} countingStarted={countingStarted} counting={counting} setViewStopwatch={setViewStopwatch} viewStopwatch={viewStopwatch} viewSaveForm={viewSaveForm} handleWatchStart={handleWatchStart} handleWatchReset={handleWatchReset} setViewSaveForm={setViewSaveForm} saveTomatoObj={saveTomatoObj} nameIsValid={nameIsValid} setStopwatchTime={setStopwatchTime} setTomatoName={setTomatoName} validateName={validateName} saveTodoObj={saveTodoObj} generateId={generateId} />
				</Route>
				<Route path="/myTomatoes">
					<MyTomatoes />
				</Route>
				<Route path="/myTodos">
					<MyTodos checked={checked} handleChecked={handleChecked} />
				</Route>
				<Route path="/Settings">
					<Settings />
				</Route>
			</Switch>
		</Router>
		</div> 
	);
}

export default App;

