
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
	const [timeLeft, setTimeLeft] = useState(0);
	const [ currentHours, setCurrentHours ] = useState(hours)
	const [ currentMinutes, setCurrentMinutes ] = useState(minutes)
	const [ currentSeconds, setCurrentSeconds ] = useState(seconds)

	const [ totalTime, setTotalTime ] = useState(0)
	const [ timePeriod, setTimePeriod ] = useState('')
	const [ timePercent, setTimePercent ] = useState(0)

	const [ colorCode, setColorCode ] = useState('')

	//STOPWATCH
	const [stopwatchTime, setStopwatchTime] = useState(0)
	const [ counting, setCounting ] = useState(false)
	const [ countingStarted, setCountingStarted ] = useState(false)

	//MY TOMATOES

	const [ tomatoName, setTomatoName ] = useState('')
	const [ nameIsValid, setNameIsValid ] = useState(false)
	const [ viewSaveForm, setViewSaveForm ] = useState(false)


	//MY TOMATODOS
	const [ checked, setChecked ] = useState(false)

//COUNTDOWN
	const handleStart = () => {
		setTimeLeft((Number(hours)*60*60)+(Number(minutes)*60)+Number(seconds))
		setRunning(!running)
		setBeenStarted(true)
		setTotalTime((Number(hours)*60*60)+(Number(minutes)*60)+Number(seconds))
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
	}

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

///////

//STOPWATCH

useEffect(() => {
	if ( counting ) {
	// save intervalId to clear the interval when the component re-renders
	const intervalId = setInterval(() => {
	  setStopwatchTime(stopwatchTime + 1);
	}, 1000);

	// clear interval on re-render to avoid memory leaks
	return () => clearInterval(intervalId);
	// add timeLeft as a dependency to re-rerun the effect when we update it
  }
}, [stopwatchTime, counting]);

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

	let id = generateId()

	let newTomato = {
		id: id,
		name: tomatoName,
		time: parseInt(stopwatchTime)
	}
	console.log('newTomato inside savetomato: ', newTomato);
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

useEffect(() => {
	validateName()
}, [tomatoName])

/////


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

	useEffect(() => {
		console.log('procent kvar: ', parseInt(timeLeft/totalTime*100) + '%') 
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
		console.log(timePeriod);
		handleBackgroundColor()
		console.log(colorCode);
	}, [timeLeft])

//120 -> 60, procent , 25 -> 50

	const handleBackgroundColor = () => {
		if (timePeriod === 'stage-1'){
			setColorCode(`hsl(${parseInt((timeLeft/totalTime)*100)*1.3}, 100%, ${25+(totalTime - timeLeft)}%`)
		} else if (timePeriod !== 'stage-1'){
			setColorCode(`hsl(${parseInt((timeLeft/totalTime)*100)*1.3}, 100%, 50%)`)
		} 
	}

	/* 

	--timer-green: hsl(120, 100%, 25%);
	--timer-yellow: hsl(60, 100%, 50%);
	--timer-orange: hsl(39, 100%, 50%);
	--timer-red: hsl(0, 100%, 50%);


	period-1: 120/2, 100, 25*2
	--timer-green: hsl(120, 100%, 25%);

	period-2: 60* 0.66, 100, 50
	--timer-yellow: hsl(60, 100%, 50%);

	period-3: 

	--timer-orange: hsl(40, 100%, 50%);
	period-3: 40*0, 100, 50
	--timer-red: hsl(0, 100%, 50%);


--timer-green: hsl(100, 100%, 33%);
	--timer-yellow: rgb(238, 255, 82);
	--timer-orange: hsl(33, 100%, 66%);
	--timer-red: hsl(0, 100%, 66%);


		--timer-green: rgb(0, 128, 0);
	--timer-yellow: rgb(255, 255, 0);
	--timer-orange: rgb(255, 165, 0);
	--timer-red: rgb(255, 0, 0);


	*/

	return (
		<div className={ beenStarted ? `App app-started ${timePeriod}`: "App"} 
		style={timeLeft < totalTime ? {
			backgroundColor: colorCode /* `hsl(${parseInt((timeLeft/totalTime)*100)}, 100%, ${25+(totalTime - timeLeft)}%` */,
			//transition: `background-color ${totalTime/3}s ease`,
			//backgroundColor: `hsl(${parseInt(timeLeft/totalTime*100)}, 100%, ${(timeLeft/totalTime)*100})`
		  }:null}>

		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<CountdownSection timePercent={timePercent} timeLeft={timeLeft} handleCloseCountdown={handleCloseCountdown} setTotalTime={setTotalTime} totalTime={totalTime} beenStarted={beenStarted} setBeenStarted={setBeenStarted} validateNumbers={validateNumbers} handlePause={handlePause} handleStart={handleStart} setRunning={setRunning} running={running} currentHours={currentHours} currentMinutes={currentMinutes} currentSeconds={currentSeconds} hours={hours} minutes={minutes} generateId={generateId} />
				</Route>
				<Route path="/createTomato">
					<StopwatchSection stopwatchTime={stopwatchTime} countingStarted={countingStarted} counting={counting} viewSaveForm={viewSaveForm} handleWatchStart={handleWatchStart} handleWatchReset={handleWatchReset} setViewSaveForm={setViewSaveForm} saveTomatoObj={saveTomatoObj} nameIsValid={nameIsValid} setStopwatchTime={setStopwatchTime} setTomatoName={setTomatoName} validateName={validateName} saveTodoObj={saveTodoObj} generateId={generateId} />
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
