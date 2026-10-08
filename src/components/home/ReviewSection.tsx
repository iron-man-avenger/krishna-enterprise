import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import { reviews } from '../../data/reviews';

export const ReviewSection: React.FC = () => {
  const getBadgeColor = (platform: string) => {
    switch (platform) {
      case 'Amazon':
        return 'bg-amber-100 text-amber-900 border-amber-200';
      case 'Flipkart':
        return 'bg-blue-100 text-blue-900 border-blue-200';
      case 'Meesho':
        return 'bg-pink-100 text-pink-900 border-pink-200';
      default:
        return 'bg-emerald-100 text-emerald-900 border-emerald-200';
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-500 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
            Real Customer Experiences
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Verified Feedback from Across India
          </h2>
          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            Read authentic reviews from shoppers who purchase Krishna Enterprises products on Amazon, Flipkart, Meesho, and our direct store.
          </p>

          {/* Rating Summary Pill */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white shadow-sm border border-slate-200 mt-6">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-extrabold text-slate-900">4.8 out of 5</span>
            <span className="text-slate-300">|</span>
            <span className="text-xs text-slate-500 font-medium">Based on 14,000+ Multi-Platform Orders</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Platform Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getBadgeColor(rev.platform)}`}>
                    Verified on {rev.platform}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                  "{rev.comment}"
                </p>

                {/* Product Purchased Callout */}
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                  <span className="text-[10px] text-slate-400 font-semibold block uppercase">Item:</span>
                  <span className="text-xs font-bold text-slate-800 line-clamp-1">{rev.productTitle}</span>
                </div>
              </div>

              {/* User Info */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                <div>
                  <h4 className="font-bold text-slate-900">{rev.userName}</h4>
                  <span className="text-[11px] text-slate-500">{rev.userCity}, {rev.userState}</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-600 text-[11px] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Buyer</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

