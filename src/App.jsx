import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { SignUp } from "./pages/SignUp"
import { Login } from "./pages/Login"
import { Discounts } from "./pages/Discounts"
import { Bag } from "./pages/Bag"
import { Shipment } from "./pages/Shipment"
import { ClothSelection } from "./pages/ClothSelection"
import { Payment } from "./pages/Payment"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/landing" element={<LandingPage/>}/>
        <Route path="/log-in" element={<Login/>}/>
        <Route path="/discounts" element={<Discounts/>}/>
        <Route path="/bag" element={<Bag/>}/>
        <Route path="/shipment" element={<Shipment/>}/>
        <Route path="/cloth-selection" element={<ClothSelection/>}/>
        <Route path="/payment" element={<Payment/>}/>
      </Routes>
    </BrowserRouter>
  )

}

export default App
