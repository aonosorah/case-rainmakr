import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';
import { HeaderBlock, DivMenu, Nav } from '../styles/headerstyle';
import search from '../assets/magnifying.svg';
import notify from '../assets/notify.svg';
import jobs from '../assets/jobs.svg';
import link from '../assets/link.svg';
import group from '../assets/group.svg';
import user from '../assets/user.svg';

export default function Header() {
  return (
    <HeaderBlock>
      <div>
        <Link href="./user">
          <Image width="125.4" height="24" src={logo} alt="logo image" />
        </Link>
      </div>
      <DivMenu>
        <div className="div-img">
          <Image src={menu} alt="" />
        </div>
        <Nav>
          <ul>
            <Link href="./user">
              <li className="li-img">
                <Image width={32} height={32} src={user} alt="user image" />
                My Profile
              </li>
            </Link>
            <Link href="./notifications">
              <li>
                <Image width={24} height={24} src={notify} alt="bell" />
                Notifications
              </li>
            </Link>
            <Link href="./jobs">
              <li>
                <Image width={24} height={24} src={jobs} alt="jobs" />
                Rainjobs
              </li>
            </Link>
            <Link href="">
              <li>
                <Image width={24} height={24} src={link} alt="links" />
                Rainlinks
              </li>
            </Link>
            <Link href="">
              <li>
                <Image width={24} height={24} src={group} alt="group" />
                Groups
              </li>
            </Link>
            <Link href="">
              <li className="last-child">
                <Image width={20} height={20} src={search} alt="search" />
                Search
              </li>
            </Link>
          </ul>
        </Nav>
      </DivMenu>
    </HeaderBlock>
  );
}
