import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ExperienceItem } from "@/components/experience-item"
import { ContactForm } from "@/components/contact-form"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">Dev</span>Portfolio
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/mAdrls" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/kartik-singh-672956219/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="container py-10">
        {/* Hero Section */}
        <section className="py-20 md:py-32 flex flex-col items-center text-center">
          <div className="animate-fade-in space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Kartik Singh</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Web Developer & Student
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild size="lg">
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
              <p className="text-muted-foreground">
                I'm a passionate Web developer. I specialize in React, Node.js, and modern web technologies to create responsive, user-friendly
                applications that solve real-world problems.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me hiking, reading about new technologies, or contributing to
                open-source projects. I believe in continuous learning and pushing the boundaries of what's possible on
                the web.
              </p>
              <div className="flex gap-4 pt-2">
                <Button variant="outline" asChild>
                  <Link href="/resume.pdf" target="_blank">
                    Download Resume
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
              <img src="/about-me-img.png" alt="Kartik Singh" className="object-cover" />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold tracking-tight mb-8">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillBadge name="React" level={40} />
            <SkillBadge name="Next.js" level={65} />
            {/* <SkillBadge name="TypeScript" level={80} /> */}
            <SkillBadge name="Node.js" level={75} />
            {/* <SkillBadge name="Express" level={80} /> */}
            <SkillBadge name="MongoDB" level={25} />
            <SkillBadge name="PostgreSQL" level={30} />
            {/* <SkillBadge name="GraphQL" level={65} /> */}
            {/* <SkillBadge name="AWS" level={60} /> */}
            {/* <SkillBadge name="Docker" level={70} /> */}
            {/* <SkillBadge name="Tailwind CSS" level={90} /> */}
            <SkillBadge name="Git" level={85} />
            <SkillBadge name="JavaScript" level={65} />
            <SkillBadge name="Wordpress" level={65} />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 scroll-mt-20">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <Link href="/projects" className="text-primary hover:underline flex items-center">
              View All Projects <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Expense Tracker"
              description="A web application to track personal expenses, generate reports, and visualize spending habits."
              tags={["React", "Node.js", "MongoDB", "Chart.js"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://madrls.github.io/Expense-Tracker/"
              repoUrl="https://github.com/mAdrls/Expense-Tracker.git"
            />
            <ProjectCard
              title="Task Management App"
              description="A collaborative task manager with real-time updates, file sharing, and team communication features."
              tags={["Next.js", "TypeScript", "Firebase", "Tailwind"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="AI Content Generator"
              description="An AI-powered application that generates marketing copy, blog posts, and social media content."
              tags={["React", "Python", "OpenAI", "FastAPI"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Work Experience</h2>
          <div className="space-y-8">
            <ExperienceItem
              title="Web Developer Intern"
              company="NS MEDIA"
              period="June 2023 - Aug 2023"
              description="Learnd Android Studio, Wordpress and HTML, CSS. Builded the projects related to wordpress."
              technologies={["XML", "Wordpress", "HTML", "CSS"]}
            />
            <ExperienceItem
              title="Software Developer Engineer (Web) Intern"
              company="Compozent"
              period="Dec 2024 - Jan 2025"
              description="Developed and maintained client projects including custom web applications."
              technologies={["Node.js", "Express", "MySQL", "React",]}
            />
            <ExperienceItem
              title="Web Development Intern"
              company="Prodigy InfoTech"
              period="1 April 2025 - 30 April 2025"
              description="Built responsive websites and implemented UI components."
              technologies={["JavaScript", "HTML", "CSS", "MySQL"]}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
              <p className="text-muted-foreground">
                I'm currently open to new opportunities and collaborations. Whether you have a question or just want to
                say hi, I'll try my best to get back to you!
              </p>
              <div className="space-y-2 pt-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:alex@example.com" className="hover:text-primary">
                    kartiksingh1113@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a
                    href="https://www.linkedin.com/in/kartik-singh-672956219/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    linkedin.com/in/kartik
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Twitter className="h-5 w-5 text-primary" />
                  <a
                    href="https://twitter.com/kartiksingh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    @kartiksingh
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/40">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">
                <span className="text-primary">Dev</span>Portfolio
              </span>
              <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} Alex Chen</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/mAdrls" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/kartik-singh-672956219/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
