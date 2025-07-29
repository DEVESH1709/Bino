export default function CTA({ text, url }) {
    return (
      <div className="bg-blue-600 rounded-3xl p-10 text-center shadow-2xl">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to get started?
          </h3>
          <p className="text-blue-100 mb-8 text-xl leading-relaxed">
            {text}
          </p>
          <a 
            href={url} 
            className="group inline-flex items-center px-10 py-5 bg-white text-blue-600 font-bold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105"
          >
            {text}
            <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    );
  }
  