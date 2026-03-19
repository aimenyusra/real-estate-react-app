import {FaBuilding,FaChartLine,FaHandshake} from "react-icons/fa"
import "./WhyChooseUs.css"
import { useTranslation } from "react-i18next"

function WhyChooseUs(){
const { t } = useTranslation()

return(

<section className="why">
  <h2>{t("WhyChooseUs")}</h2>

<div className="container why-grid">

<div className="why-card">
<FaBuilding size={30}/>
<h3>{t("primeTitle")}</h3>
<p>{t("primeDesc")}</p>
</div>

<div className="why-card">
<FaChartLine size={30}/>
<h3>{t("roiTitle")}</h3>
<p>{t("roiDesc")}</p>
</div>

<div className="why-card">
<FaHandshake size={30}/>
<h3>{t("agentsTitle")}</h3>
<p>{t("agentsDesc")}</p>
</div>

</div>

</section>

)
}

export default WhyChooseUs