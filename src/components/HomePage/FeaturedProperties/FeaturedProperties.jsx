import {properties} from "../../../api/properties"
import PropertyCard from "../PropertyCard/PropertyCard"
import "./FeaturedProperties.css"
import { useTranslation } from "react-i18next"
function FeaturedProperties(){

const { t } = useTranslation()

return(

<section className="featured">

<div className="container">

<h2 className="section-title">
{t("featuredTitle")}
</h2>

<div className="property-grid">

{properties.map((property)=>(
<PropertyCard
key={property.id}
property={property}
/>
))}

</div>

</div>

</section>

)

}

export default FeaturedProperties