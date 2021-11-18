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

const Seperator = () => (
  <div className="flex flex-grow" role="separator">
    <div className="my-auto flex-grow h-0.5 bg-gray-700 dark:gray-200" />
  </div>
);

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
            <div className="flex justify-center items-center my-10">
              <h1 className="mr-3 text-4xl font-bold">{name}</h1>

              <Seperator />
            </div>

            <div className="flex flex-col space-y-12">
              {items.map(({ companyName, title, location, logo, content }) => (
                <div className="flex-grow grid grid-cols-experience" key={companyName}>
                  <div>
                    <h2 className="text-3xl text-primary-500 font-bold">{companyName}</h2>
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
                </div>
              ))}
            </div>
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
