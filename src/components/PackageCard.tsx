import { Link } from 'react-router-dom';
import { Calendar, MapPin, Car, Utensils, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { HolidayPackage } from '../constants';

interface PackageCardProps {
  package: HolidayPackage;
  index?: number;
}

export function PackageCard({ package: pkg, index = 0 }: PackageCardProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const badgeStyles = {
    popular: 'bg-amber-500 text-white',
    bestValue: 'bg-emerald-500 text-white',
    new: 'bg-sky-500 text-white',
  };

  const badgeText = {
    popular: 'Popular',
    bestValue: 'Best Value',
    new: 'New',
  };

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="bg-primary-700 text-white text-sm font-semibold px-3 py-1 rounded-sm">
            {pkg.duration}
          </span>
          {pkg.badge && (
            <span className={`text-xs font-semibold px-2 py-1 rounded-sm ${badgeStyles[pkg.badge]}`}>
              {badgeText[pkg.badge]}
            </span>
          )}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-serif text-2xl font-semibold text-white mb-1">{pkg.name}</h3>
          <p className="text-white/80 text-sm">{pkg.tagline}</p>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">{pkg.description}</p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <MapPin className="w-4 h-4 text-primary-600 flex-shrink-0" />
            <span className="truncate">{pkg.pickupDrop}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Car className="w-4 h-4 text-primary-600 flex-shrink-0" />
            <span className="truncate">{pkg.transportation}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Calendar className="w-4 h-4 text-primary-600 flex-shrink-0" />
            <span>{pkg.nights} Nights / {pkg.days} Days</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Utensils className="w-4 h-4 text-primary-600 flex-shrink-0" />
            <span className="truncate">MAP Plan</span>
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-500">Starting from</p>
            <p className="text-primary-700 font-semibold">Contact for Price</p>
          </div>
          <Link
            to={`/packages/${pkg.id}`}
            className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white px-4 py-2 rounded-sm transition-colors text-sm font-medium"
          >
            View Details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
