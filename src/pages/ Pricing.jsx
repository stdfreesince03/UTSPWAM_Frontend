import '../styles/Pricing.css'
import Faq from "../components/Faq/Faq.jsx";
import {pricingFaqData} from "../data/faqData.js";
import pricingFaqStyles from "../components/Faq/PricingFaq.module.scss"
import PricingCards from "../components/PricingCards/PricingCards.jsx";
import {pricingData} from "../data/pricingData.js";
import pricingCardsStyles from "../components/PricingCards/PricingCards_Pricing.module.css";

export default function PricingPage(){
    return (
        <div className="container-pricing-page">
            <PricingCards data={pricingData} styles={pricingCardsStyles}></PricingCards>
            <Faq data={pricingFaqData} styles={pricingFaqStyles}></Faq>

        </div>
    );
}