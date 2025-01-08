import { cn } from '@/lib/utils';
import { IconType, iconVariants } from '../icons';

const LinkedinIcon: React.FC<IconType> = ({ size, className, ...props }) => {
  return (
    <svg
      {...props}
      className={cn(iconVariants({ size, className }))}
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
    >
      <path
        d="M32.0399 16.0284C32.0406 18.1249 31.6277 20.201 30.825 22.1377C30.0222 24.0744 28.8453 25.8338 27.3616 27.315C25.8779 28.7962 24.1165 29.9702 22.1785 30.7697C20.2404 31.5693 18.1637 31.9787 16.0671 31.9744C13.9633 31.9796 11.8792 31.5684 9.93494 30.7644C7.99072 29.9605 6.22482 28.7797 4.73905 27.2901C3.25328 25.8005 2.077 24.0316 1.27801 22.0853C0.479017 20.1391 0.0731189 18.0539 0.0836977 15.95C0.0831706 13.8458 0.499139 11.7622 1.30763 9.8194C2.11612 7.87662 3.30116 6.11308 4.79441 4.63043C6.28765 3.14777 8.05957 1.97534 10.0081 1.18069C11.9565 0.386053 14.043 -0.0150743 16.1473 0.000433043C18.2437 0.0076622 20.3181 0.428156 22.2518 1.23786C24.1856 2.04757 25.9407 3.23059 27.4168 4.71925C28.8929 6.20792 30.061 7.97301 30.8543 9.91355C31.6476 11.8541 32.0504 13.932 32.0399 16.0284ZM17.0642 13.4467C17.0375 12.8787 17.0161 12.4817 16.9966 12.0579H13.505V23.9035H17.1764C17.1764 21.9254 17.1461 20.0042 17.1924 18.0849C17.1985 17.3787 17.3187 16.6783 17.5485 16.0106C17.853 15.1844 18.6471 14.8889 19.7047 15.0046C20.5291 15.0936 21.0062 15.585 21.138 16.356C21.2481 17.0569 21.304 17.7653 21.3053 18.4748C21.3285 20.2749 21.3053 22.0731 21.3053 23.8981H25.0444C25.0444 22.5325 25.0675 21.2274 25.0444 19.9312C25.0052 18.2754 25.0444 16.6053 24.8254 14.9672C24.5636 12.9321 23.2674 11.8656 21.2216 11.6822C19.5907 11.5362 18.2073 12.0241 17.0642 13.4467ZM11.0658 23.9231V12.0543H7.42108V23.9231H11.0658ZM11.3827 8.16753C11.3884 7.59952 11.1692 7.05232 10.7729 6.64535C10.3766 6.23839 9.83541 6.00471 9.26745 5.99534C8.97879 5.9937 8.69266 6.04905 8.42543 6.15821C8.15821 6.26738 7.91514 6.42822 7.7102 6.63151C7.50525 6.8348 7.34245 7.07654 7.23112 7.34287C7.11979 7.60921 7.06214 7.89489 7.06144 8.18356C7.06443 8.75176 7.28796 9.29659 7.6849 9.70316C8.08184 10.1097 8.62115 10.3463 9.18912 10.3629C9.4788 10.3682 9.76656 10.315 10.0352 10.2066C10.3039 10.0981 10.5479 9.93656 10.7527 9.73161C10.9575 9.52666 11.1188 9.28251 11.2271 9.01377C11.3353 8.74502 11.3882 8.45721 11.3827 8.16753Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LinkedinIcon;