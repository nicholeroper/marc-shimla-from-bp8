import { Clock, Utensils, Leaf, ChefHat, Coffee, Soup } from 'lucide-react';
import { Hero, SectionHeader } from '../components';
import { IMAGES, getWhatsAppLink, WHATSAPP_MESSAGES } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const cuisines = [
  {
    name: 'North Indian',
    description: 'Authentic flavors from the heart of India',
    dishes: ['Dal Makhani', 'Butter Chicken', 'Paneer Specials', 'Tandoori Items', 'Biryani'],
    image: '/dining/north-indian-cuisine.jpg',
  },
  {
    name: 'Chinese',
    description: 'Indo-Chinese favorites for every palate',
    dishes: ['Hakka Noodles', 'Manchurian', 'Fried Rice', 'Spring Rolls', 'Soups'],
    image: '/dining/chinese-cuisine.png',
  },
  {
    name: 'Continental',
    description: 'Light bites and comfort food',
    dishes: ['Sandwiches', 'Pasta', 'Toast', 'Omelettes', 'French Fries'],
    image: '/dining/contiental-cuisine.png',
  },
];

const breakfastItems = [
  { name: 'Fresh Parathas', description: 'Stuffed with potato, paneer, or mixed vegetables' },
  { name: 'Toast & Butter', description: 'Crispy toast with fresh butter and jam' },
  { name: 'Omelettes', description: 'Made to order with your choice of fillings' },
  { name: 'Hot Chai/Coffee', description: 'Freshly brewed to start your day right' },
];

const features = [
  {
    icon: ChefHat,
    title: 'Expert Chefs',
    description: 'Our experienced chefs prepare every dish with love and care',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'We use only the freshest local ingredients in our kitchen',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Clock,
    title: '24/7 Room Service',
    description: 'Enjoy your meal in the privacy of your room anytime',
    color: 'from-amber-500 to-orange-500',
  },
];

export function Dining() {
  const cuisineRef = useScrollAnimation<HTMLDivElement>();
  const breakfastRef = useScrollAnimation<HTMLDivElement>();

  return (
    <>
      <Hero
        image={IMAGES.heroDining}
        title="Marc Kitchen"
        subtitle="Pure, Homely, and Hygienic - Taste the warmth of home-cooked meals"
        height="large"
      />

      <section className="section-padding bg-gradient-to-br from-amber-50 via-cream-50 to-orange-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
                <span className="text-sm font-medium tracking-widest uppercase text-orange-600">Dining Experience</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-800 mb-6">
                Food That Feels Like Home
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We believe that good food is the heart of a great vacation. "Marc Kitchen," our in-house multi-cuisine restaurant, serves freshly prepared dishes that taste just like home.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Whether you crave the rich flavors of North Indian cuisine, the spicy kick of Indo-Chinese dishes, or light Continental snacks, our kitchen delivers it all with the warmth and care of home cooking.
              </p>

              <div className="space-y-6">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">{feature.title}</h3>
                      <p className="text-slate-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/dining/hotel-marc-restaurant-dining-experience.webp"
                alt="Marc Kitchen dining area"
                className="rounded-xl shadow-2xl w-full ring-4 ring-white"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-orange-500 to-red-500 text-white p-6 rounded-xl shadow-xl hidden md:block">
                <Utensils className="w-8 h-8 text-white mb-2" />
                <p className="font-serif text-xl font-semibold">Multi-Cuisine</p>
                <p className="text-white/80 text-sm">Restaurant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white via-rose-50/30 to-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Cuisines"
            subtitle="A diverse menu to satisfy every craving"
          />

          <div
            ref={cuisineRef.ref}
            className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
              cuisineRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {cuisines.map((cuisine, index) => (
              <div
                key={cuisine.name}
                className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cuisine.image}
                    alt={cuisine.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/70 via-orange-900/20 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-serif text-2xl font-semibold text-white">
                    {cuisine.name}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-4">{cuisine.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cuisine.dishes.map((dish, i) => (
                      <span
                        key={dish}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          i % 3 === 0 ? 'bg-orange-100 text-orange-700' :
                          i % 3 === 1 ? 'bg-rose-100 text-rose-700' :
                          'bg-amber-100 text-amber-700'
                        }`}
                      >
                        {dish}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 text-white">
        <div className="container-custom">
          <div
            ref={breakfastRef.ref}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              breakfastRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="order-2 lg:order-1">
              <img
                src="/dining/start-your-day-right.jpg"
                alt="Breakfast spread"
                className="rounded-xl shadow-2xl w-full ring-4 ring-white/20"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full" />
                <span className="text-sm font-medium tracking-widest uppercase text-amber-400">Morning Delight</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-6">
                Start Your Day Right
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Begin each morning with our hearty breakfast selection, prepared fresh to fuel your day of exploration in beautiful Shimla.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {breakfastItems.map((item, index) => (
                  <div key={item.name} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      index % 2 === 0 ? 'bg-amber-500' : 'bg-orange-500'
                    }`}>
                      <Coffee className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item.name}</h4>
                      <p className="text-white/60 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-rose-50 via-cream-50 to-amber-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg">
              <Soup className="w-10 h-10 text-white" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-800 mb-6">
              Room Service Available 24/7
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Prefer to dine in the comfort of your room? Our room service brings the Marc Kitchen experience right to your doorstep. Enjoy your meal while watching the sunset over the hills from your private space.
            </p>
            <a href={getWhatsAppLink(WHATSAPP_MESSAGES.dining)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              Order via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-orange-500 via-red-500 to-rose-500">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center text-white">
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
              <p className="text-5xl font-serif font-bold text-white">3</p>
              <p className="text-white/80 mt-2 font-medium">Cuisines Served</p>
            </div>
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
              <p className="text-5xl font-serif font-bold text-white">24/7</p>
              <p className="text-white/80 mt-2 font-medium">Room Service</p>
            </div>
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
              <p className="text-5xl font-serif font-bold text-white">100%</p>
              <p className="text-white/80 mt-2 font-medium">Hygienic Preparation</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
