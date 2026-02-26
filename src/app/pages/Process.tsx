import { motion } from "motion/react";
import { NewspaperImage } from "../components/NewspaperImage";

const steps = [
  {
    id: 1,
    title: "Raw Material Acquisition",
    description: "Sacks of hard winter wheat arrive by railcar at dawn. Each sack is inspected for pests and moisture before entering the mill. We accept nothing less than the highest protein content for maximum durability.",
    image: "https://images.unsplash.com/photo-1642721086050-bf49b1169d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG91ciUyMGNhY2slMjBpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwdmludGFnZSUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MXx8fHwxNzcyMDY0NTY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Fig A: Warehouse inventory, Sector 7."
  },
  {
    id: 2,
    title: "Industrial Mixing",
    description: "Water, yeast, and salt are added in precise ratios. The great iron mixers churn the dough until it achieves the tensile strength required for our loaves. The friction alone raises the temperature of the dough by ten degrees.",
    image: "https://images.unsplash.com/photo-1545557903-ba7b68199378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwaW5kdXN0cmlhbCUyMG1hY2hpbmVyeSUyMGdlYXJzJTIwc3RlYW0lMjBlbmdpbmUlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8fHx8MTc3MjA2NDU2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Fig B: Steam-driven gear mechanism."
  },
  {
    id: 3,
    title: "Hand Forming",
    description: "Despite our machinery, the final shaping is done by hand. Our bakers work with a rhythm born of years of repetition. A good man can shape four loaves a minute.",
    image: "https://images.unsplash.com/photo-1641394535269-dbea1fa94ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmVhZGluZyUyMGRvdWdoJTIwc3Ryb25nJTIwaGFuZHMlMjBtZXNzeSUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MXx8fHwxNzcyMDY0NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Fig C: Manual labor remains essential."
  },
  {
    id: 4,
    title: "The Coal Fires",
    description: "Our ovens are fed continuously with high-grade anthracite coal. The intense, dry heat produces a crust that can withstand transport and storage without losing its integrity.",
    image: "https://images.unsplash.com/photo-1632663805741-8734cd5f4ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY29hbCUyMGZpcmVkJTIwYnJpY2slMjBvdmVuJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzIwNjQ1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Fig D: The heart of the factory."
  },
  {
    id: 5,
    title: "Cooling & Distribution",
    description: "Loaves are racked on steel trolleys to cool. By 4:00 AM, the horse-drawn wagons are loaded for delivery to the city's markets and factory gates.",
    image: "https://images.unsplash.com/photo-1583020694704-f8276a36e358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFjayUyMG9mJTIwcnVzdGljJTIwYnJlYWQlMjBvbiUyMHNoZWx2ZXMlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8fHx8MTc3MjA2NDU4MHww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Fig E: Inventory ready for dispatch."
  },
];

export default function Process() {
  return (
    <div className="p-6 md:p-12 max-w-5xl mx-auto">
      <header className="mb-16 text-center border-b-4 border-black border-double pb-8">
        <h2 className="font-display text-5xl md:text-7xl uppercase mb-4">Standard Operating Procedure</h2>
        <p className="font-accent text-sm tracking-[0.2em] uppercase">Factory Protocol No. 89-B</p>
      </header>

      <div className="relative border-l-2 border-black ml-4 md:ml-0 md:border-l-0">
        {steps.map((step, index) => (
          <motion.div 
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row gap-8 mb-24 relative ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Step Number Badge */}
            <div className="absolute -left-[25px] md:left-1/2 md:-translate-x-1/2 top-0 w-12 h-12 bg-black text-[#D8D5CF] flex items-center justify-center font-display text-2xl border-4 border-[#D8D5CF] rounded-full z-10 shadow-[0_0_0_4px_black] md:shadow-none">
              {step.id}
            </div>

            {/* Content */}
            <div className="md:w-1/2 pt-2 pl-8 md:pl-0 md:px-12 text-justify">
              <h3 className="font-display text-3xl uppercase mb-4 border-b border-black inline-block">{step.title}</h3>
              <p className="font-body text-xl leading-relaxed">{step.description}</p>
            </div>

            {/* Image */}
            <div className="md:w-1/2 pl-8 md:pl-0">
                <NewspaperImage 
                    src={step.image}
                    alt={step.title}
                    caption={step.caption}
                    variant={index % 2 === 0 ? "distressed" : "default"}
                    className="w-full h-64 md:h-80 object-cover"
                    figureClassName={index % 2 === 1 ? "rotate-1" : "-rotate-1"}
                />
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Footer / Signoff */}
      <div className="mt-16 border-t-2 border-black pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
            <p className="font-accent text-xs uppercase mb-2">Approved by Factory Foreman</p>
            <div className="font-display text-4xl transform -rotate-6 opacity-70">
                J. P. Morgan
            </div>
        </div>
        <div className="max-w-xs">
            <NewspaperImage 
                src="https://images.unsplash.com/photo-1635609974451-ae84cf68aafc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbWFuJTIwcG9ydHJhaXQlMjBzZXJpb3VzJTIwMTkwMHMlMjBiZWFyZCUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MXx8fHwxNzcyMDY0NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Foreman"
                caption="Foreman Jeremiah Black"
                className="w-24 h-32 object-cover grayscale contrast-150"
            />
        </div>
      </div>
    </div>
  );
}
