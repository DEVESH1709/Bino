export default function TextSection({ title, content }) {
    return (
      <div className="bg-white rounded-3xl p-10 shadow-xl border border-blue-100 transition-all duration-300">
        <div className="flex items-center mb-8">
          <div className="w-3 h-12 bg-blue-600 rounded-full mr-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            <span className="text-blue-600">
              {title}
            </span>
          </h2>
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed text-xl">
            {content}
          </p>
        </div>
      </div>
    );
  }
  