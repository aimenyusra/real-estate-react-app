import Home from "./pages/Home/HomePage"
import PropertyPage from "./pages/PropertyPage/PropertyPage"
import Favourites from "./pages/Favourites/Favourites"
import{ BrowserRouter, Routes, Route } from "react-router-dom"
import { FavouritesProvider } from "./context/FavouritesContext"
import { useTranslation } from "react-i18next"
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails"
import ContactPage from "./pages/ContactPage/ContactPage"
import Compare from "./pages/Compare/Compare"
import { Browser } from "leaflet"
function App(){
const { i18n } = useTranslation()
return(
<BrowserRouter>
<FavouritesProvider>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/properties" element={<PropertyPage/>}/>
<Route
  path="/properties/:id"
  element={<PropertyDetails />}
/>
<Route path="/favorites" element={<Favourites/>}/>
<Route path="/contact" element={<ContactPage/>}/>
<Route path="/compare" element={<Compare/>}/>
{/* <div dir={i18n.language === "ar" ? "rtl" : "ltr"}></div> */}
</Routes>
</FavouritesProvider>
</BrowserRouter>
)

}

export default App
