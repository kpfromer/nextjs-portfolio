import { ProjectData, getProjects } from '@lib/projects';

import Container from '@components/Container';
import { GetStaticProps } from 'next';
import GithubProject from '../components/Github/Project';
import Header from '@components/Header';
import { Heading } from '@components/Heading';
import Page from '@components/Page';
import Project from '@components/Project';
import React from 'react';
import { fetchRepos } from '@lib/github';

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects();
  const ghProjects = await fetchRepos('STARGAZERS', 12);

  return {
    props: {
      projects,
      ghProjects,
    } as ProjectPageProps,

    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 600 seconds (10 minutes)
    revalidate: 600, // In seconds
  };
};

export interface ProjectPageProps {
  projects: ProjectData[];
  ghProjects: any[];
}

const ProjectPage: React.FC<ProjectPageProps> = ({ projects, ghProjects }) => {
  return (
    <Page title="Projects" description="My personal projects.">
      <Header />

      <Container className="mt-5">
        <Heading id="projects">Projects</Heading>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <Project key={project.title} {...project} className="h-full" />
          ))}
        </div>

        <Heading id="gh-projects">Popular Github Projects</Heading>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 my-3 max-w-5xl">
          {ghProjects.map((project) => (
            <GithubProject project={project} />
          ))}
        </div>
      </Container>
    </Page>
  );
};

export default ProjectPage;
