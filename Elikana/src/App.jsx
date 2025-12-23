import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import './index.css'
import Name from "./modals/Name";
import Project from "./projects/Project";

export default function App() {


  return (

    <div className="app flex-col items-center ">
     
      <div className=" w-full">
        <Home />
      </div>
    
    
    <Project/>
  </div>
  );
}
