import ContactImg from "@/assets/contact-img.svg";
import Button from "../button/button";

const Contact = () => {
  return (
    <section id="contact" className="container py-10 lg:py-20">
      <h2 className="text-black md:hidden text-center font-semibold text-4xl mb-10">
        Contact us
      </h2>
      <div className="flex flex-col gap-5 items-center md:flex-row md:justify-between">
        <div className="flex-1 md:flex-[0.75]">
          <img src={ContactImg} alt="contact image" />
        </div>
        <div className="flex-1 flex flex-col gap-5 lg:gap-8">
          <h2 className="text-black hidden md:block font-semibold text-4xl">
            Contact us
          </h2>
          <p className="text-center md:text-left text-secondary">
            Discover your current English level by taking our free online
            English test. Sign up to our newsletter for learning tips and free
            resources
          </p>
          <form className="w-full flex flex-col items-start sm:flex-row sm:items-center gap-5 md:gap-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full flex-1 px-5 py-3 lg:py-4 border text-base text-secondary rounded-[10px] border-secondary focus:outline-none"
            />
            <Button variant="black" size="md">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
