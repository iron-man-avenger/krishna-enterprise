import React from 'react';
import { ShieldCheck, Truck, RefreshCw, Award, CheckCircle } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const pillars = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
      title: '5-Point Quality Assurance',
      description: 'Every single SKU is inspected for material integrity, durability, finish, and electronic functionality before packaging.',
      points: ['Defect-free guarantee', 'Zero second-hand inventory', 'Double protective packaging']
    },
    {
      icon: <Award className="w-8 h-8 text-brand-500" />,
      title: 'Certified Authentic Sourcing',
      description: 'We bypass unverified middlemen and source straight from compliant, high-grade manufacturers and certified Indian weavers.',
      points: ['100% Genuine brand quality', 'FSSAI certified food items', 'BIS certified electronics']
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-emerald-500" />,
      title: '7-Day Hassle-Free Returns',
      description: 'Shop with complete peace of mind. If you are not 100% satisfied, initiate an easy return or exchange within 7 days of delivery.',
      points: ['Instant doorstep pickup', 'No questions asked policy', 'Fast refund processing']
    },
    {
      icon: <Truck className="w-8 h-8 text-purple-500" />,
      title: 'Pan-India 24H Dispatch',
      description: 'Connected with Tier-1 logistics partners (Delhivery, BlueDart, Xpressbees) to ensure speedy delivery across 25,000+ pincodes.',
      points: ['Dispatched in under 24 hours', 'Live SMS & WhatsApp tracking', 'Full Cash on Delivery (COD)']
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-500 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
            Our Brand Promise
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Why Millions Trust Krishna Enterprises
          </h2>
          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            At Krishna Enterprises, we prioritize affordability, authenticity, and customer-first service. Here is how we deliver exceptional value without compromise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5 border border-slate-100">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              <ul className="space-y-1.5 pt-4 border-t border-slate-200/60">
                {pillar.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

