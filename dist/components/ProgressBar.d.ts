import { default as React } from 'react';
interface ProgressBarProps {
    progress: number;
    barColor?: string;
    backgroundColor?: string;
    height?: string;
}
declare const ProgressBar: React.FC<ProgressBarProps>;
export default ProgressBar;
