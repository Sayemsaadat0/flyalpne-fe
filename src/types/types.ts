import { ElementType } from 'react';

export type TSidebarItem = {
  icon: ElementType;
  label: string;
  url?: string;
  children?: TSidebarItem[];
};
