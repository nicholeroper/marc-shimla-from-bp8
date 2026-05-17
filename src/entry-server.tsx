import { renderToString } from 'react-dom/server';
import { StaticRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer, WhatsAppButton } from './components';
import { Home, About, Rooms, Dining, Facilities, Contact, Attractions, Reviews, Gallery, HolidayPackages, PackageDetail } from './pages';
import './index.css';

const routeMeta: Record<string, { title: string; description: string; ogImage?: string }> = {
  '/': {
    title: 'Hotel Marc Shimla | Best Hotel in Shimla | Top Hotels Near Mall Road',
    description: 'Hotel Marc Shimla - Best hotel in Shimla near Mall Road with valley views, free parking & homely food. Top rated family hotel in Shimla. Book affordable rooms at +91-8091280700.',
  },
  '/about': {
    title: 'About Hotel Marc Shimla | Best Family Run Hotel in Shimla | Since 2014',
    description: 'Learn about Hotel Marc Shimla - a family-run hotel since 2014. Located in peaceful Chaura Maidan, near Mall Road, Shimla. Warm hospitality, valley views, free parking.',
  },
  '/rooms': {
    title: 'Best Rooms in Shimla | Deluxe & Family Suites | Hotel Marc | Book Online',
    description: 'Book best rooms in Shimla at Hotel Marc. Deluxe rooms, super deluxe rooms & family suites with valley views near Mall Road. Affordable rates, free parking, WiFi.',
    ogImage: 'https://marcshimla.in/new-room-images/super-deluxe-room/0_0_6_super_deluxe_room_image.jpg',
  },
  '/dining': {
    title: 'Best Restaurant in Shimla | Marc Kitchen | Hotel with Good Food | Hotel Marc',
    description: 'Enjoy authentic multi-cuisine dining at Hotel Marc Shimla. Best restaurant in Shimla serving North Indian, Chinese & Continental food with valley views.',
  },
  '/facilities': {
    title: 'Best Hotel Amenities in Shimla | Free Parking & WiFi | Hotel Marc Facilities',
    description: 'Hotel Marc Shimla offers free parking, high-speed WiFi, 24-hour room service, travel desk, laundry, power backup & open terrace. Best facilities in Shimla.',
  },
  '/contact': {
    title: 'Contact Hotel Marc Shimla | Book Best Hotel in Shimla | Phone & Location',
    description: 'Contact Hotel Marc Shimla at +91-8091280700. Best hotel near Mall Road in Chaura Maidan. Easy directions from bus stand & railway station. Book top rated Shimla hotel with parking.',
  },
  '/attractions': {
    title: 'Shimla Tourist Places | Best Attractions Near Hotel Marc | Sightseeing Guide',
    description: 'Explore top Shimla tourist attractions near Hotel Marc. Mall Road, Viceregal Lodge, Kufri, Jakhu Temple & more. Best location for Shimla sightseeing.',
  },
  '/reviews': {
    title: 'Hotel Marc Shimla Reviews | Top Rated Hotel in Shimla | Guest Testimonials',
    description: 'Read genuine reviews of Hotel Marc - top rated hotel in Shimla. 4.8 rating with 200+ verified reviews on Google, TripAdvisor & Goibibo.',
  },
  '/gallery': {
    title: 'Hotel Marc Shimla Photos | Best Hotel Images | Rooms & Valley Views Gallery',
    description: 'View photos of Hotel Marc Shimla - rooms, valley views, restaurant, open terrace & more. Best hotel in Shimla near Mall Road.',
  },
  '/packages': {
    title: 'Best Shimla Tour Packages | Himachal Holiday Deals | Hotel with Tour Package',
    description: 'Book best Shimla & Himachal Pradesh holiday packages from Marc Holidayers. Shimla-Kullu-Manali, Manali, Devi Darshan & more. Himachal Tourism approved.',
  },
};

const packageMeta: Record<string, { title: string; description: string; image: string }> = {
  'shimla-kullu-manali': { title: 'Shimla Kullu Manali Tour Package 5N/6D | Marc Holidayers Shimla', description: 'Book Shimla Kullu Manali 5 Night 6 Day tour package from Marc Holidayers. Includes transport, accommodation, breakfast & dinner. Himachal Tourism approved.', image: 'shimla-kulu-manali.webp' },
  'special-shimla': { title: 'Special Shimla Tour Package 2N/3D | Quick Shimla Getaway', description: 'Book Special Shimla 2 Night 3 Day tour package. Perfect quick getaway including Kufri, Mall Road & colonial Shimla. Best rates from Marc Holidayers.', image: 'special-Shimla.jpg' },
  'unforgettable-shimla': { title: 'Unforgettable Shimla Tour Package 3N/4D | Extended Shimla Experience', description: 'Book Unforgettable Shimla 3 Night 4 Day extended tour. Visit Kufri, Naldehra, Mall Road & more. Best value Shimla package from Marc Holidayers.', image: 'Unforgettable-Shimla.jpg' },
  'manali-package': { title: 'Manali Tour Package 2N/3D | Adventure Holiday | Marc Holidayers', description: 'Book Manali 2 Night 3 Day adventure tour package. Solang Valley, Hadimba Temple, Vashisht. Private cab from Delhi. Best Manali packages.', image: 'manali-package.jpg' },
  'kullu-manali': { title: 'Kullu Manali Tour Package 3N/4D | Valley of Gods Holiday', description: 'Book Kullu Manali 3 Night 4 Day tour package. River rafting, Hadimba Temple, Solang Valley, Atal Tunnel. Best rates from Marc Holidayers Shimla.', image: 'kullu_manali.jpg' },
  'shimla-manali': { title: 'Shimla Manali Tour Package 4N/5D | Best of Both Worlds', description: 'Book Shimla Manali 4 Night 5 Day holiday package. Experience colonial Shimla & adventurous Manali. Private cab, breakfast & dinner included.', image: 'shimla-manali.png' },
  'complete-shimla-kullu-manali': { title: 'Complete Shimla Kullu Manali 5N/6D | Himachal Experience', description: 'Complete Himachal Pradesh tour - Shimla, Kullu & Manali in 5 nights 6 days. All sightseeing, transport & meals included. Approved by Himachal Tourism.', image: 'shimla-kulu-manali2.webp' },
  'heaven-himachal': { title: 'Heaven Himachal Tour 8N/9D | Ultimate Himachal Journey | Marc Holidayers', description: 'The ultimate Himachal Pradesh tour - Shimla, Manali, Dharamshala, McLeodganj in 8 nights 9 days. New package by Marc Holidayers. Book now.', image: 'heaven-himachal.webp' },
  'devi-darshan': { title: 'Devi Darshan Tour Package 3N/4D | Sacred Temple Circuit Himachal', description: 'Book Devi Darshan 3 Night 4 Day spiritual tour from Chandigarh. Visit Naina Devi, Jwala Devi, Chamunda Devi & Brajeshwari temples. Himachal pilgrimage tour.', image: 'devi-darshan.jpg' },
};

function getMetaForRoute(url: string) {
  if (routeMeta[url]) return { ...routeMeta[url], ogImage: routeMeta[url].ogImage || 'https://marcshimla.in/about/hotel-marc-our-journey.jpg' };

  const packageMatch = url.match(/^\/packages\/(.+)$/);
  if (packageMatch) {
    const id = packageMatch[1];
    const meta = packageMeta[id];
    if (meta) return {
      title: meta.title,
      description: meta.description,
      ogImage: `https://marcshimla.in/package-images/${meta.image}`,
    };
  }

  return {
    title: 'Hotel Marc Shimla | Best Hotel in Shimla',
    description: 'Hotel Marc Shimla - Best hotel near Mall Road with valley views, free parking & homely food.',
    ogImage: 'https://marcshimla.in/about/hotel-marc-our-journey.jpg',
  };
}

export function render(url: string) {
  const html = renderToString(
    <div className="min-h-screen bg-white">
      <StaticRouter location={url}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/packages" element={<HolidayPackages />} />
            <Route path="/packages/:packageId" element={<PackageDetail />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </StaticRouter>
    </div>
  );
  return { html, meta: getMetaForRoute(url) };
}
