import { motion } from "motion/react";
import { NewspaperImage } from "../components/NewspaperImage";

const workers = [
  {
    name: "Arthur 'Sooty' Miller",
    role: "Head Ovenmaster",
    years: "24 Years Service",
    bio: "Arthur began his career hauling coal for the furnaces. He has since lost his eyebrows three times to the flames but has never burnt a loaf. His knowledge of heat distribution is unrivaled in the district. He speaks little, preferring the company of the fire.",
    image: "https://images.unsplash.com/photo-1635609974451-ae84cf68aafc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbWFuJTIwcG9ydHJhaXQlMjBzZXJpb3VzJTIwMTkwMHMlMjBiZWFyZCUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MXx8fHwxNzcyMDY0NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Plate A: A. Miller"
  },
  {
    name: "Thomas Wainwright",
    role: "Dough Kneader",
    years: "12 Years Service",
    bio: "With forearms the size of ham hocks, Thomas can knead three hundred pounds of dough before breakfast. He was once a prizefighter but found the bakery floor to be a more honest living. He sings shanties while he works to keep the rhythm.",
    image: "https://images.unsplash.com/photo-1641394535269-dbea1fa94ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmVhZGluZyUyMGRvdWdoJTIwc3Ryb25nJTIwaGFuZHMlMjBtZXNzeSUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MXx8fHwxNzcyMDY0NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Plate B: T. Wainwright (Hands)"
  },
  {
    name: "Eliza Pennyworth",
    role: "Quality Control",
    years: "42 Years Service",
    bio: "Eliza has the sharpest eyes in London. She can spot a weevil in a flour sack from twenty paces. Nothing leaves the factory without her nod of approval. She is feared by the apprentices and respected by the management.",
    image: "https://images.unsplash.com/photo-1572125345941-a0687d65b989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYmFrZXJ5JTIwd29ya2VycyUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MXx8fHwxNzcyMDYzNjM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Plate C: E. Pennyworth (Background)"
  },
  {
    name: "Young Jack",
    role: "Apprentice",
    years: "3 Months Service",
    bio: "Jack is still learning which end of the broom to hold. He is eager, however, and shows promise in the art of flour dusting. We have high hopes he will survive the winter.",
    image: "https://images.unsplash.com/photo-1582140161471-32b8ed44ed06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwxOTAwcyUyMGZhY3RvcnklMjB3b3JrZXJzJTIwZ3JvdXAlMjBwb3J0cmFpdCUyMHNlcmlvdXMlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8fHx8MTc3MjA2NDU2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Plate D: Recruit Class 1905"
  },
];

export default function Workers() {
  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto">
      <div className="text-center mb-12 border-b-4 double border-black pb-8">
        <h2 className="font-display text-5xl md:text-8xl uppercase mb-2">The Hands That Feed</h2>
        <p className="font-subhead italic text-xl">A tribute to the labor behind the loaf.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-black border-b border-black pb-12">
        {workers.map((worker, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="pt-8 md:pt-0 px-4 text-justify flex flex-col h-full"
          >
            <div className="mb-4">
                 <NewspaperImage 
                    src={worker.image}
                    alt={worker.name}
                    caption={worker.caption}
                    variant="distressed"
                    className="w-full aspect-square object-cover"
                />
            </div>
            
            <h3 className="font-display text-2xl uppercase mb-1 leading-none">{worker.name}</h3>
            <div className="font-accent text-[10px] uppercase mb-4 tracking-widest border-b border-black pb-1 inline-block">
                {worker.role} • {worker.years}
            </div>
            
            <p className="font-body text-lg leading-tight first-letter:text-4xl first-letter:float-left first-letter:mr-2 first-letter:font-display">
                {worker.bio}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
             <h4 className="font-display text-3xl uppercase mb-4">Now Hiring</h4>
            <div className="border-4 border-black p-8 bg-[#F0EFEB] inline-block w-full">
                <p className="font-heading italic text-lg mb-4">
                    "Men wanted for hazardous journey. Small wages, bitter cold, long months of complete darkness, constant danger, safe return doubtful. Honour and recognition in case of success."
                </p>
                <p className="font-accent text-xs uppercase text-right">— E. Shackleton (adapted for Bakery)</p>
            </div>
        </div>
        
        <div className="border border-black p-2 bg-white rotate-1">
             <NewspaperImage 
                src="https://images.unsplash.com/photo-1672118736266-f2f829a25471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwxOTIwcyUyMGJha2VyJTIwZmxvdXIlMjBleHBsb3Npb24lMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8fHx8MTc3MjA2NDU2OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Factory Floor"
                caption="The reality of the work."
                variant="distressed"
                className="w-full h-64 object-cover"
             />
        </div>
      </div>
    </div>
  );
}
