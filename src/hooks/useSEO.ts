import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

export function useSEO({ title, description, keywords, ogImage }: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = `${title} | The Iron Loaf`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }
    
    // Update OG title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    // Update OG description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    // Update OG image if provided
    if (ogImage) {
      const ogImage_ = document.querySelector('meta[property="og:image"]');
      if (ogImage_) {
        ogImage_.setAttribute('content', ogImage);
      }
    }
    
    // Update OG URL
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', window.location.href);
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, [title, description, keywords, ogImage]);
}
