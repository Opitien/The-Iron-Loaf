import { motion } from "motion/react";
import { NewspaperImage } from "../components/NewspaperImage";

const products = [
  {
    id: "P001",
    name: "The Iron Loaf",
    desc: "Our signature product. Dense, hearty, and capable of sustaining a man for 12 hours of hard labor.",
    price: "2d",
    stock: "High",
    gridArea: "col-span-2 row-span-2",
    hasImage: true,
    image: "https://images.unsplash.com/photo-1691862329594-4eb279f01bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjBicmVhZCUyMGxvYWYlMjBvbiUyMHdvb2RlbiUyMHRhYmxlJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3NzIwNjM1OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Fig 1: Standard Issue Loaf"
  },
  {
    id: "P002",
    name: "Miner's Brick",
    desc: "Enriched with molasses for extra energy. Compact size fits perfectly in a coal scuttle or pocket.",
    price: "3d",
    stock: "Limited",
    gridArea: "col-span-1 row-span-1",
    hasImage: false,
  },
  {
    id: "P003",
    name: "Factory Sour",
    desc: "A tangy sourdough starter, aged for 3 years in oak barrels. Good for digestion.",
    price: "1d",
    stock: "Available",
    gridArea: "col-span-1 row-span-1",
    hasImage: true,
    image: "https://images.unsplash.com/photo-1548441975-13ea400a62b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydWdnZWQlMjBzb3VyZG91Z2glMjBicmVhZCUyMGNydXN0JTIwbWFjcm8lMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8fHx8MTc3MjA2NDU2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Fig 2: Surface Texture Detail"
  },
  {
    id: "P004",
    name: "Hard Tack",
    desc: "Dried biscuit. Will keep for 50 years. Ideally soaked in tea or broth before consumption.",
    price: "1/2d",
    stock: "Surplus",
    gridArea: "col-span-1 row-span-2",
    hasImage: false,
  },
  {
    id: "P005",
    name: "Sunday White",
    desc: "A rare treat. Sifted flour for a softer crumb. Reserved for the Sabbath.",
    price: "4d",
    stock: "Scarce",
    gridArea: "col-span-1 row-span-1",
    hasImage: true,
    image: "https://images.unsplash.com/photo-1583020694704-f8276a36e358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFjayUyMG9mJTIwcnVzdGljJTIwYnJlYWQlMjBvbiUyMHNoZWx2ZXMlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8fHx8MTc3MjA2NDU4MHww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Fig 3: Batch No. 402"
  },
  {
    id: "P006",
    name: "Bran Muffin",
    desc: "Pure fiber. Keeps the constitution regular.",
    price: "1d",
    stock: "Available",
    gridArea: "col-span-1 row-span-1",
    hasImage: false,
  },
];

export default function Products() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <div className="mb-8 border-b-2 border-black pb-4 flex justify-between items-end">
        <h2 className="font-display text-6xl uppercase tracking-tighter">Classifieds</h2>
        <span className="font-accent text-xs uppercase hidden md:inline-block">Section C — Goods & Wares</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-black">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={`border-r border-b border-black p-6 relative group hover:bg-[#E8E6E1] transition-colors duration-200 flex flex-col ${product.gridArea === 'col-span-2 row-span-2' ? 'md:col-span-2 md:row-span-2' : ''}`}
          >
            <div className="flex justify-between items-start mb-2">
                <span className="font-accent text-xs uppercase opacity-60">Ref: {product.id}</span>
                <span className="font-heading font-bold text-lg border border-black px-2 py-0.5 bg-white group-hover:bg-black group-hover:text-white transition-colors">{product.price}</span>
            </div>
            
            <h3 className="font-display text-3xl uppercase mb-2 group-hover:underline decoration-1 underline-offset-4">{product.name}</h3>
            
            {product.hasImage && product.image && (
                <div className="my-4">
                     <NewspaperImage
                        src={product.image}
                        alt={product.name}
                        caption={product.caption}
                        variant="distressed"
                        className="h-48 md:h-64 object-cover"
                        figureClassName={product.gridArea.includes('row-span-2') ? 'rotate-0' : 'rotate-1'}
                    />
                </div>
            )}

            <p className="font-body text-xl leading-snug text-justify mb-4">
                {product.desc}
            </p>

            <div className="mt-auto pt-4 border-t border-dotted border-black flex justify-between items-center">
                <span className="font-accent text-xs uppercase">Stock: {product.stock}</span>
                <button className="font-display uppercase text-sm border-b border-transparent hover:border-black">Inquire</button>
            </div>
          </motion.div>
        ))}

        {/* Filler Ad to complete the grid visually if needed */}
        <div className="border-r border-b border-black p-6 flex flex-col justify-center items-center text-center bg-[#2B2B2B] text-[#D8D5CF]">
            <h4 className="font-display text-2xl uppercase mb-2">Wanted: Apprentices</h4>
            <p className="font-body text-sm mb-4">Must have strong back and tolerance for heat. <br/>Apply within.</p>
            <div className="border border-[#D8D5CF] px-4 py-1 font-accent text-xs uppercase">No Experience Needed</div>
        </div>
      </div>
      
      <div className="mt-8 text-center font-accent text-xs uppercase tracking-widest opacity-60">
        Prices subject to change based on the price of coal.
      </div>
    </div>
  );
}
