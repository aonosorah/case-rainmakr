import Head from 'next/head';
import React from 'react';
import Card from '../components/card';
import Header from '../components/header';
import {
  Input,
  Box,
  Text,
  JobsBox,
  FilterBox,
  DivFit,
  Fit,
} from '../styles/jobstyle';
import mag from '../assets/magnifying.svg';
import filter from '../assets/filter.svg';
import Image from 'next/image';

export default function Jobs() {
  return (
    <>
      <div>
        <Head>
          <title>Rainmakr - Jobs</title>
        </Head>
        <Header />
        <Box>
          <Text currentPage={true}>RAINJOBS</Text>
          <Text>BRANDS</Text>
          <Text>CREATORS</Text>
        </Box>
        <FilterBox>
          <Input placeholder="Search" />
          <Image src={mag} alt="" className="glass" />
          <Image src={filter} alt="" className="filter" />
        </FilterBox>
        <DivFit>
          <Fit>YOUR FIT</Fit>
        </DivFit>
        <JobsBox>
          <Card />
          <Card />
          <Card />
          <Card />
        </JobsBox>
      </div>
      <DivFit>
        <Fit>LASTETS JOBS</Fit>
      </DivFit>
      <JobsBox>
        <Card />
        <Card />
      </JobsBox>
    </>
  );
}
