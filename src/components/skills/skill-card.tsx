import Button from "../button/button";

type SkillCardProps = {
  className: string;
  title: string;
  primaryDescription: string;
  secondaryDescription?: string;
  imgUrl: string;
  btnTitle: string;
};

const SkillCard = ({
  className,
  title,
  primaryDescription,
  secondaryDescription,
  imgUrl,
  btnTitle,
}: SkillCardProps) => {
  return (
    <div className={className}>
      <img src={imgUrl} alt={`${title} image`} />
      <div className="flex flex-col gap-4 items-start sm:justify-between lg:justify-start sm:items-stretch lg:items-start">
        <h3 className="text-black font-semibold text-xl">{title}</h3>
        <p className="text-secondary">{primaryDescription}</p>
        {secondaryDescription && (
          <p className="text-secondary">{secondaryDescription}</p>
        )}
        <Button variant="black" size="md">
          {btnTitle}
        </Button>
      </div>
    </div>
  );
};

export default SkillCard;
