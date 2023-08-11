import * as React from 'react';
import { LoadSpinner } from '../load-spinner/load-spinner';
import cx from 'classnames';

import './style.css';

interface ProgressBarProps {
  percentage: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  const isLoading = percentage < 100;
  const hasAnimation = percentage > 10;
  return (
    <div className="progress-bar-wrapper">
      {isLoading && <LoadSpinner size={20} />}
      <div
        className={cx('progress-bar', 'full')}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage}
      >
        <div
          className={cx('progress-bar', 'progress-bar__full')}
          style={{ width: `${percentage}%` }}
        >
          <div
            className={cx('progress-bar', 'progress-bar__content', {
              animated: hasAnimation,
            })}
          />
        </div>
      </div>
    </div>
  );
};
