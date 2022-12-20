import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';
import { HeaderBlock } from '../styles/headerstyle';

export default function Header() {
  return (
    <HeaderBlock>
      <div>
        <Link href="./user">
          <Image width="125.4" height="24" src={logo} alt="logo image" />
        </Link>
      </div>
      <div>
        <Image src={menu} alt="" />
      </div>
    </HeaderBlock>
  );
}
