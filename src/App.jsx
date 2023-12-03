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
import { Profile } from './pages/Profile';
import { MenClothes } from './pages/MenClothes';
import { WomenClothes } from './pages/WomenClothes';
import { ChildrenClothes } from './pages/ChildrenClothes';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/landing" element={<LandingPage/>}/>
        <Route path="/log-in" element={<Login/>}/>
        <Route path="/bag" element={<Bag/>}/>
        <Route path="/discounts" element={<Discounts/>}/>
        <Route path="/men-clothes" element={<MenClothes/>}/>
        <Route path="/women-clothes" element={<WomenClothes/>}/>
        <Route path="/children-clothes" element={<ChildrenClothes/>}/>
        <Route path="/shipment" element={<Shipment/>}/>
        <Route path="/cloth-selection/:id" element={<ClothSelection/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )

}

export default App