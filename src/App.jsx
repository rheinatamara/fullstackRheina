
import { BrowserRouter } from "react-router-dom"
import {Contact,Experience,Hero,Navbar,Works,StarsCanvas,About,Footer} from './components'


const App = () => {
  
  return (
    <BrowserRouter>
        <div className="relative z-0 bg-primary overflow-hidden">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar/>
              <Hero/>
            </div>
            <About/>
            <Experience/>
            <Works/>
            <div className='relative z-0'>
              <Contact />
              <StarsCanvas />
              <Footer/>
            </div>
          </div> 

    </BrowserRouter>
  )
}

export default App
