"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLoading } from "./LoadingContext";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

export default function PageLoader() {
  const pathname = usePathname();
  const { isLoading } = useLoading();

  useEffect(() => {
    // Handle route changes
    const handleStart = () => {
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    handleStart();
    const timer = setTimeout(handleStop, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-secondary z-50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-20 h-20">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 border-3 border-transparent border-t-primary border-r-primary rounded-full animate-spin" style={{ animationDuration: "2s" }}></div>
              
              {/* Middle pulsing ring */}
              <div className="absolute inset-2 border-2 border-primary/50 rounded-full animate-pulse"></div>
              
              {/* Inner rotating ring (reverse) */}
              <div className="absolute inset-4 border-2 border-transparent border-b-orange-500 border-l-orange-500 rounded-full animate-spin" style={{ animationDuration: "3s", animationDirection: "reverse" }}></div>
              
              {/* Center dot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Cindy Ofunne</h2>
              <p className="text-primary text-sm tracking-widest uppercase">Loading Excellence</p>
              
              {/* Animated dots */}
              <div className="flex justify-center gap-2 mt-4">
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0s" }}></span>
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          background: linear-gradient(90deg, #FF6B35 0%, #FF8C42 100%);
          position: fixed;
          z-index: 9999;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          box-shadow: 0 0 15px #FF6B35;
        }

        #nprogress .spinner {
          display: none;
        }

        #nprogress .spinner-icon {
          box-shadow: inset 0 0 10px #FF6B35;
        }
      `}</style>
    </>
  );
}
