import { BlogSection } from './portfolio/components/BlogSection'
import { ContactSection } from './portfolio/components/ContactSection'
import { ExperienceSection } from './portfolio/components/ExperienceSection'
import { HeroSection } from './portfolio/components/HeroSection'
import { PortfolioFooter } from './portfolio/components/PortfolioFooter'
import { PortfolioNav } from './portfolio/components/PortfolioNav'
import { ProjectsSection } from './portfolio/components/ProjectsSection'
import { SkillsSection } from './portfolio/components/SkillsSection'
import { useTypewriterTitle } from './portfolio/hooks/useTypewriterTitle'
import { useTranslation } from './i18n/context'
import './portfolio/Portfolio.css'

export default function Portfolio() {
  const { t, localeSwitch } = useTranslation()
  const { cursorOn, displayText } = useTypewriterTitle(t.typingStrings)

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
      <PortfolioNav items={t.navItems} onNavigate={scrollToSection} localeSwitch={localeSwitch} />
      <HeroSection
        hero={t.hero}
        cursorOn={cursorOn}
        displayText={displayText}
        onNavigate={scrollToSection}
      />
      <ExperienceSection section={t.workHistorySection} experiences={t.experiences} />
      <SkillsSection section={t.skillsSection} skillGroups={t.skillGroups} />
      <ProjectsSection section={t.projectSection} projects={t.projects} />
      <BlogSection section={t.blogSection} />
      <ContactSection section={t.contactSection} contact={t.contact} />
      <PortfolioFooter footer={t.footer} />
    </div>
  )
}
