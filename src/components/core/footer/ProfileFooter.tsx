import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const ProfileFooter = () => {
  return (
    <footer className="bg-[#0A1B4D] w-full text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo1.png"
                alt="TalenTracker Logo"
                width={400}
                height={48}
                className="w-[180px]"
              />
              {/* <span className="font-semibold text-lg">TalenTracker</span> */}
            </div>
            <p className="text-sm text-gray-300 max-w-xs">
              TalenTracker Limited is a full service Human Resources Business Partnering and
              Consultancy firm.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Training
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Mentor
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Contact Info
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <div className="space-y-2">
              <input type="email" placeholder="Enter your email" className="bg-white text-black" />
              <Button className="w-full bg-[#92C7B6] hover:bg-[#7ab3a1] text-black font-semibold">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-300">
          © Copyright 2023, All Rights Reserved by The YOLO Studio
        </div>
      </div>
    </footer>
  );
};
