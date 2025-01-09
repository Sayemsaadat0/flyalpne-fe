export type TSidebarItem = {
  icon: string;
  label: string;
  url?: string;
  children?: TSidebarItem[];
};
