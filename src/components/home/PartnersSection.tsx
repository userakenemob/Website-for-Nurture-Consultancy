import { Award } from 'lucide-react';
import businessCentralLogo from 'figma:asset/6e144c99b350cdb7e5fcc5f9c744ab90aca3e3b2.png';
import sqlLogo from 'figma:asset/fc9178f1db11b6c8b95ba1df8f975861b3f3b50f.png';
import powerBILogo from 'figma:asset/b796ffd66267b3bec4b625d2ae80342b30a10c69.png';
import pythonLogo from 'figma:asset/719df60406a3ec302053bc5022aff4a8571fc5f6.png';
import microsoftLogo from 'figma:asset/75adbeeb5407be2fd11c839dd1134c570ddcf832.png';
import fabricLogo from 'figma:asset/c1a7f3d1a9a620d1f2356c5fab10df2c1d0f604f.png';

export function PartnersSection() {
  const domains = [
    'Not for Profit Organizations',
    'Manufacturing',
    'Commercial Sectors',
    'Financial Services',
    'SMEs & Startups',
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00fe87]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00fe87]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00fe87]/20 text-[#00fe87] rounded-full mb-4 border border-[#00fe87]/30">
            <Award size={16} />
            <span className="text-sm font-medium">PARTNERSHIPS</span>
          </div>
          <h2 className="text-white mb-6">Our Partners & Technologies</h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            We are certified by our partner Microsoft to provide and support enterprise solutions across multiple domains
          </p>
        </div>

        {/* Partner logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Microsoft Partner */}
          <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#00fe87]/50 transition-all hover:bg-white/10">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="mb-4 group-hover:scale-110 transition-transform">
                <img 
                  src={microsoftLogo} 
                  alt="Microsoft" 
                  className="h-24 w-auto object-contain"
                />
              </div>
              <p className="text-slate-400 text-sm text-center">Certified Partner</p>
            </div>
          </div>
          
          {/* Business Central */}
          <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#00fe87]/50 transition-all hover:bg-white/10">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="mb-4 group-hover:scale-110 transition-transform">
                <img 
                  src={businessCentralLogo} 
                  alt="Business Central" 
                  className="h-24 w-auto object-contain"
                />
              </div>
              <p className="text-slate-400 text-sm text-center">Business Central Solutions Expert</p>
            </div>
          </div>
          
          {/* Power BI */}
          <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#00fe87]/50 transition-all hover:bg-white/10">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="mb-4 group-hover:scale-110 transition-transform">
                <img 
                  src={powerBILogo} 
                  alt="Power BI" 
                  className="h-24 w-auto object-contain"
                />
              </div>
              <p className="text-slate-400 text-sm text-center">Analytics & Visualization</p>
            </div>
          </div>
          
          {/* SQL Server */}
          <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#00fe87]/50 transition-all hover:bg-white/10">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="mb-4 group-hover:scale-110 transition-transform">
                <img 
                  src={sqlLogo} 
                  alt="SQL Server" 
                  className="h-24 w-auto object-contain"
                />
              </div>
              <p className="text-slate-400 text-sm text-center">Database Management Expert</p>
            </div>
          </div>
          
          {/* Python */}
          <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#00fe87]/50 transition-all hover:bg-white/10">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="mb-4 group-hover:scale-110 transition-transform">
                <img 
                  src={pythonLogo} 
                  alt="Python" 
                  className="h-24 w-auto object-contain"
                />
              </div>
              <p className="text-slate-400 text-sm text-center">Programming Language Expert</p>
            </div>
          </div>
          
          {/* Fabric */}
          <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#00fe87]/50 transition-all hover:bg-white/10">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="mb-4 group-hover:scale-110 transition-transform">
                <img 
                  src={fabricLogo} 
                  alt="Fabric" 
                  className="h-24 w-auto object-contain"
                />
              </div>
              <p className="text-slate-400 text-sm text-center">Data Integration & Automation</p>
            </div>
          </div>
        </div>

        {/* Domains */}
        <div className="bg-[#00fe87]/10 rounded-2xl p-8 border border-[#00fe87]/20">
          <h3 className="text-white text-center mb-6">Trusted Across Industries</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {domains.map((domain, index) => (
              <div key={index} className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-[#00fe87]/50 transition-all">
                <span className="text-[#00fe87]">{domain}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}