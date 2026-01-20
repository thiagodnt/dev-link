import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Socials from './pages/Socials';
import Error from './pages/Error';

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
		element: <Admin />,
	},
	{
		path: '/admin/social',
		element: <Socials />,
	},
	{
		path: '*',
		element: <Error />,
	},
]);

export default router;
