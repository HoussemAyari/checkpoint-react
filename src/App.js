import './App.css';
import NavbarCostum from './component/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainCard from './component/main/main';
import NavbarCollapse from './component/footer/footer';


function App() {
  return (
    <div className="App">
     <NavbarCostum />
     <MainCard />
     <NavbarCostum />
    </div>
  );
}

export default App;
