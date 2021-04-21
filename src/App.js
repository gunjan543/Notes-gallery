import LandingPage from "./pages/landing";
import Branches from "./components/branches";
import UploadNotes from "./pages/uploadNotes";
import FilterSubjects from "./pages/FilterSubjects"
import { BrowserRouter } from "react-router-dom";
import Route from 'react-router-dom/Route';
function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
    <Route path="/" exact strict component ={LandingPage} />
    <Route path="/filter" exact strict component ={FilterSubjects} />
    <Route path="/upload" exact strict component ={UploadNotes} />
    
    </BrowserRouter>
    </div>
    
  );
}

export default App;
