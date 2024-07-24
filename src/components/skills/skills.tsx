import { cn } from "@/utils/cn";
import { skillsData } from "@/utils/constants";
import SkillCard from "./skill-card";

const Skills = () => {
  return (
    <section id="skills" className="container py-10 lg:py-20">
      <h2 className="text-center text-black font-semibold text-4xl mb-10">
        Skills
      </h2>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {skillsData.map((skill, index) => (
          <SkillCard
            className={cn(
              "flex flex-col items-start gap-5 bg-gray-light p-6 rounded-xl",
              index === 0 && "lg:row-span-2",
              index === 3 && "lg:col-span-2 lg:flex-row-reverse lg:items-center"
            )}
            key={skill.title}
            {...skill}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
