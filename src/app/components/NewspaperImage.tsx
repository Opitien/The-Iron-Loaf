import { cn } from "../../lib/utils";

interface NewspaperImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  caption?: string;
  figureClassName?: string;
  variant?: "default" | "distressed" | "clean";
}

export function NewspaperImage({ 
  src, 
  alt, 
  caption, 
  className, 
  figureClassName,
  variant = "default",
  ...props 
}: NewspaperImageProps) {
  
  const filterStyles = {
    default: "grayscale contrast-125 sepia-[.15] brightness-90",
    distressed: "grayscale contrast-[1.4] sepia-[.3] brightness-75 contrast-150 mix-blend-multiply opacity-90",
    clean: "grayscale contrast-110 sepia-[.05]"
  };

  return (
    <figure className={cn("flex flex-col gap-2", figureClassName)}>
      <div className="relative border border-black p-1 bg-white overflow-hidden group">
        {/* Overlay texture for dust/scratches effect */}
        <div className="absolute inset-0 pointer-events-none z-10 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/dust.png')]"></div>
        
        <img 
          src={src} 
          alt={alt || "Archival Image"} 
          className={cn(
            "w-full h-full object-cover transition-all duration-700", 
            filterStyles[variant],
            "group-hover:scale-105 group-hover:contrast-100",
            className
          )}
          {...props}
        />
        
        {/* Corner marks */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-black z-20"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-black z-20"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-black z-20"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black z-20"></div>
      </div>
      
      {caption && (
        <figcaption className="font-accent text-[10px] uppercase tracking-widest text-left border-l-2 border-black pl-2 leading-tight opacity-80">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
