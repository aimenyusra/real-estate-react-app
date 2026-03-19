import Home from "./pages/home/Home"
import PropertyPage from "./pages/PropertyPage/PropertyPage"
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage"
import{ BrowserRouter, Routes, Route } from "react-router-dom"
import { useTranslation } from "react-i18next"
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails"
import ContactPage from "./pages/ContactPage/ContactPage"
import { Browser } from "leaflet"
function App(){
const { i18n } = useTranslation()
return(
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/properties" element={<PropertyPage/>}/>
<Route
  path="/property/:id"
  element={<PropertyDetails />}
/>
<Route path="/favorites" element={<FavoritesPage/>}/>
<Route path="/contact" element={<ContactPage/>}/>
{/* <div dir={i18n.language === "ar" ? "rtl" : "ltr"}></div> */}
</Routes>

</BrowserRouter>
)

}

export default App
