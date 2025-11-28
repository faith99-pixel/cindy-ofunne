"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
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

  useEffect(() => {
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
  );
}
