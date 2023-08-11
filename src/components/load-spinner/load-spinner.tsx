import * as React from 'react';

import './style.css';

interface LoadSpinnerProps {
  size: number;
}

export const LoadSpinner: React.FC<LoadSpinnerProps> = ({ size }) => {
  return (
    <div className="load-spinner" style={{ height: size, width: size }}>
      {''}
    </div>
  );
};
