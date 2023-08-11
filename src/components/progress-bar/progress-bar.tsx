import * as React from 'react';
import { LoadSpinner } from '../load-spinner/load-spinner';

import './style.css';

interface ProgressBarProps {
  percentage: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  const isLoading = percentage < 100;

  return (
    <div className="progress-bar-wrapper">
      {isLoading && <LoadSpinner size={20} />}
      <div className="progress-bar full">
        <div
          className="progress-bar loaded"
          style={{ width: `${percentage}%` }}
        >
          <div className="progress-bar loaded content" />
        </div>
      </div>
    </div>
  );
};
