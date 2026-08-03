import { Award, BookOpen, Briefcase } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const education = [
  {
    degree: 'Master of Information Systems',
    school: 'Makerere University, Kampala',
    period: 'Sep 2024 - Present',
    status: 'In Progress',
  },
  {
    degree: 'Bachelor of Science in Software Engineering',
    school: 'Makerere University, Kampala',
    period: '2012 - 2018',
    status: 'Completed',
  },
];

const keyAchievements = [
  'Pioneered the TAFUTA ID system for the National Youth Graduate Program in Uganda, now used nationwide to capture citizen data on phones',
  'Oversaw KFC growth from 4 branches to 9 branches, driving operational excellence and brand consistency',
  'Developed and implemented aquaponic farming strategy at Kiselesi, Mukono—building a team of 35+ members accelerating through company ranks',
  'Designed security systems and networks for schools generating automated report cards, minimizing fraud and data loss',
  'Enrolled in Yum Global Competence Certification Program, graduating with industry-recognized fast-food operations credentials',
  'Innovated entry-level recruitment model adopted by multiple school systems across Uganda',
];

const recentCertifications = [
  'Introduction to Data Science - Cisco Networking Academy (Jan 2025)',
  'GIS Essentials: Data, Tools & Applications - Great Learning (Mar 2026)',
  'Automation Testing Basics - Simplilearn (Mar 2026)',
  'Vibe Coding Course - Simplilearn (Mar 2026)',
  'Ethical Hacking 101: Beginners Guide - Simplilearn (Mar 2026)',
  'Introduction to Artificial Intelligence - Simplilearn (Mar 2026)',
  'Introduction to SEO - Simplilearn (Mar 2026)',
  'Introduction to Graphic Design; Basics of UI/UX - Simplilearn (Mar 2026)',
  'Claude Code in Action - Anthropic (Mar 2026)',
  'AI Fluency: Framework & Foundations - Anthropic (Mar 2026)',
];

export function Resume() {
  const { ref, visible } = useReveal();
  const visibleAchievements = keyAchievements.slice(0, 4);
  const moreAchievementsCount = keyAchievements.length - visibleAchievements.length;

  return (
    <section id="resume" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <span className="eyebrow">
            <BookOpen className="h-3.5 w-3.5" />
            Experience
          </span>
          <h2 className="section-title mt-4">Education & Achievements</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
            A concise profile of academic foundation, operational leadership milestones, and recent
            certifications across GIS, AI, and enterprise technology.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Education */}
          <div className="lg:col-span-1">
            <div className="glass-card animate-fade-up p-7">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">Education</h3>
              </div>
              <div className="mt-6 space-y-4">
                {education.map((edu) => (
                  <div key={edu.degree} className="rounded-xl border border-white/10 bg-ink-900/50 p-4 text-sm">
                    <p className="font-semibold text-white">{edu.degree}</p>
                    <p className="text-xs text-brand-300 mt-1">{edu.school}</p>
                    <p className="text-xs text-slate-500 mt-1">{edu.period}</p>
                    <span className="inline-block mt-2 px-2 py-1 bg-brand-500/20 text-brand-300 rounded text-xs">
                      {edu.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="lg:col-span-2">
            <div className="glass-card animate-fade-up p-7">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success-500/15 text-success-300">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">Key Achievements</h3>
              </div>
              <div className="mt-6 space-y-3">
                {visibleAchievements.map((achievement) => (
                  <div key={achievement} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-success-400" />
                    <p className="text-sm leading-relaxed text-slate-300">{achievement}</p>
                  </div>
                ))}
                {moreAchievementsCount > 0 && (
                  <p className="pl-5 text-xs text-slate-500">
                    + {moreAchievementsCount} additional achievements available on request.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8">
          <div className="glass-card animate-fade-up p-7">
            <h3 className="font-display text-lg font-semibold text-white mb-6">Recent Certifications</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {recentCertifications.map((cert) => (
                <div key={cert} className="flex items-start gap-3 rounded-lg border border-white/10 bg-ink-900/50 p-4">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand-400" />
                  <p className="text-sm text-slate-300">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
