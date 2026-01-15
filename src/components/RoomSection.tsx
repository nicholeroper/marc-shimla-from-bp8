import { useState } from 'react';
import { Check, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { HOTEL_INFO } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface RoomSectionProps {
  id: string;
  name: string;
  subtitle: string;
  bestFor: string;
  description: string;
  amenities: string[];
  images: string[];
  originalPrice?: number;
  price?: number;
  reversed?: boolean;
}

export function RoomSection({
  name,
  subtitle,
  bestFor,
  description,
  amenities,
  images,
  originalPrice,
  price,
  reversed = false,
}: RoomSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const whatsappMessage = `Hello! I would like to book the ${name} at Hotel Marc, Shimla.`;
  const bookingLink = `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => setLightboxIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <div
        ref={ref}
        className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className={`${reversed ? 'lg:order-2' : ''}`}>
          <div
            className="relative aspect-[4/3] rounded-sm overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(activeImage)}
          >
            <img
              src={images[activeImage]}
              alt={`${name} - Main view`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium bg-black/50 px-4 py-2 rounded">
                Click to enlarge
              </span>
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-3">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`aspect-square rounded-sm overflow-hidden transition-all ${
                  activeImage === index
                    ? 'ring-2 ring-gold-500 ring-offset-2'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`${name} - View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className={`${reversed ? 'lg:order-1' : ''}`}>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm font-medium tracking-widest uppercase text-gold-600">
              {subtitle}
            </span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-800 mb-2">
            {name}
          </h3>
          <p className="text-primary-600 font-medium mb-4">Best for: {bestFor}</p>

          <p className="text-slate-600 leading-relaxed mb-6">{description}</p>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
              Room Amenities
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {amenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-2 text-slate-600">
                  <Check className="w-4 h-4 text-forest-500 flex-shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {price && (
            <div className="bg-cream-50 p-5 rounded-sm mb-6">
              <div className="flex items-baseline gap-3 mb-1">
                {originalPrice && (
                  <span className="text-slate-400 line-through text-xl">
                    ₹{originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-3xl font-bold text-primary-700">
                  ₹{price.toLocaleString('en-IN')}
                </span>
                <span className="text-slate-500">/night</span>
              </div>
              {originalPrice && (
                <span className="inline-block text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded">
                  Save ₹{(originalPrice - price).toLocaleString('en-IN')}
                </span>
              )}
            </div>
          )}

          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold-500 text-white px-8 py-3 font-medium hover:bg-gold-600 transition-colors rounded-sm"
          >
            Book This Room
          </a>
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white/80 hover:text-white p-2 z-10"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white/80 hover:text-white p-2 z-10"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <img
            src={images[lightboxIndex]}
            alt={`${name} - View ${lightboxIndex + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
