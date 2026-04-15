import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-screen flex-col px-3 py-4 md:px-2">
      
     
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>

      <div className="flex grow flex-col justify-between">
        
        
        <div className="flex flex-col space-y-2">
          <NavLinks />
        </div>

        <button className="flex h-[48px] w-full items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-red-100 hover:text-red-600 md:justify-start md:px-3">
          <PowerIcon className="w-6" />
          <span className="hidden md:block">Sign Out</span>
        </button>

      </div>
    </div>
  );
}