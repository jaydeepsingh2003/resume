import { useState } from "react";

const data = {
  sections: [
    {
      id: "intro",
      label: "Self Introduction",
      icon: "👤",
      color: "#6366f1",
      questions: [
        {
          q: "Tell me about yourself.",
          a: `I'm Jaydeep Singh Galhotra, a final-year Computer Science student at Tontadarya College of Engineering, VTU batch of 2026, maintaining a CGPA of 8.8.

I've completed two internships — at Infotact Solutions in Bangalore where I built frontend and backend modules and deployed production fixes, and currently at Kodnest where I work as a Python Full Stack Development Intern, debugging REST APIs, optimizing database queries, and writing unit/integration tests.

On the project side, I built CampusSphere — a full-fledged college ERP using Next.js and Firebase that improved admin efficiency by 80%, and MoodFlix — a personalized movie recommendation app with a real-time social feed.

I'm strong in backend development, REST APIs, and DSA, and I'm actively expanding into AI/ML integration — which I believe is the future of every product.`,
          tip: "⏱️ Keep this under 90 seconds. Smile, make eye contact, speak confidently."
        },
        {
          q: "How would you describe yourself in 3 words?",
          a: `Practical, Persistent, and Problem-solver.

Practical — I don't just learn theory; I build real things. Both my projects and internships show that.
Persistent — I've maintained 8.8 CGPA while handling two internships simultaneously.
Problem-solver — In my internships, I was trusted to do root cause analysis on production bugs, not just implement features.`,
          tip: "💡 Back up each word with a real example from your resume."
        }
      ]
    },
    {
      id: "internship",
      label: "Internship Questions",
      icon: "💼",
      color: "#10b981",
      questions: [
        {
          q: "Walk me through your current internship at Kodnest.",
          a: `At Kodnest I work as a Python Full Stack Development Intern remotely. My work is divided into three areas:

1. Debugging REST APIs — I analyze server logs to trace where requests are failing, identify the root cause, and fix them. This taught me how production systems behave differently from dev environments.

2. Performance Optimization — I've worked on database query optimization where slow queries were causing high response times. I used techniques like adding proper indexes, rewriting inefficient joins, and avoiding N+1 query problems.

3. Testing — I write unit and integration tests to make sure features work correctly and don't break existing functionality when new code is deployed.

The most valuable thing I've learned here is that debugging and testing are just as important as writing new code.`,
          tip: "📌 Mention specific techniques — 'N+1 queries', 'indexes', 'integration tests'. It shows depth."
        },
        {
          q: "What did you do at Infotact Solutions?",
          a: `At Infotact Solutions in Bangalore I worked on full-stack modules for user-facing applications. My key contributions were:

1. Building frontend and backend modules — I implemented features end to end, which gave me exposure to how the two layers communicate.

2. Diagnosing data integrity issues — I traced end-to-end request flows to find where data was being corrupted or lost. This involved checking the API layer, service layer, and database together — not just looking at one piece in isolation.

3. Deploying production fixes — I contributed to stable release cycles by helping push tested fixes to production, which taught me the discipline and care required before touching live systems.`,
          tip: "🎯 Emphasize 'end-to-end tracing' — interviewers love candidates who think in systems, not silos."
        },
        {
          q: "How do you handle a production bug you've never seen before?",
          a: `My approach is structured:

Step 1 — Reproduce it. I try to understand exactly what input or condition triggers the bug. If I can reproduce it consistently, it's already 50% solved.

Step 2 — Read the logs. I check server logs and error traces to find where the failure actually happened, not just where it was reported.

Step 3 — Isolate the layer. Is it the API, the database query, the service logic, or the frontend? I've traced end-to-end request flows at Infotact to pinpoint this.

Step 4 — Fix with minimum blast radius. I change only what's needed, then write a test that would have caught this bug, so it never comes back.

Step 5 — Document it. I add a short comment or note explaining what was happening, so the next developer isn't lost.`,
          tip: "✅ This is a situational question. Answer in steps — it shows you think in a process, not just instincts."
        }
      ]
    },
    {
      id: "projects",
      label: "Project Deep Dive",
      icon: "🚀",
      color: "#f59e0b",
      questions: [
        {
          q: "Tell me about CampusSphere in detail.",
          a: `CampusSphere is a full-stack College ERP System I built using Next.js and Firebase. Here's the breakdown:

Problem: College admin processes — admissions, attendance, scheduling — were manual and inefficient.

Solution I built:
• Role-based access with 3 user roles: Admin, Faculty, and Student — each seeing only what they're authorized to.
• Secured using Firebase custom claims and Firestore security rules to prevent unauthorized data access in production.
• Automated admissions, attendance tracking, and scheduling workflows — this cut processing time by ~60%.
• Used Firebase Cloud Functions to handle backend logic that scales with concurrent users without managing a server.

Results: Admin efficiency improved by ~80%.

The biggest technical challenge was designing Firestore security rules that were granular enough to restrict roles but flexible enough not to break features. I had to carefully test every permission matrix.`,
          tip: "📊 Always mention the impact numbers — 80% efficiency, 60% time reduction. That's what managers remember."
        },
        {
          q: "Tell me about MoodFlix.",
          a: `MoodFlix is a personalized movie recommendation app built with React and Firebase.

Core idea: Recommend movies based on what mood you're in right now — not just your watch history.

What I built:
• Mood-based recommendation engine — users select their current mood and the system surfaces movies ranked by mood signals and engagement metrics like ratings and watch time.
• Real-time social feed — users can follow each other and see what others are watching. I modeled this as a follow-graph in Firestore and used serverless aggregation functions to generate feed updates efficiently.
• Firestore data models designed to handle simulated high-volume interactions — meaning the schema was built to scale, not just work for 10 users.

The interesting challenge was the ranking logic — I had to weight mood relevance, engagement data, and recency together into a single score, which required careful experimentation with the formula.`,
          tip: "💡 Mention the 'follow-graph' term — it shows you think about data modeling, not just UI."
        },
        {
          q: "What is the most challenging technical problem you faced in a project?",
          a: `In CampusSphere, the hardest challenge was designing Firebase security rules for three user roles.

The problem: Firestore security rules run server-side and don't allow traditional if-else programming. You have to write declarative rules that check conditions without any procedural logic.

For example, a Faculty member should be able to read attendance records for their own class but not edit them. An Admin can edit everything. A Student can only read their own record.

I had to map out every possible read/write scenario in a permission matrix first, then translate each condition into Firestore rule syntax. I also had to test each role in isolation to make sure no rule was accidentally too permissive or too restrictive.

This taught me that security is not an afterthought — it's an architectural decision you make upfront.`,
          tip: "🔐 Showing you thought about security proactively is a huge green flag for any employer."
        },
        {
          q: "Why Firebase over a traditional backend like Node.js + PostgreSQL?",
          a: `Firebase made sense for both projects for specific reasons:

For CampusSphere — I was building it solo within a limited timeframe. Firebase gave me auth, real-time database, cloud functions, and hosting in one platform, so I could focus on the features rather than server setup and DevOps.

For MoodFlix — The real-time social feed required instant updates without polling. Firestore's real-time listeners were the perfect fit for that use case.

That said, I understand the trade-offs: Firebase is great for rapid development and real-time features, but for complex relational queries, heavy business logic, or cost optimization at scale, a traditional backend with PostgreSQL or MySQL is more appropriate. That's exactly what I'm building experience with now at Kodnest — Python backend with SQL databases.`,
          tip: "🧠 Never defend a technology blindly. Knowing the trade-offs shows maturity."
        }
      ]
    },
    {
      id: "technical",
      label: "Technical Skills",
      icon: "⚙️",
      color: "#8b5cf6",
      questions: [
        {
          q: "What is REST API and how have you worked with it?",
          a: `REST stands for Representational State Transfer. It's an architectural style for building web APIs where:
• Resources are identified by URLs (e.g., /api/jobs, /api/users/123)
• HTTP methods define the action — GET to read, POST to create, PUT/PATCH to update, DELETE to remove
• Responses are typically in JSON format
• It's stateless — each request contains all the information needed, no server-side session

In my internships I've worked with REST APIs both as a consumer and a builder. At Kodnest, I debug REST APIs by analyzing request/response logs — I look at status codes, request payloads, and response bodies to find where something is going wrong. I've resolved issues like incorrect HTTP status codes being returned, missing fields in responses, and authorization headers not being validated properly.`,
          tip: "📡 If they ask for a specific example, describe the HTTP status code debugging scenario — it's very concrete."
        },
        {
          q: "Explain OOP concepts with an example.",
          a: `OOP has 4 pillars:

1. Encapsulation — Bundling data and the methods that operate on it inside a class, hiding internal details. Example: A BankAccount class with a private balance variable — you can only access it via deposit() and withdraw() methods, not directly.

2. Inheritance — A child class inherits properties and methods from a parent class. Example: Vehicle is a parent class; Car and Bike are child classes that inherit speed and start() but add their own features.

3. Polymorphism — Same method name, different behavior depending on the object. Example: Both Cat and Dog have a speak() method but Cat returns 'Meow' and Dog returns 'Bark'.

4. Abstraction — Hiding complex implementation and showing only what's necessary. Example: You use Firebase's auth.signIn() without knowing the OAuth flow happening underneath.

In my projects I used OOP principles in Python (Kodnest) and JavaScript/TypeScript classes in Next.js (CampusSphere).`,
          tip: "🎯 Always connect OOP concepts back to your actual work — it makes you stand out."
        },
        {
          q: "What is the difference between SQL and NoSQL? When would you use each?",
          a: `SQL (Relational) databases like MySQL store data in structured tables with fixed schemas and use JOIN operations for relationships. They're ACID compliant — great for transactions and data consistency. I use MySQL for structured data like student records, job applications, and financial transactions where relationships matter.

NoSQL databases like MongoDB and Firebase Firestore store data as documents (JSON-like), are schema-flexible, and scale horizontally. They're great for unstructured or variable data, real-time applications, and rapid development.

When to use what:
• SQL → Banking, ERP systems, anything with complex relationships and transactions (like the academic records in CampusSphere conceptually)
• NoSQL → Social feeds, real-time apps, user preferences, flexible product catalogs (like MoodFlix's social feed and movie data)

In MoodFlix and CampusSphere I used Firestore because of the real-time capabilities and serverless scaling — but I'm now working with SQL at Kodnest for structured backend data.`,
          tip: "💬 Mentioning both your NoSQL projects and current SQL work at Kodnest shows a well-rounded profile."
        },
        {
          q: "What is Git and how do you use it in your projects?",
          a: `Git is a distributed version control system that tracks changes in code over time. It lets multiple developers work on the same codebase without conflicts.

My workflow:
• I use feature branches — every new feature or fix gets its own branch, not directly on main.
• I write meaningful commit messages — not just 'fixed bug' but 'fix: resolve null pointer in attendance API when studentId is missing'.
• I use pull requests to review code before merging — even on solo projects I do this to maintain a clean main branch.
• I use .gitignore to keep sensitive files like API keys and environment variables out of the repository.

I've used GitHub for all my projects and internships, and I'm comfortable with merge conflicts, rebasing, and git log analysis.`,
          tip: "🔑 Mentioning .gitignore for API keys shows security awareness — a bonus point."
        },
        {
          q: "What are Data Structures you use most often and why?",
          a: `The ones I use most practically:

Arrays/Lists — For ordered collections. Used in MoodFlix for storing ranked movie lists and feed items.

HashMaps/Dictionaries — For O(1) lookup. I use these constantly in Python when processing job data — like grouping jobs by company or skill.

Queues — For job notification processing — first in, first out makes sense for notification delivery order.

Trees (specifically tries) — Useful for autocomplete features. I studied this deeply through my Infosys DSA certification.

Graphs — In MoodFlix's follow-graph — users are nodes, follow relationships are edges. I modeled this in Firestore and used it to generate the social feed.

I completed structured DSA training through Infosys Springboard which gave me a solid foundation in time/space complexity, which I apply when choosing data structures in my code.`,
          tip: "🌳 Mentioning the follow-graph as a graph data structure application is very impressive — use it!"
        }
      ]
    },
    {
      id: "ai",
      label: "AI/ML Questions",
      icon: "🤖",
      color: "#ec4899",
      questions: [
        {
          q: "What is an LLM and how would you integrate it into an application?",
          a: `An LLM (Large Language Model) is a deep learning model trained on massive text data that can understand and generate human-like text. It uses transformer architecture — specifically the attention mechanism — to predict the most relevant next tokens given a context.

Examples: GPT-4, Claude, LLaMA, Mistral.

How I'd integrate it:
Step 1 — Choose a provider. For production I'd use OpenAI API or Hugging Face Inference API. For free/open-source, I'd run a model via Hugging Face locally or use their free tier.

Step 2 — Backend integration. In Python/FastAPI, I'd call the API endpoint with a structured prompt:
  • System prompt — defines the AI's behavior
  • User message — the actual input
  • Get JSON response back, parse the 'content' field

Step 3 — Use it in the app. For example, in an AI Resume Builder, I'd pass the job description + user's experience and prompt: 'Generate a tailored resume summary for this job role.'

Step 4 — Handle errors. LLM APIs can timeout or return unexpected formats — I always wrap in try/catch and validate the output before showing it to the user.`,
          tip: "🔥 Mentioning system prompts vs user messages shows you actually understand how LLM APIs work."
        },
        {
          q: "What is RAG — Retrieval Augmented Generation? Explain it simply.",
          a: `RAG solves a key problem with LLMs — they only know what they were trained on and don't know your specific data.

Simple analogy: A closed-book exam vs open-book exam. A plain LLM is closed-book — limited to training knowledge. RAG gives it the open book — your own data.

How RAG works in 4 steps:
1. Embed — Convert your documents (job listings, resumes, notes) into vector embeddings using an embedding model. Vectors are numerical representations that capture meaning.

2. Store — Store these vectors in a vector database like FAISS, ChromaDB, or Pinecone.

3. Retrieve — When a user asks a question, convert the question to a vector too, then find the most similar documents using cosine similarity.

4. Generate — Inject those retrieved documents into the LLM prompt as context. The LLM now answers from your specific data.

Real example: In a Job Notification Tracker, user asks 'Any Python jobs posted this week?' RAG retrieves matching job entries from your database and the LLM formats a clean answer — instead of the LLM making up jobs that don't exist.`,
          tip: "📚 The 'hallucination prevention' angle is key — RAG exists to make LLMs factually grounded."
        },
        {
          q: "What is a Vector Database? Why is it needed?",
          a: `A vector database stores data as high-dimensional numerical vectors generated by embedding models.

Why regular databases aren't enough: If you search for 'backend developer jobs' in MySQL, it only matches those exact words. It won't return 'server-side engineer' or 'API developer' roles even though they mean the same thing.

Vector databases search by semantic meaning — the vectors for 'backend developer' and 'server-side engineer' will be geometrically close in vector space, so both come up.

How similarity is measured: Cosine similarity — it measures the angle between two vectors. Vectors pointing in the same direction (similar meaning) have high cosine similarity.

Popular options:
• FAISS — Open source, by Facebook. Best for local/in-memory use. Great for prototyping.
• ChromaDB — Easy Python integration, persistent storage, great for RAG projects.
• Pinecone — Managed cloud service, production-ready.

In my AI Resume Builder concept, I'd use ChromaDB to store job description embeddings and retrieve the most relevant ones when tailoring a resume.`,
          tip: "📐 The 'cosine similarity' term will impress any technical interviewer — it's the right jargon."
        },
        {
          q: "What is Hugging Face and how have you used it?",
          a: `Hugging Face is the largest open-source AI model hub — think of it as the GitHub for AI models. It hosts thousands of pre-trained models for text generation, classification, translation, image generation, and more.

How I use it:
1. Inference API — I can call any hosted model via a simple REST API call from my Python backend without setting up any GPU infrastructure. I send a POST request with my input text and get the model's output as JSON.

2. Transformers library — In Python, I can load models locally using:
   from transformers import pipeline
   classifier = pipeline('sentiment-analysis')
   result = classifier('This job posting looks great!')

3. Sentence Transformers — I use this for generating text embeddings for RAG pipelines. The 'all-MiniLM-L6-v2' model converts text to 384-dimensional vectors efficiently.

In my internship projects, Hugging Face is how I access AI capabilities without building models from scratch.`,
          tip: "🤗 Name-dropping 'all-MiniLM-L6-v2' shows you've actually worked with embeddings, not just read about them."
        },
        {
          q: "How would you add AI to your Job Notification Tracker?",
          a: `I'd add AI in two meaningful layers:

Layer 1 — Smart Job Matching (Semantic Search):
Instead of keyword-based filtering, embed each job posting using Sentence Transformers and store in ChromaDB. Also embed the user's profile/skills. When new jobs come in, automatically rank them by cosine similarity to the user's profile — personalized matching without the user setting filters manually.

Layer 2 — Natural Language Query Interface (RAG):
Let users ask questions like 'Show me remote Python jobs above 8 LPA posted this week' instead of clicking filters. 
• Retrieve matching jobs from ChromaDB
• Inject into LLM prompt: 'Here are the job listings: [data]. Answer: [user's question]'
• LLM returns a formatted, conversational response

Layer 3 — Resume Fit Score:
When a user wants to apply for a job, compare their resume embedding vs the job description embedding and return a similarity score with suggestions on what skills to highlight.

Tech stack: FastAPI + ChromaDB + Hugging Face Inference API + React frontend.`,
          tip: "🏆 This answer shows you can architect an AI feature end-to-end — not just define buzzwords."
        }
      ]
    },
    {
      id: "behavioral",
      label: "Behavioral Questions",
      icon: "🧠",
      color: "#14b8a6",
      questions: [
        {
          q: "What is your greatest strength?",
          a: `My greatest strength is systems thinking — I don't just write code, I think about how all the pieces fit together.

For example, in CampusSphere I didn't just build individual features. I first designed the Firestore data schema, then the security rules, then the Cloud Functions — in the right order — because changing the schema later would have broken everything built on top of it.

This thinking also helps me in debugging. At Kodnest, when I analyze a production issue, I look at the entire request flow — API → service layer → database — not just where the error was thrown.

I combine this with a strong DSA foundation, which helps me write solutions that aren't just correct but also efficient.`,
          tip: "💪 'Systems thinking' is a senior-level concept. Using it as a fresher immediately elevates you."
        },
        {
          q: "What is your biggest weakness?",
          a: `I tend to spend too much time independently trying to solve a problem before asking for help. I want to fully understand an issue myself, which is usually a strength — but it can cost time when a 5-minute conversation with a senior would have unblocked me instantly.

I've been actively working on this. I now set a personal rule: if I'm stuck for more than 40 minutes without meaningful progress, I document exactly what I've tried and what I'm stuck on, then ask. This way I still build problem-solving skills but don't waste team time — or my own time.

It's actually made me a better asker too — I come to people with structured questions, not just 'it's not working'.`,
          tip: "✅ Show the weakness AND the fix. Never leave a weakness hanging without a growth action."
        },
        {
          q: "Tell me about a time you worked in a team.",
          a: `At the ArtPark CodeForge Hackathon at IISc Bangalore, I was part of Team Fortune Hackers.

In a hackathon, time pressure means you can't afford miscommunication. We divided responsibilities immediately — I took ownership of the backend and API layer while teammates handled the frontend and presentation.

The challenge was integrating our pieces at the end — APIs my backend exposed had to match exactly what the frontend expected. We solved this early by agreeing on a shared API contract before writing any code, which saved us hours of debugging at integration time.

We made it to the Top 50 in Hack Karnataka as well, which validated that our team collaboration approach worked.`,
          tip: "🤝 The 'API contract before coding' story shows professional team practices — very impressive for a student."
        },
        {
          q: "Why should we hire you?",
          a: `Three reasons:

First, I'm production-ready. Most freshers have only done tutorials. I've debugged live REST APIs, optimized database queries causing actual performance issues, and deployed production fixes. I understand what it means to write code that runs in the real world.

Second, I bring full-stack depth. I can work across React frontend, Python/Node backend, SQL/NoSQL databases, and Firebase cloud infrastructure. I won't be blocked waiting for another team member for a different layer.

Third, I'm AI-aware. I understand how to integrate LLMs and RAG pipelines into applications — not just as a buzzword but architecturally. As AI becomes part of every product, having a developer who understands both the software and AI layer is increasingly valuable.

I'm a quick learner, I document my work, I write tests, and I take ownership. Those habits don't need to be taught.`,
          tip: "🎯 Three structured reasons beats a vague 'I'm passionate and hardworking' every time."
        },
        {
          q: "Where do you see yourself in 3 years?",
          a: `In 3 years I want to be a backend-focused software engineer with deep expertise in scalable API design and AI-powered application development.

Specifically, I want to be at a stage where I'm making architectural decisions — choosing the right database for a use case, designing the API contract, deciding where to integrate AI and where not to — rather than just implementing what's spec'd out.

I also want to contribute to open source and build at least one product that real users depend on. I've already started with CampusSphere and MoodFlix — in 3 years I want projects at a much larger scale.

The role here aligns with that path because [mention specific thing about the company/role — their tech stack, their domain, growth opportunity].`,
          tip: "🚀 Showing ambition with a concrete plan always lands better than 'I want to grow and learn'."
        },
        {
          q: "Why this company / why this role?",
          a: `[Customize this based on the actual company — here's the framework:]

I'm specifically interested in [Company] because of [specific product / tech stack / domain they work in]. 

My background in [REST APIs / Python full stack / Firebase] directly aligns with what your engineering team works on, and I want to be in an environment where I can contribute from day one — not just spend months on-boarding.

Beyond the technical fit, I want to work somewhere where code quality, system design, and performance are taken seriously — which is clear from [mention something about their engineering culture, blog post, or product quality].

This role in particular excites me because [specific responsibility in the JD] is exactly where I want to build depth.`,
          tip: "📝 Research the company for 15 minutes before the interview. Specific > generic every time."
        }
      ]
    },
    {
      id: "certifications",
      label: "Certificates & Achievements",
      icon: "🏆",
      color: "#f97316",
      questions: [
        {
          q: "Tell me about your NVIDIA AI Infrastructure certificate.",
          a: `The NVIDIA AI Infrastructure & Operations course on Coursera covered three main areas:

1. GPU Computing — How GPUs differ from CPUs for AI workloads. CPUs have a few powerful cores optimized for sequential tasks; GPUs have thousands of smaller cores built for massively parallel operations — which is exactly what matrix multiplications in neural networks require.

2. AI Deployment Pipelines — How to take a trained model and serve it in production, including model serialization (saving models), containerization with Docker, and API wrapping using frameworks like FastAPI or TorchServe.

3. Scalable Model Operations — Concepts like model batching (processing multiple requests together for efficiency), load balancing inference endpoints, and monitoring model performance in production.

This gave me an understanding of the infrastructure layer beneath the AI models I integrate — so I'm not just a user of APIs but someone who understands what's running underneath.`,
          tip: "🖥️ The GPU parallel cores explanation shows depth — most freshers just say 'I completed an NVIDIA course'."
        },
        {
          q: "Tell me about your DSA certification from Infosys Springboard.",
          a: `The Infosys Springboard DSA course was a structured program covering:

1. Core data structures — Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Hash Tables
2. Algorithm design — Sorting algorithms (QuickSort, MergeSort), searching, dynamic programming, and greedy approaches
3. Complexity analysis — Time and space complexity using Big O notation — understanding why O(n log n) sorting beats O(n²) at scale

The most valuable outcome was building the habit of analyzing a problem's complexity before writing code. I now instinctively ask 'what's the input size?' and 'what's the worst-case scenario?' before choosing a data structure.

I applied this directly in MoodFlix — when designing the ranking system, I chose a data structure that gave me O(n log n) sorting performance rather than brute-forcing with O(n²).`,
          tip: "📊 Connecting DSA certification to actual project decisions shows it wasn't just a checkbox."
        },
        {
          q: "You were a Top 50 finalist at Hack Karnataka. What did you build?",
          a: `Hack Karnataka is a state-level hackathon with strong competition. Being Top 50 was a significant achievement.

[Frame this around what your team built — use this structure:]
We built [product name/concept] that solved [specific problem]. My role was [your specific contribution — backend, API, database design].

The challenge in a hackathon is scope management — you have limited hours and the temptation is to build everything. We disciplined ourselves to build one core feature really well rather than five features badly.

The demo went well because we focused on a live, working product rather than slides — judges can always tell the difference between a prototype that runs and one that's a UI mockup.

It reinforced for me that constraints — time pressure, limited resources — actually produce better decisions, not worse ones.`,
          tip: "⚡ If you remember specifics of what you built, use them. If not, the framework above works."
        }
      ]
    },
    {
      id: "closing",
      label: "Questions to Ask Them",
      icon: "💬",
      color: "#6366f1",
      questions: [
        {
          q: "What does the first 30–60 days look like in this role?",
          a: `Why ask this: It shows you're thinking practically about contributing, not just about getting the job. It also tells you if there's a structured onboarding or if you'll be thrown in the deep end.

Good follow-up: "Is there a specific project or problem I'd be working on immediately, or would I spend time getting familiar with the codebase first?"`,
          tip: "✅ This is one of the best questions a fresher can ask — it signals maturity and seriousness."
        },
        {
          q: "What does the tech stack look like for the team I'd be joining?",
          a: `Why ask this: You want to know if the work aligns with where you want to grow — Python backend, React frontend, cloud infrastructure, AI integration.

It also shows you care about the actual work, not just the job title.

Good follow-up: "Are there opportunities to work on AI/ML integration features, or is the team focused primarily on core product engineering right now?"`,
          tip: "🔧 Asking about tech stack signals you're a developer who cares about craft, not just employment."
        },
        {
          q: "What does growth look like for engineers in this team?",
          a: `Why ask this: You want to understand if there are clear paths from junior to mid to senior, if there are mentorship structures, and if the company invests in learning.

Good follow-up: "Do engineers get time or budget for courses, certifications, or attending conferences? I'm actively learning AI/ML integration and want to be in an environment that supports that."`,
          tip: "📈 Showing you want to grow — and tying it to specific skills you're building — is a great close."
        }
      ]
    }
  ]
};

export default function InterviewPrep() {
  const [active, setActive] = useState("intro");
  const [openQ, setOpenQ] = useState(null);

  const section = data.sections.find(s => s.id === active);

  return (
    <div className="app-wrapper" style={{ "--section-color": section.color }}>
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --bg-gradient: linear-gradient(135deg, #0f0c29, #1a1a2e, #16213e);
          --header-gradient: linear-gradient(90deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%);
          --accent-color: #6366f1;
          --text-main: #e2e8f0;
          --text-muted: #94a3b8;
          --glass-bg: rgba(30,27,75,0.6);
          --glass-border: rgba(99,102,241,0.2);
        }

        .app-wrapper {
          font-family: 'Georgia', 'Times New Roman', serif;
          background: var(--bg-gradient);
          min-height: 100vh;
          color: var(--text-main);
          padding: 0;
          overflow-x: hidden;
        }

        .header {
          background: var(--header-gradient);
          border-bottom: 1px solid rgba(99,102,241,0.3);
          padding: 28px 32px 20px;
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(20px);
        }

        .header-inner {
          max-width: 900px;
          margin: 0 auto;
        }

        .header-content {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 6px;
        }

        .header-logo {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
          box-shadow: 0 0 20px rgba(99,102,241,0.5);
        }

        .header-title {
          margin: 0;
          fontSize: 22px;
          font-weight: 700;
          color: #f1f5f9;
          letter-spacing: -0.3px;
        }

        .header-subtitle {
          margin: 0;
          font-size: 13px;
          color: var(--text-muted);
          font-family: sans-serif;
          margin-top: 2px;
        }

        .main-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 24px 20px;
          display: flex;
          gap: 24px;
        }

        .sidebar {
          width: 200px;
          flex-shrink: 0;
        }

        .sidebar-inner {
          background: var(--glass-bg);
          border-radius: 16px;
          border: 1px solid var(--glass-border);
          overflow: hidden;
          position: sticky;
          top: 100px;
        }

        .sidebar-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 12px 16px;
          background: transparent;
          border: none;
          border-left: 3px solid transparent;
          color: var(--text-muted);
          cursor: pointer;
          text-align: left;
          font-family: sans-serif;
          font-size: 13px;
          transition: all 0.2s;
        }

        .sidebar-btn.active {
          color: #f1f5f9;
          font-weight: 600;
        }

        .content-area {
          flex: 1;
          min-width: 0;
        }

        .section-header {
          border-radius: 16px;
          padding: 20px 24px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .question-card {
          border-radius: 14px;
          overflow: hidden;
          transition: all 0.3s;
          margin-bottom: 12px;
        }

        .question-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 16px 20px;
          background: transparent;
          border: none;
          color: #f1f5f9;
          cursor: pointer;
          text-align: left;
          gap: 12px;
        }

        .question-number {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          font-family: sans-serif;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .answer-container {
          padding: 0 20px 20px 58px;
        }

        .answer-box {
          background: rgba(0,0,0,0.3);
          border-radius: 12px;
          padding: 18px 20px;
          margin-bottom: 12px;
        }

        .tip-box {
          border-radius: 10px;
          padding: 12px 16px;
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .footer {
          margin-top: 24px;
          background: rgba(30,27,75,0.5);
          border: 1px solid rgba(99,102,241,0.2);
          border-radius: 12px;
          padding: 16px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        @media (max-width: 768px) {
          .header {
            padding: 20px 16px 16px;
          }

          .header-title {
            font-size: 18px;
          }

          .main-container {
            flex-direction: column;
            padding: 16px 12px;
            gap: 16px;
          }

          .sidebar {
            width: 100%;
          }

          .sidebar-inner {
            position: relative;
            top: 0;
            display: flex;
            overflow-x: auto;
            border-radius: 12px;
            scrollbar-width: none;
          }

          .sidebar-inner::-webkit-scrollbar {
            display: none;
          }

          .sidebar-btn {
            flex-shrink: 0;
            width: auto;
            padding: 10px 16px;
            border-left: none;
            border-bottom: 3px solid transparent;
          }

          .sidebar-btn.active {
            border-bottom: 3px solid var(--section-color);
            background: rgba(255,255,255,0.05);
          }

          .answer-container {
            padding: 0 16px 16px 16px;
          }

          .section-header {
            padding: 16px;
          }

          .section-header span {
            font-size: 24px !important;
          }

          .section-header h2 {
            font-size: 18px !important;
          }

          .footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      ` }} />

      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="header-content">
            <div className="header-logo">🎯</div>
            <div>
              <h1 className="header-title">Interview Prep — Jaydeep Singh Galhotra</h1>
              <p className="header-subtitle">
                Complete resume-based Q&A • Click any question to reveal the answer
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="main-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-inner">
            {data.sections.map(s => (
              <button
                key={s.id}
                onClick={() => { setActive(s.id); setOpenQ(null); }}
                className={`sidebar-btn ${active === s.id ? "active" : ""}`}
                style={{
                  background: active === s.id ? `${s.color}22` : "transparent",
                  borderLeftColor: active === s.id ? s.color : "transparent",
                  borderBottomColor: active === s.id && window.innerWidth <= 768 ? s.color : "transparent",
                }}
              >
                <span style={{ fontSize: 16 }}>{s.icon}</span>
                <span style={{ lineHeight: 1.3 }}>{s.label}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="content-area">
          {/* Section Header */}
          <div
            className="section-header"
            style={{
              background: `linear-gradient(135deg, ${section.color}22, ${section.color}11)`,
              border: `1px solid ${section.color}44`,
            }}
          >
            <span style={{ fontSize: 32 }}>{section.icon}</span>
            <div>
              <h2 style={{ margin: 0, fontSize: 20, color: "#f1f5f9", fontWeight: 700 }}>{section.label}</h2>
              <p style={{ margin: 0, fontSize: 13, color: "#94a3b8", fontFamily: "sans-serif", marginTop: 4 }}>
                {section.questions.length} questions • Click each to expand
              </p>
            </div>
          </div>

          {/* Questions */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {section.questions.map((item, i) => (
              <div
                key={i}
                className="question-card"
                style={{
                  background: openQ === i
                    ? `linear-gradient(135deg, ${section.color}18, rgba(30,27,75,0.8))`
                    : "rgba(30,27,75,0.5)",
                  border: `1px solid ${openQ === i ? section.color + "55" : "rgba(99,102,241,0.15)"}`,
                }}
              >
                {/* Question Row */}
                <button
                  onClick={() => setOpenQ(openQ === i ? null : i)}
                  className="question-btn"
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12, flex: 1 }}>
                    <div
                      className="question-number"
                      style={{ background: section.color }}
                    >
                      {i + 1}
                    </div>
                    <span style={{
                      fontSize: 15, fontWeight: 600, lineHeight: 1.5,
                      fontFamily: "'Georgia', serif"
                    }}>{item.q}</span>
                  </div>
                  <span style={{
                    color: section.color, fontSize: 18, flexShrink: 0,
                    transform: openQ === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s", fontFamily: "sans-serif"
                  }}>▾</span>
                </button>

                {/* Answer */}
                {openQ === i && (
                  <div className="answer-container">
                    {/* Answer Text */}
                    <div
                      className="answer-box"
                      style={{ borderLeft: `3px solid ${section.color}` }}
                    >
                      {item.a.split("\n").map((line, li) => {
                        if (!line.trim()) return <div key={li} style={{ height: 8 }} />;
                        const isBullet = line.trim().startsWith("•") || line.trim().startsWith("Step") || /^\d+\./.test(line.trim());
                        return (
                          <p key={li} style={{
                            margin: "0 0 6px",
                            fontSize: 14,
                            lineHeight: 1.7,
                            color: isBullet ? "#cbd5e1" : "#e2e8f0",
                            fontFamily: "sans-serif",
                            fontWeight: line.includes(":") && !isBullet ? 600 : 400,
                            paddingLeft: isBullet ? 8 : 0
                          }}>{line}</p>
                        );
                      })}
                    </div>

                    {/* Tip */}
                    <div
                      className="tip-box"
                      style={{
                        background: `${section.color}18`,
                        border: `1px solid ${section.color}33`,
                      }}
                    >
                      <span style={{ fontSize: 14, flexShrink: 0, marginTop: 1 }}>
                        {item.tip.split(" ")[0]}
                      </span>
                      <p style={{
                        margin: 0, fontSize: 13, color: "#94a3b8",
                        fontFamily: "sans-serif", lineHeight: 1.6,
                        fontStyle: "italic"
                      }}>
                        {item.tip.substring(item.tip.indexOf(" ") + 1)}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Progress Footer */}
          <div className="footer">
            <span style={{ fontSize: 13, color: "#64748b", fontFamily: "sans-serif" }}>
              📋 {data.sections.reduce((acc, s) => acc + s.questions.length, 0)} questions across {data.sections.length} categories
            </span>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {data.sections.map(s => (
                <button
                  key={s.id}
                  onClick={() => { setActive(s.id); setOpenQ(null); }}
                  style={{
                    padding: "5px 12px", borderRadius: 20,
                    background: active === s.id ? s.color : "transparent",
                    border: `1px solid ${s.color}55`,
                    color: active === s.id ? "#fff" : s.color,
                    fontSize: 11, cursor: "pointer", fontFamily: "sans-serif",
                    fontWeight: 600
                  }}>
                  {s.icon} {s.label.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

