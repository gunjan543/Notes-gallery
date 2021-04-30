import LandingPage from "./pages/landing";
import Branches from "./components/branches";
import UploadNotes from "./pages/uploadNotes";
import FilterSubjects from "./pages/FilterSubjects"
import { BrowserRouter } from "react-router-dom";
import Route from 'react-router-dom/Route';
import Login from "./pages/Login/login";
import Signup from "./pages/Login/Signup";
import Activate from "./pages/Login/activate";
import Profile from "./pages/Profile";
import DisplayNotes from "./pages/DisplayNotes";
import Subjects from "./pages/Subjects";
import Type from "./pages/Type";
function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
    <Route path="/" exact strict component ={LandingPage} />
    <Route path="/filter" exact strict component ={FilterSubjects} />
    <Route path="/upload" exact strict component ={UploadNotes} />
    <Route path="/login" exact strict component ={Login} />
    <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
    <Route path="/register" exact strict component ={Signup} />
    <Route path="/profile" exact strict component ={Profile} />
    <Route path="/displayNotes" exact strict component ={DisplayNotes} />
    <Route path="/subjects" exact strict component ={Subjects} />
    <Route path="/type" exact strict component ={Type} />
    </BrowserRouter>
    </div>
    
  );
}

export default App;
