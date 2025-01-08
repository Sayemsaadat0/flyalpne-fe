import { cn } from "@/lib/utils";
import { IconType, iconVariants } from '../icons';


export const CartIcon: React.FC<IconType> = ({ size, className, ...props }) => {
  return (
    <svg {...props} className={cn(iconVariants({ size, className }))} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.00488 9H19.9433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V9ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path></svg>
  );
};


export const HeartIcon: React.FC<IconType> = ({ size, className, ...props }) => {
  return (
    <svg  {...props} className={cn(iconVariants({ size, className }))} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path></svg>
  );
};


export const UserIcon: React.FC<IconType> = ({ size, className, ...props }) => {
  return (
    <svg {...props} className={cn(iconVariants({ size, className }))} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path></svg>
  );
};

export const ClockIcon: React.FC<IconType> = ({ size, className, ...props }) => {
  return (
    <svg {...props} className={cn(iconVariants({ size, className }))} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path></svg>
  );
};


export const StarIcon: React.FC<IconType> = ({ size, className, ...props }) => {
  return (
    <svg  {...props} className={cn(iconVariants({ size, className }))} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
  );
};


export const WavyIcon: React.FC<IconType> = ({ size, className, ...props }) => {
  return (
    <svg
      width="100%"
      height="100%"
      id="svg"
      viewBox="0 0 1440 490"
      xmlns="http://www.w3.org/2000/svg"
      className="transition duration-300 ease-in-out delay-150"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stopColor="#deebed" />
          <stop offset="95%" stopColor="#b1d0d6" />
        </linearGradient>
      </defs>
      <path
        d="M 0,500 L 0,93 C 73.72459499263621,104.1119293078056 147.44918998527243,115.22385861561119 199,126 C 250.55081001472757,136.7761413843888 279.9278350515464,147.2164948453608 342,139 C 404.0721649484536,130.7835051546392 498.83946980854193,103.9101620029455 560,80 C 621.1605301914581,56.089837997054495 648.7142857142857,35.14285714285714 703,51 C 757.2857142857143,66.85714285714286 838.3033873343151,119.51840942562592 897,125 C 955.6966126656849,130.48159057437408 992.0721649484535,88.78350515463919 1059,70 C 1125.9278350515465,51.21649484536082 1223.4079528718705,55.34756995581738 1292,63 C 1360.5920471281295,70.65243004418262 1400.2960235640649,81.8262150220913 1440,93 L 1440,500 L 0,500 Z"
        stroke="none"
        strokeWidth={0}
        fill="url(#gradient)"
        fillOpacity="0.4"
        className="transition-all duration-300 ease-in-out delay-150 path-0"
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stopColor="#deebed" />
          <stop offset="95%" stopColor="#b1d0d6" />
        </linearGradient>
      </defs>
      <path
        d="M 0,500 L 0,218 C 52.12831369661265,197.65224594992637 104.2566273932253,177.30449189985274 167,183 C 229.7433726067747,188.69550810014726 303.10180412371136,220.43427835051546 368,227 C 432.89819587628864,233.56572164948454 489.3361561119293,214.9583946980854 553,212 C 616.6638438880707,209.0416053019146 687.5535714285713,221.73214285714283 740,235 C 792.4464285714287,248.26785714285717 826.4495581737849,262.11303387334317 891,245 C 955.5504418262151,227.88696612665683 1050.6481958762888,179.81572164948452 1107,185 C 1163.3518041237112,190.18427835051548 1180.9576583210603,248.6240795287187 1230,263 C 1279.0423416789397,277.3759204712813 1359.52117083947,247.68796023564065 1440,218 L 1440,500 L 0,500 Z"
        stroke="none"
        strokeWidth={0}
        fill="url(#gradient)"
        fillOpacity="0.53"
        className="transition-all duration-300 ease-in-out delay-150 path-1"
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stopColor="#deebed" />
          <stop offset="95%" stopColor="#b1d0d6" />
        </linearGradient>
      </defs>
      <path
        d="M 0,500 L 0,343 C 59.64027982326952,361.0220913107511 119.28055964653905,379.0441826215022 186,382 C 252.71944035346095,384.9558173784978 326.5180412371134,372.8453608247422 380,373 C 433.4819587628866,373.1546391752578 466.64727540500735,385.57437407952875 526,378 C 585.3527245949927,370.42562592047125 670.892857142857,342.85714285714283 737,328 C 803.107142857143,313.14285714285717 849.7812960235642,310.99705449189986 905,321 C 960.2187039764358,331.00294550810014 1023.9819587628863,353.1546391752578 1078,366 C 1132.0180412371137,378.8453608247422 1176.2908689248895,382.38438880706923 1235,377 C 1293.7091310751105,371.61561119293077 1366.8545655375551,357.3078055964654 1440,343 L 1440,500 L 0,500 Z"
        stroke="none"
        strokeWidth={0}
        fill="url(#gradient)"
        fillOpacity={1}
        className="transition-all duration-300 ease-in-out delay-150 path-2"
      />
    </svg>




  );
};

