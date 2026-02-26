import { Link, Outlet, useLocation } from "react-router";
import { cn } from "../../lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Toaster } from "sonner";

function NavLink({ to, children, className }: { to: string; children: React.ReactNode, className?: string }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={cn(
        "font-heading uppercase tracking-widest text-sm hover:underline decoration-1 underline-offset-4",
        isActive ? "underline font-bold" : "",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function Layout() {
  const [date, setDate] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Format: Tuesday, February 25, 1905
    const d = new Date();
    // specific formatting to look old
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setDate(d.toLocaleDateString('en-US', options).replace("2026", "1905").replace("2025", "1905").replace("2024", "1905"));
  }, []);

  return (
    <div className="min-h-screen flex flex-col max-w-[1440px] mx-auto bg-[#D8D5CF] border-x border-black shadow-2xl my-0 md:my-8 relative overflow-hidden">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply z-50 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] bg-[#00000000]"></div>
      
      {/* Top Bar - Date and Volume */}
      <header className="border-b-4 border-black border-double pt-4 px-4 md:px-12 bg-[#D8D5CF] relative z-40">
        <div className="flex justify-between items-end border-b border-black pb-2 mb-2 font-accent text-xs md:text-sm tracking-widest uppercase">
          <span>Vol. CXII No. 42</span>
          <span>{date}</span>
          <span className="hidden md:inline">Price: Two Pence</span>
        </div>

        {/* Masthead */}
        <div className="text-center py-6 md:py-10">
          <h1 className="font-display text-5xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-none mb-2">
            The Iron Loaf
          </h1>
          <p className="font-subhead italic text-lg md:text-xl text-[#2B2B2B]">Est. 1889 — Purveyors of Industrial Strength Bread</p>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex justify-center gap-12 py-3 border-t border-black border-b-2">
          <NavLink to="/">Front Page</NavLink>
          <span className="text-black/30">|</span>
          <NavLink to="/process">Production</NavLink>
          <span className="text-black/30">|</span>
          <NavLink to="/bread">The Goods</NavLink>
          <span className="text-black/30">|</span>
          <NavLink to="/workers">Our Laborers</NavLink>
          <span className="text-black/30">|</span>
          <NavLink to="/contact">Telegraph Us</NavLink>
        </nav>

        {/* Navigation - Mobile */}
        <div className="md:hidden flex justify-between items-center py-2 border-t border-black">
          <span className="font-heading uppercase text-sm font-bold">Menu</span>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#D8D5CF] p-8 flex flex-col gap-8 text-center pt-32">
          <button className="absolute top-8 right-8" onClick={() => setIsMenuOpen(false)}>
            <X size={32} />
          </button>
          <NavLink to="/" className="text-2xl" onClick={() => setIsMenuOpen(false)}>Front Page</NavLink>
          <NavLink to="/process" className="text-2xl" onClick={() => setIsMenuOpen(false)}>Production</NavLink>
          <NavLink to="/bread" className="text-2xl" onClick={() => setIsMenuOpen(false)}>The Goods</NavLink>
          <NavLink to="/workers" className="text-2xl" onClick={() => setIsMenuOpen(false)}>Our Laborers</NavLink>
          <NavLink to="/contact" className="text-2xl" onClick={() => setIsMenuOpen(false)}>Telegraph Us</NavLink>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-black border-double mt-auto bg-[#2B2B2B] text-[#D8D5CF] p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <h3 className="font-display text-2xl uppercase border-b border-[#6E6E6E] pb-2">The Iron Loaf</h3>
            <p className="font-body text-lg leading-relaxed text-[#B8B4A8]">
              Forged in the fires of industry, kneaded by the hands of the working class. We provide the sustenance that powers the revolution.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-display text-2xl uppercase border-b border-[#6E6E6E] pb-2">Locations</h3>
            <address className="font-accent not-italic text-sm space-y-2 text-[#B8B4A8]">
              <p>Factory No. 4</p>
              <p>19 Industrial Ave, Southwark</p>
              <p>London, SE1 9AL</p>
            </address>
          </div>
          <div className="space-y-4">
            <h3 className="font-display text-2xl uppercase border-b border-[#6E6E6E] pb-2">Notices</h3>
            <p className="font-body text-sm text-[#B8B4A8]">
              © 1905 The Iron Loaf Baking Co. <br/>
              All Rights Reserved. <br/>
              Printed by The Figma Press.
            </p>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  );
}
