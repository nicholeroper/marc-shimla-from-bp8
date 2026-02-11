import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Car,
  Utensils,
  Phone,
  MessageCircle,
  CheckCircle,
  XCircle,
  Sunrise,
  Moon,
  Sparkles,
  Shield
} from 'lucide-react';
import { HOLIDAY_PACKAGES, MARC_HOLIDAYERS, BOOKING_POLICY, getWhatsAppLink, WHATSAPP_MESSAGES } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function PackageDetail() {
  const { packageId } = useParams<{ packageId: string }>();
  const pkg = HOLIDAY_PACKAGES.find((p) => p.id === packageId);
  const itineraryRef = useScrollAnimation<HTMLDivElement>();
  const inclusionsRef = useScrollAnimation<HTMLDivElement>();

  if (!pkg) {
    return <Navigate to="/packages" replace />;
  }

  const whatsappMessage = WHATSAPP_MESSAGES.packages(pkg.name);

  return (
    <>
      <section className="relative min-h-[60vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${pkg.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

        <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 pb-12 pt-32">
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Packages
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-primary-600 text-white text-sm font-semibold px-4 py-1.5 rounded-sm">
              {pkg.duration}
            </span>
            {pkg.badge && (
              <span className={`text-sm font-semibold px-3 py-1 rounded-sm ${
                pkg.badge === 'popular' ? 'bg-amber-500 text-white' :
                pkg.badge === 'bestValue' ? 'bg-emerald-500 text-white' :
                'bg-sky-500 text-white'
              }`}>
                {pkg.badge === 'popular' ? 'Popular' : pkg.badge === 'bestValue' ? 'Best Value' : 'New'}
              </span>
            )}
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-3">
            {pkg.name}
          </h1>
          <p className="text-xl text-white/80 mb-6">{pkg.tagline}</p>

          <div className="flex flex-wrap gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-400" />
              <span>{pkg.pickupDrop}</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="w-5 h-5 text-emerald-400" />
              <span>{pkg.transportation}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-emerald-400" />
              <span>{pkg.nights} Nights / {pkg.days} Days</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils className="w-5 h-5 text-emerald-400" />
              <span>{pkg.mealPlan}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-emerald-50 via-cream-50 to-teal-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="font-serif text-3xl font-semibold text-slate-800 mb-4">
                  About This Package
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              <div
                ref={itineraryRef.ref}
                className={`transition-all duration-700 ${
                  itineraryRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <h2 className="font-serif text-3xl font-semibold text-slate-800 mb-8">
                  Day-wise Itinerary
                </h2>

                <div className="space-y-6">
                  {pkg.itinerary.map((day, index) => (
                    <div
                      key={day.day}
                      className="relative pl-8 md:pl-12"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="absolute left-0 top-0 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base shadow-lg">
                        {day.day}
                      </div>
                      {index < pkg.itinerary.length - 1 && (
                        <div className="absolute left-[15px] md:left-[19px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300 to-teal-300" />
                      )}

                      <div className="bg-white rounded-xl p-6 ml-4 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                          <h3 className="font-serif text-xl font-semibold text-slate-800">
                            {day.title}
                          </h3>
                          <span className="text-sm text-emerald-600 font-medium bg-emerald-50 px-3 py-1 rounded-full">
                            Day {day.day}
                          </span>
                        </div>

                        <p className="text-slate-600 mb-4 leading-relaxed">
                          {day.description}
                        </p>

                        {day.highlights.length > 0 && (
                          <div className="mb-4">
                            <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                              <Sparkles className="w-4 h-4" />
                              <span className="font-medium">Highlights</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {day.highlights.map((highlight) => (
                                <span
                                  key={highlight}
                                  className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full"
                                >
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Utensils className="w-4 h-4 text-amber-500" />
                            <span>{day.meals}</span>
                          </div>
                          {day.overnight && (
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Moon className="w-4 h-4 text-indigo-500" />
                              <span>Overnight: {day.overnight}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {pkg.optionalExcursions && pkg.optionalExcursions.length > 0 && (
                <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Sunrise className="w-6 h-6 text-amber-600" />
                    <h3 className="font-serif text-xl font-semibold text-slate-800">
                      Optional Excursions
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {pkg.optionalExcursions.map((excursion) => (
                      <span
                        key={excursion}
                        className="bg-white text-slate-700 px-4 py-2 rounded-lg shadow-sm border border-amber-200"
                      >
                        {excursion}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-amber-700 mt-4">
                    * These excursions can be added to your package at additional cost
                  </p>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-center mb-6">
                    <p className="text-sm text-slate-500 mb-1">Package Price</p>
                    <p className="text-2xl font-bold text-primary-700">Contact for Price</p>
                  </div>

                  <div className="space-y-3">
                    <a
                      href={getWhatsAppLink(whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Enquire on WhatsApp
                    </a>
                    <a
                      href={`tel:${MARC_HOLIDAYERS.phone.replace(/-/g, '')}`}
                      className="flex items-center justify-center gap-2 w-full bg-primary-700 hover:bg-primary-800 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      Call Now
                    </a>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                      <Shield className="w-4 h-4 text-emerald-500" />
                      <span>{MARC_HOLIDAYERS.name}</span>
                    </div>
                    <p className="text-xs text-slate-500">
                      Reg. No.: {MARC_HOLIDAYERS.registrationNo}
                    </p>
                    <p className="text-xs text-slate-500">
                      Approved by {MARC_HOLIDAYERS.approvedBy}
                    </p>
                  </div>
                </div>

                <div
                  ref={inclusionsRef.ref}
                  className={`space-y-4 transition-all duration-700 ${
                    inclusionsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="font-serif text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      Inclusions
                    </h3>
                    <ul className="space-y-2">
                      {pkg.inclusions.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="font-serif text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-500" />
                      Exclusions
                    </h3>
                    <ul className="space-y-2">
                      {pkg.exclusions.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                          <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 text-white">
                  <h3 className="font-serif text-lg font-semibold mb-4">Booking Policy</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                      <span className="text-white/80">{BOOKING_POLICY.advance}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                      <span className="text-white/80">{BOOKING_POLICY.voucher}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                      <span className="text-white/80">{BOOKING_POLICY.remaining}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-6">
              Ready to Book This Package?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Contact us today and let us help you plan the perfect Himachal experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppLink(whatsappMessage)}
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
          </div>
        </div>
      </section>
    </>
  );
}
