import React, { FC } from 'react';

const footerLinks = ['Privacy policy', 'Agreement', 'Feedback'];

const footerText = ['@ 2022', 'Weather FH Solutions'];

const Footer: FC = () => {
  return (
    <footer className='bg-footer-grey w-screen font-Mulish text-1.5xl leading-7 py-28 text-white'>
      <div className='flex justify-center mb-14'>
        {footerLinks.map((link, i) => (
          <span className='mr-10' key={i}>
            {link}
          </span>
        ))}
      </div>
      <div className='flex justify-center'>
        {footerText.map((text, i) => (
          <span className='mr-6' key={i}>
            {text}
          </span>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
