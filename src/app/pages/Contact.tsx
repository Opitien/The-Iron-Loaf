import { useState } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { NewspaperImage } from "../components/NewspaperImage";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Telegram Sent via Morse Code");
    setFormData({ name: "", subject: "", message: "" });
  };

  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto">
      <header className="mb-12 border-b-2 border-black pb-4 text-center">
        <h2 className="font-display text-5xl md:text-7xl uppercase">Telegraph Office</h2>
        <p className="font-accent text-sm tracking-widest uppercase mt-2">Correspondence Dept.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8 font-body text-xl">
            <div className="border-l-4 border-black pl-6 py-2">
                <h3 className="font-display text-3xl uppercase mb-2">Address</h3>
                <address className="not-italic block">
                    The Iron Loaf Factory No. 4<br/>
                    19 Industrial Ave<br/>
                    Southwark, London
                </address>
            </div>
            
            <div className="border-l-4 border-black pl-6 py-2">
                <h3 className="font-display text-3xl uppercase mb-2">Telephone</h3>
                <p>Operator: Ask for "Southwark 42"</p>
            </div>

            <div className="bg-[#2B2B2B] text-[#D8D5CF] p-6 border-4 border-double border-[#D8D5CF] outline outline-1 outline-black -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-display text-2xl uppercase mb-2 border-b border-[#6E6E6E] pb-2">Notice to Correspondents</h4>
                <p className="text-sm leading-relaxed">
                    Brevity is the soul of wit. Our clerks are busy men. Do not waste ink on pleasantries. State your business and be gone.
                </p>
            </div>

             <div className="hidden md:block">
                <NewspaperImage 
                    src="https://images.unsplash.com/photo-1561990975-6cfff5661206?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbnRpcXVlJTIwdGVsZWdyYXBoJTIwbWFjaGluZSUyMG1vcnNlJTIwY29kZSUyMHZpbnRhZ2UlMjBvZmZpY2UlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8fHx8MTc3MjA2NDcyM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Telegraph"
                    caption="Fig. 9: Incoming Transmissions"
                    variant="distressed"
                    className="h-32 w-full object-cover grayscale contrast-150"
                />
            </div>
        </div>

        <motion.form 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="border-2 border-black p-8 bg-[#F0EFEB] relative shadow-xl h-fit"
        >
            <div className="absolute top-0 left-0 bg-black text-[#F0EFEB] px-2 py-1 font-accent text-xs uppercase">
                Form 104-A
            </div>
            
            <div className="space-y-6 mt-6 font-accent text-sm">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="uppercase tracking-widest">Sender's Name:</label>
                    <input 
                        type="text" 
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-transparent border-b border-black outline-none py-1 focus:border-b-2 transition-all placeholder:text-black/30 font-body text-xl"
                        placeholder="e.g. John Smith"
                        required
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="subject" className="uppercase tracking-widest">Nature of Inquiry:</label>
                    <select 
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="bg-transparent border-b border-black outline-none py-1 focus:border-b-2 transition-all font-body text-xl appearance-none rounded-none"
                    >
                        <option value="">-- Select One --</option>
                        <option value="order">Bulk Order Request</option>
                        <option value="complaint">Complaint regarding Crust Hardness</option>
                        <option value="employment">Employment Application</option>
                        <option value="other">Other Matter</option>
                    </select>
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="uppercase tracking-widest">Message Body:</label>
                    <textarea 
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={6}
                        className="bg-transparent border border-black outline-none p-2 focus:ring-1 focus:ring-black transition-all resize-none font-body text-lg leading-relaxed bg-[url('https://www.transparenttextures.com/patterns/lined-paper.png')]"
                        placeholder="STOP. SEND BREAD. STOP."
                        required
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-black text-[#D8D5CF] py-3 font-display text-xl uppercase tracking-widest hover:bg-[#2B2B2B] transition-colors border-2 border-transparent hover:border-black active:translate-y-1"
                >
                    Transmit
                </button>
            </div>
            
            <div className="absolute -bottom-2 -right-2 w-16 h-16 border-4 border-black rounded-full flex items-center justify-center rotate-12 opacity-30 pointer-events-none">
                <span className="font-display text-xs text-center leading-none uppercase font-bold">
                    Official<br/>Stamp
                </span>
            </div>
        </motion.form>
      </div>
    </div>
  );
}
