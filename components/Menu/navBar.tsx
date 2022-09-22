import Link from 'next/link';
import { LINKS } from './config';
import { MobileMenu } from './mobileMenu';
import { NavLink } from './NavLink';

export function Navbar() {
  return (
    <div className='py-9 lg:py-12 lg:px-24 w-screen px-10'>
      <nav className='text-primary max-w-8xl flex items-center justify-between mx-auto'>
        <Link href='/' passHref>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className='underlined text-bodyText whitespace-nowrap lg:text-3xl block text-2xl font-medium'
          >
            <h2>Sergiu Grisca</h2>
          </a>
        </Link>

        <ul className='lg:flex justify-end hidden'>
          {LINKS.map((link) => (
            <NavLink key={link.to} href={link.to}>
              {link.name}
            </NavLink>
          ))}
        </ul>

        <div className='lg:hidden flex items-center justify-center'>
          <MobileMenu />
        </div>
      </nav>
    </div>
  );
}
