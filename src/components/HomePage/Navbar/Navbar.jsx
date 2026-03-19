import "./Navbar.css"
import { useTranslation } from "react-i18next"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import {Link} from "react-router-dom"

function Navbar(){

const { toggleTheme, theme } = useContext(ThemeContext);
const { t, i18n } = useTranslation()

  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "en" ? "ltr" : "rtl";
  };
return(

<nav className="navbar">

<div className="container nav-wrapper">

<h2 className="logo">DubaiEstate</h2>

<ul className="nav-links">
<li ><Link to="/">{t("home")}</Link></li>
<li><Link to="/properties">{t("properties")}</Link></li>
<li><Link to="/favorites">{t("favorites")}</Link></li>
<li><Link to="/compare">{t("compare")}</Link></li>
<li><Link to="/contact">{t("contact")}</Link></li>
</ul>

<div className="toggles">

<div className="language-toggle">


        {/* LANGUAGE BUTTON */}
        <button onClick={changeLanguage} className="lang-btn">
          {i18n.language === "en" ? "AR" : "EN"}
        </button>

<div className="toggle-switch" onClick={toggleTheme}>
          <div className={`toggle-circle ${theme === "dark" ? "move" : ""}`}>
            {theme === "dark" ? "☀️" : "🌙"}
          </div>
        </div>

      </div>


</div>

</div>

</nav>

)

}

export default Navbar