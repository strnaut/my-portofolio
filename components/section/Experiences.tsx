import { experiences } from "@/data/data";

function Experiences() {
  return (
    <section
      id="experiences"
      className="py-12 flex flex-col items-center justify-center "
    >
      <div className="flex items-center mb-16 gap-5 w-full">
        <div className="grow h-px border border-primary-a50" />
        <h1 className="text-4xl font-bold text-primary-a20 text-center ">
          Experiences
        </h1>
        <div className="grow h-px border border-primary-a50" />
      </div>

      <div className="group relative flex gap-6 pb-12 w-full">
        <div className="absolute left-4.75 top-2 h-full w-0.5 bg-surface-a10 group-last:hidden" />
        <div className="flex-1">
          {experiences.map((exp) => (
            <div key={exp.position}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-1 border border-red-5000">
                <h3 className="text-xl font-bold text-white">
                  {exp.position} @ {exp.company}
                </h3>
                <span className="text-sm text-surface-a30 font-mono">
                  {exp.date}
                </span>
              </div>

              {/* Deskripsi/Tanggung Jawab */}
              <div className="text-surface-a20 space-y-3">
                <p className="text-base leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
