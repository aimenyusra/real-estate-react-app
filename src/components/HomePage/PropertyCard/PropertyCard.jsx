import "./PropertyCard.css"
import { useTranslation } from "react-i18next"
import { ThemeProvider } from "../../../context/ThemeContext"
function PropertyCard({property}){

const { t } = useTranslation()

return(

<div className="property-card">

<img src={property.image} alt={property.title}/>

<div className="property-info">

<h3>{t(property.title)}</h3>

<p>{t(property.location)}</p>

<span className="price">{t(property.price)}</span>

<div className="details">
{t("beds")}: {property.beds} • {t("baths")}: {property.baths}
</div>

</div>

</div>

)

}

export default PropertyCard