import React from "react";
import "./Testimonials.css";
import { useTranslation } from "react-i18next";

function Testimonials(){

const { t } = useTranslation();

return(

<section className="testimonials">

<h2>{t("testimonialsTitle")}</h2>

<div className="testimonial-container">

<div className="testimonial-card">
<p>"{t("client1")}"</p>
<h4>Sarah Ahmed</h4>
</div>

<div className="testimonial-card">
<p>"{t("client2")}"</p>
<h4>James Walker</h4>
</div>

</div>

</section>

)

}

export default Testimonials