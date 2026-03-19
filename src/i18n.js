import i18n from "i18next"
import { initReactI18next } from "react-i18next"
// import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs"

i18n.use(initReactI18next).init({

resources:{

en:{
translation:{

home:"Home",
properties:"Properties",
favorites:"Favorites",
compare:"Compare",
contact:"Contact",
  heroTitle: "Find Your Dream Property in Dubai",
  heroDescription:
    "Explore luxury apartments, villas, and premium investment opportunities in Dubai's most prestigious locations.",
  browseProperties: "Browse Properties",
  contactAgent: "Contact Agent" ,

featuredTitle:"Featured Properties",

beds:"Beds",
baths:"Baths",

property1Title:"Luxury Marina Apartment",
property1Location:"Dubai Marina",

property2Title:"Palm Jumeirah Villa",
property2Location:"Palm Jumeirah",

property3Title:"Downtown Skyline Apartment",
property3Location:"Downtown Dubai",
WhyChooseUs:"Why Choose Us?",
primeTitle: "Prime Locations",
primeDesc: "Access Dubai's most prestigious property areas",
roiTitle: "High ROI",
roiDesc: "Invest in properties with strong rental returns",
agentsTitle: "Trusted Agents",
agentsDesc: "Work with verified professional agents",
  footerCompany: "Dubai Estate",
  footerDescription: "Luxury real estate platform for premium properties in Dubai.",

  footerLinks: "Links",
  footerHome: "Home",
  footerProperties: "Properties",
  footerContact: "Contact",

  footerContactInfo: "Contact Info",
  footerAddress: "Dubai, UAE",
  footerEmail: "info@dubaiestate.com",

  searchTitle: "Find Your Dream Property",
location: "Location",
propertyType: "Property Type",
priceRange: "Price Range",
search: "Search",

testimonialsTitle: "What Our Clients Say",
client1: "Amazing service and beautiful homes!",
client2: "They helped me find my dream property quickly.",
heroSearchLocation: "Location",
heroSearchType: "Property Type",
heroSearchPrice: "Price Range",
heroSearchButton: "Search"

}
},

ar:{
translation:{

home:"الرئيسية",
properties:"العقارات",
favorites:"المفضلة",
compare:"مقارنة",
contact:"اتصل بنا",
  heroTitle: "اعثر على عقار أحلامك في دبي",
  heroDescription:
    "استكشف الشقق الفاخرة والفيلات وفرص الاستثمار المميزة في أرقى مناطق دبي.",
  browseProperties: "تصفح العقارات",
  contactAgent: "تواصل مع وكيل",


featuredTitle:"العقارات المميزة",

beds:"غرف",
baths:"حمامات",

property1Title:"شقة فاخرة في المارينا",
property1Location:"دبي مارينا",

property2Title:"فيلا نخلة جميرا",
property2Location:"نخلة جميرا",

property3Title:"شقة سكاي لاين وسط المدينة",
property3Location:"وسط مدينة دبي",
WhyChooseUs:"لماذا تختارنا؟",
      primeTitle: "مواقع مميزة",
      primeDesc: "الوصول إلى أرقى مناطق العقارات في دبي",

      roiTitle: "عائد استثماري مرتفع",
      roiDesc: "استثمر في عقارات ذات عوائد إيجارية قوية",

      agentsTitle: "وكلاء موثوقون",
      agentsDesc: "اعمل مع وكلاء محترفين وموثوقين",

  footerCompany: "دبي إستيت",
  footerDescription: "منصة عقارية فاخرة للعقارات المميزة في دبي.",

  footerLinks: "روابط",
  footerHome: "الرئيسية",
  footerProperties: "العقارات",
  footerContact: "اتصل بنا",

  footerContactInfo: "تواصل معنا",
  footerAddress: "دبي، الإمارات",
  footerEmail: "info@dubaiestate.com",

searchTitle: "ابحث عن عقارك المثالي",
location: "الموقع",
propertyType: "نوع العقار",
priceRange: "نطاق السعر",
search: "بحث",

testimonialsTitle: "ماذا يقول عملاؤنا",
client1: "خدمة رائعة ومنازل جميلة!",
client2: "ساعدوني في العثور على منزل أحلامي بسرعة.",
heroSearchLocation: "الموقع",
heroSearchType: "نوع العقار",
heroSearchPrice: "نطاق السعر",
heroSearchButton: "بحث"
}
}

},

lng:"en",
fallbackLng:"en",

interpolation:{
escapeValue:false
}

})

export default i18n