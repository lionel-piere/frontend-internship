import { profileData } from './data/profile';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Header name={profileData.name} shortName={profileData.shortName} />
      <main className="site-main">
        <Hero
          name={profileData.name}
          initials={profileData.initials}
          avatarUrl={profileData.avatarUrl}
          role={profileData.role}
          company={profileData.company}
          introduction={profileData.introduction}
        />
        <About paragraphs={profileData.about} />
        <Skills
          projectExposure={profileData.skills.projectExposure}
          currentlyLearning={profileData.skills.currentlyLearning}
        />
        <Projects projects={profileData.projects} />
        <Experience experience={profileData.experience} />
        <Education
          education={profileData.education}
          certifications={profileData.certifications}
          languages={profileData.languages}
        />
      </main>
      <Footer name={profileData.name} />
    </>
  );
}

export default App;
