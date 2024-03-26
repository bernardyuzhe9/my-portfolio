import React from 'react';
import Link from 'next/link'; // Import next/link for client-side navigation
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

export default function Navbar() {
  const socials = [
    {
      Link: 'https://github.com/bernardyuzhe9',
      Label: 'Linkedin',
      Icon: SiLinkedin,
    },
    {
      Link: 'https://github.com/bernardyuzhe9',
      Label: 'x',
      Icon: SiX,
    },
    {
      Link: 'https://github.com/bernardyuzhe9',
      Label: 'Github',
      Icon: SiGithub,
    },
  ];

  return (
    <nav className='flex items-center justify-between max-w-7xl mx-auto py-6 px-6 '>
      <h1 className='text-2x1 font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Bernard Ong Yuzhe</h1>
      <div>
        {socials.map((social, index) => {
          const Icon = social.Icon;

          return (
            <Link href={social.Link} key={index}>
              {/* Render the icon component directly */}
              <Icon aria-label={social.Label} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}