import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import router from './App.tsx';
import { RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ToastContainer autoClose={3000} />
		<RouterProvider router={router} />
	</StrictMode>,
);
