import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Sparkles, Search } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 'future-of-data-analytics',
      title: 'The Future of Data Analytics in Business',
      excerpt: 'Explore how data analytics is transforming modern business practices and driving strategic decision-making across industries.',
      date: 'December 20, 2024',
      readTime: '5 min read',
      category: 'Data Analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      featured: true,
    },
    {
      id: 'getting-started-business-central',
      title: 'Getting Started with Business Central',
      excerpt: 'A comprehensive guide to implementing Microsoft Dynamics 365 Business Central for your organization.',
      date: 'December 15, 2024',
      readTime: '7 min read',
      category: 'Business Central',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    },
    {
      id: 'power-bi-best-practices',
      title: 'Power BI Best Practices for 2024',
      excerpt: 'Learn the latest best practices for creating effective and insightful Power BI dashboards that drive business value.',
      date: 'December 10, 2024',
      readTime: '6 min read',
      category: 'Business Intelligence',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    },
    {
      id: 'machine-learning-real-world',
      title: 'Machine Learning in Business: Real-World Applications',
      excerpt: 'Discover practical applications of machine learning that are transforming businesses across various sectors.',
      date: 'December 5, 2024',
      readTime: '8 min read',
      category: 'Machine Learning',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    },
    {
      id: 'data-driven-decision-making',
      title: 'Data-Driven Decision Making: A Strategic Approach',
      excerpt: 'How to build a culture of data-driven decision making in your organization for better outcomes.',
      date: 'November 30, 2024',
      readTime: '5 min read',
      category: 'Strategy',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
    },
    {
      id: 'ai-modern-business-intelligence',
      title: 'The Role of AI in Modern Business Intelligence',
      excerpt: 'Understanding how artificial intelligence is revolutionizing business intelligence and analytics.',
      date: 'November 25, 2024',
      readTime: '6 min read',
      category: 'AI',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop',
    },
    {
      id: 'erp-implementation-success',
      title: '5 Keys to Successful ERP Implementation',
      excerpt: 'Essential strategies for ensuring your ERP implementation delivers maximum value and minimal disruption.',
      date: 'November 20, 2024',
      readTime: '7 min read',
      category: 'Business Central',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
    },
    {
      id: 'data-governance-framework',
      title: 'Building a Robust Data Governance Framework',
      excerpt: 'Learn how to establish effective data governance practices that ensure quality, security, and compliance.',
      date: 'November 15, 2024',
      readTime: '6 min read',
      category: 'Data Analytics',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop',
    },
    {
      id: 'predictive-analytics-guide',
      title: 'Predictive Analytics: A Practical Guide',
      excerpt: 'Harness the power of predictive analytics to forecast trends and make proactive business decisions.',
      date: 'November 10, 2024',
      readTime: '8 min read',
      category: 'Machine Learning',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop',
    },
    {
      id: 'business-central-customization',
      title: 'Customizing Business Central for Your Industry',
      excerpt: 'Discover how to tailor Business Central to meet your specific industry requirements and workflows.',
      date: 'November 5, 2024',
      readTime: '7 min read',
      category: 'Business Central',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
    },
    {
      id: 'ai-automation-future',
      title: 'AI and Automation: Preparing for the Future',
      excerpt: 'How businesses can prepare for the AI-driven future and leverage automation for competitive advantage.',
      date: 'October 28, 2024',
      readTime: '6 min read',
      category: 'AI',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    },
    {
      id: 'data-visualization-techniques',
      title: 'Effective Data Visualization Techniques',
      excerpt: 'Master the art of data visualization to communicate insights clearly and drive better decision-making.',
      date: 'October 22, 2024',
      readTime: '5 min read',
      category: 'Business Intelligence',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    },
    {
      id: 'digital-transformation-strategy',
      title: 'Digital Transformation: A Strategic Roadmap',
      excerpt: 'Navigate your digital transformation journey with a clear strategy and actionable steps.',
      date: 'October 18, 2024',
      readTime: '9 min read',
      category: 'Strategy',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
    },
    {
      id: 'cloud-migration-best-practices',
      title: 'Cloud Migration Best Practices',
      excerpt: 'Essential considerations and best practices for successfully migrating your business systems to the cloud.',
      date: 'October 12, 2024',
      readTime: '7 min read',
      category: 'Business Central',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
    },
    {
      id: 'business-intelligence-roi',
      title: 'Measuring ROI on Business Intelligence Investments',
      excerpt: 'Learn how to quantify the value and return on investment of your business intelligence initiatives.',
      date: 'October 5, 2024',
      readTime: '6 min read',
      category: 'Business Intelligence',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    },
  ];

  const categories = ['All', 'Data Analytics', 'Business Intelligence', 'Machine Learning', 'AI', 'Business Central', 'Strategy'];

  // Filter posts based on selected category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-50 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00fe87]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00fe87]/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-slate-900 mb-6">
              Stay Ahead with{' '}
              <span className="text-[#00fe87]">
                Expert Insights
              </span>
            </h1>
            <p className="text-slate-600 text-xl">
              Discover the latest trends, best practices, and insights in data analytics, 
              business intelligence, and enterprise solutions.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#00fe87] focus:border-transparent text-slate-900 placeholder-slate-400"
              />
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-lg transition-all ${
                  selectedCategory === category
                    ? 'bg-[#00fe87] text-white shadow-lg shadow-[#00fe87]/30'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-[#00fe87] hover:text-[#00fe87]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-96 lg:h-auto">
                  <ImageWithFallback
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-[#00fe87] text-white rounded-full text-sm shadow-lg">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <span className="text-[#00fe87] text-sm mb-4">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-white mb-4">{featuredPost.title}</h2>
                  <p className="text-slate-300 text-lg mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-slate-400 text-sm mb-8">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Link
                    to={`/blogs/${featuredPost.id}`}
                    className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl hover:shadow-xl transition-all w-fit"
                  >
                    Read Article
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-12">
            {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
          </h2>
          
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <article 
                  key={index} 
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-900/60" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-[#00fe87] text-white rounded-full text-xs">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-slate-500 text-sm mb-3">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-slate-900 mb-3 group-hover:text-[#00fe87] transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <Link
                      to={`/blogs/${post.id}`}
                      className="flex items-center gap-2 text-[#00fe87] hover:text-emerald-700 transition-colors group/btn"
                    >
                      Read More
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-slate-600 text-lg">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 text-[#00fe87] hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00fe87]/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00fe87]/20 text-[#00fe87] rounded-full mb-6 border border-[#00fe87]/30">
            <Sparkles size={16} />
            <span className="text-sm">NEWSLETTER</span>
          </div>
          <h2 className="text-white mb-6">Never Miss an Update</h2>
          <p className="text-slate-300 text-lg mb-10">
            Subscribe to our newsletter to receive the latest insights and updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00fe87] backdrop-blur-sm"
            />
            <button className="bg-[#00fe87] text-white px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-[#00fe87]/50 transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}