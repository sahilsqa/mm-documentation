// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Main documentation sidebar - Focused on Mera Monitor
  tutorialSidebar: [
    {
      type: 'category',
      label: '🚀 Getting Started',
      items: [
        'intro',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: '✨ Features',
      items: [
        'features/dashboard-overview',
        'features/productivity-tracking',
        'features/attendance-management',
        'features/project-task-management',
        'features/reporting-analytics',
        'features/desktop-agent',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: '⚙️ Configuration',
      items: [
        'configuration/system-configuration',
        'configuration/user-management',
        'configuration/integration-configuration',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: '🛠️ Technical Deep Dive',
      items: [
        'technical/api-reference',
        'technical/database-schema',
        'technical/system-architecture',
        'technical/security',
        'technical/troubleshooting',
      ],
      collapsed: true,
    },
  ],

  // Support sidebar
  supportSidebar: [
    {
      type: 'category',
      label: 'Support Center',
      items: [
        'support/support-index',
        'support/getting-started',
        'support/troubleshooting',
        'support/faqs',
        'support/contact',
      ],
      collapsed: false,
    },
  ],
};

export default sidebars;
