import { Home } from "./components/Home"
import { Header } from "./components/Header"
import { MovieSession } from "./components/MovieSession"
import { BrowserRouter ,Routes , Route} from "react-router-dom"
import './global.css'
import { Checkout } from "./components/Checkout"
// import { ApplicationContextProvider } from "./contexts/ApplicationContextProvider"
import { LogIn } from "./components/LogIn"
import { SignUp } from "./components/SignUp"
import { AboutUs } from "./components/AboutUs"
import { Payment } from "./components/Payment"
import { Footer } from "./components/Footer"
import { CreateMovieSession } from "./components/CreateMovieSession"
import { CreateMovie } from "./components/CreateMovie"

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <ApplicationContextProvider> */}
          <Header />
          <Routes>
            <Route path="/LogIn" element={<LogIn/>} />
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path="/CreateMovie" element={<CreateMovie/>} />
            <Route path="/CreateMovieSession" element={<CreateMovieSession/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/MovieSession/" element={<MovieSession/>} />
            <Route path="/Checkout/" element={<Checkout/>} />
            <Route path="/Payment" element={<Payment/>} />
            <Route path="/AboutUs" element={<AboutUs/>} />
          </Routes>  
          <Footer />           
        {/* </ApplicationContextProvider>           */}
      </BrowserRouter> 
    </div>
  )
}

export default App
