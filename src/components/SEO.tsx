import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object | object[];
}

const BASE_KEYWORDS = 'Hotel Marc Shimla, Marc Hotel Shimla, Shimla Marc Hotel, Hotel in Shimla, Hotels in Shimla, Best Hotel in Shimla, Best Hotels in Shimla, Top Hotels in Shimla, Hotels near Mall Road Shimla, Budget Hotel Shimla, Family Hotel Shimla, Shimla Accommodation, Where to Stay in Shimla';

const DEFAULT_OG_IMAGE = 'https://marcshimla.in/about/hotel-marc-our-journey.jpg';

function setMeta(selector: string, attr: string, value: string) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    const [attrName, attrValue] = selector.replace('meta[', '').replace(']', '').split('=');
    el.setAttribute(attrName.trim(), attrValue.replace(/['"]/g, '').trim());
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function setLink(selector: string, value: string) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('link');
    const [attrName, attrValue] = selector.replace('link[', '').replace(']', '').split('=');
    el.setAttribute(attrName.trim(), attrValue.replace(/['"]/g, '').trim());
    document.head.appendChild(el);
  }
  el.setAttribute('href', value);
}

export function SEO({ title, description, canonical, keywords, ogImage, ogType, structuredData }: SEOProps) {
  useEffect(() => {
    document.title = title;

    setMeta('meta[name="description"]', 'content', description);

    if (keywords) {
      setMeta('meta[name="keywords"]', 'content', `${BASE_KEYWORDS}, ${keywords}`);
    }

    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:type"]', 'content', ogType || 'website');
    setMeta('meta[property="og:image"]', 'content', ogImage || DEFAULT_OG_IMAGE);

    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', ogImage || DEFAULT_OG_IMAGE);

    if (canonical) {
      setLink('link[rel="canonical"]', canonical);
      setMeta('meta[property="og:url"]', 'content', canonical);
    }

    // Remove any existing page-level structured data script
    const existing = document.querySelector('script[data-seo-page]');
    if (existing) existing.remove();

    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-page', 'true');
      const data = Array.isArray(structuredData) ? structuredData : [structuredData];
      script.textContent = JSON.stringify(data.length === 1 ? data[0] : data);
      document.head.appendChild(script);
    }
  }, [title, description, canonical, keywords, ogImage, ogType, structuredData]);

  return null;
}
