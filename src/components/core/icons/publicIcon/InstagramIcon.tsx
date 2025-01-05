import { cn } from '@/lib/utils';
import { IconType, iconVariants } from '../icons';

const InstagramIcon: React.FC<IconType> = ({ size, className, ...props }) => {
  return (
    <svg
      {...props}
      className={cn(iconVariants({ size, className }))}
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
    >
      <path
        d="M16.6055 0.492477C14.5034 0.479815 12.4194 0.882344 10.4731 1.67697C8.52684 2.4716 6.75663 3.64269 5.26402 5.12306C3.77141 6.60342 2.58579 8.36393 1.77516 10.3036C0.964528 12.2432 0.544832 14.3238 0.540182 16.4261C0.531281 18.5285 0.936853 20.6121 1.73369 22.5577C2.53052 24.5033 3.703 26.2727 5.1841 27.7649C6.66521 29.2571 8.42589 30.4427 10.3655 31.254C12.3051 32.0654 14.3856 32.4864 16.488 32.4932C18.5906 32.496 20.6732 32.0844 22.6166 31.282C24.5601 30.4796 26.3264 29.3021 27.8145 27.8167C29.3027 26.3314 30.4836 24.5673 31.2897 22.6254C32.0958 20.6834 32.5113 18.6017 32.5124 16.4991C32.5284 7.68921 25.3905 0.506721 16.6055 0.492477ZM26.5264 21.123C26.5267 22.5207 25.9791 23.8629 25.0012 24.8615C24.0232 25.8601 22.6928 26.4356 21.2953 26.4645C18.1249 26.525 14.9521 26.525 11.7769 26.4645C8.94589 26.4128 6.6544 24.2299 6.56537 21.4079C6.46388 18.1496 6.45854 14.8824 6.56537 11.6259C6.66864 8.63109 8.98862 6.52833 11.9763 6.49985C13.4879 6.4856 15.0031 6.49985 16.513 6.49985C18.0549 6.49985 19.5968 6.4856 21.1422 6.49985C21.8486 6.49797 22.5483 6.63542 23.2014 6.90431C23.8546 7.1732 24.4483 7.56826 24.9486 8.06689C25.4488 8.56551 25.8459 9.1579 26.1169 9.81014C26.388 10.4624 26.5277 11.1617 26.5282 11.868C26.5567 14.9542 26.5561 18.0392 26.5264 21.123Z"
        fill="currentColor"
      />
      <path
        d="M24.8243 14.2612C24.8243 13.5205 24.8243 12.7781 24.8243 12.0374C24.7923 9.74944 23.2415 8.18083 20.9553 8.16659C17.9878 8.1476 15.0204 8.1476 12.0529 8.16659C9.8326 8.18261 8.23018 9.78149 8.21593 11.9875C8.19694 14.955 8.19694 17.9225 8.21593 20.89C8.23374 23.2046 9.75782 24.7732 12.0475 24.807C15.0423 24.8486 18.0383 24.8486 21.0355 24.807C23.2878 24.7732 24.7887 23.2046 24.8172 20.9434C24.8368 19.4602 24.8172 17.9771 24.8172 16.4921L24.8243 14.2612ZM16.5308 21.4846C13.7354 21.4846 11.5454 19.2768 11.5454 16.437C11.5475 15.7844 11.6782 15.1386 11.9298 14.5365C12.1815 13.9344 12.5493 13.3877 13.0123 12.9278C13.4752 12.4678 14.0242 12.1036 14.6279 11.8558C15.2316 11.608 15.8782 11.4815 16.5308 11.4836C17.8504 11.4845 19.1164 12.0059 20.0538 12.9347C20.9912 13.8635 21.5244 15.1245 21.5375 16.4441C21.5422 17.1045 21.4162 17.7593 21.1667 18.3707C20.9171 18.9822 20.5491 19.5382 20.0837 20.0068C19.6182 20.4753 19.0647 20.8472 18.4549 21.1008C17.8452 21.3544 17.1912 21.4849 16.5308 21.4846ZM21.8295 12.3311C21.1654 12.2795 20.7132 11.9092 20.6989 11.213C20.6847 10.5168 21.0639 10.1109 21.7672 10.0486C21.9214 10.0335 22.077 10.0506 22.2242 10.0988C22.3714 10.1469 22.507 10.2251 22.6225 10.3284C22.7379 10.4316 22.8307 10.5577 22.895 10.6986C22.9592 10.8395 22.9935 10.9923 22.9958 11.1471C23.0029 11.7881 22.4563 12.3792 21.8224 12.3311H21.8295Z"
        fill="currentColor"
      />
      <path
        d="M16.5699 13.1836C15.6851 13.1854 14.8366 13.5356 14.2081 14.1585C13.5797 14.7813 13.2217 15.6266 13.2119 16.5113C13.2123 16.9496 13.2999 17.3834 13.4695 17.7876C13.6391 18.1917 13.8873 18.5581 14.1998 18.8654C14.5123 19.1727 14.8827 19.4149 15.2896 19.5778C15.6965 19.7406 16.1317 19.821 16.5699 19.8141C17.4399 19.8057 18.2713 19.4531 18.8821 18.8336C19.493 18.214 19.8338 17.3778 19.83 16.5078C19.827 15.6381 19.4845 14.804 18.8756 14.1831C18.2667 13.5622 17.4394 13.2035 16.5699 13.1836Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default InstagramIcon;
