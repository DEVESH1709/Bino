import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Card from '../components/Card';
import ImageBlock from '../components/ImageBlock';
import TextSection from '../components/TextSection';
import StatsBox from '../components/StatsBox';
import CTA from '../components/CTA';

export default async function DynamicPage({ params }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'data', 'pages.json');
  const pagesData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const page = pagesData.find(p => p.slug === slug);

  if (!page) {
    notFound();  
  }
  const componentsMap = {
    Card, ImageBlock, TextSection, StatsBox, CTA
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-blue-600 rounded-full mb-8 shadow-lg">
            <span className="text-white font-bold text-3xl">
              {slug.charAt(0).toUpperCase()}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-blue-600">
              {slug.charAt(0).toUpperCase() + slug.slice(1)}
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A dynamic page showcasing modern components and interactive design elements with our signature blue and white theme.
          </p>
          <div className="mt-6 flex items-center justify-center space-x-4">
            <Link 
              href="/"
              className="group flex items-center text-blue-600 hover:text-blue-700 transition-colors font-semibold"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Pages
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {page.components?.length || 0} components
            </span>
          </div>
        </div>
        <div className="space-y-12">
          {page.components.map((comp, idx) => {
            const Component = componentsMap[comp.type];
            if (!Component) return null;
            return (
              <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
                <Component {...comp.props} />
              </div>
            );
          })}
        </div>
        <div className="mt-20 pt-12 border-t border-blue-200">
          <div className="text-center">
            <p className="text-gray-600 mb-6 text-lg">
              This page was dynamically generated using our powerful API with the blue and white theme.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
