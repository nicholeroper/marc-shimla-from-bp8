import { MapPin, Clock, Car, Camera, Mountain, TreePine } from 'lucide-react';
import { Hero, SectionHeader, AttractionCard, WeatherWidget, SEO } from '../components';
import { IMAGES, ATTRACTIONS, getWhatsAppLink, WHATSAPP_MESSAGES } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const categories = [
  {
    name: 'Walking Distance',
    icon: MapPin,
    description: 'Explore these attractions on foot from Hotel Marc',
    attractions: ATTRACTIONS.filter(a => parseFloat(a.distance) < 2 || a.distance.includes('m')),
    color: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Short Drive',
    icon: Car,
    description: 'Quick drives to popular Shimla landmarks',
    attractions: ATTRACTIONS.filter(a => parseFloat(a.distance) >= 2 && parseFloat(a.distance) <= 10),
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Day Trips',
    icon: Mountain,
    description: 'Perfect destinations for a full day excursion',
    attractions: ATTRACTIONS.filter(a => parseFloat(a.distance) > 10),
    color: 'from-amber-500 to-orange-500',
  },
];

const travelTips = [
  {
    icon: Camera,
    title: 'Best Photo Spots',
    description: 'The Ridge, Viceregal Lodge gardens, and Jakhu Temple viewpoint offer stunning panoramas.',
    color: 'from-rose-500 to-pink-500',
  },
  {
    icon: Clock,
    title: 'Best Time to Visit',
    description: 'March to June for pleasant weather, September to November for clear mountain views.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: TreePine,
    title: 'Nature Walks',
    description: 'The path from Hotel Marc to Viceregal Lodge is perfect for morning walks through pine forests.',
    color: 'from-emerald-500 to-teal-500',
  },
];

export function Attractions() {
  const categoriesRef = useScrollAnimation<HTMLDivElement>();
  const tipsRef = useScrollAnimation<HTMLDivElement>();

  return (
    <>
      <SEO
        title="Shimla Tourist Places | Best Attractions Near Hotel Marc | Sightseeing Guide"
        description="Explore top Shimla tourist places near Hotel Marc - Viceregal Lodge, Mall Road, Ridge, Kufri, Jakhu Temple & more. Book hotel with tour packages. Best base for Shimla sightseeing."
        canonical="https://marcshimla.in/attractions"
        keywords="Shimla Tourist Places, Best Places to Visit Shimla, Shimla Sightseeing, Things to Do Shimla, Shimla Tourism, Shimla Travel Guide, Viceregal Lodge Shimla, Mall Road Shimla, Ridge Shimla, Kufri Near Shimla, Jakhu Temple, Christ Church Shimla, Shimla Day Trips, Shimla Tour Package, Hotel near Tourist Places Shimla"
      />
      <Hero
        image={IMAGES.heroAttractions}
        title="Explore Shimla"
        subtitle="Discover the Queen of Hills and its magnificent attractions"
        height="large"
      />

      <section className="section-padding bg-gradient-to-br from-emerald-50 via-cream-50 to-teal-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeader
                title="Local Attractions"
                subtitle="From heritage sites to scenic viewpoints, Shimla has something for everyone"
                centered={false}
              />

              <div className="grid sm:grid-cols-2 gap-6">
                {ATTRACTIONS.slice(0, 4).map((attraction, index) => (
                  <AttractionCard key={attraction.name} {...attraction} index={index} />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <WeatherWidget />

              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-6 rounded-xl shadow-lg">
                <h3 className="font-serif text-xl font-semibold mb-4">Plan Your Trip</h3>
                <p className="text-white/80 text-sm mb-4">
                  Our travel desk can arrange customized tours to all these attractions. Contact us for the best rates.
                </p>
                <a
                  href={getWhatsAppLink(WHATSAPP_MESSAGES.attractions)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-emerald-600 text-center py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Book a Tour
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white via-amber-50/30 to-white">
        <div className="container-custom">
          <SectionHeader
            title="More Places to Explore"
            subtitle="Extended list of attractions near Shimla"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ATTRACTIONS.slice(4).map((attraction, index) => (
              <AttractionCard key={attraction.name} {...attraction} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
        <div className="container-custom">
          <SectionHeader
            title="Attractions by Distance"
            subtitle="Plan your explorations based on how far you want to travel"
            light
          />

          <div
            ref={categoriesRef.ref}
            className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
              categoriesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-colors duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold">{category.name}</h3>
                    <p className="text-white/60 text-sm">{category.attractions.length} attractions</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.attractions.map((attraction) => (
                    <li key={attraction.name} className="flex items-center justify-between text-sm p-2 bg-white/5 rounded-lg">
                      <span className="text-white/80">{attraction.name}</span>
                      <span className="text-emerald-400 font-medium">{attraction.distance}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-rose-50 via-cream-50 to-amber-50">
        <div className="container-custom">
          <SectionHeader
            title="Travel Tips"
            subtitle="Make the most of your Shimla experience with these helpful tips"
          />

          <div
            ref={tipsRef.ref}
            className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
              tipsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {travelTips.map((tip, index) => (
              <div
                key={tip.title}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${tip.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <tip.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-slate-800 mb-3">
                  {tip.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(/attractions/local-attractions/viceregal_lodge.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 to-teal-900/90" />

        <div className="relative container-custom px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6">
              Let Us Plan Your Perfect Shimla Trip
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Our travel desk offers customized tour packages to all major attractions. From pickup services to guided tours, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={getWhatsAppLink(WHATSAPP_MESSAGES.attractions)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Travel Desk
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
