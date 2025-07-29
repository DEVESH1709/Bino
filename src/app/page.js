import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function Home() {
  
  const filePath = path.join(process.cwd(), 'data', 'pages.json');
  const pagesData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  const jsonExample = '{"slug": "page-name", "components": [...]}';

  return (
    <div className="min-h-screen bg-white">
     
      <div className="bg-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-600 rounded-full mb-8 shadow-lg">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-blue-600">Dynamic</span>
              <span className="text-gray-900"> Pages</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Create stunning pages on-demand with bino.bot's powerful API. 
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="/create"
                className="group inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Create Your Own Page
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Available Pages</span>
          </h2>
          <p className="text-xl text-gray-600">Click on any page to explore its content and components.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pagesData.map((p, index) => (
            <Link 
              key={p.slug} 
              href={`/${p.slug}`}
              className="group block"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-2xl">
                        {p.slug.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {p.components?.length || 0} components
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {p.slug.charAt(0).toUpperCase() + p.slug.slice(1)}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Dynamic page with interactive components and modern design featuring our signature blue and white theme.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    <span>View Page</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        
        <div className="mt-20 bg-white rounded-3xl shadow-xl p-10 border border-blue-100">
          <div className="flex items-start space-x-6">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                <span className="text-blue-600">API Integration</span>
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Use the API to create more pages dynamically. Send a POST request to create stunning pages with our blue and white theme.
              </p>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                <code className="text-blue-800 font-mono text-lg">
                  POST /api/pages
                </code>
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                With JSON data: {jsonExample}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
