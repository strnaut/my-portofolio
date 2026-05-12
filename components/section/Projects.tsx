import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/data";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 flex flex-col items-center justify-center "
    >
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-2">
          My <span className="text-primary-a20">Projects</span>
        </h2>
        <div className="h-1 w-20 bg-primary-a20 rounded-full shadow-[0_0_10px_rgba(var(--primary-a20),0.5)]"></div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {projects.map((project) => (
          <Link
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden border border-primary-a50 rounded-md"
          >
            <Image
              src={project.image}
              alt={project.name}
              width={500}
              height={500}
              className="w-full h-85 object-contain transition-transform duration-500 group-hover:scale-105 bg-surface-a0 "
              draggable={false}
            />
            <div className="absolute bottom-0 left-0 right-0 z-10 bg-surface-a20 border border-primary-a30 p-2 ms-4 mb-4 w-fit rounded-md group-hover:translate-y-15 transition-transform duration-500 delay-200">
              <h3 className="flex justify-center text-md font-semibold text-primary-a20">
                {project.name}
              </h3>
            </div>
            <div
              className={` absolute inset-0 ${project.theme === "dark" ? "bg-primary-a30" : "bg-surface-a10"} opacity-0 group-hover:opacity-90 w-full h-full transition-all duration-500 `}
            />
            <div
              className={` absolute inset-0 p-4 opacity-0 ${project.theme === "dark" ? "text-black" : "text-primary-a30"} group-hover:opacity-100 transition-all duration-500 `}
            >
              <h3 className="text-lg font-bold  mb-2">{project.name}</h3>
              <p className="text-sm ">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
