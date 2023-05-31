import { createBrowserRouter } from 'react-router-dom'
import Root from './routes/Root.jsx'
import ViewCities from './routes/ViewCities.jsx'
import AdminView from './routes/AdminView.jsx'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '',
				element: <ViewCities />
			},
			{
				path: 'admin',
				element: <AdminView />
			}
		]
	}
])

