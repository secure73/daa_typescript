import './App.css';
import Ali from './components/Ali';
import Merker from './components/Merker';
import StudentList from './components/StudentList';
import Student from './components/Student';

function App() {
  const users = [
    <Student studentName='ali' studentAge={15}/>
  ]
  return (
    <div className="App">
      <Ali/>
      <Merker/>
      <StudentList>
        <Student studentName='ali' studentAge={15}/>
        <Student studentName='ali' studentAge={15}/>
        <Student studentName='ali' studentAge={15}/>
        <Student studentName='ali' studentAge={15}/>
      </StudentList>
    </div>
  );
}

export default App;
