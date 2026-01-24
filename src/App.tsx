import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Socials from './pages/Socials';
import Error from './pages/Error';

import Private from './routes/Private';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/admin',
		element: (
			<Private>
				<Admin />
			</Private>
		),
	},
	{
		path: '/admin/social',
		element: (
			<Private>
				<Socials />
			</Private>
		),
	},
	{
		path: '*',
		element: <Error />,
	},
]);

export default router;
