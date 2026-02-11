import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Hero, SectionHeader, SEO } from '../components';
import { IMAGES, getWhatsAppLink, WHATSAPP_MESSAGES } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const galleryCategories = [
  { id: 'all', name: 'All', color: 'from-slate-600 to-slate-700' },
  { id: 'rooms', name: 'Rooms & Suites', color: 'from-emerald-500 to-teal-500' },
  { id: 'views', name: 'Views & Surroundings', color: 'from-sky-500 to-blue-500' },
  { id: 'dining', name: 'Dining', color: 'from-amber-500 to-orange-500' },
  { id: 'hotel', name: 'Hotel', color: 'from-rose-500 to-pink-500' },
];

const galleryImages = [
  { id: 1, src: '/facade1.jpg', alt: 'Hotel Marc exterior', category: 'hotel', caption: 'Hotel Marc - Your home in the hills' },
  { id: 2, src: '/marc-hero.jpg', alt: 'Hotel Marc entrance', category: 'hotel', caption: 'Welcome to Hotel Marc' },
  { id: 3, src: '/view1.jpg', alt: 'Valley view from hotel', category: 'views', caption: 'Breathtaking views of the Shimla valley' },
  { id: 4, src: '/room1.jpg', alt: 'Comfortable hotel room', category: 'rooms', caption: 'Well-appointed room with modern amenities' },
  { id: 5, src: '/rest1.jpg', alt: 'Marc Kitchen restaurant', category: 'dining', caption: 'Marc Kitchen - Multi-cuisine restaurant' },
  { id: 6, src: '/viceregal-lodge.jpg', alt: 'Viceregal Lodge nearby attraction', category: 'views', caption: 'Viceregal Lodge - Just 1.8 km away' },
  { id: 7, src: '/mall-road-shimla.jpg', alt: 'Mall Road Shimla', category: 'views', caption: 'Mall Road - 3 km from hotel' },
  { id: 8, src: '/himachal-state-museum-and-library-himachal-pradesh-1-attr-hero.jpeg', alt: 'Himachal State Museum', category: 'views', caption: 'State Museum - Walking distance' },
  { id: 9, src: '/rooms/deluxe-room/deluxe-room1.webp', alt: 'Deluxe Room', category: 'rooms', caption: 'Deluxe Room - Comfortable Stay' },
  { id: 10, src: '/rooms/deluxe-room/deluxe-room2.avif', alt: 'Deluxe Room interior', category: 'rooms', caption: 'Deluxe Room - Cozy interiors' },
  { id: 11, src: '/rooms/deluxe-room/deluxe-room3.avif', alt: 'Deluxe Room amenities', category: 'rooms', caption: 'Deluxe Room - Modern amenities' },
  { id: 12, src: '/rooms/deluxe-room/deluxe-room4.avif', alt: 'Deluxe Room view', category: 'rooms', caption: 'Deluxe Room - Relaxing space' },
  { id: 13, src: '/rooms/super-deluxe-room/super-deluxe-room1.avif', alt: 'Super Deluxe Room', category: 'rooms', caption: 'Super Deluxe Room - Valley View' },
  { id: 14, src: '/rooms/super-deluxe-room/super-deluxe-room2.webp', alt: 'Super Deluxe Room interior', category: 'rooms', caption: 'Super Deluxe Room - Premium comfort' },
  { id: 15, src: '/rooms/super-deluxe-room/super-deluxe-room3.webp', alt: 'Super Deluxe Room seating', category: 'rooms', caption: 'Super Deluxe Room - Seating area' },
  { id: 16, src: '/rooms/super-deluxe-room/super-deluxe-room4.jpg', alt: 'Super Deluxe Room bed', category: 'rooms', caption: 'Super Deluxe Room - King-size bed' },
  { id: 17, src: '/rooms/family-suite/family-suite1.avif', alt: 'Family Suite', category: 'rooms', caption: 'Family Suite - Spacious Comfort' },
  { id: 18, src: '/rooms/family-suite/family-suite2.webp', alt: 'Family Suite interior', category: 'rooms', caption: 'Family Suite - Perfect for families' },
  { id: 19, src: '/rooms/family-suite/family-suite3.webp', alt: 'Family Suite beds', category: 'rooms', caption: 'Family Suite - Two double beds' },
  { id: 20, src: '/rooms/family-suite/family-suite4.avif', alt: 'Family Suite space', category: 'rooms', caption: 'Family Suite - Ample space' },
  { id: 21, src: '/dining/hotel-marc-shimla-banner.webp', alt: 'Marc Kitchen banner', category: 'dining', caption: 'Marc Kitchen - Fine Dining' },
  { id: 22, src: '/dining/hotel-marc-restaurant-dining-experience.webp', alt: 'Dining experience', category: 'dining', caption: 'Memorable dining experiences' },
  { id: 23, src: '/dining/north-indian-cuisine.jpg', alt: 'North Indian cuisine', category: 'dining', caption: 'Authentic North Indian dishes' },
  { id: 24, src: '/dining/chinese-cuisine.png', alt: 'Chinese cuisine', category: 'dining', caption: 'Delicious Chinese delicacies' },
  { id: 25, src: '/dining/contiental-cuisine.png', alt: 'Continental cuisine', category: 'dining', caption: 'Continental favorites' },
  { id: 26, src: '/dining/start-your-day-right.jpg', alt: 'Breakfast spread', category: 'dining', caption: 'Start your day right' },
  { id: 27, src: '/facility/facilities-banner.jpg', alt: 'Hotel facilities', category: 'hotel', caption: 'Modern facilities for your comfort' },
  { id: 28, src: '/facility/hotel-mark-parking.jpg', alt: 'Parking facility', category: 'hotel', caption: 'Free secure parking' },
  { id: 29, src: '/about/hotel-marc-our-journey.jpg', alt: 'Our journey', category: 'hotel', caption: 'Hotel Marc - Our Story' },
  { id: 30, src: '/about/hotel-marc-team.jpeg', alt: 'Our team', category: 'hotel', caption: 'The Hotel Marc Team' },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryRef = useScrollAnimation<HTMLDivElement>();

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const goToPrevious = () => {
    setCurrentImageIndex(prev =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex(prev =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <SEO
        title="Hotel Marc Shimla Photos | Best Hotel Images | Rooms & Valley Views Gallery"
        description="View photos of Hotel Marc - best hotel in Shimla. See our rooms, stunning valley views, Marc Kitchen restaurant & facilities. Top rated Shimla hotel with beautiful mountain views."
        canonical="https://marcshimla.in/gallery"
        keywords="Hotel Marc Photos, Best Shimla Hotel Photos, Hotel Room Images Shimla, Valley View Hotel Photos, Mountain View Hotel Shimla, Shimla Hotel Gallery, Hotel Pictures Shimla, Best Looking Hotel Shimla"
      />
      <Hero
        image={IMAGES.shimlaValley}
        title="Photo Gallery"
        subtitle="Explore Hotel Marc through our lens - rooms, views, and memorable moments"
        height="large"
      />

      <section className="section-padding bg-gradient-to-br from-sky-50 via-cream-50 to-blue-50">
        <div className="container-custom">
          <SectionHeader
            title="Our Gallery"
            subtitle="A visual journey through Hotel Marc and its beautiful surroundings"
          />

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white text-slate-600 hover:shadow-lg hover:-translate-y-0.5 shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div
            ref={galleryRef.ref}
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-700 ${
              galleryRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 ring-2 ring-white"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white mb-4">
            Experience It Yourself
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Pictures can only tell part of the story. Visit Hotel Marc and create your own memories in beautiful Shimla.
          </p>
          <a
            href={getWhatsAppLink(WHATSAPP_MESSAGES.booking)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-lg hover:bg-sky-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book Your Stay
          </a>
        </div>
      </section>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors z-10 p-2 rounded-full hover:bg-white/10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-cyan-400 transition-colors z-10 p-3 rounded-full hover:bg-white/10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-cyan-400 transition-colors z-10 p-3 rounded-full hover:bg-white/10"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="max-w-5xl max-h-[85vh] px-4">
            <img
              src={filteredImages[currentImageIndex]?.src}
              alt={filteredImages[currentImageIndex]?.alt}
              className="max-w-full max-h-[75vh] object-contain mx-auto"
            />
            <p className="text-white text-center mt-4 text-lg">
              {filteredImages[currentImageIndex]?.caption}
            </p>
            <p className="text-white/60 text-center mt-2 text-sm">
              {currentImageIndex + 1} / {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
