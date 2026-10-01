export type Chapter = {
  id: string;
  period: string;
  kicker: string;
  title: string;
  paragraphs: string[];
  facts?: { label: string; value: string }[];
  pullquote?: string;
};

export const founder = {
  name: "Adrian G.",
  initials: "AG",
  role: "Founder & CEO, Rakn Labs",
  secondaryRole: "Software Developer & Product Manager",

  /**
   * Set to "" to fall back to the typographic placeholder frame.
   */
  portrait: "/images/founder-adrian-g.jpg",
  portraitAlt: "Adrian G., Founder and CEO of Rakn Labs",

  hero: {
    eyebrow: "About the founder",
    heading: "Built from curiosity, shaped by experience.",
    intro:
      "Adrian G. is the Founder & CEO of Rakn Labs, where he combines software engineering, product development and business experience to build practical digital products.",
  },

  chapters: [
    {
      id: "before",
      period: "Until 2020",
      kicker: "Chapter 01",
      title: "Before Rakn Labs",
      paragraphs: [
        "Adrian's career did not start in software. It started in business operations — purchasing, sales and logistics, where work is measured in deadlines, margins and problems that need an answer before the end of the day.",
        "That meant years spent next to the people who actually use internal tools: someone reconciling an order, chasing a delayed delivery, or typing the same data into a third system because none of them talk to each other. He spent a lot of that time looking for ways to make those processes shorter, and kept arriving at the same conclusion — the software was the bottleneck, not the people using it.",
        "In 2020 he started learning JavaScript, initially just to automate the parts of his own job that did not need a human. Small scripts became internal management tools, the tools became genuinely useful to his colleagues, and that turned into a different career.",
      ],
      facts: [
        { label: "Operations", value: "Purchasing · Sales · Logistics" },
        { label: "Focus", value: "Process optimisation & automation" },
        { label: "2020", value: "Started learning JavaScript" },
      ],
      pullquote:
        "Working inside operations meant seeing software from the other side of the screen — as the person who has to live with it.",
    },
    {
      id: "reset-games",
      period: "2021 — 2023",
      kicker: "Chapter 02",
      title: "Reset Games",
      paragraphs: [
        "In 2021 Adrian founded Reset Games, his first digital product company and his first real test of whether he could build something people would actively choose to use.",
        "The focus was interactive digital products, and a recurring question behind them: what happens when the interface gets out of the way? One project, released in 2021, used the smartphone's gyroscope as its primary control, reading the physical motion of the device instead of asking for taps on glass. Motion sensors were not new, but this kind of interaction was still uncommon in consumer applications at the time, and it was a direct way to explore a more natural interaction model.",
        "Over the following two years the products found an audience and the company grew into a profitable digital product business, reaching approximately €200,000 in annual revenue before the project was eventually sold.",
        "None of it happened quickly. It was two years of releasing, measuring, rewriting and occasionally discarding work that did not earn its place. Building Reset Games taught Adrian that a good product is not simply about technology. It is about understanding people, removing friction and continuously improving what you build.",
      ],
      facts: [
        { label: "2021", value: "Reset Games founded" },
        { label: "Interaction", value: "Gyroscope-based controls, 2021" },
        { label: "After two years", value: "~€200,000 annual revenue" },
        { label: "Outcome", value: "Project sold" },
      ],
      pullquote:
        "The revenue was not the lesson. It was the evidence that the products had become genuinely useful to someone.",
    },
    {
      id: "why",
      period: "2025",
      kicker: "Chapter 03",
      title: "Why Rakn Labs",
      paragraphs: [
        "Rakn Labs was founded in 2025 around an idea that sounds obvious and is surprisingly rare in practice: software should be powerful without feeling complicated.",
        "Most of the friction people blame on themselves is really a decision someone made earlier — a form asking for information the system already has, a screen that takes two seconds longer than it should, a flow that assumes you already understand how it works. Removing that friction is most of the work.",
        "So the priorities are deliberately unglamorous. Interfaces that respond immediately. Interactions that behave the way you would guess. Products shaped by how the business around them actually operates, because engineering decisions and business decisions are the same conversation here. That is a direct consequence of having spent years on both sides of it.",
      ],
      pullquote:
        "Technology should serve the person using it. That sounds simple, and it is the part that takes the most work.",
    },
  ] satisfies Chapter[],

  building: {
    kicker: "Today",
    title: "Building at Rakn Labs",
    paragraphs: [
      "Rakn Labs currently has three published applications, alongside ongoing work on new software and interactive experiences.",
      "Adrian is still directly involved in building them. In practice that means product strategy and architecture decisions, frontend and backend development, database design, authentication and permissions, APIs, automation, AI integrations, deployment, and the 3D and real-time work when a product needs it.",
      "He writes code on the products he is responsible for. It keeps the decisions honest — it is harder to argue for a complicated approach when you are the one who has to maintain it.",
    ],
    publishedProducts: 3,
    disciplines: [
      "Product strategy",
      "Software architecture",
      "Frontend development",
      "Backend development",
      "Databases",
      "Authentication & permissions",
      "APIs",
      "Automation",
      "AI integrations",
      "Deployment",
      "3D & interactive",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Firebase",
      "APIs",
      "AI integrations",
      "Unity",
      "C#",
      "Photon",
      "Real-time multiplayer",
      "Git",
      "Jenkins",
      "PWA & web",
    ],
    domains: [
      "Business management platforms",
      "Internal tools",
      "Automation systems",
      "Financial & tax applications",
      "3D interactive products",
      "Real-time multiplayer software",
    ],
  },

  team: {
    kicker: "Structure",
    title: "A small team by design",
    paragraphs: [
      "Rakn Labs is intentionally small. It allows ideas to move quickly from a conversation to a working product, while keeping the people building the software close to the problems it is meant to solve.",
      "This is not a claim that small teams are better. Larger teams build things a small one simply cannot, and plenty of problems require that scale. But at this size there is no translation layer between deciding something and shipping it, and nobody is more than one step away from the person who will use the result.",
      "The trade-off is accepted on purpose: fewer projects at once, and more attention on each one.",
    ],
  },

  closing: {
    kicker: "What's next",
    title: "Still building.",
    paragraph:
      "Adrian continues to work directly on Rakn Labs products, learning from every release and treating each project as another opportunity to make software a little clearer, faster and more useful.",
    primaryCta: { label: "Explore Rakn Labs", href: "/" },
    secondaryCta: { label: "View our products", href: "/#games" },
  },
};

export type Founder = typeof founder;
