import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <div className='max max-w-full-lg mx-auto'>
        <Toaster />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
