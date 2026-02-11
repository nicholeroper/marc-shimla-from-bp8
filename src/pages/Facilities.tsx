import { Wifi, Car, MapPin, Shirt, Stethoscope, Zap, Sun, Bell, Shield, Clock, Sparkles, Users } from 'lucide-react';
import { Hero, SectionHeader, SEO } from '../components';
import { IMAGES, getWhatsAppLink, WHATSAPP_MESSAGES, HOTEL_INFO } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const facilities = [
  {
    icon: Wifi,
    name: 'Free Wi-Fi',
    description: 'High-speed internet access in rooms and public areas to keep you connected throughout your stay.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Car,
    name: 'Secure Parking',
    description: 'Safe and free drive-in parking space for guests - a rare luxury in Shimla. Park right at the hotel entrance.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: MapPin,
    name: 'Travel Desk',
    description: 'We can arrange sightseeing taxis to Kufri, Naldehra, Chail, and provide pick-up/drop services to Railway Station or Bus Stand.',
    color: 'from-rose-500 to-pink-500',
  },
  {
    icon: Shirt,
    name: 'Laundry Service',
    description: 'Same-day laundry and dry cleaning services available for your convenience.',
    color: 'from-sky-500 to-blue-500',
  },
  {
    icon: Stethoscope,
    name: 'Doctor on Call',
    description: 'Medical assistance available for any emergencies. Your health and safety are our priority.',
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: Zap,
    name: 'Power Backup',
    description: '24-hour generator backup ensures uninterrupted stay regardless of weather conditions.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Sun,
    name: 'Open Terrace',
    description: 'Enjoy the beautiful Shimla weather and panoramic views from our open terrace area.',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Bell,
    name: 'Room Service',
    description: '24-hour room service bringing Marc Kitchen delicacies right to your doorstep.',
    color: 'from-teal-500 to-emerald-500',
  },
];

const services = [
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'CCTV surveillance and 24-hour security for your peace of mind',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Clock,
    title: '24/7 Reception',
    description: 'Our front desk is always available to assist you',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Sparkles,
    title: 'Daily Housekeeping',
    description: 'Clean, fresh rooms every day of your stay',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Users,
    title: 'Friendly Staff',
    description: 'Warm hospitality from our dedicated team',
    color: 'from-rose-500 to-pink-500',
  },
];

export function Facilities() {
  const facilitiesRef = useScrollAnimation<HTMLDivElement>();
  const servicesRef = useScrollAnimation<HTMLDivElement>();

  return (
    <>
      <SEO
        title="Hotel Marc Shimla Facilities | Free Parking, WiFi & Amenities"
        description="Hotel Marc Shimla offers free parking, WiFi, room service, travel desk & more. Best amenities at affordable rates in Shimla. Book hotel with parking near Mall Road."
        canonical="https://marcshimla.in/facilities"
        keywords="Hotel Facilities Shimla, Hotel with Parking Shimla, WiFi Hotel Shimla, Room Service Shimla"
      />
      <Hero
        image={IMAGES.heroFacilities}
        title="Facilities & Amenities"
        subtitle="Everything you need for a comfortable and memorable stay"
        height="large"
      />

      <section className="section-padding bg-gradient-to-br from-sky-50 via-cream-50 to-blue-50">
        <div className="container-custom">
          <SectionHeader
            title="Hotel Amenities"
            subtitle="Modern conveniences combined with warm hospitality for the perfect mountain retreat"
          />

          <div
            ref={facilitiesRef.ref}
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${
              facilitiesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {facilities.map((facility, index) => (
              <div
                key={facility.name}
                className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${facility.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <facility.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2 text-slate-800">
                  {facility.name}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full" />
                <span className="text-sm font-medium tracking-widest uppercase text-emerald-400">Parking Facility</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-6">
                A Rare Luxury in Shimla
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Finding parking in Shimla can be a challenge, but not at Hotel Marc. We offer complimentary, secure drive-in parking right at the hotel entrance - a convenience that sets us apart.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 p-2 bg-white/5 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">&#10003;</span>
                  </div>
                  <span className="text-white/80">Free parking for all guests</span>
                </li>
                <li className="flex items-center gap-3 p-2 bg-white/5 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">&#10003;</span>
                  </div>
                  <span className="text-white/80">Drive-in access to hotel entrance</span>
                </li>
                <li className="flex items-center gap-3 p-2 bg-white/5 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">&#10003;</span>
                  </div>
                  <span className="text-white/80">24-hour security surveillance</span>
                </li>
                <li className="flex items-center gap-3 p-2 bg-white/5 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-rose-400 to-pink-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">&#10003;</span>
                  </div>
                  <span className="text-white/80">Space for multiple vehicles</span>
                </li>
              </ul>
            </div>

            <div className="relative">
              <img
                src="/facility/hotel-mark-parking.jpg"
                alt="Parking facility"
                className="rounded-xl shadow-2xl w-full ring-4 ring-white/20"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-emerald-500 to-teal-500 p-6 rounded-xl shadow-xl hidden md:block">
                <Car className="w-8 h-8 text-white mb-2" />
                <p className="text-white font-semibold">Free</p>
                <p className="text-white/80 text-sm">Parking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white via-amber-50/30 to-white">
        <div className="container-custom">
          <SectionHeader
            title="Guest Services"
            subtitle="Our commitment to your comfort and convenience"
          />

          <div
            ref={servicesRef.ref}
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${
              servicesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {services.map((service, index) => (
              <div
                key={service.title}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-20 h-20 mx-auto rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-slate-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-rose-50 via-cream-50 to-amber-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center mb-4 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-serif text-3xl font-semibold text-slate-800 mb-4">
                  Travel Desk Services
                </h2>
                <p className="text-slate-600">
                  Let us help you explore the best of Shimla and its surroundings
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-2 border-rose-100 rounded-xl p-6 bg-rose-50/50">
                  <h3 className="font-semibold text-slate-800 mb-3">Sightseeing Tours</h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>Kufri Day Trip</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>Naldehra Golf Course Visit</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>Chail Palace Excursion</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>Local Shimla Tour</li>
                  </ul>
                </div>
                <div className="border-2 border-amber-100 rounded-xl p-6 bg-amber-50/50">
                  <h3 className="font-semibold text-slate-800 mb-3">Transfer Services</h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>Railway Station Pick-up/Drop</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>Bus Stand Transfer</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>Airport Transfer (Chandigarh)</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>Custom Tours on Request</li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-8">
                <a href={getWhatsAppLink(WHATSAPP_MESSAGES.attractions)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-500 to-amber-500 text-white font-semibold rounded-lg hover:from-rose-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Book Travel Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white mb-4">
            Need Any Assistance?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Our team is available 24/7 to help you with any requests or inquiries.
          </p>
          <a href={`tel:${HOTEL_INFO.phone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl">
            Call Us: {HOTEL_INFO.phone}
          </a>
        </div>
      </section>
    </>
  );
}
