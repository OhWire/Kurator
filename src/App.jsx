import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes/routes'; // Adjust the path as needed
import Navbar from './components/Navbar/Navbar';
import WaveBackground from './components/background/wavebackground';
import { Provider } from 'react-redux';
import store from './components/Doku/aufnahme/state/store';

function App() {
  return (
   <Provider store={store}>
    <Router>
      <div className="relative flex w-screen h-screen overflow-hidden">
        {/* Outer Navbar Container */}
        <div className="flex min-w-16 h-full justify-center items-center bg-white z-10">
          {/* Inner Navbar Container */}
          <div className="flex sm:w-[calc(100%-1rem)] sm:h-[calc(100%-2rem)] relative overflow-visible rounded-xl">
            <Navbar />
          </div>
        </div>
        {/* Outer Component Container */}
        
        <div className="flex w-full h-full z-10 items-center justify-end mr-8 relative">
          {/* Inner Component Container */}
          
          <div className="flex flex-col sm:w-[calc(100%-2rem)] h-[calc(100%-2rem)] bg-gradient-to-t from-bg-green to-white drop-shadow-xl shadow-xl rounded-xl border border-black border-opacity-20 relative">
          <WaveBackground className="z-0"/>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                {routes.map((route, index) => (
                  <Route key={index} path={route.path} element={route.element} />
                ))}
              </Routes>
            </Suspense>
            
          </div>
          
        </div>
      </div>
    </Router>
   </Provider>
  );
}

export default App;
