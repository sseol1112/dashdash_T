import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  PowerIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  // {
  //   name: 'Invoices',
  //   href: '/dashboard/invoices',
  //   icon: DocumentDuplicateIcon,
  // },
  // { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Sign Out', href: '/', icon: PowerIcon},
];

export default function NavLinks() {    
  const router = useRouter();
  // 로그아웃 핸들러
  const handleSignOut = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('myMbti');
    }
    router.replace('/dashboard/login');
  };

  // 로그인 상태 체크
  const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('currentUser');

  return (
    <>
      {
        links.map((link) => {
          const LinkIcon = link.icon;
          if(link.name == "Sign Out" && isLoggedIn ) {
              return (
                  <a key={link.name} href={link.href} onClick={handleSignOut} className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                    <LinkIcon className="w-6" />
                    <p className="hidden md:block">{link.name}</p>
                  </a>
              );
          } else {
            return (
              <a key={link.name} href={link.href} className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                <LinkIcon className="w-6" />
                <p className="hidden md:block">{link.name}</p>
              </a>
            );
          }
        })
      }
    </>
  );
}
