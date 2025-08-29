
import React from 'react';
import Dashboard from './components/Dashboard';
import { theme } from './components/fortinetTheme';

const App: React.FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8" style={{ backgroundColor: theme.background, color: theme.text }}>
      <header className="mb-8">
        <div className="grid grid-cols-3 items-center px-4 sm:px-6 lg:px-8">
          <div className="justify-self-start">
            <img
              src="/Fortinet%20logo%20png.png"
              alt="Fortinet logo"
              className="h-8 w-auto md:h-10"
            />
          </div>
          <div className="justify-self-center">
            <h1 className="text-2xl md:text-4xl font-bold text-center whitespace-nowrap" style={{ color: theme.heading, whiteSpace: 'nowrap' }}>
              Fortinet New Pages Performance Dashboard
            </h1>
          </div>
          <div className="justify-self-end">
            <img
              src="/LeadWalnut%20light%20logo%20with%20tagline%203.png"
              alt="LeadWalnut logo"
              className="h-8 w-auto md:h-10"
            />
            <div className="text-xs mt-1 text-right w-full pr-6 md:pr-12 font-bold" style={{ color: '#646464' }}>
              {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </div>
        <p className="mt-2 text-center" style={{ color: '#5F6167' }}>Analysis of 55 new pages with monthly performance tracking.</p>
      </header>
      <main>
        <Dashboard />
      </main>
      <footer className="text-center mt-12 text-sm" style={{ color: '#4D5056' }}>
      </footer>
    </div>
  );
};

export default App;