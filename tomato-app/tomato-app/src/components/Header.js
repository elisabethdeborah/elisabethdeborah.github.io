import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

	const [open, setOpen] = useState(false)
	const handleToggle = () => setOpen(!open)

	return (
		<header>
			<section className="links-top">
				<Link to="/"><li>Countdown</li></Link>
				<Link to="/createTomato"><li>Create</li></Link>
			</section>
			<aside className={`${open ? "navbar-x navbar-x-open":"navbar-x"}`} onClick={handleToggle} >
			<svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
				<line className="line-1" x1="1.5" y1="1.5" x2="28.5" y2="1.5" stroke="white" strokeWidth="3" strokeLinecap="round"/>
				<line className="line-2" x1="1.5" y1="7.5" x2="28.5" y2="7.5" stroke="white" strokeWidth="3" strokeLinecap="round"/>
				<line className="line-3" x1="1.5" y1="13.5" x2="28.5" y2="13.5" stroke="white" strokeWidth="3" strokeLinecap="round"/>
			</svg>
				{/* {open ? "X"
			: <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
				<line className="line-1" x1="2.5" y1="1.5" x2="26.5" y2="1.5" stroke="white" strokeWidth="3" strokeLinecap="round"/>
				<line className="line-2" x1="2.5" y1="7.5" x2="26.5" y2="7.5" stroke="white" strokeWidth="3" strokeLinecap="round"/>
				<line className="line-3" x1="2.5" y1="13.5" x2="26.5" y2="13.5" stroke="white" strokeWidth="3" strokeLinecap="round"/>
			</svg>} */}
			</aside>
			<nav className={`${open ? "navbar navbar-open":"navbar"}`}>
				<ul onClick={handleToggle}>
					<Link to="/"><li>Start</li></Link>
					<Link to="/"><li>Countdown timer</li></Link>
					<Link to="/createTomato"><li>Create tomato</li></Link>
					<Link to="/myTomatoes"><li>My Tomatoes</li></Link>
					<Link to="/myTodos"><li>My TomaTodos</li></Link>
					<Link to="/Settings"><li>Settings</li></Link>
				</ul>
			</nav>
		</header>
	)
}

export default Header