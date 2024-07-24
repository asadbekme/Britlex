import aboutUsImg from "@/assets/about-us.svg";
import { aboutStatsData } from "@/utils/constants";

const AboutUs = () => {
  return (
    <section id="about-us" className="container py-10 lg:py-20">
      <h2 className="text-center md:text-left text-black font-semibold text-4xl mb-5 md:mb-0 capitalize">
        About us
      </h2>
      <div className="flex flex-col-reverse gap-5 items-center md:flex-row md:justify-between">
        <div className="flex-1 flex flex-col gap-5">
          <p className="text-secondary text-center md:text-left">
            The model offers a framework for discussing problems related to the
            user's experience, as well as possible ways and means of solving
            them. Application development begins at the top level (strategy),
            where the future software product is described quite abstractly from
            the point of view of the expectations of both users and the
            customer.
          </p>
          <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-between gap-5">
            {aboutStatsData.map((item) => (
              <div
                key={item.aboutStatsTitle}
                className="flex flex-col items-center justify-center gap-2"
              >
                <h3 className="text-primary font-semibold text-3xl">
                  {item.aboutStatsTitle}
                </h3>
                <p className="text-secondary">{item.aboutStatsDescription}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img src={aboutUsImg} alt="about-us image" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
