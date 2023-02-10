import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import ExerciseContainer from './Components/ExerciseContainer/ExerciseContainer';
import ProfileContainer from './Components/ProfileContainer/ProfileContainer';

function App() {
  return (

    <div className="row">
      
    <div className="col-lg-9">
        <ExerciseContainer></ExerciseContainer>
      </div>
      <div className="col-lg-3">
        <ProfileContainer></ProfileContainer>
      </div>

    </div>

  );
}

export default App;
