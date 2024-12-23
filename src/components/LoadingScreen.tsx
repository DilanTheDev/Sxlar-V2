import React, { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="animate-pulse">
        <Zap className="w-24 h-24 text-purple-500" />
      </div>
    </div>
  );
};

export default LoadingScreen;