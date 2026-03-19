import Navbar from "../../components/HomePage/Navbar/Navbar"
import Hero from "../../components/HomePage/Hero/Hero"
import FeaturedProperties from "../../components/HomePage/FeaturedProperties/FeaturedProperties"
import WhyChooseUs from "../../components/HomePage/WhyChooseUs/WhyChooseUs"
import Footer from "../../components/HomePage/Footer/Footer"

import Testimonials from "../../components/HomePage/Testimonials/Testimonials";

function Home(){

return(
<>
<Navbar/>
<Hero/>

<FeaturedProperties/>
<WhyChooseUs/>
<Testimonials/>
<Footer/>
</>
)

}

export default Home