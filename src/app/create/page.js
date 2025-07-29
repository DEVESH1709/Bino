'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CreatePage() {
  const [slug, setSlug] = useState('');
  const [components, setComponents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const componentTypes = [
    {
      type: 'TextSection',
      label: 'Text Section',
      description: 'Display text content with title and description',
      defaultProps: {
        title: 'Section Title',
        content: 'Section content goes here...'
      }
    },
    {
      type: 'ImageBlock',
      label: 'Image Block',
      description: 'Display an optimized image',
      defaultProps: {
        src: 'https://sp.yimg.com/ib/th/id/OIP.1gz6xJgY9mtSy5dR_27s3wHaHa?pid=Api&w=148&h=148&c=7&dpr=2&rs=1',
        alt: 'Image description'
      }
    },
    {
      type: 'Card',
      label: 'Card',
      description: 'Display a card with image, title, text, and link',
      defaultProps: {
        title: 'Card Title',
        text: 'Card description',
        url: 'https://example.com',
        imageSrc: 'https://sp.yimg.com/ib/th/id/OIP.1gz6xJgY9mtSy5dR_27s3wHaHa?pid=Api&w=148&h=148&c=7&dpr=2&rs=1'
      }
    },
    {
      type: 'StatsBox',
      label: 'Stats Box',
      description: 'Display statistics with value and label',
      defaultProps: {
        value: '1,234',
        label: 'Total Users'
      }
    },
    {
      type: 'CTA',
      label: 'Call to Action',
      description: 'Display a prominent call-to-action button',
      defaultProps: {
        text: 'Get Started',
        url: 'https://example.com'
      }
    }
  ];

  const addComponent = (componentType) => {
    const component = componentTypes.find(c => c.type === componentType);
    if (component) {
      setComponents([...components, {
        type: component.type,
        props: { ...component.defaultProps }
      }]);
    }
  };

  const removeComponent = (index) => {
    setComponents(components.filter((_, i) => i !== index));
  };

  const updateComponentProps = (index, newProps) => {
    const updatedComponents = [...components];
    updatedComponents[index] = {
      ...updatedComponents[index],
      props: { ...updatedComponents[index].props, ...newProps }
    };
    setComponents(updatedComponents);
  };

  const createPage = async () => {
    if (!slug.trim()) {
      setMessage('Please enter a slug for your page');
      return;
    }

    if (components.length === 0) {
      setMessage('Please add at least one component');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/pages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug: slug.trim(), components }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`Page created successfully! Visit: ${data.path}`);
        setSlug('');
        setComponents([]);
      } else {
        setMessage(data.message || 'Failed to create page');
      }
    } catch (error) {
      setMessage('Error creating page. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-600">Create New Page</span>
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Build your custom page with our powerful component system
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Link 
              href="/"
              className="group flex items-center text-blue-600 hover:text-blue-700 transition-colors font-semibold"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">Page Details</span>
              </h2>

         
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  Page Slug
                </label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="my-awesome-page"
                  className="w-full px-4 py-3 border text-black border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
                <p className="text-sm text-gray-500 mt-2">
                  This will be your page URL: /{slug}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Components</h3>
                {components.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No components added yet. Add components from the sidebar.</p>
                ) : (
                  <div className="space-y-4">
                    {components.map((component, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-gray-900">{component.type}</h4>
                          <button
                            onClick={() => removeComponent(index)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                        <div className="space-y-2">
                          {Object.entries(component.props).map(([key, value]) => (
                            <div key={key}>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                              </label>
                              <input
                                type="text"
                                value={value}
                                onChange={(e) => updateComponentProps(index, { [key]: e.target.value })}
                                className="w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

             
              <button
                onClick={createPage}
                disabled={isLoading}
                className="w-full bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Creating Page...' : 'Create Page'}
              </button>

              {message && (
                <div className={`mt-4 p-4 rounded-xl ${message.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {message}
                </div>
              )}
            </div>
          </div>

          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl p-6 border border-blue-100 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">Add Components</span>
              </h3>
              <div className="space-y-4">
                {componentTypes.map((component) => (
                  <button
                    key={component.type}
                    onClick={() => addComponent(component.type)}
                    className="w-full text-left p-4 bg-blue-50 rounded-xl border border-blue-200 hover:bg-blue-100 transition-all duration-300 group"
                  >
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {component.label}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {component.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 