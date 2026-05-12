"use client";

import { Icon } from "@iconify/react";
import { Skill_tools } from "@/data/data";

function Skills() {
  const categories = [
    {
      title: "Frontend & Languages",
      skills: Skill_tools.filter((s) =>
        [
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Tailwind",
        ].includes(s.name),
      ),
    },
    {
      title: "Backend & Database",
      skills: Skill_tools.filter((s) =>
        [
          "Laravel",
          "CodeIgniter 4",
          "Python",
          "C++",
          "MySQL",
          "PostgreSQL",
        ].includes(s.name),
      ),
    },
    {
      title: "Tools & Design",
      skills: Skill_tools.filter((s) =>
        ["Git", "Figma", "Draw.io", "VSCode"].includes(s.name),
      ),
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container max-w-5xl px-6 mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-2">
            Skills & <span className="text-primary-a20">Tools</span>
          </h2>
          <div className="h-1 w-20 bg-primary-a20 rounded-full shadow-[0_0_10px_rgba(var(--primary-a20),0.5)]"></div>
        </div>
        <div className="flex flex-col gap-12">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-sm uppercase tracking-[0.3em] text-white/90 font-bold px-2 border-l-2 border-primary-a20">
                {cat.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-surface-a10/80 border border-white/5 hover:border-primary-a20/30 transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-primary-a20/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />

                    <Icon
                      icon={skill.icon}
                      className="text-4xl mb-3 group-hover:scale-110 transition-all duration-300"
                    />

                    <span className="text-xs font-medium text-surface-a50 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
