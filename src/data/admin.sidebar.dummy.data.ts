import {
  ChartColumnStacked,
  GitPullRequestArrow,
  LayoutDashboard,
  Mails,
  ScrollText,
  Star,
  Store,
  Tag,
  Users,
  UsersRound,
} from 'lucide-react';

export const adminSidebarItems = [
  {
    icon: LayoutDashboard,
    label: 'Overview',
    url: '/admin/overview',
  },
  // {
  //   icon: Users,
  //   label: 'Vendor',
  //   children: [
  //     {
  //       icon: UsersRound,
  //       label: 'Vendor List',
  //       url: '/admin/vendor',
  //     },
  //     {
  //       icon: GitPullRequestArrow,
  //       label: 'Vendor Request',
  //       url: '/admin/vendor/request',
  //     },
  //     {
  //       icon: Store,
  //       label: 'Stores',
  //       url: '/admin/vendor-stores',
  //     },
  //   ],
  // },
  {
    icon: UsersRound,
    label: 'Vendor List',
    url: '/admin/vendor',
  },
  {
    icon: GitPullRequestArrow,
    label: 'Vendor Request',
    url: '/admin/vendor/request',
  },
  {
    icon: Store,
    label: 'Stores',
    url: '/admin/vendor-stores',
  },
  {
    icon: Users,
    label: 'Users',
    url: '/admin/users',
  },
  {
    icon: Star,
    label: 'Reviews',
    url: '/admin/review-management',
  },
  {
    icon: ChartColumnStacked,
    label: 'Categories',
    url: '/admin/categories',
  },
  {
    icon: Tag,
    label: 'Brands',
    url: '/admin/brands',
  },
  {
    icon: ScrollText,
    label: 'Product List',
    url: '/admin/product',
  },
  {
    icon: Mails,
    label: 'Newsletter',
    url: '/admin/newsletter',
  },
];
