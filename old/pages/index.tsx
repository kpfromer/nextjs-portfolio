import Header from '@components/Header';
import Img from 'next/image';
import Page from '@components/Page';
import React from 'react';
import SocialLinks from '@components/SocialLinks';
import SvgWave from '@components/SvgWave';
import backgroundImage from '../public/assets/crested-butte-2016-07-14.jpg';
import meImage from '../public/assets/kyle-pfromer.jpg';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <Page noContainer title="Home" description="Learn more about me.">
      <div className="relative flex h-screen" style={{ zIndex: 1 }}>
        <div className="absolute top-0 left-0 right-0 bottom-0" style={{ zIndex: -1 }} id="top">
          <Img
            src={backgroundImage}
            placeholder="blur"
            alt="Crested Butte Mountains"
            layout="fill"
            quality={60}
            objectPosition="50% 50%"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{ zIndex: -1, backgroundColor: '#000000aa' }}
        />
        <div className="m-auto z-10">
          <div className="space-y-4 text-center flex flex-col justify-center items-center">
            <div className="overflow-hidden rounded-full" style={{ height: 200, width: 200 }}>
              <Img
                src={meImage}
                placeholder="blur"
                alt="Kyle Pfromer"
                layout="fixed"
                width={200}
                height={200}
              />
            </div>

            <h1 className="text-6xl text-primary-500 font-bold">Hi!</h1>

            <h2 className="text-5xl text-white font-bold">I'm Kyle Pfromer</h2>

            <h3 className="text-2xl text-white">
              and I'm a <span className="font-bold text-2xl">Software Engineer</span>
            </h3>

            <SocialLinks color="text-white" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <SvgWave />
          <Header bottomNav />
        </div>
      </div>
    </Page>
  );
};

export default Home;
