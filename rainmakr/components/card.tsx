import React from 'react';
import {
  CardBox,
  TextOne,
  DivOne,
  Button,
  TextTwo,
  TextThree,
  TextFour,
  TextFive,
  Theme,
  Platf,
  DivTwo,
  DivThree,
  DivSocial,
} from '../styles/cardstyle';
import insta from '../assets/insta.svg';
import Image from 'next/image';

export default function Card() {
  return (
    <CardBox>
      <DivOne>
        <TextOne>COMPANY</TextOne>
        <TextOne>FIT</TextOne>
      </DivOne>
      <DivTwo>
        <TextTwo>EVENT</TextTwo>
        <TextThree>00%</TextThree>
      </DivTwo>
      <div>
        <DivThree>
          <TextFour>Start:</TextFour>
          <TextFive>00/00</TextFive>
        </DivThree>
        <DivThree>
          <TextFour>Delivery:</TextFour>
          <TextFive>0/0</TextFive>
        </DivThree>
        <Theme>THEME</Theme>
      </div>
      <DivSocial>
        <Platf>PLATFORMS</Platf>
        <Image src={insta} alt="instagram logo" />
      </DivSocial>
      <Button>Get it</Button>
    </CardBox>
  );
}
