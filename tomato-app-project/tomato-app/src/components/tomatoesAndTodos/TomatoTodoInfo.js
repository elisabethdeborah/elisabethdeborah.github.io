


const TomatoTodoInfo = ({ tomato, editMatch, setNewName, setNewHours, setNewMinutes, setNewSeconds }) => {
	
	


	return (
		<>
			{ 
				editMatch===tomato ?
				<section className="tomato-text-group tomato-edit" >
					<h3>
						<input type="text" defaultValue={tomato.name} onChange={(e) => setNewName(e.target.value)} />
					</h3>
					<section className="tomato-time-format">
						<input type="number" defaultValue={Math.floor((tomato.time/60/60)%60) } min='0' max="24" name="hours" placeholder="HH" onChange={(e) => setNewHours(parseInt(e.target.value))} />
						<input type="number" min="0" max="59" defaultValue={Math.floor((tomato.time/60)%60)} name="minutes" placeholder="MM" onChange={(e) => setNewMinutes(parseInt(e.target.value))} />
						<input type="number" min="0" max="59" defaultValue={Math.floor(tomato.time%60)} name="seconds" placeholder="SS" onChange={(e) => setNewSeconds(parseInt(e.target.value))} />
					</section>
				</section>
				: 
				<section className="tomato-text-group">
					<h3>{tomato.name}</h3>
					{
						tomato.time > 0 ?
						<section className="tomato-time-format">
							<h4>
								{
									(Math.floor((tomato.time/60/60)%60)) <10 ? 
									'0'+ (Math.floor((tomato.time/60/60)%60)) 
									: (Math.floor((tomato.time/60/60)%60)) 
								}
							</h4>
							<h4>
								{
									(Math.floor((tomato.time/60)%60)) < 10 ? 
									'0'+(Math.floor((tomato.time/60)%60))
									:((Math.floor((tomato.time/60))%60))
								}
							</h4>
							<h4>
								{
									(Math.floor(tomato.time%60)) < 10 ? 
									'0'+(Math.floor(tomato.time%60)%60)
									:((Math.floor(tomato.time%60)%60))
								}
							</h4>
						</section>
						: null
					}
				</section>
			}
		</>
	)
}

export default TomatoTodoInfo