import './App.css';

//components 
import ContactsApp from './components/ContactsApp';
import Navbar from './components/shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactsApp />
    </div>
  );
}

export default App;
