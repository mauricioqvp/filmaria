import { ToastContainer } from 'react-toastify';
import RoutsApp from './Components/RoutsApp';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer autoClose={3000} />
      <RoutsApp />
    </div>
  );
}

export default App;
