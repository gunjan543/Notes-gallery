import React,{lazy, Suspense} from 'react';
import { BrowserRouter } from "react-router-dom";
import Loader from './components/Loader';
import './css/branches.css'
import './css/displayNotes.css'
import './css/landing.css'
import './css/loader.css'
import './css/login.css'
import './css/main.css'
import './css/navbar.css'
import './css/offer.css'
import './css/profile.css'
import './css/subjects.css'
import './css/uploadNotes.css'
const LandingPage=React.lazy(()=> import( "./pages/landing"));
const UploadNotes=React.lazy(()=> import( "./pages/uploadNotes"));
const FilterSubjects=React.lazy(()=> import( "./pages/FilterSubjects"));
const Route=React.lazy(()=> import( 'react-router-dom/Route'));
const Login=React.lazy(()=> import( "./pages/Login/login"));
const Signup=React.lazy(()=> import( "./pages/Login/Signup"));
const Activate=React.lazy(()=> import( "./pages/Login/activate"));
const Profile =React.lazy(()=> import("./pages/Profile"));
const DisplayNotes =React.lazy(()=> import("./pages/DisplayNotes"));
const Subjects=React.lazy(()=> import( "./pages/Subjects"));
const Type=React.lazy(()=> import( "./pages/Type"));
const Forget=React.lazy(()=> import( "./pages/Login/ForgetPassword"));
const Reset=React.lazy(()=>import("./pages/Login/Reset"))
function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
    <Suspense fallback={<Loader></Loader>}>
    
    <Route path="/" exact strict component ={LandingPage} />
    <Route path="/filter" exact strict component ={FilterSubjects} />
    <Route path="/upload" exact strict component ={UploadNotes} />
    <Route path="/login" exact strict component ={Login} />
    <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
    <Route path="/forgotPassword" exact strict component ={Forget} />
    <Route path="/register" exact strict component ={Signup} />
    <Route path="/profile" exact strict component ={Profile} />
    <Route path="/displayNotes" exact strict component ={DisplayNotes} />
    <Route path="/subjects" exact strict component ={Subjects} />
    <Route path="/type" exact strict component ={Type} />
    <Route path='/users/password/reset/:token' exact render={props => <Reset {...props} />} />
  
    </Suspense>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
