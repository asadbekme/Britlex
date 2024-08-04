import { pricingData } from "@/utils/constants";
import PricingCard from "./pricing-card";

const Pricing = () => {
  return (
    <section id="pricing" className="container py-10 lg:py-16">
      <h2 className="text-center text-black font-semibold text-4xl mb-5 lg:mb-8">
        Pricing
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {pricingData.map((item) => (
          <PricingCard key={item.price} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
