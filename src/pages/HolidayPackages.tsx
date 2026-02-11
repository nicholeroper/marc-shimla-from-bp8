import { Phone, MessageCircle, Shield, MapPin, Clock, Award, CheckCircle } from 'lucide-react';
import { Hero, SectionHeader, PackageCard, SEO } from '../components';
import { IMAGES, HOLIDAY_PACKAGES, MARC_HOLIDAYERS, BOOKING_POLICY, getWhatsAppLink, WHATSAPP_MESSAGES } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Government Registered',
    description: 'Approved by Himachal Tourism with permanent registration for your peace of mind.',
  },
  {
    icon: MapPin,
    title: 'Local Expertise',
    description: 'Based in Shimla, we know every hidden gem and the best routes through the hills.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance throughout your journey for a worry-free experience.',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Handpicked hotels, experienced drivers, and meticulously planned itineraries.',
  },
];

export function HolidayPackages() {
  const whyUsRef = useScrollAnimation<HTMLDivElement>();
  const policyRef = useScrollAnimation<HTMLDivElement>();

  return (
    <>
      <SEO
        title="Best Shimla Tour Packages | Himachal Holiday Deals | Hotel with Tour Package"
        description="Book best Shimla tour packages from Hotel Marc. Shimla-Manali, Kufri, Chail packages by Marc Holidayers - Govt registered. Hotels with holiday packages in Himachal. Best deals guaranteed!"
        canonical="https://marcshimla.in/packages"
        keywords="Best Shimla Tour Packages, Cheap Shimla Packages, Shimla Holiday Packages, Himachal Tour Packages, Shimla Manali Package, Shimla Kullu Manali, Hotel with Tour Package Shimla, Family Package Shimla, Honeymoon Package Shimla, Budget Tour Shimla, Kufri Package, Chail Package, Naldehra Tour, Government Registered Tour Operator Shimla"
      />
      <Hero
        image={IMAGES.heroPackages}
        title="Holiday Packages"
        subtitle="Curated travel experiences across Himachal Pradesh by Marc Holidayers"
        height="large"
      />

      <section className="section-padding bg-gradient-to-br from-emerald-50 via-cream-50 to-teal-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Reg. No.: {MARC_HOLIDAYERS.registrationNo}</span>
              <span className="mx-2">|</span>
              <span>Approved by {MARC_HOLIDAYERS.approvedBy}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-800 mb-4">
              {MARC_HOLIDAYERS.name}
            </h2>
            <p className="text-slate-600 text-lg">
              {MARC_HOLIDAYERS.tagline}. We specialize in crafting memorable journeys through the breathtaking landscapes of Himachal Pradesh.
            </p>
          </div>

          <SectionHeader
            title="Explore Our Packages"
            subtitle="From quick getaways to comprehensive tours, find the perfect Himachal experience"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOLIDAY_PACKAGES.map((pkg, index) => (
              <PackageCard key={pkg.id} package={pkg} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
        <div className="container-custom">
          <SectionHeader
            title="Why Choose Marc Holidayers?"
            subtitle="Your trusted travel partner in Himachal Pradesh"
            light
          />

          <div
            ref={whyUsRef.ref}
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${
              whyUsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 shadow-lg">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-amber-50 via-cream-50 to-orange-50">
        <div className="container-custom">
          <SectionHeader
            title="Booking & Payment"
            subtitle="Simple and transparent booking process"
          />

          <div
            ref={policyRef.ref}
            className={`grid lg:grid-cols-2 gap-12 transition-all duration-700 ${
              policyRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="font-serif text-2xl font-semibold text-slate-800 mb-6">Payment Structure</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-lg">
                  <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Booking Confirmation</p>
                    <p className="text-slate-600 text-sm">{BOOKING_POLICY.advance}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
                  <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Voucher Issuance</p>
                    <p className="text-slate-600 text-sm">{BOOKING_POLICY.voucher}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-sky-50 rounded-lg">
                  <div className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Final Payment</p>
                    <p className="text-slate-600 text-sm">{BOOKING_POLICY.remaining}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="font-serif text-2xl font-semibold text-slate-800 mb-6">Cancellation Policy</h3>
              <div className="space-y-3 mb-6">
                {BOOKING_POLICY.cancellation.map((item) => (
                  <div key={item.period} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-600">{item.period}</span>
                    <span className="font-semibold text-slate-800">{item.charge} charge</span>
                  </div>
                ))}
              </div>

              <h4 className="font-medium text-slate-800 mb-3">Terms & Conditions</h4>
              <ul className="space-y-2">
                {BOOKING_POLICY.terms.map((term) => (
                  <li key={term} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1920)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 to-teal-900/90" />

        <div className="relative container-custom px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6">
              Ready to Explore Himachal?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Contact us today to customize your perfect holiday package. Our travel experts are here to help you plan an unforgettable journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppLink(WHATSAPP_MESSAGES.packages('Holiday Package'))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
              <a
                href={`tel:${MARC_HOLIDAYERS.phone.replace(/-/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-700 font-semibold rounded-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                {MARC_HOLIDAYERS.phone}
              </a>
            </div>
            <p className="mt-6 text-white/60 text-sm">
              Or call: {MARC_HOLIDAYERS.altPhone}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
