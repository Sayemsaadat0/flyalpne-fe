import React from 'react';
import { cn } from '@/lib/utils';
import { IconType, iconVariants } from '../icons';

const EditIcon: React.FC<IconType> = ({ size, className, ...props }) => {
  return (
    <svg
      {...props}
      className={cn(iconVariants({ size, className }))}
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
    >
      <path
        d="M4 5.00011H3C2.46957 5.00011 1.96086 5.21082 1.58579 5.58589C1.21071 5.96097 1 6.46967 1 7.00011V16.0001C1 16.5305 1.21071 17.0392 1.58579 17.4143C1.96086 17.7894 2.46957 18.0001 3 18.0001H12C12.5304 18.0001 13.0391 17.7894 13.4142 17.4143C13.7893 17.0392 14 16.5305 14 16.0001V15.0001M13 3.00011L16 6.00011M17.385 4.58511C17.7788 4.19126 18.0001 3.65709 18.0001 3.10011C18.0001 2.54312 17.7788 2.00895 17.385 1.61511C16.9912 1.22126 16.457 1 15.9 1C15.343 1 14.8088 1.22126 14.415 1.61511L6 10.0001V13.0001H9L17.385 4.58511Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EditIcon;