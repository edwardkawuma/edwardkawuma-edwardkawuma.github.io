import {
  Bot,
  BriefcaseBusiness,
  Compass,
  LayoutGrid,
  Map,
  Plane,
  Search,
  type LucideIcon,
} from 'lucide-react';

interface SkillItem {
  id: string;
  title: string;
  summary: string;
  highlights: string[];
  icon: LucideIcon;
}

export const skills: SkillItem[] = [
  {
    id: 'gis',
    title: 'GIS Engineering',
    summary: 'Spatial intelligence systems for mapping, geodata analytics, and decision support.',
    highlights: ['PostGIS', 'Spatial Analysis', 'Dashboards'],
    icon: Map,
  },
  {
    id: 'ai',
    title: 'AI Engineering',
    summary: 'Machine learning and AI-driven automation pipelines for real-world operations.',
    highlights: ['ML Models', 'Prediction', 'Optimization'],
    icon: Bot,
  },
  {
    id: 'seo',
    title: 'SEO Strategy',
    summary: 'Search visibility and content architecture for growth and discoverability.',
    highlights: ['Technical SEO', 'Content Strategy', 'Ranking'],
    icon: Search,
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    summary: 'Human-centered digital experiences with strong visual hierarchy and interaction quality.',
    highlights: ['Design Systems', 'Prototyping', 'Accessibility'],
    icon: LayoutGrid,
  },
  {
    id: 'bpmn',
    title: 'BPMN Modeling',
    summary: 'Business process mapping and optimization for scalable operations.',
    highlights: ['Process Flows', 'Automation', 'Governance'],
    icon: Compass,
  },
  {
    id: 'architecture',
    title: 'Software Architecture',
    summary: 'Modular system architecture with documentation, standards, and cloud readiness.',
    highlights: ['System Design', 'API Strategy', 'Scalability'],
    icon: BriefcaseBusiness,
  },
  {
    id: 'aviation',
    title: 'Aviation Simulation & Avionics',
    summary: 'Mission-critical simulation and avionics software concepts for training and planning.',
    highlights: ['Simulation', 'Avionics', 'Real-time Systems'],
    icon: Plane,
  },
];
