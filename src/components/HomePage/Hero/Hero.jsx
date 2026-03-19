import "./Hero.css"
import { useTranslation } from "react-i18next"
function Hero(){
const { t } = useTranslation()

return(
<section className="hero">

<div className="hero-overlay"/>

<div className="container hero-content">

<div className="hero-text">

<h1>{t("heroTitle")}</h1>

<p>
{t("heroDescription")}
</p>

<div className="hero-buttons">

<button className="btn-primary">
{t("browseProperties")}
</button>

<button className="btn-secondary">
{t("contactAgent")}
</button>

</div>

</div>

</div>

</section>


)

}

export default Hero