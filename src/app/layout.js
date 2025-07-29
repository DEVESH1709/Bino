import './globals.css'

export const metadata = {
  title: 'Dynamic Pages - bino.bot',
  description: 'Create dynamic pages on-demand with bino.bot',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-white shadow-lg border-b border-blue-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-900 font-bold text-xl">bino.bot</span>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-gray-600 text-sm font-medium">Dynamic Pages Platform</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="hidden md:flex items-center space-x-4 text-gray-600">
                  <span className="text-sm font-medium">API Ready</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-blue-50 rounded-lg px-3 py-1 border border-blue-200">
                  <span className="text-blue-700 text-sm font-medium">v1.0.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {children}
      </body>
    </html>
  )
}
