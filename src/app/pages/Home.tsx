import { Link } from "react-router-dom";
import { NewspaperImage } from "../components/NewspaperImage";
import { useSEO } from "../../hooks/useSEO";

export default function Home() {
  useSEO({
    title: 'Front Page - The Iron Loaf',
    description: 'The Iron Loaf: Bread for the working man. Forged in the fires of industry, kneaded by skilled hands. Premium industrial bakery serving London since 1889.',
    keywords: 'industrial bakery, bread, working class, London, artisan bread, premium bread, factory bakery',
    ogImage: 'https://images.unsplash.com/photo-1572125345941-a0687d65b989'
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-b border-black">
      {/* Left Column (Main Story) */}
      <div className="md:col-span-8 p-6 md:p-12 border-r border-black relative">
        <span className="font-accent text-xs uppercase tracking-widest mb-2 block border-b border-black w-max pb-1">
          Special Report: The Daily Loaf
        </span>
        
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] mb-6 tracking-tighter">
          Bread For The<br/>Working Man
        </h2>
        
        <div className="mb-8 relative aspect-[4/3] border-4 border-double border-black bg-neutral-200">
           <NewspaperImage 
            src="https://images.unsplash.com/photo-1572125345941-a0687d65b989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYmFrZXJ5JTIwd29ya2VycyUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MXx8fHwxNzcyMDYzNjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Workers in the bakery"
            variant="distressed"
            caption="Fig 1.1: The morning shift assembles before the ovens (1905)."
            className="contrast-125 brightness-90 mix-blend-multiply opacity-90"
          />
        </div>

        <div className="columns-1 md:columns-2 gap-8 font-body text-xl leading-relaxed text-justify space-y-4 mb-12">
          <p className="first-letter:text-7xl first-letter:float-left first-letter:font-display first-letter:mr-3 first-letter:leading-[0.8]">
            In the heart of the industrial district, where smoke stacks paint the sky in hues of charcoal and ash, The Iron Loaf stands as a testament to perseverance. We do not bake for kings. We do not bake for queens. We bake for the hands that build this city.
          </p>
          <p>
            Our flour is milled from the heartiest grains, capable of withstanding the rigors of the day. Our ovens, fueled by the finest Welsh coal, burn hot and true, forging crusts that crackle with the promise of sustenance.
          </p>
          
          <div className="break-inside-avoid my-4">
             <NewspaperImage 
                src="https://images.unsplash.com/photo-1641394535269-dbea1fa94ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmVhZGluZyUyMGRvdWdoJTIwc3Ryb25nJTIwaGFuZHMlMjBtZXNzeSUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MXx8fHwxNzcyMDY0NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Hands kneading dough"
                variant="default"
                caption="Manual Labor: The kneading process requires immense strength."
                className="h-48 object-cover"
             />
          </div>

          <p>
            Every loaf that leaves our factory floor is inspected with the same scrutiny as a rivet in a bridge. Strength, density, and honest flavor are our hallmarks. We reject the soft, airy confections of the aristocracy in favor of bread that sits heavy in the stomach and fuels the long shifts of the laborer.
          </p>
          <div className="border-t border-b border-black py-4 my-6 text-center break-inside-avoid">
            <h3 className="font-heading text-2xl uppercase italic">"Hard Crusts for Hard Times"</h3>
          </div>
          <p>
            Join us in celebrating the dignity of work. Visit our production floor, witness the sweat and flour, and take home a piece of history.
          </p>
        </div>

        {/* Photo Essay Section */}
        <div className="border-t-4 border-black border-double pt-8 mt-12">
            <h3 className="font-display text-4xl uppercase mb-6 text-center">Scenes from the Factory Floor</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <NewspaperImage 
                    src="https://images.unsplash.com/photo-1672118736266-f2f829a25471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwxOTIwcyUyMGJha2VyJTIwZmxvdXIlMjBleHBsb3Npb24lMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8fHx8MTc3MjA2NDU2OHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Flour dust"
                    caption="Atmospheric conditions in the mixing room."
                    className="aspect-[3/4] object-cover"
                />
                 <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
                    <NewspaperImage 
                        src="https://images.unsplash.com/photo-1545557903-ba7b68199378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwaW5kdXN0cmlhbCUyMG1hY2hpbmVyeSUyMGdlYXJzJTIwc3RlYW0lMjBlbmdpbmUlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8fHx8MTc3MjA2NDU2OHww&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Steam Engine"
                        caption="The 50HP steam engine powering the mixers."
                        className="h-48 w-full object-cover"
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <NewspaperImage 
                             src="https://images.unsplash.com/photo-1642721086050-bf49b1169d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG91ciUyMHNhY2slMjBpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwdmludGFnZSUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MXx8fHwxNzcyMDY0NTY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                             alt="Flour Sacks"
                             caption="Raw materials storage."
                             className="aspect-square object-cover"
                        />
                         <div className="bg-black text-[#D8D5CF] p-4 flex items-center justify-center text-center">
                            <p className="font-display text-xl uppercase leading-tight">
                                "Without coal, no heat. <br/>Without heat, no bread."
                            </p>
                        </div>
                    </div>
                 </div>
            </div>
        </div>

        <div className="mt-8 flex justify-center">
            <Link to="/bread" className="border-2 border-black px-8 py-3 font-display text-xl uppercase tracking-widest hover:bg-black hover:text-[#D8D5CF] transition-colors duration-300">
                View Our Wares
            </Link>
        </div>
      </div>

      {/* Right Column (Sidebar / Advertisements) */}
      <div className="md:col-span-4 bg-[#E8E6E1] p-6 border-l border-black flex flex-col gap-6">
        
        {/* Ad 1 */}
        <div className="border-4 border-black p-4 text-center space-y-2">
            <h4 className="font-display text-3xl uppercase border-b-2 border-black pb-2 mb-2">Notice</h4>
            <p className="font-heading italic text-lg">Fresh Sourdough Available Daily at 6 AM Sharp.</p>
            <p className="font-accent text-xs uppercase mt-4">Do not be late.</p>
        </div>

        {/* Weather / Conditions */}
        <div className="border border-black p-4 bg-[#D8D5CF]">
            <h5 className="font-accent text-xs uppercase border-b border-black pb-1 mb-2">Factory Conditions</h5>
            <ul className="space-y-2 font-body text-lg">
                <li className="flex justify-between border-b border-black/20 pb-1">
                    <span>Oven Temp:</span>
                    <span className="font-bold">450°F</span>
                </li>
                <li className="flex justify-between border-b border-black/20 pb-1">
                    <span>Flour Stock:</span>
                    <span className="font-bold">High</span>
                </li>
                <li className="flex justify-between border-b border-black/20 pb-1">
                    <span>Shift Status:</span>
                    <span className="font-bold">Active</span>
                </li>
            </ul>
        </div>

        {/* Image Ad */}
        <div className="border-2 border-black p-2 bg-white">
            <NewspaperImage 
                src="https://images.unsplash.com/photo-1691862329594-4eb279f01bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjBicmVhZCUyMGxvYWYlMjBvbiUyMHdvb2RlbiUyMHRhYmxlJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3NzIwNjM1OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Bread Loaf" 
                variant="default"
                className="w-full h-48 object-cover grayscale contrast-125 mb-2 filter sepia-[.3]"
            />
            <div className="text-center">
                <h4 className="font-display text-xl uppercase">The Iron Loaf</h4>
                <p className="font-body text-sm leading-tight mt-1">
                    Guaranteed to last the week. <br/> 
                    <span className="font-bold">2 Shillings</span>
                </p>
                <Link to="/bread" className="block mt-2 border border-black text-xs uppercase py-1 hover:bg-black hover:text-white transition-colors">
                    Inspect Goods
                </Link>
            </div>
        </div>

        {/* Quote */}
        <div className="flex-grow flex items-center justify-center p-4 border-y-2 border-black border-dashed my-4">
            <p className="font-display text-2xl text-center leading-tight">
                "A hungry man is an angry man. Feed the workers."
            </p>
        </div>
        
        {/* Additional Sidebar Image */}
        <div className="mt-auto">
             <NewspaperImage 
                src="https://images.unsplash.com/photo-1599692988809-9f1b87e4fee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29hbCUyMG92ZW4lMjBhbnRpcXVlfGVufDF8fHx8MTc3MjA2MzU5MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Coal Oven"
                caption="Oven No. 4 at full capacity."
                className="h-40 w-full object-cover grayscale contrast-150"
             />
        </div>
        
      </div>
    </div>
  );
}
