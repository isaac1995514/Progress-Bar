import * as React from 'react';
import { LoadSpinner } from '../load-spinner/load-spinner';

interface ProgressBarProps {}

export const ProgressBar: React.FC<ProgressBarProps> = ({}) => {
  return (
    <div className="progress-bar-wrapper">
      <LoadSpinner size={20} />
    </div>
  );
};
