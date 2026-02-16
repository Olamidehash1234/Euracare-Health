import { useEffect } from 'react'
import Hero from './hero'
import Actions from './actions'
import MissionVision from './mission';
import Values from './values'
import Conduct from './conduct'
import Team from './team'
import Innovation from './innnovation'

// Add SEO keywords for the About page (exported for reuse)
const ABOUT_PAGE_SEO_KEYWORDS = [
  "best hospitals near me",
  "top hospitals in Lagos",
  "best hospitals in Nigeria",
  "top private hospitals Lagos",
  "best private hospitals in Nigeria",
  "Euracare hospital Lagos",
  "multispeciality hospital Lagos",
  "best diagnostic centre Lagos",
  "top hospitals in Africa",
  "affordable hospitals in Lagos",
  "emergency hospital Lagos",
  "best maternity hospital Lagos",
  "best pediatric hospital Lagos",
  "healthcare services Lagos",
  "medical tourism Nigeria"
]

interface AboutPageProps {
  scrollToTeam?: boolean;
  scrollToMission?: boolean;
}

const AboutPage = ({ scrollToTeam = false, scrollToMission = false }: AboutPageProps) => {
  useEffect(() => {
    // set document title
    document.title = 'About | Euracare Health'

    // helper to create or update meta tag by name
    const ensureMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    ensureMeta('keywords', ABOUT_PAGE_SEO_KEYWORDS.join(', '))
    ensureMeta('description', 'Learn about Euracare Health — a leading multispecialty hospital in Lagos, Nigeria. Discover our mission, values, team, and innovations.')
  }, [])

  // Scroll to team section when scrollToTeam is true
  useEffect(() => {
    if (scrollToTeam) {
      const timer = setTimeout(() => {
        const teamSection = document.getElementById('team-section');
        if (teamSection) {
          const navbarHeight = 120; // adjust based on your navbar height
          const elementPosition = teamSection.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [scrollToTeam])

  // Scroll to mission section when scrollToMission is true
  useEffect(() => {
    if (scrollToMission) {
      const timer = setTimeout(() => {
        const missionSection = document.getElementById('mission-section');
        if (missionSection) {
          const navbarHeight = 80; // adjust based on your navbar height
          const elementPosition = missionSection.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [scrollToMission])

  return (
    <div>
      <Hero />
      <Actions />
      <div id="mission-section">
        <MissionVision />
      </div>
      <Values />
      <Conduct />
      <div id="team-section">
        <Team />
      </div>
      <Innovation />
    </div>
  );
};

export default AboutPage;
export { ABOUT_PAGE_SEO_KEYWORDS };