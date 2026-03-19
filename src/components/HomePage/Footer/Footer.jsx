import "./Footer.css"
import { useTranslation } from "react-i18next"

function Footer(){
const { t } = useTranslation()
return(

<footer className="footer">

<div className="container footer-grid">

<div>
<h2>{t("footerCompany")}</h2>
<p>{t("footerDescription")}</p>
</div>

<div>
<h4>{t("footerLinks")}</h4>
<ul>
<li>{t("footerHome")}</li>
<li>{t("footerProperties")}</li>
<li>{t("footerContact")}</li>
</ul>
</div>

<div>
<h4>{t("footerContactInfo")}</h4>
<p>{t("footerAddress")}</p>
<p>{t("footerEmail")}</p>
</div>

</div>

</footer>

)
}
export default Footer