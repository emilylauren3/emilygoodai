export type PromptStep = {
  n: string;
  title: string;
  why: string;
  prompt: string;
};

export const promptPackTitle = "The Website Planning Prompt Pack";

export const promptPackIntro =
  "Seven copy-paste prompts that take you from a blank page to a planned website. Work them top to bottom. Replace everything in [brackets] with your own words, then paste each answer into the next prompt. Use them with ChatGPT, Claude, Gemini, or any AI you like.";

export const promptSteps: PromptStep[] = [
  {
    n: "01",
    title: "Name your offer in one line",
    why: "If you cannot say it in one line, your website cannot say it either.",
    prompt:
      "Act as a positioning coach. Here is what my business does, in my own words: [paste 2-3 sentences]. Write 5 versions of my offer as a single sentence. Each one must name who it is for and the outcome they get. Under 20 words each. Plain language. No hype words.",
  },
  {
    n: "02",
    title: "Meet your ideal visitor",
    why: "You are not writing for everyone. You are writing for one person.",
    prompt:
      "Act as a customer researcher. My offer is: [paste your one-liner]. Describe my ideal website visitor: what they are struggling with, what they have already tried, what would make them trust a new business, and the exact words they would type into Google. Keep it under 200 words.",
  },
  {
    n: "03",
    title: "Map your pages",
    why: "Most small business websites need five pages, not fifteen.",
    prompt:
      "Act as a website strategist. My offer is: [paste your one-liner]. My ideal visitor: [paste the visitor profile]. List the pages my website needs. For each page, write one sentence on what it must do for the visitor. Maximum 5 pages.",
  },
  {
    n: "04",
    title: "Outline your homepage",
    why: "Your homepage has one job: make the right visitor keep reading.",
    prompt:
      "Act as a conversion copywriter. My offer: [paste your one-liner]. My visitor: [paste the profile]. Outline my homepage section by section. For each section give me a headline, a subheadline, and 2 to 3 bullet points. Plain language. Never use words like revolutionary, cutting-edge, or unleash.",
  },
  {
    n: "05",
    title: "Draft your services",
    why: "People buy outcomes, not service names.",
    prompt:
      "Act as a copywriter. My offer is: [paste your one-liner]. My services are: [list them]. For each service write three things: who it is for, what the client walks away with, and one sentence on why I am the right person to deliver it. Match the tone of my one-liner. Under 60 words per service.",
  },
  {
    n: "06",
    title: "Tell your story",
    why: "People hire people. Your about section is a trust shortcut.",
    prompt:
      "Act as a story editor. Here is my background in my own words: [2-3 sentences about you]. Turn it into an about section under 120 words that connects my story to why I do this work. First person. Warm. No resume language.",
  },
  {
    n: "07",
    title: "Make your launch checklist",
    why: "A planned site still deserves a calm launch.",
    prompt:
      "Act as a launch manager. Here is my website plan: [paste your page map, homepage outline, services draft, and about section]. Give me a launch checklist in order: content I still need to finish, technical setup including domain and hosting, and what to test before I share the link. Explain how to connect a custom domain on Vercel in plain steps.",
  },
];
