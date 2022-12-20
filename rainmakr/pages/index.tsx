import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header';
import home from '../assets/logohome.svg';
import faceb from '../assets/facebook.svg';
import goo from '../assets/google.svg';
import {
  Main,
  Section,
  Form,
  Input,
  Button,
  P,
  H1,
  Text,
  T,
  TColor,
  Socials,
  LastBox,
  H2,
  ImgBox,
} from '../styles/homestyle';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rainmakr</title>
      </Head>
      <Main>
        <Header />
        <Section>
          <ImgBox>
            <Image width="130" height="155.5" src={home} alt="company logo" />
          </ImgBox>

          <div>
            <H1>SIGN IN</H1>
          </div>
          <div>
            <H2>AND START TO...</H2>
          </div>
          <div>
            <Form>
              <Input placeholder="Login" />
              <Input placeholder="Password" />
              <P>Forgot password?</P>
              <Link href="/user">
                <Button>Login</Button>
              </Link>
              <Text>OR CONTINUE WITH</Text>
              <Socials>
                <Image src={faceb} alt="facebook logo" />
                <Image src={goo} alt="google logo" />
              </Socials>
            </Form>
          </div>
          <LastBox>
            <T>
              IF YOU DON'T HAVE AN ACCOUNT <TColor>REGISTER HERE!</TColor>
            </T>
          </LastBox>
        </Section>
      </Main>
    </>
  );
}
