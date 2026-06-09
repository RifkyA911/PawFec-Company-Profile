import { useEffect } from 'react';

export default function LoadingAnimation() {
  useEffect(() => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
      if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.pointerEvents = 'none';
        setTimeout(() => {
          loadingScreen.remove();
          window.scrollTo(0, 0);
        }, 500);
      }
    }, 2500);
  }, []);

  return (
    <div id="loading-screen" className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50" style={{ transition: 'opacity 0.5s ease-out' }}>
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <div className="absolute inset-0 bg-orange-400 rounded-full animate-bounce" style={{ animationDuration: '1s' }}></div>
          <div className="absolute -top-4 left-4 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-orange-400 animate-pulse"></div>
          <div className="absolute -top-4 right-4 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-orange-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex gap-4">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-pink-300 rounded-full"></div>
        </div>
        <p className="text-orange-600 font-fredoka text-lg animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
