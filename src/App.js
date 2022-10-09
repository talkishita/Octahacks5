
import './App.css';
import Navbar from './components/Navbar'
import LeftNavbar from './components/leftNav'
import Prizes from './pages/Prizes'
function App() {
  return (
    <>
      <section class="h-screen w-screen">
      <div>
      <Navbar/>
      </div>
      <>
      <LeftNavbar/>
      </>
      <>
      <Prizes/>
      </>  
    </section>
    </>
  );
}

export default App;
