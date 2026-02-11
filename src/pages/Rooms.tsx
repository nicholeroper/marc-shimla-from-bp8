import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Clock, Users, CreditCard, Heart, Wifi, Tv, Bath, Coffee } from 'lucide-react';
import { Hero, SectionHeader, RoomSection, SEO } from '../components';
import { IMAGES, ROOMS, HOTEL_INFO, getWhatsAppLink, WHATSAPP_MESSAGES } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const policies = [
  { icon: Clock, label: 'Check-in', value: HOTEL_INFO.checkIn, color: 'from-emerald-500 to-teal-500' },
  { icon: Clock, label: 'Check-out', value: HOTEL_INFO.checkOut, color: 'from-blue-500 to-cyan-500' },
  { icon: Users, label: 'Extra Guest', value: 'On Request', color: 'from-amber-500 to-orange-500' },
  { icon: CreditCard, label: 'Payment', value: 'Cash / UPI', color: 'from-rose-500 to-pink-500' },
];

const commonAmenities = [
  { icon: Wifi, name: 'Free Wi-Fi', color: 'from-blue-500 to-cyan-500' },
  { icon: Tv, name: 'LCD TV', color: 'from-emerald-500 to-teal-500' },
  { icon: Bath, name: 'Hot Water', color: 'from-amber-500 to-orange-500' },
  { icon: Coffee, name: 'Room Service', color: 'from-rose-500 to-pink-500' },
];

export function Rooms() {
  const location = useLocation();
  const policyRef = useScrollAnimation<HTMLDivElement>();
  const amenitiesRef = useScrollAnimation<HTMLDivElement>();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <>
      <SEO
        title="Best Rooms in Shimla | Deluxe & Family Suites | Hotel Marc | Book Online"
        description="Book best rooms in Shimla at Hotel Marc. Deluxe rooms, super deluxe rooms & family suites with valley views near Mall Road. Affordable rates, free parking, WiFi. Call 9418385000 for best deals."
        canonical="https://marcshimla.in/rooms"
        keywords="Best Rooms Shimla, Cheap Rooms Shimla, Affordable Rooms Shimla, Valley View Room Shimla, Deluxe Room Shimla, Family Suite Shimla, Hotel Room Booking Shimla, Shimla Room Rates, Budget Room Shimla, Luxury Room Shimla, Room with View Shimla, AC Room Shimla, Heater Room Shimla, Room near Mall Road"
      />
      <Hero
        image={IMAGES.heroRooms}
        title="Rooms & Suites"
        subtitle="Comfortable accommodations designed for your perfect mountain retreat"
        height="large"
      />

      <section className="section-padding bg-gradient-to-br from-sky-50 via-cream-50 to-blue-50">
        <div className="container-custom">
          <SectionHeader
            title="Our Accommodations"
            subtitle="Clean, spacious, and well-furnished rooms with modern amenities. All rooms feature flat-screen TVs, intercoms, and attached bathrooms with hot & cold water."
          />
        </div>
      </section>

      {ROOMS.map((room, index) => (
        <section
          key={room.id}
          id={room.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-cream-50'}`}
        >
          <div className="container-custom">
            <RoomSection {...room} reversed={index % 2 !== 0} />
          </div>
        </section>
      ))}

      <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              ref={amenitiesRef.ref}
              className={`transition-all duration-700 ${
                amenitiesRef.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                <span className="text-sm font-medium tracking-widest uppercase text-cyan-400">Standard Features</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-6">
                In Every Room
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Every room at Hotel Marc comes equipped with essential amenities to ensure a comfortable and convenient stay, regardless of the category you choose.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {commonAmenities.map((amenity) => (
                  <div key={amenity.name} className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${amenity.color} flex items-center justify-center shadow-lg`}>
                      <amenity.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-medium">{amenity.name}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-xl border border-rose-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-5 h-5 text-rose-400" />
                  <span className="font-semibold">Couple Friendly</span>
                </div>
                <p className="text-white/70 text-sm">
                  Valid local ID required for unmarried couples. We respect your privacy and ensure a comfortable stay for all guests.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/rooms/deluxe-room/deluxe-room3.avif"
                alt="Room interior"
                className="rounded-xl shadow-2xl w-full ring-4 ring-white/20"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-500 to-orange-500 p-6 rounded-xl shadow-xl hidden md:block">
                <p className="text-white font-semibold">Starting from</p>
                <p className="text-3xl font-serif font-bold text-white">₹2,499</p>
                <p className="text-white/80 text-sm">per night</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="container-custom">
          <SectionHeader
            title="Room Policies"
            subtitle="Important information for your stay at Hotel Marc"
          />

          <div
            ref={policyRef.ref}
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-700 ${
              policyRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {policies.map((policy, index) => (
              <div
                key={policy.label}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${policy.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <policy.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-slate-500 text-sm mb-1">{policy.label}</p>
                <p className="font-serif text-xl font-semibold text-slate-800">{policy.value}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-amber-100">
              <h3 className="font-serif text-2xl font-semibold text-slate-800 mb-4 text-center">
                Important Notes
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Early check-in and late check-out subject to availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Valid government ID required at the time of check-in</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Pets are not allowed in the hotel premises</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Smoking is prohibited in all rooms (designated area available)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-gradient-to-br from-sky-500 to-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Outside food is not allowed in the restaurant area</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white mb-4">
            Ready to Book Your Room?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us directly for the best rates and personalized assistance with your booking.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={getWhatsAppLink(WHATSAPP_MESSAGES.booking)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book via WhatsApp
            </a>
            <a href={`tel:${HOTEL_INFO.phone.replace(/\s/g, '')}`} className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600">
              Call: {HOTEL_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
