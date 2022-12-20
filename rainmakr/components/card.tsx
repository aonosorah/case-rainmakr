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

interface Obj {
  jobs: {
    id: number;
    company: string;
    job: string;
    start: string;
    delivery: string;
    theme: string;
    fit: number;
  };
}

export default function Card({ jobs }: Obj) {
  const { company, delivery, fit, id, job, start, theme } = jobs;
  return (
    <CardBox>
      <DivOne>
        <TextOne>{company}</TextOne>
        <TextOne>FIT</TextOne>
      </DivOne>
      <DivTwo>
        <TextTwo>{job}</TextTwo>
        <TextThree>{fit}%</TextThree>
      </DivTwo>
      <div>
        <DivThree>
          <TextFour>Start:</TextFour>
          <TextFive>{start}</TextFive>
        </DivThree>
        <DivThree>
          <TextFour>Delivery:</TextFour>
          <TextFive>{delivery}</TextFive>
        </DivThree>
        <Theme>{theme}</Theme>
      </div>
      <DivSocial>
        <Platf>PLATFORMS</Platf>
        <Image width={16} height={16} src={insta} alt="instagram logo" />
      </DivSocial>
      <Button>Get it</Button>
    </CardBox>
  );
}
