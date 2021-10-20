
import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import CountdownSection from './components/CountdownSection';
import StopwatchSection from './components/StopwatchSection';
import Header from './components/Header'
import MyTodos from './components/MyTodos';
import MyTomatoes from './components/MyTomatoes';
import Settings from './components/Settings';
import AlertMessage from './components/AlertMessage';

import jsonTomatoData from './myTomatoes.json'
import jsonTodoData from './myTomatodos.json'


import AirRaid from './assets/AirRaidSirens.mp3'
import BicycleBell from './assets/BicycleBell.mp3'
import CarHorn from './assets/CarHorn.mp3'
import CatMeows from './assets/CatMeows.mp3'
import CitySideStreet from './assets/CitySideStreet.mp3'
import DogsBarking from './assets/DogsBarking.mp3'
import KurrawongCallDista from './assets/KurrawongCallDista.mp3'
import MotionHumMorph from './assets/MotionHumMorph.mp3'
import MustangHotRevs from './assets/MustangHotRevs.mp3'
import PoliceSiren from './assets/PoliceSiren.mp3'
import TrainStnPassLounge from './assets/TrainStnPassLounge.mp3'




///////////CONTEXT TILL SÅNT SOM INTE ÄNDRAS SÅ OFTA, RECOIL FÖR ANNAT!
//VÄRDET SPARAS OCH KAN ANVÄNDAS AV FLER KOMPONENTER (READ-ONLY), FÖR ATT ÄNDRA (SET-FUNKTION) MÅSTE MAN SKICKA SEPARAT
//TEX INLOGGNING - BEHÖVER BARA ÄNDRAS I EN KOMPONENT, MEN VÄRDET BEHÖVS I FLER -> RECOIL/REDUX




function App() {
	//SETTINGS
	const [ settings, setSettings ] = useState({
		colorTheme: "clean",
			visualLanguage: "mixed",
			language: "english",
			alarmSound: BicycleBell
	})


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
	const [ timePeriod, setTimePeriod ] = useState('stage-1')
	const [ timePercent, setTimePercent ] = useState(100)
	const [ colorCode, setColorCode ] = useState('')
	const [ sound, setSound ] = useState(true)
	const [ numberOneIsValid, setNumberOneIsValid ] = useState(false)
	const [ numberTwoIsValid, setNumberTwoIsValid ] = useState(false)

	//STOPWATCH
	const [ stopwatchTime, setStopwatchTime ] = useState(0)
	const [ counting, setCounting ] = useState(false)
	const [ countingStarted, setCountingStarted ] = useState(false)
	const [ viewStopwatch, setViewStopwatch ] = useState(false)

	//MY TOMATOES
	const [ tomatoData, setTomatoData ] = useState([])
	const [ todoData, setTodoData ] = useState([])
	const [ tomatoName, setTomatoName ] = useState('')
	const [ nameIsValid, setNameIsValid ] = useState(false)
	const [ viewSaveForm, setViewSaveForm ] = useState(false)
	const [ tomatoHours, setTomatoHours ] = useState(0)
	const [ tomatoMinutes, setTomatoMinutes ] = useState(0)
	const [ tomatoSeconds, setTomatoSeconds ] = useState(0)

			
	const [ editMatch, setEdit ] = useState('')
	const [ newName, setNewName ] = useState('')
	const [ newHours, setNewHours ] = useState(0)
	const [ newMinutes, setNewMinutes ] = useState(0)
	const [ newSeconds, setNewSeconds ] = useState(0)


	//MY TOMATODOS
	const [ checked, setChecked ] = useState(false)
	const [ currentTomato, setCurrentTomato ] = useState('')
	const [ pagePath, setPagePath ] = useState('')
	const [ viewAddTodoForm, setViewAddTodoForm ] = useState(false)
	const [ todoName, setTodoName ] = useState('')


	//ALERT
	const [ viewAlert, setViewAlert ] = useState(false)
	const [alertProperties, setAlertProperties] = useState({})

	//ALARM
	const [isPlaying, setIsPlaying] = useState(true)


	useEffect(() => {
		setTomatoData(jsonTomatoData)
		setTodoData(jsonTodoData)
		console.log(settings.alarmSound);
	}, [])



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

	//Change name-state onchange
	useEffect(() => {
		validateName()
	}, [tomatoName])


	//ALERT-MESSAGE
	const showAlertMessage = (type, action, color) => {
		setViewAlert(true)
		console.log('show alert start');
		setAlertProperties({
			type: type,
			action: action,
			color: color
		})

		setTimeout(() => {
			setViewAlert(false)
			setAlertProperties({})
			console.log('show alert stop');
		}, 3000);
	}

//COUNTDOWN HELP FUNCTIONS
	const handleStart = (timeParam) => {
		if (timeParam === undefined){
		setTimeLeft((Number(hours)*60*60)+(Number(minutes)*60)+Number(seconds))
		setTotalTime((Number(hours)*60*60)+(Number(minutes)*60)+Number(seconds))
		} else {
			setTimeLeft(timeParam)
			setTotalTime(timeParam)
			setHours(parseInt(timeParam/60/60))
			setMinutes(parseInt(timeParam/60))
		}
		setRunning(!running)
		setBeenStarted(true)
		
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
		console.log(currentTomato);
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
		setRunning(false)
		setCurrentTomato('')
		setPagePath('')
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

	const saveTomatoObj = (objType) => {
		console.log('time: ', stopwatchTime, tomatoData, todoData, objType);
		let id = generateId()
		let newTomato;
		if (objType==='tomato') {
		newTomato = {
			id: id,
			name: tomatoName,
			time: stopwatchTime
			}

			let newTomatoArray = [...tomatoData, newTomato]
			setTomatoData(newTomatoArray)
			showAlertMessage('Tomato', 'saved', 'green')

		} else if (objType==='todo') {
		
		newTomato = {
			id: id,
			name: todoName,
			time: stopwatchTime,
			checked: false,
			checkedDate: 0
			}
			let newTomatoArray = [...todoData, newTomato]
			setTodoData(newTomatoArray)
			showAlertMessage('Todo', 'saved', 'green')
		}

		
		console.log('newTomato inside savetomato: ', newTomato);
		handleWatchReset()
		setCounting(false)
		setCountingStarted(false)
		setViewSaveForm(false)
		handleCloseCountdown()
		setTomatoName('')
		setNameIsValid(false)
		setViewAddTodoForm(false)
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


	//MYTOMATOES- AND TOMATODO-FUNCTIONS


	const handleStartTomato = (tomato) => {
		handleStart(tomato.time)
		setCurrentTomato(tomato)
	}

	const handleEdit = (tomato, data) => {
		console.log('newHours:', newHours, 'newMins:', newMinutes, 'newSecs:', newSeconds);
		 let name;
		newName ? 
			name = newName : 
			name=tomato.name

		let editedTomato;		
		if (tomato.hasOwnProperty('checked')){

			editedTomato = {
				id: tomato.id,
				name: name,
				time: (newHours*60*60 )+ (newMinutes*60) + newSeconds,
				checked: false
			} 
			console.log('edited todo:', editedTomato);
		} else {
			editedTomato = {
				id: tomato.id,
				name: name,
				time:  (newHours*60*60 )+ (newMinutes*60) + newSeconds,
			}
			console.log('edited tomato:', editedTomato);
		}

		let match = data.find(x => x.id === tomato.id) 
		let index = data.findIndex(x => x.id === tomato.id)
	
		console.log(editedTomato.name, tomato.name, editedTomato.time, tomato.time);

		if(editedTomato.name === tomato.name && editedTomato.time === tomato.time ) {
			} else {
				console.log('CHANGE', editedTomato);

				console.log(match, 'index', index);
				let newDataArray = [...data]
				newDataArray.splice(index, 1, editedTomato)
				console.log(newDataArray);
				
				if (tomato.hasOwnProperty('checked')) {

					console.log('set todo:',newDataArray);
					setTodoData(newDataArray)
					showAlertMessage('Todo', 'edited', 'yellow')
				} else {

					console.log('set tomato:',newDataArray);
					setTomatoData(newDataArray)
					showAlertMessage('Tomato', 'edited', 'blue')
				}
			}
		setEdit('')
	
		
	}



	const deleteTomato = (tomato, data) => {
			console.log('click '+ tomato.name)
	
			let match = data.find(x => x.id === tomato.id) 
			let index = data.findIndex(x => x.id === tomato.id)
	
			console.log('match:',match, 'index', index);
	
			let newDataArray = [...data]
			newDataArray.splice(index, 1)
			console.log(newDataArray);

			if (tomato.hasOwnProperty('checked')) {
				console.log('currentTomato.checked:', tomato.checked);
				setTodoData(newDataArray)
				showAlertMessage('Todo', 'deleted', 'red')
			} else {
				setTomatoData(newDataArray)
				showAlertMessage('Tomato', 'deleted', 'red')
			}
	}

	const addToTodoList = (tomato) => {
		let newTomato = {...tomato}
		newTomato.checked = false;
		newTomato.checkedDate = 0;
		newTomato.id = generateId()
		let newTodoArray = [...todoData, newTomato]
		setTodoData(newTodoArray)
		showAlertMessage('Todo', 'added', 'green')
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
					<CountdownSection currentTomato={currentTomato} sound={sound} setSound={setSound} timePercent={timePercent} timeLeft={timeLeft} handleCloseCountdown={handleCloseCountdown} totalTime={totalTime} beenStarted={beenStarted}  validateNumbers={validateNumbers} handlePause={handlePause} handleStart={handleStart} running={running} currentHours={currentHours} currentMinutes={currentMinutes} currentSeconds={currentSeconds} hours={hours} minutes={minutes} numberOneIsValid={numberOneIsValid} numberTwoIsValid={numberTwoIsValid} setNumberOneIsValid={setNumberOneIsValid} setNumberTwoIsValid={setNumberTwoIsValid}
					isPlaying={isPlaying} setIsPlaying={setIsPlaying} alarmSound={settings.alarmSound}
					/>
				</Route>
				<Route path="/createTomato">
					<StopwatchSection handleCloseCountdown={handleCloseCountdown} setTomatoHours={setTomatoHours} tomatoHours={tomatoHours} setTomatoMinutes={setTomatoMinutes} tomatoMinutes={tomatoMinutes} setTomatoSeconds={setTomatoSeconds} tomatoSeconds={tomatoSeconds} stopwatchTime={stopwatchTime} countingStarted={countingStarted} counting={counting} setViewStopwatch={setViewStopwatch} viewStopwatch={viewStopwatch} viewSaveForm={viewSaveForm} handleWatchStart={handleWatchStart} handleWatchReset={handleWatchReset} setViewSaveForm={setViewSaveForm} saveTomatoObj={saveTomatoObj} tomatoData={tomatoData} nameIsValid={nameIsValid} setStopwatchTime={setStopwatchTime} setTomatoName={setTomatoName} validateName={validateName} generateId={generateId} viewAlert={viewAlert} setViewAlert={setViewAlert} alarmSound={settings.alarmSound}/>
				</Route>
				<Route path="/myTomatoes">
					<MyTomatoes
					setPagePath={()=> setPagePath('/myTomatoes')}
					pagePath={pagePath} timePercent={timePercent} setCurrentHours={setCurrentHours}
					setCurrentMinutes={setCurrentMinutes} setCurrentSeconds={setCurrentSeconds} setBeenStarted={setBeenStarted} setCurrentTomato={setCurrentTomato} setRunning={setRunning} setTimeLeft={setTimeLeft} setTotalTime={setTotalTime} tomatoData={tomatoData} setTomatoData={setTomatoData} handleStart={handleStart} todoData={todoData} setTodoData={setTodoData}	handleStartTomato={handleStartTomato} handleEdit={handleEdit} deleteTomato={deleteTomato} addToTodoList={addToTodoList}  editMatch={editMatch} setEdit={setEdit}  setNewName={setNewName} setNewHours={setNewHours} setNewMinutes={setNewMinutes} setNewSeconds={setNewSeconds} 

					handleCloseCountdown={handleCloseCountdown} setTomatoHours={setTomatoHours} tomatoHours={tomatoHours} setTomatoMinutes={setTomatoMinutes} tomatoMinutes={tomatoMinutes} setTomatoSeconds={setTomatoSeconds} tomatoSeconds={tomatoSeconds} stopwatchTime={stopwatchTime} countingStarted={countingStarted} counting={counting} setViewStopwatch={setViewStopwatch} viewStopwatch={viewStopwatch} viewSaveForm={viewSaveForm} handleWatchStart={handleWatchStart} handleWatchReset={handleWatchReset} setViewSaveForm={setViewSaveForm} saveTomatoObj={saveTomatoObj} nameIsValid={nameIsValid} setStopwatchTime={setStopwatchTime} setTomatoName={setTomatoName} validateName={validateName} generateId={generateId} viewAlert={viewAlert} setViewAlert={setViewAlert}  alarmSound={settings.alarmSound}
	 />
				</Route>
				<Route path="/myTodos">
					<MyTodos setTodoName={setTodoName} todoName={todoName} pagePath={pagePath} setPagePath={setPagePath} checked={checked} handleChecked={handleChecked}  todoData={todoData} timePercent={timePercent} setCurrentHours={setCurrentHours} setCurrentMinutes={setCurrentMinutes} setCurrentSeconds={setCurrentSeconds} setBeenStarted={setBeenStarted} setCurrentTomato={setCurrentTomato} setRunning={setRunning} setTimeLeft={setTimeLeft} setTotalTime={setTotalTime} tomatoData={tomatoData} setTomatoData={setTomatoData} handleStart={handleStart} setTodoData={setTodoData}	handleStartTomato={handleStartTomato} handleEdit={handleEdit} deleteTomato={deleteTomato} addToTodoList={addToTodoList}  editMatch={editMatch} setEdit={setEdit}  setNewName={setNewName} setNewHours={setNewHours} setNewMinutes={setNewMinutes} setNewSeconds={setNewSeconds} viewAddTodoForm={viewAddTodoForm} setViewAddTodoForm={setViewAddTodoForm}  saveTomatoObj={saveTomatoObj} nameIsValid={nameIsValid} validateName={validateName} viewAlert={viewAlert} setViewAlert={setViewAlert}  alarmSound={settings.alarmSound}
	 				/>
				</Route>
				<Route path="/Settings">
					<Settings settings={settings} setSettings={setSettings} />
				</Route>
			</Switch>
		</Router>
			{
				viewAlert ? <AlertMessage className={"alert-message "+alertProperties.color} object={alertProperties.type} action={alertProperties.action} color={alertProperties.color} /> : null
			}
		</div> 
	)
}

export default App;

