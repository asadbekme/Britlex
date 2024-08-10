type PricingCardProps = {
  title: string;
  description: string;
  img: string;
  price: string;
};

const PricingCard = ({ title, description, img, price }: PricingCardProps) => {
  return (
    <div className="flex flex-col justify-between items-center sm:items-start gap-4 sm:gap-5">
      <div className="h-72 grid place-items-center">
        <img src={img} alt={`${title} image`} />
      </div>
      <h3 className="text-black font-semibold text-xl">{title}</h3>
      <p className="text-secondary text-center sm:text-left">{description}</p>
      <button className="flex items-center gap-2 bg-gray-dark px-6 hover:scale-105 transition-all py-[10px] rounded-md">
        <span className="inline-block text-primary text-xl sm:text-2xl">
          {price}
        </span>
        per month
      </button>
    </div>
  );
};

export default PricingCard;
