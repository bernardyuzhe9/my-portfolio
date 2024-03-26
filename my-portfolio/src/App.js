import './App.css';
import './Component/Component.css';
import Navbar from './Navbar'
import SideNav from './SideNav';
import BentoGridDemo from './BentoGridDemo'; 

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SideNav/>
      <BentoGridDemo/>
    </div>
  );
}

export default App;
