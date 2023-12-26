import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';

// Root component contains Routes and Route components

const router = createBrowserRouter([
  {
    path: '*',
    Component: Root,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
