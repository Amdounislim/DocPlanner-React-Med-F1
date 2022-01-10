import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main';

function App() {
  let clients =[
    {
      image:"https://www.docplanner.com/icons/icon-patients.svg",
      title: "For patients",
      description : "Find a doctor, book a visit and solve any health-related doubt",
      color:"#00b39b",
      country1 : ["choose country", "Brasile", "Italy", "Tunis"]
    },
    {
      image:"https://www.docplanner.com/icons/icon-doctors.svg",
      title: "For doctors",
      description : "Save time managing visits and cut no-shows by half",
      color:"#3d83df",
      country1 : ["choose country", "Brasile", "Italy", "Tunis"]
    },
    {
      image:"https://www.docplanner.com/icons/icon-clinics.svg",
      title: "For clinics",
      description : "Deliver an exceptional patient experience in your clinic",
      color:"#1b2734",
      country1 : ["choose country", "Brasile", "Italy", "Tunis"],
      country2 : ["choose country", "Brasile", "Italy", "Tunis"]
    }
  ]
  return (
    <div className="App">
     <Header />
     <Main clients={clients} />
    </div>
  );
}

export default App;
