import { MapPin, Heart, Award, Users, Star, CheckCircle } from 'lucide-react';
import { Hero, SectionHeader, SEO } from '../components';
import { IMAGES } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const values = [
  {
    icon: MapPin,
    title: 'The Location Advantage',
    description: 'Located near the Viceregal Lodge (Indian Institute of Advanced Study), one of Shimla\'s most famous heritage sites. The area is flat and walkable, perfect for evening strolls.',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: Heart,
    title: 'Family Hospitality',
    description: 'Managed by Mr. Marc and a dedicated team, we pride ourselves on personalized care that only a locally owned establishment can provide.',
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-50',
  },
  {
    icon: Award,
    title: 'Value for Money',
    description: 'We offer 3-star amenities at budget-friendly prices, making luxury accessible to all travelers without compromising on comfort.',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
  },
];

const milestones = [
  { year: '2014', event: 'Hotel Marc opened its doors' },
  { year: '2016', event: 'Expanded to 15 rooms' },
  { year: '2018', event: 'Launched Marc Kitchen restaurant' },
  { year: '2020', event: 'Renovated with modern amenities' },
  { year: '2023', event: 'Added valley view suites' },
];

export function About() {
  const storyRef = useScrollAnimation<HTMLDivElement>();
  const valuesRef = useScrollAnimation<HTMLDivElement>();
  const teamRef = useScrollAnimation<HTMLDivElement>();

  return (
    <>
      <SEO
        title="About Hotel Marc Shimla | Best Family Hotel in Shimla Since 2014"
        description="Learn about Hotel Marc Shimla - a family-run hotel in Chaura Maidan since 2014. Experience warm hospitality near Viceregal Lodge with valley views and homely food. Marc Hotel Shimla."
        canonical="https://marcshimla.in/about"
        keywords="About Hotel Marc, Marc Hotel History, Family Hotel Shimla, Chaura Maidan Hotel"
      />
      <Hero
        image={IMAGES.heroAbout}
        title="Our Story & Vision"
        subtitle="A family legacy of warmth and hospitality in the heart of Shimla"
        height="large"
      />

      <section className="section-padding bg-gradient-to-br from-emerald-50 via-cream-50 to-teal-50">
        <div className="container-custom">
          <div
            ref={storyRef.ref}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              storyRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
                <span className="text-sm font-medium tracking-widest uppercase text-emerald-600">Our Journey</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-800 mb-6">
                A Decade of Memorable Stays
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Hotel Marc has established a reputation for friendly, attentive service that only local ownership can provide. Situated next to Kotshera College in Chaura Maidan, we are away from the noise but close to the action.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                What started as a small family guesthouse has grown into one of the most beloved hotels in the Chaura Maidan area. Our commitment to providing a home-away-from-home experience has remained unchanged over the years.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Every guest who walks through our doors becomes part of the Hotel Marc family. We believe in creating memories, not just providing accommodation, and that philosophy guides everything we do.
              </p>
            </div>

            <div className="relative">
              <img
                src="/about/hotel-marc-our-journey.jpg"
                alt="Hotel Marc building"
                className="rounded-xl shadow-2xl w-full ring-4 ring-white"
              />
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-8 rounded-xl shadow-xl hidden lg:block">
                <p className="text-3xl font-serif font-bold">Since</p>
                <p className="text-5xl font-serif font-bold text-white">2014</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container-custom">
          <SectionHeader
            title="Why Choose Us"
            subtitle="Three pillars that define the Hotel Marc experience"
          />

          <div
            ref={valuesRef.ref}
            className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
              valuesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`text-center p-8 ${value.bgColor} rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-20 h-20 mx-auto rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-slate-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Journey"
            subtitle="Key milestones in the Hotel Marc story"
            light
          />

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500 rounded-full" />

              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center mb-8 last:mb-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                    <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-colors duration-300">
                      <span className="text-2xl font-serif font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">{milestone.year}</span>
                      <p className="text-white/80 mt-2">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-5 h-5 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full transform -translate-x-1/2 shadow-lg shadow-emerald-500/30" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-rose-50 via-cream-50 to-amber-50">
        <div className="container-custom">
          <div
            ref={teamRef.ref}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              teamRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="order-2 lg:order-1">
              <img
                src="/about/hotel-marc-team.jpeg"
                alt="Hotel staff"
                className="rounded-xl shadow-2xl w-full ring-4 ring-white"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full" />
                <span className="text-sm font-medium tracking-widest uppercase text-rose-600">Our Team</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-800 mb-6">
                The Heart of Hotel Marc
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Behind every memorable stay is our dedicated team of hospitality professionals. From our front desk staff to our housekeeping team, everyone at Hotel Marc is committed to making your visit exceptional.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-600">Trained hospitality professionals with local expertise</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-600">24/7 availability for guest assistance</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-600">Personalized recommendations for local attractions</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="w-6 h-6 text-rose-500 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-600">Multilingual staff for international guests</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-rose-500 via-amber-500 to-orange-500 text-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center p-6 rounded-xl bg-white/10 backdrop-blur-sm">
              <Users className="w-10 h-10 text-white mb-3" />
              <p className="text-4xl font-serif font-bold">500+</p>
              <p className="text-white/80 mt-1">Happy Guests</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-white/10 backdrop-blur-sm">
              <Star className="w-10 h-10 text-white mb-3" />
              <p className="text-4xl font-serif font-bold">4.5</p>
              <p className="text-white/80 mt-1">Average Rating</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-white/10 backdrop-blur-sm">
              <Award className="w-10 h-10 text-white mb-3" />
              <p className="text-4xl font-serif font-bold">10+</p>
              <p className="text-white/80 mt-1">Years of Service</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-white/10 backdrop-blur-sm">
              <Heart className="w-10 h-10 text-white mb-3" />
              <p className="text-4xl font-serif font-bold">100%</p>
              <p className="text-white/80 mt-1">Dedication</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
