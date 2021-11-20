import { ExperienceData, getExperience } from '@lib/experience';

import Container from '@components/Container';
import { GetStaticProps } from 'next';
import Header from '@components/Header';
import { Heading } from '@components/Heading';
import { MDXRemote } from 'next-mdx-remote';
import NextImage from 'next/image';
import Page from '@components/Page';
import React from 'react';
import info from '@configs/info';
import { otherMdxComponents } from '@utils/mdx';
import tw from 'tailwind-styled-components';

const Seperator = () => (
  <div className="flex flex-grow" role="separator">
    <div className="my-auto flex-grow h-0.5 bg-gray-700 dark:gray-200" />
  </div>
);

const SectionContainer = tw.div`
  flex
  justify-center
  items-center
  my-10
`;

const SectionTitle = tw.h1`
  mx-3
  text-4xl
  font-bold
`;

const ExperienceGrid = tw.div`
  flex
  flex-col
  space-y-12
`;

const ExperienceItem = tw.div`
  flex-grow
  grid 
  grid-cols-experience
`;

const ExperienceItemTitle = tw.h2`
  text-3xl
  text-primary-500
  font-bold
`;

export const getStaticProps: GetStaticProps = async () => {
  const experience = await getExperience();

  return {
    props: {
      experience,
    } as ResumePageProps,
  };
};

export interface ResumePageProps {
  experience: ExperienceData;
}

const ResumePage: React.FC<ResumePageProps> = ({ experience }) => {
  return (
    <Page title="Resume" description="My online resume.">
      <Header />

      <Container className="mt-5">
        <Heading id="experience">Experience</Heading>

        {experience.map(({ name, items }) => (
          <div key={name}>
            <SectionContainer>
              <Seperator />

              <SectionTitle>{name}</SectionTitle>

              <Seperator />
            </SectionContainer>

            <ExperienceGrid>
              {items.map(({ companyName, title, location, logo, content }) => (
                <ExperienceItem key={companyName}>
                  <div>
                    <ExperienceItemTitle>{companyName}</ExperienceItemTitle>
                    <h3 className="mt-2 text-xl font-bold">
                      {title} · {location}
                    </h3>

                    {content && (
                      <div className="pt-3">
                        <MDXRemote {...content} components={otherMdxComponents} />
                      </div>
                    )}
                  </div>

                  <div className="flex">
                    {logo && (
                      <div className="m-auto">
                        {/* TODO: placeholder */}
                        <NextImage src={logo} layout="fixed" width={64} height={64} />
                      </div>
                    )}
                  </div>
                </ExperienceItem>
              ))}
            </ExperienceGrid>
          </div>
        ))}

        <a rel="noopener" target="_blank" href={info.resume} className="my-5 btn-primary">
          View Resume
        </a>
      </Container>
    </Page>
  );
};

export default ResumePage;
