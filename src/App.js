import './App.css';
import Quizz from "./components/quizz/Quizz";
import {BrowserRouter,Route} from "react-router-dom";
import Header from "./components/Header/Header";
import CreateTest from "./components/CreateTest/CreateTest";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <div className="App">
            <Route path='/quizz' render={() => <Quizz/>}/>
            <Route path='/createTest' render={() => <CreateTest/>}/>
        </div>
    </BrowserRouter>
  );
}

export default App;
