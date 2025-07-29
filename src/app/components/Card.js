import Image from 'next/image';

export default function Card({ title, text, url, imageSrc }) {
    return (
      <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100 overflow-hidden group">
        <div className="relative overflow-hidden">
          <Image 
            src={imageSrc} 
            alt={title}
            width={400}
            height={250}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-blue-900/10"></div>
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            {text}
          </p>
          <a 
            href={url} 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-bold transition-colors group-hover:translate-x-2 duration-300"
          >
            Learn more
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    );
  }
  