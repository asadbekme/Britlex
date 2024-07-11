import HomeImg from "@/assets/home-img.svg";
import Button from "../button/button";

const Home = () => {
  return (
    <section id="home" className="container py-3 lg:py-0">
      <div className="flex flex-col-reverse gap-5 md:flex-row md:items-center justify-between">
        <div className="flex-1 flex flex-col items-center text-center md:text-left md:items-start gap-4 md:gap-5 lg:gap-6">
          <h1 className="w-full lg:w-2/3 relative text-4xl md:text-5xl lg:text-6xl md:leading-tight lg:leading-snug font-semibold text-black h1-with-icon">
            Learn Any Foreign Language
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-normal text-secondary">
            With our teachers who write a program for each student, you will be
            able to make your first sketch after the first lesson.
          </p>
          <Button variant="black" size="lg">
            Get started
          </Button>
        </div>

        <div className="flex-1">
          <img src={HomeImg} alt="home image" />
        </div>
      </div>
    </section>
  );
};

export default Home;
