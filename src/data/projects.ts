import {
  AlertTriangle,
  Blocks,
  Code2,
  Coins,
  Leaf,
  Map,
  ShoppingCart,
  Truck,
  Zap,
  type LucideIcon,
} from 'lucide-react';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  repo: string;
  repoPath: string;
  tags: string[];
  stack: string[];
  status: 'Live' | 'Beta' | 'R&D';
  accent: string;
}

export const projects: Project[] = [
  {
    id: 'uganda-vehicle-management',
    name: 'Uganda Vehicle Management',
    tagline: 'Fleet tracking and management system',
    description:
      'Comprehensive vehicle management system for Uganda with real-time tracking, maintenance scheduling, and fleet analytics.',
    icon: Truck,
    repo: 'edwardkawuma/uganda-vehicle-management-system',
    repoPath: '/repos/edwardkawuma/uganda-vehicle-management-system',
    tags: ['Fleet Management', 'Tracking', 'Uganda'],
    stack: ['TypeScript', 'React', 'Node.js'],
    status: 'Live',
    accent: 'from-blue-400/20 to-blue-600/5',
  },
  {
    id: 'agrismart-uganda',
    name: 'AgriSmartUganda',
    tagline: 'Smart agriculture platform for farmers',
    description:
      'Agriculture platform helping farmers optimize crop production through weather forecasting and market insights.',
    icon: Leaf,
    repo: 'edwardkawuma/AgriSmartUganda',
    repoPath: '/repos/edwardkawuma/AgriSmartUganda',
    tags: ['Agriculture', 'Farming', 'Data Analytics'],
    stack: ['TypeScript', 'React', 'GIS'],
    status: 'Live',
    accent: 'from-emerald-400/20 to-emerald-600/5',
  },
  {
    id: 'fuel-monitoring',
    name: 'Fuel Monitoring System',
    tagline: 'Real-time fuel consumption tracking',
    description:
      'Fuel monitoring and management system for tracking consumption and optimizing usage across fleets.',
    icon: Zap,
    repo: 'edwardkawuma/fuel-monitoring-',
    repoPath: '/repos/edwardkawuma/fuel-monitoring-',
    tags: ['Monitoring', 'Fleet Management', 'Analytics'],
    stack: ['TypeScript', 'React', 'API'],
    status: 'Live',
    accent: 'from-amber-400/20 to-amber-600/5',
  },
  {
    id: 'commodity-value-chain',
    name: 'Uganda Commodity Value Chain',
    tagline: 'Agricultural commodity analysis platform',
    description:
      'Regional commodity value chain analysis platform with market and performance intelligence.',
    icon: Map,
    repo: 'edwardkawuma/abcd1',
    repoPath: '/repos/edwardkawuma/abcd1',
    tags: ['Economics', 'GIS', 'Market Analysis'],
    stack: ['TypeScript', 'GIS', 'Data Visualization'],
    status: 'Live',
    accent: 'from-red-400/20 to-red-600/5',
  },
  {
    id: 'traffic-enforcement',
    name: 'Smart Traffic Enforcement',
    tagline: 'Intelligent traffic management system',
    description:
      'Automated traffic monitoring and violation reporting to improve enforcement and safety.',
    icon: AlertTriangle,
    repo: 'edwardkawuma/smart_traffic_enforcement_system',
    repoPath: '/repos/edwardkawuma/smart_traffic_enforcement_system',
    tags: ['Traffic Management', 'Smart Cities', 'IoT'],
    stack: ['HTML', 'JavaScript', 'Node.js'],
    status: 'Beta',
    accent: 'from-orange-400/20 to-orange-600/5',
  },
  {
    id: 'vegetation-prediction',
    name: 'Vegetation Prediction of Uganda',
    tagline: 'NDVI and vegetation forecasting',
    description:
      'Machine learning workflows for predicting vegetation patterns using satellite and climate data.',
    icon: Leaf,
    repo: 'edwardkawuma/vegetation-pridiction-of-uganda',
    repoPath: '/repos/edwardkawuma/vegetation-pridiction-of-uganda',
    tags: ['Machine Learning', 'GIS', 'Remote Sensing'],
    stack: ['Python', 'TensorFlow', 'Satellite Data'],
    status: 'Live',
    accent: 'from-lime-400/20 to-lime-600/5',
  },
  {
    id: 'commodity-tax-intelligence',
    name: 'Uganda Commodity Tax Intelligence',
    tagline: 'Tax and revenue analytics system',
    description:
      'Revenue intelligence platform for commodity-based taxation with forecasting and compliance support.',
    icon: Coins,
    repo: 'edwardkawuma/uganda-commodity-tax-intelligence',
    repoPath: '/repos/edwardkawuma/uganda-commodity-tax-intelligence',
    tags: ['Taxation', 'Revenue', 'Analytics'],
    stack: ['TypeScript', 'React', 'Data Analysis'],
    status: 'Live',
    accent: 'from-purple-400/20 to-purple-600/5',
  },
  {
    id: 'ug-market',
    name: 'UG Market',
    tagline: 'Uganda market intelligence platform',
    description:
      'Commerce and market analysis platform with real-time pricing and trend intelligence.',
    icon: ShoppingCart,
    repo: 'edwardkawuma/UG-market',
    repoPath: '/repos/edwardkawuma/UG-market',
    tags: ['E-commerce', 'Market Intelligence', 'Analytics'],
    stack: ['TypeScript', 'React', 'Node.js'],
    status: 'Live',
    accent: 'from-cyan-400/20 to-cyan-600/5',
  },
  {
    id: 'blockchain',
    name: 'Blockchain',
    tagline: 'Distributed ledger implementation',
    description:
      'Exploration of decentralized systems, consensus patterns, and smart contract workflows.',
    icon: Blocks,
    repo: 'edwardkawuma/blockchain',
    repoPath: '/repos/edwardkawuma/blockchain',
    tags: ['Blockchain', 'Cryptography', 'Distributed Systems'],
    stack: ['TypeScript', 'Node.js', 'Web3'],
    status: 'R&D',
    accent: 'from-pink-400/20 to-pink-600/5',
  },
  {
    id: 'enterprise-integration',
    name: 'Derick1',
    tagline: 'Enterprise integration platform',
    description:
      'Enterprise integration and workflow automation platform for cross-system operations.',
    icon: Code2,
    repo: 'edwardkawuma/derick1',
    repoPath: '/repos/edwardkawuma/derick1',
    tags: ['Enterprise', 'Integration', 'Automation'],
    stack: ['TypeScript', 'Node.js', 'REST API'],
    status: 'Beta',
    accent: 'from-violet-400/20 to-violet-600/5',
  },
];
