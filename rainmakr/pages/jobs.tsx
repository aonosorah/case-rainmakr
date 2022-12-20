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
import data from '../data/jobs.json';

export default function Jobs() {
  const showJobs = data.map((item) => {
    return <Card jobs={item} key={item.id} />;
  });
  const lastetsJobs = data
    .filter((a, index) => index % 2)
    .map((item) => {
      return <Card jobs={item} key={item.id} />;
    });
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
        <JobsBox>{showJobs}</JobsBox>
      </div>
      <DivFit>
        <Fit>LASTETS JOBS</Fit>
      </DivFit>
      <JobsBox>{lastetsJobs}</JobsBox>
    </>
  );
}
