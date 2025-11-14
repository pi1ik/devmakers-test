<!-- prettier-ignore-start -->

📁 app
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   📁 _pricing
│   │   └── page.tsx
│   📁 ai-consultant
│   │   └── page.tsx
│   📁 faq
│   │   └── page.tsx
│   📁 portfolio
│   │   ├── page.tsx
│   │   📁 [category]
│   │   │   ├── page.tsx
│   │   │   📁 [id]
│   │   │   │   └── page.tsx
│   📁 services
│   │   └── page.tsx
│   📁 team
│   │   └── page.tsx
│
📁 docs
│   ├── ANALYTICS-GUIDE.md
│   ├── ANALYTICS-INTEGRATION.md
│   ├── Attributions.md
│   ├── CHANGELOG.md
│   ├── CHAT-LINKS-GUIDE.md
│   ├── COMPONENTS-VISUAL-GUIDE.md
│   ├── DOCKER-DEPLOY.md
│   ├── MOBILE-IMPROVEMENTS.md
│   ├── PERFORMANCE-OPTIMIZATION.md
│   ├── QUICK-REFERENCE.md
│   ├── README.md
│   ├── REDESIGN-2025.md
│   ├── SEO-README.md
│   └── SSL-SETUP.md
│
📁 public
│   ├── favicon.svg
│   ├── file.svg
│   ├── globe.svg
│   ├── logo-dark.svg
│   ├── logo-light.svg
│   ├── logo-new.svg
│   ├── logo.ico
│   ├── logo.svg
│   ├── next.svg
│   ├── portfolio-default.png
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── vercel.svg
│   └── window.svg
│
📁 src
│   📁 shared
│   │   📁 ui
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── aspect-ratio.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── button.tsx
│   │   │   ├── calendar.tsx
│   │   │   ├── card.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── chart.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── collapsible.tsx
│   │   │   ├── command.tsx
│   │   │   ├── context-menu.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── hover-card.tsx
│   │   │   ├── input-otp.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── menubar.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── radio-group.tsx
│   │   │   ├── resizable.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── select.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── slider.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── toggle-group.tsx
│   │   │   ├── toggle.tsx
│   │   │   ├── tooltip.tsx
│   │   │   ├── Typography.tsx
│   │   │   ├── use-mobile.ts
│   │   │   └── utils.ts
│   │   📁 figma
│   │   │   └── ImageWithFallback.tsx
│   │   📁 styles
│   │   │   └── globals.css
│   │   📁 utils
│   │       ├── analytics.ts
│   │       ├── axiosInstance.ts
│   │       ├── breakpoints.ts
│   │       ├── constants.ts
│   │       ├── linkParser.ts
│   │       ├── motionConfig.ts
│   │       └── performance.ts
│
│   📁 entities
│   │   📁 project
│   │   │   ├── projectData.ts
│   │   │   ├── projectDataExtended.ts
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ProjectDetailPage.tsx
│   │   📁 team
│   │   │   └── Team.tsx
│   │   📁 faq
│   │       └── FAQPage.tsx
│
│   📁 features
│   │   📁 contact
│   │   │   ├── Contact.tsx
│   │   │   ├── ContactModal.tsx
│   │   │   └── ProjectContactModal.tsx
│   │   📁 theme
│   │   │   ├── ThemeProvider.tsx
│   │   │   └── ThemeScript.tsx
│   │   📁 ai-consultant
│   │   │   ├── AIConsultantPreview.tsx
│   │   │   └── ChatMessage.tsx
│   │   📁 navigation
│   │       ├── Navigation.tsx
│   │       └── FloatingChatButton.tsx
│
│   📁 widgets
│   │   ├── Hero.tsx
│   │   ├── ImageWithFallback.tsx
│   │   ├── Logo.tsx
│   │   ├── Pricing.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Services.tsx
│   │   ├── Team.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Stats.tsx
│   │   ├── CTASection.tsx
│   │   ├── Clients.tsx
│   │   ├── Process.tsx
│   │   ├── Work.tsx
│   │   ├── Approach.tsx
│   │   ├── BentoGrid.tsx
│   │   ├── Footer.tsx
│   │   ├── PageLoader.tsx
│   │   ├── PageIndicator.tsx
│   │   ├── PerformanceIndicator.tsx
│   │   └── SEO.tsx
│
│   📁 processes
│   │   └── QueryProvider.tsx
│
│   📁 app-pages
│       ├── HomePage.tsx
│       ├── AIConsultantPage.tsx
│       ├── PricingPage.tsx
│       ├── PortfolioPage.tsx
│       ├── ProjectDetailPage.tsx
│       ├── ServicesPage.tsx
│       ├── TeamPage.tsx
│       └── NotFoundPage.tsx
│
📄 .dockerignore
📄 .gitignore
📄 deploy.sh
📄 docker-compose.yml
📄 Dockerfile
📄 eslint.config.mjs
📄 next-env.d.ts
📄 next.config.ts
📄 package-lock.json
📄 package.json
📄 postcss.config.mjs
📄 README.md
📄 tsconfig.json

<!-- prettier-ignore-end -->
