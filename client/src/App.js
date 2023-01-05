import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/routes';

function App() {
  return (
    <div className="App">
      <div className='max max-w-screen-lg mx-auto'>
        {/* <Toaster /> */}
        <RouterProvider router={router} />
        {/* <h1>HHHHHHHHHHHHHH</h1> */}
      </div>
    </div>
  );
}

export default App;
