<!-- prettier-ignore-start -->

└── 📁app
    ├── 📁_pricing
    │   └── page.tsx
    ├── 📁ai-consultant
    │   └── page.tsx
    ├── 📁faq
    │   └── page.tsx
    ├── 📁portfolio
    │   ├── 📁[category]
    │   │   ├── 📁[id]
    │   │   │   └── page.tsx
    │   │   ├── layout.tsx
    │   │   └── page.tsx
    │   └── page.tsx
    ├── 📁services
    │   └── page.tsx
    ├── 📁team
    │   └── page.tsx
    ├── globals.css
    ├── layout.tsx
    ├── not-found.tsx
    └── page.tsx

└── 📁docs
    ├── ANALYTICS-GUIDE.md
    ├── ANALYTICS-INTEGRATION.md
    ├── Attributions.md
    ├── CHANGELOG.md
    ├── CHAT-LINKS-GUIDE.md
    ├── COMPONENTS-VISUAL-GUIDE.md
    ├── DOCKER-DEPLOY.md
    ├── MOBILE-IMPROVEMENTS.md
    ├── PERFORMANCE-OPTIMIZATION.md
    ├── QUICK-REFERENCE.md
    ├── README.md
    ├── REDESIGN-2025.md
    ├── SEO-README.md
    └── SSL-SETUP.md

└── 📁public
    ├── favicon.svg
    ├── file.svg
    ├── globe.svg
    ├── logo-dark.svg
    ├── logo-light.svg
    ├── logo-new.svg
    ├── logo.ico
    ├── logo.svg
    ├── next.svg
    ├── portfolio-default.png
    ├── robots.txt
    ├── sitemap.xml
    ├── vercel.svg
    └── window.svg

└── 📁src
    ├── 📁app-pages
    │   ├── 📁AIConsultantPage
    │   │   ├── 📁hooks
    │   │   │   └── useChatLogic.ts
    │   │   ├── 📁model
    │   │   │   ├── ai-responses.ts
    │   │   │   ├── quickQuestions.ts
    │   │   │   └── types.ts
    │   │   ├── 📁ui
    │   │   │   ├── ChatContainer.tsx
    │   │   │   ├── ChatMessage.tsx
    │   │   │   └── QuickQuestions.tsx
    │   │   ├── 📁utils
    │   │   │   └── validation.ts
    │   │   └── AIConsultantPage.tsx
    │   ├── 📁FAQPage
    │   │   ├── 📁model
    │   │   │   └── faq.ts
    │   │   └── FAQPage.tsx
    │   ├── 📁PortfolioPage
    │   │   ├── 📁model
    │   │   │   ├── categories.ts
    │   │   │   ├── portfolioData.ts
    │   │   │   ├── projectData.ts
    │   │   │   └── projectDataExtended.ts
    │   │   ├── 📁ui
    │   │   │   ├── Portfolio.tsx
    │   │   │   └── PortfolioCard.tsx
    │   │   └── PortfolioPage.tsx
    │   ├── 📁PricingPage
    │   │   ├── 📁model
    │   │   │   ├── pricingCategories.ts
    │   │   │   └── pricingTiers.ts
    │   │   └── PricingPage.tsx
    │   ├── 📁ServicesPage
    │   │   ├── 📁model
    │   │   │   └── servicesData.ts
    │   │   ├── 📁ui
    │   │   │   ├── Benefits.tsx
    │   │   │   ├── DetailedServices.tsx
    │   │   │   └── Technologies.tsx
    │   │   └── ServicesPage.tsx
    │   ├── 📁TeamPage
    │   │   ├── 📁model
    │   │   │   └── teamData.ts
    │   │   ├── 📁ui
    │   │   │   ├── Achievements.tsx
    │   │   │   ├── Culture.tsx
    │   │   │   ├── Expertise.tsx
    │   │   │   ├── JoinCTA.tsx
    │   │   │   ├── Team.tsx
    │   │   │   └── TeamPhotos.tsx
    │   │   └── TeamPage.tsx
    │   ├── HomePage.tsx
    │   ├── NotFoundPage.tsx
    │   └── ProjectDetailPage.tsx
    ├── 📁features
    │   ├── 📁contact
    │   │   ├── ContactModal.tsx
    │   │   └── ProjectContactModal.tsx
    │   ├── 📁navigation
    │   │   ├── 📁data
    │   │   │   └── portfolioItems.ts
    │   │   ├── FloatingChatButton.tsx
    │   │   └── Navigation.tsx
    │   └── 📁theme
    │       ├── ThemeProvider.tsx
    │       └── ThemeScript.tsx
    ├── 📁processes
    │   └── QueryProvider.tsx
    ├── 📁shared
    │   ├── 📁config
    │   │   └── SitemapGenerator.tsx
    │   ├── 📁hooks
    │   │   └── use-mobile.ts
    │   ├── 📁ui
    │   │   ├── accordion.tsx
    │   │   ├── alert-dialog.tsx
    │   │   ├── alert.tsx
    │   │   ├── aspect-ratio.tsx
    │   │   ├── avatar.tsx
    │   │   ├── badge.tsx
    │   │   ├── breadcrumb.tsx
    │   │   ├── button.tsx
    │   │   ├── calendar.tsx
    │   │   ├── card.tsx
    │   │   ├── carousel.tsx
    │   │   ├── chart.tsx
    │   │   ├── checkbox.tsx
    │   │   ├── cn.ts
    │   │   ├── collapsible.tsx
    │   │   ├── command.tsx
    │   │   ├── context-menu.tsx
    │   │   ├── dialog.tsx
    │   │   ├── drawer.tsx
    │   │   ├── dropdown-menu.tsx
    │   │   ├── form.tsx
    │   │   ├── hover-card.tsx
    │   │   ├── imageWithFallback.tsx
    │   │   ├── index.tsx
    │   │   ├── input-otp.tsx
    │   │   ├── input.tsx
    │   │   ├── label.tsx
    │   │   ├── menubar.tsx
    │   │   ├── navigation-menu.tsx
    │   │   ├── pagination.tsx
    │   │   ├── popover.tsx
    │   │   ├── progress.tsx
    │   │   ├── radio-group.tsx
    │   │   ├── resizable.tsx
    │   │   ├── scroll-area.tsx
    │   │   ├── select.tsx
    │   │   ├── separator.tsx
    │   │   ├── sheet.tsx
    │   │   ├── sidebar.tsx
    │   │   ├── skeleton.tsx
    │   │   ├── slider.tsx
    │   │   ├── sonner.tsx
    │   │   ├── switch.tsx
    │   │   ├── table.tsx
    │   │   ├── tabs.tsx
    │   │   ├── textarea.tsx
    │   │   ├── toggle-group.tsx
    │   │   ├── toggle.tsx
    │   │   ├── tooltip.tsx
    │   │   └── Typography.tsx
    │   └── 📁utils
    │       ├── analytics.ts
    │       ├── axiosInstance.ts
    │       ├── breakpoints.ts
    │       ├── constants.ts
    │       ├── linkParser.ts
    │       ├── motionConfig.ts
    │       └── performance.ts
    └── 📁widgets
        ├── AIConsultantPreview.tsx
        ├── Approach.tsx
        ├── BentoGrid.tsx
        ├── Clients.tsx
        ├── Contact.tsx
        ├── CTASection.tsx
        ├── Footer.tsx
        ├── Hero.tsx
        ├── index.tsx
        ├── Logo.tsx
        ├── PageIndicator.tsx
        ├── PageLoader.tsx
        ├── PerformanceIndicator.tsx
        ├── Pricing.tsx
        ├── Process.tsx
        ├── SEO.tsx
        ├── Services.tsx
        ├── Stats.tsx
        ├── Testimonials.tsx
        └── Work.tsx

├── .dockerignore
├── .gitignore
├── deploy.sh
├── docker-compose.yml
├── Dockerfile
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── structure.md
└── tsconfig.json

<!-- prettier-ignore-end -->
