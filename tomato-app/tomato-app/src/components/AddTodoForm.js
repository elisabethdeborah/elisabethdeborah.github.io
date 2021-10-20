
const AddTodoForm = ({ setTodoName, saveTomatoObj, todoName, viewAddTodoForm, setViewAddTodoForm}) => {
	

	return (
		<form className="save-form save-todo-form" method="POST" >
			<input 
				className="todo-name-input" type="text" placeholder="todo name" 
				onChange={(e) => setTodoName(e.target.value)} required  style={ !todoName && todoName.length < 1? {border: '2px solid red'}: { border: '2px solid green'} }  
			/>
			<section className="countdown-settings">
				<button type="button" value="save todo" onClick={() => saveTomatoObj('todo')}>
					Save todo
				</button>
				<aside className="close-timer">
					<button onClick={() => setViewAddTodoForm(!viewAddTodoForm)}>
						<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
							<line x1="2.12132" y1="3" x2="21.2132" y2="22.0919" stroke="white" strokeWidth="3" strokeLinecap="round"/>
							<line x1="2.3934" y1="21.4852" x2="21.4853" y2="2.39336" stroke="white" strokeWidth="3" strokeLinecap="round"/>
						</svg>
					</button>
				</aside>
			</section>
		</form>
	)
}

export default AddTodoForm;
