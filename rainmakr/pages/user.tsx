import Head from 'next/head';
import React from 'react';
import Header from '../components/header';
import user from '../assets/user.svg';
import {
  Section,
  NameText,
  LocText,
  LikeText,
  ImgDiv,
  P,
  BoxUm,
  Pdois,
  Box,
  BoxDois,
  SocialBox,
  InfoBox,
  ButtonOne,
  ButtonBox,
  ButtonTwo,
  ButtonThree,
  LastDiv,
  CreateText,
} from '../styles/userstyle';
import Image from 'next/image';
import insta from '../assets/insta.svg';
import tiktok from '../assets/tiktok.svg';
import snap from '../assets/snap.svg';
import logo from '../assets/logo.svg';
import Link from 'next/link';

export default function User() {
  return (
    <>
      <Head>
        <title>Rainmakr - User</title>
      </Head>
      <main>
        <Header />
        <Section>
          <div>
            <ImgDiv>
              <Image src={user} alt="user photo" />
            </ImgDiv>
            <InfoBox>
              <NameText>ARIEL CHRISTINE</NameText>
              <LocText>LOS ANGELES, CA</LocText>
              <LikeText>LIFESTYLE, FASHION</LikeText>
            </InfoBox>
            <Box>
              <BoxUm>
                <P>Engagement</P>
                <P>00%</P>
              </BoxUm>
              <BoxUm>
                <P>Credibility</P>
                <P>00%</P>
              </BoxUm>
              <BoxUm>
                <P>Follower</P>
                <P>8.465</P>
              </BoxUm>
              <BoxDois>
                <Pdois>Likes</Pdois>
                <Pdois>000.000</Pdois>
              </BoxDois>
            </Box>
          </div>
          <SocialBox>
            <Image src={insta} alt="instagram logo" />
            <Image src={tiktok} alt="tiktok logo" />
            <Image src={snap} alt="snapchat logo" />
          </SocialBox>
          <ButtonBox>
            <Link href="/jobs">
              <ButtonOne>Direct Book Me</ButtonOne>
            </Link>
            <ButtonTwo>Follow</ButtonTwo>
            <ButtonThree>My Store</ButtonThree>
            <ButtonThree>My Podcast</ButtonThree>
            <ButtonThree>Wish List</ButtonThree>
          </ButtonBox>
          <LastDiv>
            <CreateText>CREATE YOUR OWN RAINLINK</CreateText>
            <Image src={logo} alt="logo image" />
          </LastDiv>
        </Section>
      </main>
    </>
  );
}
