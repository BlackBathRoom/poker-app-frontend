import React, { useEffect, useRef } from 'react';

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = "Loading..." }) => {
  const spinnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (spinnerRef.current) {
      let rotation = 0;
      const interval = setInterval(() => {
        rotation += 10; 
        if (spinnerRef.current) {
          spinnerRef.current.style.transform = `rotate(${rotation}deg)`;
        }
      }, 50); 


      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div style={styles.container}>
      <div ref={spinnerRef} style={styles.spinner}></div>
      <p>{message}</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '8px solid #f3f3f3',
    borderTop: '8px solid #3498db',
    borderRadius: '50%',
  },
};

export default Loading;
