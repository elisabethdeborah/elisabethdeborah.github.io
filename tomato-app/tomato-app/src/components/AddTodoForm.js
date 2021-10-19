
import { useEffect } from "react"
import CloseButton from "./CloseButton"
import SaveNumberInput from "./SaveNumberInput"

const AddTodoForm = ({ setTodoName, saveTodoObj, nameIsValid, handleCloseCountdown}) => {
	

	return (
		<form className="save-form" method="POST" >
			<h1 className="save-form-header">Save TomaTodo</h1>
			<input className="todo-name-input" type="text" placeholder="todo name" onChange={(e) => setTodoName(e.target.value)} required />
			<section className="countdown-settings">
			<button type="button" value="save todo" disabled={!nameIsValid} onClick={() => saveTodoObj()}>Save todo</button>
			<CloseButton 
				handleCloseCountdown={handleCloseCountdown}  
			/>
			</section>
		</form>
	)
}

export default AddTodoForm;
