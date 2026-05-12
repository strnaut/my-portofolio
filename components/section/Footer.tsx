import { Icon } from '@iconify/react';
import { techs } from '@/data/data';

const Footer = () => {
  return (
    <footer className="w-full py-12 border-t border-white/5 bg-surface-a0">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* SISI KIRI: Tech Stack */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-surface-a30 font-medium">
              Built with
            </span>
            <div className="flex items-center gap-5">
              {techs.map((tech) => (
                <div key={tech.name} className="group relative">
                  <Icon 
                    icon={tech.icon} 
                    className="text-2xl text-surface-a20 hover:text-primary-a0 transition-all duration-300 cursor-help"
                  />
                  {/* Tooltip simple */}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-a10 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-white border border-white/5">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SISI KANAN: Status & WM */}
          <div className="flex flex-col items-center md:items-end gap-2">
            {/* Status Badge */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary-a0/5 border border-primary-a0/20 mb-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-a0 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-a0"></span>
              </span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-primary-a0">
                Available for Work
              </span>
            </div>

            {/* Watermark */}
            <p className="text-sm text-surface-a20 font-medium">
              &copy; {new Date().getFullYear()} — 
              <span className="text-white ml-1 hover:text-primary-a0 transition-colors">
                Farghali Syafyurrahman
              </span>
            </p>
          </div>

        </div>

        {/* Garis halus bawah kalau mau lebih menarik */}
        <div className="mt-8 pt-8 border-t border-white/5 flex justify-center">
           <p className="text-[12px] text-surface-a30 uppercase tracking-[0.5em]">
             Keep Coding, Keep Improving
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;