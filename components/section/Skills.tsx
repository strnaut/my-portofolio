import { Skill_tools } from "@/data/data";
import { Icon } from "@iconify/react";

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 flex flex-col items-center justify-center "
    >
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-2">
          Skills & <span className="text-primary-a20">Tools</span>
        </h2>
        <div className="h-1 w-20 bg-primary-a20 rounded-full shadow-[0_0_10px_rgba(var(--primary-a20),0.5)]"></div>
      </div>
      <div className="grid grid-cols-6 gap-4">
        {Skill_tools.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col bg-surface-a20 w-45 h-35 rounded-md gap-4 p-4 border border-primary-a50 items-center justify-center transition hover:-translate-y-1 duration-300 shadow-md hover:shadow-primary-a0/50"
          >
            <Icon icon={skill.icon} className="text-5xl" />

            <div className="text-xl ">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
