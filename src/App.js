import './input.css'
import './App.css';
import Firstwidget from './Firstwidget';
import line from './Rectangle 5.png'
import Secondwidget from './Secondwidget';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App flex justify-between">

      <div>
hi
      </div>
<div className=' mt-[10vh] mr-[5vw]'>
<BrowserRouter>
      <Firstwidget/>

      <img className=' mt-5 mb-5 w-[80%] ml-[30px]' src={line} alt=''/>
<Secondwidget/>
<img className=' mt-5 mb-5 w-[80%] ml-[30px]' src={line} alt=''/>
      </BrowserRouter>
</div>

   

    </div>
  );
}

export default App;
