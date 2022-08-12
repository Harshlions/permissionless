import Bar from './components/progress bar/Bar'
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Loading from './components/progress bar/Loading'
 
function App() {
  return (
    <>
     <Router>
       <Routes>
         <Route exact path="/" element={<Bar/>}/>
         <Route exact path="/Loading" element={<Loading/>}/>
       </Routes>
     </Router>
    </>
  );
}

export default App;
