/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef } from "react";
import { AboutMe } from "../../components/AboutMe-components/AboutMe";
import { Contacts } from "../../components/Contacts-Components/Contacts";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Introduction } from "../../components/Introduction-components/Introduction";
import { TechStack } from "../../components/Introduction-components/TechStack";
import { Projects } from "../../components/Projects-components/Projects";
import { ContentContainer } from "./styles";
import { MyJobs } from "../../components/MyJobs";

export function Home() {
  const homeref = useRef<HTMLHeadingElement>(null);
  const aboutref = useRef<HTMLHeadingElement>(null);
  const projectsref = useRef<HTMLHeadingElement>(null);
  const jobsref = useRef<HTMLHeadingElement>(null);
  const contactsref = useRef<HTMLHeadingElement>(null);

  return (
    <ContentContainer>
      <Header
        homeref={homeref}
        aboutref={aboutref}
        projectsref={projectsref}
        contactsref={contactsref}
        jobsref={jobsref}
      />
      <Introduction />
      <TechStack />
      <AboutMe aboutref={aboutref} />
      <Projects projectsref={projectsref} />
      <MyJobs jobsref={jobsref} />
      <Contacts contactsref={contactsref} />
      <Footer />
    </ContentContainer>
  );
}
