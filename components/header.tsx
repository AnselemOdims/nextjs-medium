import Link from 'next/link';
import Image from 'next/image';

import Logo from '../public/medium.svg';

const Header= () => {
  return ( 
    <header className="flex items-center justify-between px-5 py-1 mx-auto  md:max-w-2xl lg:max-w-4xl lg:px-0">
      <div className="flex items-center space-x-5">
        <Link href="/" >
          <Image 
            src={Logo} 
            className="w-44 object-contain cursor-pointer" 
            width="120px"
          />
        </Link>
        <nav> 
          <ul className="hidden md:inline-flex items-center space-x-5">
            <li>
              <Link href="/about">
                  <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
            <li className="text-white bg-green-600 px-4 py-1 rounded-full">
              <Link href="/follow">
                <a>Follow</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex space-x-5 text-green-600 items-center">
        <Link href="/sign-in">
          <a>Sign In</a>
        </Link>
        <Link href="/sign-up">
          <a className="border rounded-full border-green-600 px-4 py-1">Get Started</a>
        </Link>
      </div>
    </header> 
   );
}
 
export default Header;