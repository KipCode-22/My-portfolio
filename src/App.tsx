// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects"
import Footer from "./components/Footer";
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>

//       <h1 className="text-3xl font-bold underline text-red-700">
//         Hello world!
//       </h1>

//     </>
//   )
// }

// OU

// export default App

export default function App() {
  return (
      <div>

        <div className="p-5 md:px-[15%]">
          <Navbar/>
          <Home/>
        </div>

        <div>
           <About/>
        </div>

        <div className="p-5 md:px-[15%]">
            <Experiences/>
            <Projects/>
        </div>
        <Footer/>
      </div>
  )
}
