import * as React from 'react';
import { ProgressBar } from './components/progress-bar/progress-bar';
import './style.css';

export default function App() {
  const [percentage, setPercentage] = React.useState(0);

  const startDownloading = () => {
    let timerId = null;

    const downloadNext = (i: number) => {
      timerId = window.setTimeout(() => {
        if (i * 5 > 100) {
          timerId = null;
          return;
        }

        setPercentage(i * 5);
        downloadNext(i + 1);
      }, 1000);
    };

    downloadNext(0);
  };

  return (
    <div>
      <ProgressBar percentage={percentage} />
      <button onClick={startDownloading}>Download</button>
    </div>
  );
}
