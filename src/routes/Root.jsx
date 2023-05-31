import { Outlet, NavLink } from 'react-router-dom'
import '../App.css'

const Root = () => (
	<>
	<header>
		<h1> Fullstack app example </h1>
		<nav>
			<NavLink to="/"> Städer </NavLink>
			<NavLink to="/admin"> Admin </NavLink>
		</nav>
	</header>
	<hr />
	<main>
		<Outlet />
	</main>
	</>
)

export default Root
