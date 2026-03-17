import { BlogSection } from './portfolio/components/BlogSection'
import { ContactSection } from './portfolio/components/ContactSection'
import { ExperienceSection } from './portfolio/components/ExperienceSection'
import { HeroSection } from './portfolio/components/HeroSection'
import { PortfolioFooter } from './portfolio/components/PortfolioFooter'
import { PortfolioNav } from './portfolio/components/PortfolioNav'
import { ProjectsSection } from './portfolio/components/ProjectsSection'
import { SkillsSection } from './portfolio/components/SkillsSection'
import { useTypewriterTitle } from './portfolio/hooks/useTypewriterTitle'
import './portfolio/Portfolio.css'

export default function Portfolio({ content, localeSwitch }) {
  const {
    blogSection,
    contact,
    contactSection,
    experiences,
    footer,
    hero,
    navItems,
    projects,
    projectSection,
    skillGroups,
    skillsSection,
    typingStrings,
    workHistorySection,
  } = content
  const { cursorOn, displayText } = useTypewriterTitle(typingStrings)

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)

    if (!section) {
      return
    }

    const nav = document.querySelector('.pf-nav')
    const navHeight = nav?.getBoundingClientRect().height ?? 0
    const targetTop = section.getBoundingClientRect().top + window.scrollY - navHeight

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: 'smooth',
    })
  }

  return (
    <div className='pf'>
      <PortfolioNav items={navItems} onNavigate={scrollToSection} localeSwitch={localeSwitch} />
      <HeroSection
        hero={hero}
        cursorOn={cursorOn}
        displayText={displayText}
        onNavigate={scrollToSection}
      />
      <ExperienceSection section={workHistorySection} experiences={experiences} />
      <SkillsSection section={skillsSection} skillGroups={skillGroups} />
      <ProjectsSection section={projectSection} projects={projects} />
      <BlogSection section={blogSection} />
      <ContactSection section={contactSection} contact={contact} />
      <PortfolioFooter footer={footer} />
    </div>
  )
}
