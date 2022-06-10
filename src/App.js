import './App.css';

//components 
import ContactsApp from './components/ContactsApp';
import Navbar from './components/shared/Navbar';

// toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactsApp />
      <ToastContainer rtl />
    </div>
  );
}

export default App;
