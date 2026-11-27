// Content for the inner pages: services, about, case studies and guides, in Portuguese (pt) and English (en).
//
// Anything written as [TODO: ...] is a fact still to be filled in.
// A page that still contains a TODO is a draft: it is built so you can preview it, but it is
// noindex, left out of the sitemap, llms.txt and every menu or link. Remove its last TODO and it goes live.

export interface Section {
  h2: string;
  p?: string[];
  list?: string[];
  ordered?: boolean;
  /** A link to another site, opened in a new tab. */
  link?: { label: string; href: string };
  /** A link to another page of this site (by its id), or to the contact form. The link text is that page's heading. */
  more?: PageId | 'contact';
}

export interface Copy {
  eyebrow: string;
  title: string; // <title> without the brand
  description: string;
  h1: string;
  lede: string;
  sections: Section[];
  faq?: { q: string; a: string }[];
}

export type PageKind = 'service' | 'about' | 'cases' | 'guide';

export const PAGE_IDS = [
  'technical-interviews',
  'mobile-apps',
  'custom-software',
  'technology-consulting',
  'about',
  'case-studies',
  'guide-app-cost',
  'guide-custom-vs-ready-made',
] as const;
export type PageId = (typeof PAGE_IDS)[number];

export interface PageDef {
  kind: PageKind;
  slug: { pt: string; en: string };
  related: PageId[];
  published: string; // YYYY-MM-DD, the day the page first went live. Never changes.
  updated: string; // YYYY-MM-DD, the last real change to the text. Shown on guides, and used in the sitemap and the structured data.
  pt: Copy;
  en: Copy;
}

export const PAGES: Record<PageId, PageDef> = {
  'technical-interviews': {
    kind: 'service',
    slug: { pt: 'entrevistas-tecnicas', en: 'technical-interviews' },
    related: ['technology-consulting', 'about'],
    published: '2026-11-25',
    updated: '2026-11-27',
    pt: {
      eyebrow: 'Recrutamento técnico',
      title: 'Entrevistas Técnicas para Contratar Programadores',
      description:
        'Entrevistas técnicas estruturadas para avaliar candidatos a programador antes da contratação, com grelhas de avaliação claras e mentoria para quem está a crescer na equipa.',
      h1: 'Entrevistas técnicas para contratar programadores com confiança',
      lede: 'Validamos as competências técnicas dos seus candidatos com entrevistas estruturadas e critérios definidos à partida, para que a decisão de contratar não dependa da intuição.',
      sections: [
        {
          h2: 'Quando faz sentido pedir uma entrevista técnica externa',
          p: [
            'Contratar um programador é uma decisão cara e difícil de reverter. Sem alguém com experiência técnica do lado de quem contrata, é difícil distinguir um currículo bem escrito de competências reais.',
          ],
          list: [
            'Não tem ninguém técnico na empresa para avaliar candidatos.',
            'A equipa técnica não tem tempo para conduzir entrevistas.',
            'Quer uma segunda opinião independente antes de uma contratação importante.',
            'Está a contratar para uma área que a equipa atual não domina.',
          ],
        },
        {
          h2: 'Como funciona',
          ordered: true,
          list: [
            'Alinhamos o perfil: a função, o nível de senioridade e as tecnologias que importam.',
            'Preparamos a grelha de avaliação, com critérios definidos antes da entrevista e iguais para todos os candidatos.',
            'Conduzimos a entrevista técnica: 60 a 90 minutos por vídeo, com um exercício prático ou uma revisão de código.',
            'Em até 48 horas, entregamos um relatório completo sobre as competências técnicas e comportamentais do candidato.',
          ],
        },
        {
          h2: 'O que avaliamos',
          p: ['Cada grelha de avaliação é adaptada à função, mas cobre normalmente:'],
          list: [
            'Fundamentos e resolução de problemas.',
            'Domínio das tecnologias da função, com especial experiência em desenvolvimento mobile (Android e Compose Multiplatform) e web (JavaScript).',
            'Qualidade de código e capacidade de rever o código de outros.',
            'Comunicação e capacidade de explicar decisões técnicas.',
            'Competências comportamentais, como o trabalho em equipa e a forma de lidar com feedback.',
          ],
        },
        {
          h2: 'Mentoria depois da contratação',
          p: [
            'Uma boa contratação é só o início. Também acompanhamos quem está a crescer na equipa, com mentoria individual e revisões de código acompanhadas, para acelerar a integração e criar hábitos técnicos sólidos.',
          ],
        },
      ],
      faq: [
        { q: 'Quanto custa uma entrevista técnica?', a: 'Uma entrevista técnica custa a partir de cerca de 150 € + IVA, com a grelha de avaliação e o relatório incluídos. O valor final depende do número de entrevistas e do perfil a avaliar: entre em contacto e respondemos normalmente em 24–48h úteis.' },
        { q: 'Em quanto tempo recebo a avaliação do candidato?', a: 'O relatório de avaliação é entregue em até 48 horas depois da entrevista.' },
        { q: 'Em que línguas são feitas as entrevistas técnicas?', a: 'As entrevistas técnicas são feitas em português ou em inglês.' },
      ],
    },
    en: {
      eyebrow: 'Technical hiring',
      title: 'Technical Interviews for Hiring Developers',
      description:
        'Structured technical interviews to assess developer candidates before you hire, with clear assessment frameworks and mentoring for people growing in your team.',
      h1: 'Technical interviews to hire developers with confidence',
      lede: 'We validate your candidates’ technical skills with structured interviews and criteria agreed up front, so the decision to hire doesn’t come down to gut feeling.',
      sections: [
        {
          h2: 'When an external technical interview makes sense',
          p: [
            'Hiring a developer is expensive and hard to undo. Without someone technical on the hiring side, it’s hard to tell a well-written CV from real skills.',
          ],
          list: [
            'Nobody in the company is technical enough to assess candidates.',
            'Your technical team doesn’t have time to run interviews.',
            'You want an independent second opinion before an important hire.',
            'You’re hiring for an area your current team doesn’t know well.',
          ],
        },
        {
          h2: 'How it works',
          ordered: true,
          list: [
            'We agree the profile: the role, the seniority and the technologies that matter.',
            'We prepare the assessment framework, with criteria set before the interview and the same for every candidate.',
            'We run the technical interview: 60 to 90 minutes by video, with a practical exercise or a code review.',
            'Within 48 hours, we deliver a full report on the candidate’s technical and behavioural skills.',
          ],
        },
        {
          h2: 'What we assess',
          p: ['Each framework is tailored to the role, but usually covers:'],
          list: [
            'Fundamentals and problem solving.',
            'Command of the role’s technologies, with particular experience in mobile (Android and Compose Multiplatform) and web (JavaScript) development.',
            'Code quality and the ability to review other people’s code.',
            'Communication, and the ability to explain technical decisions.',
            'Behavioural skills, such as teamwork and how the candidate handles feedback.',
          ],
        },
        {
          h2: 'Mentoring after the hire',
          p: [
            'A good hire is only the start. We also support people growing in your team with one-to-one mentoring and guided code reviews, to speed up onboarding and build solid technical habits.',
          ],
        },
      ],
      faq: [
        { q: 'How much does a technical interview cost?', a: 'A technical interview costs from around €150 + VAT, including the assessment framework and the report. The final price depends on the number of interviews and the profile being assessed: get in touch and we usually reply within 1–2 business days.' },
        { q: 'How soon do I get the candidate assessment?', a: 'The assessment report is delivered within 48 hours of the interview.' },
        { q: 'Which languages are the technical interviews held in?', a: 'Technical interviews are held in Portuguese or English.' },
      ],
    },
  },

  'mobile-apps': {
    kind: 'service',
    slug: { pt: 'desenvolvimento-apps-mobile', en: 'mobile-app-development' },
    related: ['custom-software', 'technology-consulting', 'guide-app-cost'],
    published: '2026-11-25',
    updated: '2026-11-27',
    pt: {
      eyebrow: 'Aplicações mobile',
      title: 'Desenvolvimento de Apps Mobile para iOS e Android',
      description:
        'Desenvolvimento de aplicações mobile para iOS e Android, à medida do seu negócio: da definição do produto à publicação nas lojas e à manutenção depois do lançamento.',
      h1: 'Desenvolvimento de aplicações mobile para iOS e Android',
      lede: 'Criamos apps para smartphone e tablet pensadas para quem as usa todos os dias: rápidas, estáveis e fáceis de manter à medida que o negócio cresce.',
      sections: [
        {
          h2: 'Que tipo de apps desenvolvemos',
          p: ['Aplicações para os seus clientes, ferramentas para equipas no terreno e apps que complementam um produto web que já existe. Por exemplo:'],
          list: [
            'Apps de cliente: reservas, encomendas, áreas de cliente e programas de fidelização.',
            'Apps internas: inspeções, registos no terreno e gestão de pedidos.',
            'Apps ligadas aos sistemas que já usa, como ERP, CRM ou APIs próprias.',
          ],
        },
        {
          h2: 'Tecnologias',
          p: [
            'A nossa especialidade é o desenvolvimento Android nativo com Jetpack Compose e o desenvolvimento multiplataforma com Compose Multiplatform, que partilha o código entre Android e iOS.',
            'Escolhemos a tecnologia em função de cada projeto. Quando um projeto pede outra stack, reforçamos a equipa com especialistas.',
          ],
        },
        {
          h2: 'Do primeiro esboço à loja de aplicações',
          ordered: true,
          list: [
            'Conversa inicial: percebemos o contexto, os objetivos e quem vai usar a app.',
            'Abordagem e âmbito: definimos a solução técnica e um plano de execução realista.',
            'Desenvolvimento com entregas faseadas, que pode instalar e testar no seu telemóvel.',
            'Publicação na App Store e no Google Play.',
            'Acompanhamento: continuamos disponíveis para evoluir e manter a app.',
          ],
        },
        {
          h2: 'Antes de escrever código',
          more: 'technology-consulting',
          p: [
            'Se a ideia ainda está a ganhar forma, começar por consultoria tecnológica (requisitos, validação da ideia e roadmap) evita pagar funcionalidades de que ninguém precisa.',
          ],
        },
      ],
      faq: [
        { q: 'Quanto custa desenvolver uma app mobile?', a: 'O desenvolvimento de uma app simples começa em cerca de 5000 € + IVA. O valor sobe com a complexidade, o número de ecrãs, as funcionalidades, as integrações e o design. Cada projeto tem um orçamento próprio, preparado depois de uma primeira conversa.' },
        { q: 'Quanto tempo demora a desenvolver uma app?', a: 'Uma app simples demora normalmente 3 a 5 meses. Pode demorar mais se a app for mais complexa, ou se as respostas e os dados necessários não chegarem a tempo. O prazo fica definido no plano de execução, antes de começar o desenvolvimento, com entregas faseadas que pode testar pelo caminho.' },
        { q: 'O código da app fica a ser meu?', a: 'Quem fica com o código e a propriedade intelectual é acordado na proposta, de acordo com as necessidades de cada cliente.' },
        { q: 'Fazem manutenção depois do lançamento da app?', a: 'Sim. Depois do lançamento continuamos disponíveis para evoluir e manter a app, e para passar conhecimento à sua equipa. Em projetos mais pequenos, a manutenção funciona com uma avença mensal; em projetos maiores, por tempo e materiais.' },
      ],
    },
    en: {
      eyebrow: 'Mobile apps',
      title: 'Mobile App Development for iOS and Android',
      description:
        'Custom mobile app development for iOS and Android: from defining the product to publishing in the app stores and maintaining the app after launch.',
      h1: 'Mobile app development for iOS and Android',
      lede: 'We build phone and tablet apps for the people who use them every day: fast, stable and easy to maintain as your business grows.',
      sections: [
        {
          h2: 'The kinds of apps we build',
          p: ['Apps for your customers, tools for teams in the field, and apps that complement an existing web product. For example:'],
          list: [
            'Customer apps: bookings, orders, account areas and loyalty programmes.',
            'Internal apps: inspections, field records and order management.',
            'Apps connected to the systems you already use, such as an ERP, a CRM or your own APIs.',
          ],
        },
        {
          h2: 'Technologies',
          p: [
            'We specialise in native Android development with Jetpack Compose, and cross-platform development with Compose Multiplatform, which shares code between Android and iOS.',
            'We choose the technology to suit each project. When a project needs a different stack, we bring in specialists.',
          ],
        },
        {
          h2: 'From first sketch to the app stores',
          ordered: true,
          list: [
            'First conversation: we learn your context, your goals and who will use the app.',
            'Approach and scope: we define the technical solution and a realistic delivery plan.',
            'Development in phases, with builds you can install and test on your own phone.',
            'Publishing on the App Store and Google Play.',
            'Ongoing support: we stay available to evolve and maintain the app.',
          ],
        },
        {
          h2: 'Before writing any code',
          more: 'technology-consulting',
          p: [
            'If the idea is still taking shape, starting with technology consulting (requirements, idea validation and a roadmap) saves you paying for features nobody needs.',
          ],
        },
      ],
      faq: [
        { q: 'How much does it cost to build a mobile app?', a: 'Building a simple app starts at around €5,000 + VAT. The price goes up with complexity, the number of screens, features, integrations and design. Every project gets its own quote, prepared after a first conversation.' },
        { q: 'How long does it take to build an app?', a: 'A simple app usually takes 3 to 5 months. It can take longer if the app is more complex, or if answers and the data we need don’t arrive on time. The timeline is set in the delivery plan before development starts, with phased deliveries you can test along the way.' },
        { q: 'Do I own the app’s code?', a: 'Who owns the code and intellectual property is agreed in the proposal, based on what each client needs.' },
        { q: 'Do you maintain the app after launch?', a: 'Yes. After launch we stay available to evolve and maintain the app, and to hand knowledge over to your team. For smaller projects, maintenance runs on a monthly retainer; for bigger projects, on time and materials.' },
      ],
    },
  },

  'custom-software': {
    kind: 'service',
    slug: { pt: 'software-a-medida', en: 'custom-software-development' },
    related: ['mobile-apps', 'technology-consulting', 'guide-custom-vs-ready-made'],
    published: '2026-11-25',
    updated: '2026-11-25',
    pt: {
      eyebrow: 'Software à medida',
      title: 'Software à Medida para Empresas',
      description:
        'Desenvolvimento de software à medida para empresas: aplicações web, desktop e mobile desenhadas para os seus processos, com uma arquitetura pensada para crescer.',
      h1: 'Software à medida para os processos da sua empresa',
      lede: 'Quando as ferramentas prontas a usar já não chegam, desenvolvemos software feito para a forma como a sua empresa trabalha, da ideia à implementação, com rigor técnico e visão de produto.',
      sections: [
        {
          h2: 'Quando faz sentido desenvolver software à medida',
          list: [
            'Os processos da empresa não cabem em nenhuma ferramenta pronta a usar.',
            'Paga várias ferramentas e passa dados de umas para as outras à mão.',
            'O software faz parte do que vende aos seus clientes.',
            'Precisa de ligar sistemas que não comunicam entre si.',
          ],
        },
        {
          h2: 'O que desenvolvemos',
          list: [
            'Aplicações e plataformas web: portais, plataformas e soluções web que crescem com o negócio.',
            'Aplicações desktop: software para computador, de ferramentas internas a produtos para os seus clientes.',
            'Aplicações mobile: apps para smartphone e tablet, pensadas para quem as usa todos os dias.',
            'Integrações e reforço de equipas: ligamos sistemas existentes e reforçamos equipas que já estão a desenvolver.',
          ],
        },
        {
          h2: 'Primeiro a arquitetura certa',
          p: [
            'Software à medida só compensa se continuar fácil de mudar daqui a uns anos. Por isso começamos pela arquitetura e só depois escrevemos código robusto e escalável, alinhado com os objetivos do negócio.',
          ],
        },
        {
          h2: 'Como trabalhamos',
          ordered: true,
          list: [
            'Conversa inicial: percebemos o contexto, os objetivos e os desafios da empresa.',
            'Abordagem e âmbito: definimos a solução técnica, o âmbito e um plano de execução realista.',
            'Entregas faseadas: trabalhamos em proximidade, com entregas que pode ver e testar.',
            'Acompanhamento: continuamos disponíveis para evoluir, manter e passar conhecimento.',
          ],
        },
        {
          h2: 'Tecnologias',
          p: [
            'Não estamos presos a uma tecnologia. A nossa base é o desenvolvimento mobile (Android com Jetpack Compose e Compose Multiplatform) e web (JavaScript e vários frameworks).',
            'Quando um projeto pede outra stack, reforçamos a equipa com especialistas, para que a tecnologia sirva o projeto e não o contrário.',
          ],
        },
      ],
      faq: [
        { q: 'Quanto custa desenvolver software à medida?', a: 'Depende do âmbito: processos a cobrir, plataformas, integrações e design. Cada projeto tem um orçamento próprio, preparado depois de uma primeira conversa. Entre em contacto para pedir uma proposta.' },
        { q: 'Quanto tempo demora um projeto de software à medida?', a: 'Depende do âmbito de cada projeto. O prazo fica definido no plano de execução, antes de começar o desenvolvimento, com entregas faseadas que pode testar pelo caminho.' },
        { q: 'O código do software fica a ser meu?', a: 'Quem fica com o código e a propriedade intelectual é acordado na proposta, de acordo com as necessidades de cada cliente.' },
        { q: 'Podem continuar um projeto começado por outra equipa?', a: 'Sim. Começamos por uma auditoria ao código e à arquitetura existentes, para perceber o estado do projeto antes de propor como continuar.' },
      ],
    },
    en: {
      eyebrow: 'Custom software',
      title: 'Custom Software Development for Businesses',
      description:
        'Custom software development for businesses: web, desktop and mobile apps designed around your processes, with an architecture built to grow.',
      h1: 'Custom software built around how your business works',
      lede: 'When off-the-shelf tools stop being enough, we build software that fits the way your company works, from idea to implementation, with technical rigour and a product mindset.',
      sections: [
        {
          h2: 'When custom software makes sense',
          list: [
            'Your processes don’t fit any off-the-shelf tool.',
            'You pay for several tools and move data between them by hand.',
            'Software is part of what you sell to your customers.',
            'You need to connect systems that don’t talk to each other.',
          ],
        },
        {
          h2: 'What we build',
          list: [
            'Web apps and platforms: portals, platforms and web solutions that grow with your business.',
            'Desktop apps: software for computers, from internal tools to products for your customers.',
            'Mobile apps: phone and tablet apps designed for the people who use them every day.',
            'Integrations and team augmentation: we connect existing systems and reinforce teams already building.',
          ],
        },
        {
          h2: 'The right architecture first',
          p: [
            'Custom software only pays off if it stays easy to change for years. That’s why we start with the architecture, and only then write robust, scalable code aligned with your business goals.',
          ],
        },
        {
          h2: 'How we work',
          ordered: true,
          list: [
            'First conversation: we get to know your context, goals and challenges.',
            'Approach and scope: we define the technical solution, the scope and a realistic delivery plan.',
            'Phased delivery: we work closely with you, with deliveries you can see and test.',
            'Ongoing support: we stay available to evolve, maintain and hand over knowledge.',
          ],
        },
        {
          h2: 'Technologies',
          p: [
            'We’re not tied to one technology. Our core is mobile development (Android with Jetpack Compose and Compose Multiplatform) and web development (JavaScript and a range of frameworks).',
            'When a project needs a different stack, we bring in specialists, so the technology serves the project rather than the other way round.',
          ],
        },
      ],
      faq: [
        { q: 'How much does custom software development cost?', a: 'It depends on scope: the processes to cover, platforms, integrations and design. Every project gets its own quote, prepared after a first conversation. Get in touch to request a proposal.' },
        { q: 'How long does a custom software project take?', a: 'It depends on the scope of each project. The timeline is set in the delivery plan before development starts, with phased deliveries you can test along the way.' },
        { q: 'Do I own the software’s code?', a: 'Who owns the code and intellectual property is agreed in the proposal, based on what each client needs.' },
        { q: 'Can you take over a project another team started?', a: 'Yes. We start with an audit of the existing code and architecture, to understand where the project stands before proposing how to continue.' },
      ],
    },
  },

  'technology-consulting': {
    kind: 'service',
    slug: { pt: 'consultoria-tecnologica', en: 'technology-consulting' },
    related: ['custom-software', 'mobile-apps', 'technical-interviews'],
    published: '2026-11-25',
    updated: '2026-11-27',
    pt: {
      eyebrow: 'Consultoria tecnológica',
      title: 'Consultoria Tecnológica para Empresas e Startups',
      description:
        'Consultoria tecnológica antes e durante o desenvolvimento: requisitos, validação de ideias, arquitetura, escolha de tecnologia, auditoria de aplicações e roadmap técnico.',
      h1: 'Consultoria tecnológica para decidir bem antes de investir',
      lede: 'Apoio nas decisões técnicas antes e durante o desenvolvimento, para que o investimento em tecnologia tenha impacto real no negócio.',
      sections: [
        {
          h2: 'Em que podemos ajudar',
          list: [
            'Análise de requisitos e validação de ideias: perceber o que é preciso construir, e o que não é, antes de gastar em desenvolvimento.',
            'Arquitetura e escolha de tecnologia: uma base técnica que aguenta o crescimento sem complexidade desnecessária.',
            'Auditoria de aplicações existentes: avaliar a qualidade do código, a arquitetura e os riscos de uma aplicação que já existe.',
            'Roadmap técnico: um plano faseado e realista, com prioridades alinhadas com o negócio.',
          ],
        },
        {
          h2: 'Para quem é',
          p: [
            'Para empresas a começar um projeto digital, startups a validar um produto e equipas que precisam de uma opinião técnica independente. Adaptamos a abordagem ao contexto, ao orçamento e à maturidade tecnológica de cada empresa.',
          ],
        },
        {
          h2: 'Como funciona',
          p: [
            'Começamos com uma conversa para perceber o contexto e os objetivos, e definimos juntos o âmbito da consultoria. O resultado depende do que precisa: um documento de arquitetura, um roadmap técnico, um relatório de auditoria, ou todos. A duração acompanha o âmbito.',
          ],
        },
        {
          h2: 'Da consultoria ao desenvolvimento',
          more: 'custom-software',
          p: [
            'Muitas vezes a consultoria é o melhor ponto de partida, antes de escrever código. Pode começar por aqui e passar para o desenvolvimento quando fizer sentido, com a mesma equipa e sem perder contexto.',
          ],
        },
      ],
      faq: [
        { q: 'Quanto custa a consultoria tecnológica?', a: 'O preço depende do âmbito. Cada pedido tem um orçamento próprio, preparado depois de uma primeira conversa.' },
        { q: 'Faz sentido pedir consultoria antes de desenvolver?', a: 'Sim, e muitas vezes é o melhor ponto de partida: requisitos, validação de ideias, arquitetura, tecnologia e roadmap ficam definidos antes de escrever código.' },
        { q: 'Podem auditar uma aplicação desenvolvida por outra empresa?', a: 'Sim. A auditoria avalia a qualidade do código, a arquitetura e os riscos da aplicação, e termina com um relatório completo sobre o que está bem e o que deve ser melhorado.' },
      ],
    },
    en: {
      eyebrow: 'Technology consulting',
      title: 'Technology Consulting for Businesses and Startups',
      description:
        'Technology consulting before and during development: requirements, idea validation, architecture, technology choices, app audits and a technical roadmap.',
      h1: 'Technology consulting to decide well before you invest',
      lede: 'Support with technical decisions before and during development, so your technology investment has a real business impact.',
      sections: [
        {
          h2: 'Where we can help',
          list: [
            'Requirements analysis and idea validation: working out what needs building, and what doesn’t, before spending on development.',
            'Architecture and technology choices: a technical foundation that handles growth without unnecessary complexity.',
            'Audits of existing apps: assessing the code quality, architecture and risks of an app that already exists.',
            'Technical roadmap: a realistic, phased plan with priorities aligned to the business.',
          ],
        },
        {
          h2: 'Who it’s for',
          p: [
            'Companies starting a digital project, startups validating a product and teams that need an independent technical opinion. We adapt our approach to each company’s context, budget and technical maturity.',
          ],
        },
        {
          h2: 'How it works',
          p: [
            'We start with a conversation to understand your context and goals, and agree the scope of the work together. The outcome depends on what you need: an architecture document, a technical roadmap, an audit report, or all of them. The duration follows the scope.',
          ],
        },
        {
          h2: 'From consulting to development',
          more: 'custom-software',
          p: [
            'Consulting is often the best place to start, before any code is written. You can start here and move on to development when it makes sense, with the same team and no loss of context.',
          ],
        },
      ],
      faq: [
        { q: 'How much does technology consulting cost?', a: 'The price depends on scope. Every request gets its own quote, prepared after a first conversation.' },
        { q: 'Does it make sense to get consulting before development?', a: 'Yes, and it’s often the best place to start: requirements, idea validation, architecture, technology and roadmap are settled before any code is written.' },
        { q: 'Can you audit an app built by another company?', a: 'Yes. The audit assesses the app’s code quality, architecture and risks, and ends with a full report on what works well and what should be improved.' },
      ],
    },
  },

  about: {
    kind: 'about',
    slug: { pt: 'sobre', en: 'about' },
    related: ['case-studies', 'custom-software', 'technical-interviews'],
    published: '2026-11-25',
    updated: '2026-11-27',
    pt: {
      eyebrow: 'Quem somos',
      title: 'Sobre a VirtusPromPT',
      description:
        'A VirtusPromPT (Virtuous Prompts, Lda) é uma empresa portuguesa de desenvolvimento de aplicações, software à medida e consultoria tecnológica.',
      h1: 'Um parceiro técnico próximo, que fala a língua do negócio',
      lede: 'Na VirtusPromPT ajudamos empresas a transformar ideias em soluções digitais sólidas. Juntamos conhecimento técnico profundo a uma abordagem prática, para entregar depressa sem comprometer a estrutura que permite crescer.',
      sections: [
        {
          h2: 'A VirtusPromPT',
          p: [
            'A VirtusPromPT é a marca da Virtuous Prompts, Lda, uma empresa portuguesa de desenvolvimento de software e consultoria tecnológica, fundada em 2025 e com sede em Pinhal de Frades.',
            'Trabalhamos lado a lado com cada cliente: primeiro percebemos o problema, depois propomos o que cria valor hoje e daqui a uns anos.',
          ],
        },
        {
          h2: 'Rodrigo Fernandes, fundador e CEO',
          p: [
            'Rodrigo Fernandes fundou a VirtusPromPT em 2025, com sete anos de experiência em desenvolvimento mobile e de software. Ao longo desse percurso trabalhou para empresas e organizações como a Appsfactory, a BMW, a New Look, a Faurecia, a Aptoide, o ICNF e o IPMA.',
            'Principais tecnologias:',
          ],
          list: [
            'Desenvolvimento Android com Jetpack Compose.',
            'Desenvolvimento multiplataforma com Compose Multiplatform.',
            'Desenvolvimento web com JavaScript e vários frameworks.',
          ],
        },
        {
          h2: 'Como trabalhamos',
          p: [
            'Começamos com uma conversa, definimos a abordagem, o âmbito e o plano de execução, e trabalhamos em proximidade, com comunicação clara e entregas faseadas. Trabalhamos remotamente e presencialmente, em Portugal, e respondemos normalmente em 24–48h úteis.',
            'Quando um projeto precisa de outras competências, reforçamos a equipa com especialistas.',
          ],
        },
        {
          h2: 'Clientes e parceiros',
          more: 'case-studies',
          p: ['Já trabalhámos com a Appning by Forvia, a We Are Meta e a Custo Marginal. Também desenvolvemos produtos próprios, como o Sim, vou.'],
        },
      ],
    },
    en: {
      eyebrow: 'About us',
      title: 'About VirtusPromPT',
      description:
        'VirtusPromPT (Virtuous Prompts, Lda) is a Portuguese company providing app development, custom software and technology consulting.',
      h1: 'A hands-on technical partner who speaks the language of business',
      lede: 'At VirtusPromPT we help businesses turn ideas into solid digital solutions. We combine deep technical knowledge with a practical approach, delivering quickly without compromising the structure you need to grow.',
      sections: [
        {
          h2: 'VirtusPromPT',
          p: [
            'VirtusPromPT is the brand of Virtuous Prompts, Lda, a Portuguese software development and technology consulting company, founded in 2025 and based in Pinhal de Frades.',
            'We work side by side with every client: first we understand the problem, then we propose what creates value today and for years to come.',
          ],
        },
        {
          h2: 'Rodrigo Fernandes, founder and CEO',
          p: [
            'Rodrigo Fernandes founded VirtusPromPT in 2025, after seven years in mobile and software development. Along the way Rodrigo has worked for companies and organisations including Appsfactory, BMW, New Look, Faurecia, Aptoide, ICNF and IPMA.',
            'Main technologies:',
          ],
          list: [
            'Android development with Jetpack Compose.',
            'Cross-platform development with Compose Multiplatform.',
            'Web development with JavaScript and a range of frameworks.',
          ],
        },
        {
          h2: 'How we work',
          p: [
            'We start with a conversation, define the approach, scope and delivery plan, and work closely with you, with clear communication and phased deliveries. We work remotely or in person in Portugal, and usually reply within 1–2 business days.',
            'When a project needs other skills, we bring in specialists.',
          ],
        },
        {
          h2: 'Clients and partners',
          more: 'case-studies',
          p: ['We have worked with Appning by Forvia, We Are Meta and Custo Marginal. We also build our own products, such as Sim, vou.'],
        },
      ],
    },
  },

  'case-studies': {
    kind: 'cases',
    slug: { pt: 'clientes', en: 'clients' },
    related: ['custom-software', 'mobile-apps', 'about'],
    published: '2026-11-25',
    updated: '2026-11-27',
    pt: {
      eyebrow: 'Clientes e parceiros',
      title: 'Clientes, Parceiros e Projetos',
      description:
        'Clientes e parceiros da VirtusPromPT, como a Appning by Forvia, a We Are Meta e a Custo Marginal, e o Sim, vou, o nosso produto de convites digitais.',
      h1: 'Clientes, parceiros e projetos',
      lede: 'Alguns dos clientes e parceiros com quem trabalhamos, e o nosso produto próprio.',
      sections: [
        {
          h2: 'Sim, vou: convites digitais com confirmação de presenças',
          p: [
            'O Sim, vou é um produto próprio da VirtusPromPT: convites digitais com confirmação de presenças, para casamentos, batizados e festas.',
            'Quem organiza o evento envia um convite digital, e os convidados confirmam a presença online.',
          ],
          list: ['Tipo: produto próprio'],
          link: { label: 'simvou.pt', href: 'https://simvou.pt/?utm_source=virtusprompt&utm_medium=referral' },
        },
        {
          h2: 'Appning by Forvia: uma app de media para automóveis',
          p: ['A Appning by Forvia pediu-nos apoio no desenvolvimento de uma aplicação de media baseada em templates, para automóveis.'],
          list: ['Serviço: desenvolvimento de software'],
        },
        {
          h2: 'We Are Meta: reforço de equipas de desenvolvimento',
          p: ['Trabalhamos com a We Are Meta em projetos para os seus clientes, integrados nas equipas de desenvolvimento.'],
          list: ['Serviço: reforço de equipas'],
        },
        {
          h2: 'Custo Marginal: app mobile multiplataforma e automação de processos',
          p: ['A Custo Marginal é cliente e parceira da VirtusPromPT. Desenvolvemos para a Custo Marginal uma aplicação mobile multiplataforma, e estamos a ajudar a automatizar alguns dos seus processos internos.'],
          list: ['Serviços: desenvolvimento de aplicações mobile e software à medida'],
        },
      ],
    },
    en: {
      eyebrow: 'Clients and partners',
      title: 'Clients, Partners and Projects',
      description:
        'VirtusPromPT’s clients and partners, such as Appning by Forvia, We Are Meta and Custo Marginal, and Sim, vou, our digital invitations product.',
      h1: 'Clients, partners and projects',
      lede: 'Some of the clients and partners we work with, and our own product.',
      sections: [
        {
          h2: 'Sim, vou: digital invitations with RSVPs',
          p: [
            'Sim, vou is VirtusPromPT’s own product: digital invitations with RSVPs, for weddings, baptisms and parties.',
            'The host sends a digital invitation, and guests confirm online whether they’re coming.',
          ],
          list: ['Type: our own product'],
          link: { label: 'simvou.pt', href: 'https://simvou.pt/?utm_source=virtusprompt&utm_medium=referral' },
        },
        {
          h2: 'Appning by Forvia: a media app for cars',
          p: ['Appning by Forvia asked us to help develop a template-based media app for cars.'],
          list: ['Service: software development'],
        },
        {
          h2: 'We Are Meta: development team augmentation',
          p: ['We work with We Are Meta on projects for its clients, as part of their development teams.'],
          list: ['Service: team augmentation'],
        },
        {
          h2: 'Custo Marginal: a cross-platform mobile app and process automation',
          p: ['Custo Marginal is both a client and a partner of VirtusPromPT. We built a cross-platform mobile app for Custo Marginal, and are helping automate some of its internal processes.'],
          list: ['Services: mobile app development and custom software'],
        },
      ],
    },
  },

  'guide-app-cost': {
    kind: 'guide',
    slug: { pt: 'quanto-custa-desenvolver-uma-app', en: 'how-much-does-an-app-cost' },
    related: ['mobile-apps', 'technology-consulting'],
    published: '2026-11-25',
    updated: '2026-11-27',
    pt: {
      eyebrow: 'Guia',
      title: 'Quanto Custa Desenvolver uma App em Portugal?',
      description:
        'Quanto custa desenvolver uma app em Portugal: a partir de cerca de 5000 € + IVA para uma app simples. O que pesa no orçamento, quanto tempo demora e como reduzir o custo sem perder qualidade.',
      h1: 'Quanto custa desenvolver uma app em Portugal?',
      lede: 'Não há um preço único: o custo de uma app depende sobretudo do âmbito. Na VirtusPromPT, uma app simples começa em cerca de 5000 € + IVA e demora 3 a 5 meses. Este guia explica o que pesa no orçamento e como reduzir o risco antes de investir.',
      sections: [
        {
          h2: 'Resposta curta',
          p: [
            'Na VirtusPromPT, o desenvolvimento de uma app simples começa em cerca de 5000 € + IVA. O valor sobe com a complexidade, o número de ecrãs e as funcionalidades, e duas apps parecidas à primeira vista podem ter orçamentos muito diferentes.',
            'O que mais pesa são as plataformas, o número e a complexidade das funcionalidades, as integrações e o design. A forma mais rápida de ter um valor realista é definir o âmbito e pedir um orçamento.',
          ],
        },
        {
          h2: 'O que faz variar o preço de uma app',
          list: [
            'Plataformas: só iOS, só Android, as duas, ou também uma versão web.',
            'Número e complexidade das funcionalidades: autenticação, pagamentos, notificações, funcionamento sem rede, mapas.',
            'Integrações com sistemas existentes, como um ERP, um CRM ou APIs de terceiros.',
            'Design: adaptar um sistema de design existente custa menos do que criar uma identidade de raiz.',
            'Servidor e área de administração: muitas apps precisam de um backend e de um painel para gerir conteúdos e utilizadores.',
            'Requisitos de segurança, acessibilidade e conformidade, como o RGPD.',
          ],
        },
        {
          h2: 'Quanto tempo demora a desenvolver uma app',
          p: [
            'Uma app simples demora normalmente 3 a 5 meses, da primeira conversa à publicação nas lojas. Apps com mais ecrãs, funcionalidades ou integrações demoram mais.',
            'O prazo também depende de quem encomenda a app: quando as respostas demoram, ou quando os conteúdos e os dados necessários não estão prontos a tempo, o projeto atrasa. Ter textos, imagens e acessos preparados desde o início é a forma mais simples de cumprir o prazo.',
          ],
        },
        {
          h2: 'Custos depois do lançamento',
          p: ['O desenvolvimento não é o único custo. Conte também com:'],
          list: [
            'Contas de programador: a Apple cobra uma taxa anual e a Google uma taxa única de registo.',
            'Alojamento do backend e serviços de terceiros, como envio de emails, notificações ou mapas.',
            'Manutenção: atualizações para novas versões do iOS e do Android, correções e pequenas melhorias. Na VirtusPromPT, a manutenção de projetos mais pequenos funciona com uma avença mensal; a de projetos maiores, por tempo e materiais.',
          ],
        },
        {
          h2: 'Como reduzir o custo sem comprometer a qualidade',
          list: [
            'Comece por uma primeira versão com as funcionalidades essenciais e valide-a com utilizadores reais.',
            'Defina o âmbito antes de pedir orçamentos: propostas só são comparáveis se partirem do mesmo âmbito.',
            'Considere uma abordagem multiplataforma quando a app não depende de funcionalidades muito específicas de cada sistema.',
            'Invista na arquitetura desde o início: corrigir uma base mal desenhada custa mais do que fazê-la bem à primeira.',
          ],
        },
        {
          h2: 'Pedir um orçamento',
          more: 'contact',
          p: [
            'Para receber um orçamento útil, partilhe uma breve descrição do projeto, os objetivos e o prazo pretendido. Respondemos normalmente em 24–48h úteis.',
          ],
        },
      ],
    },
    en: {
      eyebrow: 'Guide',
      title: 'How Much Does It Cost to Build an App in Portugal?',
      description:
        'What it costs to build an app in Portugal: from around €5,000 + VAT for a simple app. What drives the budget, how long it takes, and how to lower the cost without lowering quality.',
      h1: 'How much does it cost to build an app in Portugal?',
      lede: 'There’s no single price: an app’s cost depends mostly on its scope. At VirtusPromPT, a simple app starts at around €5,000 + VAT and takes 3 to 5 months. This guide explains what drives the budget and how to reduce the risk before you invest.',
      sections: [
        {
          h2: 'The short answer',
          p: [
            'At VirtusPromPT, building a simple app starts at around €5,000 + VAT. The price goes up with complexity, the number of screens and the features, and two apps that look similar at first can have very different budgets.',
            'What weighs most is the platforms, the number and complexity of features, the integrations and the design. The quickest way to a realistic figure is to define the scope and ask for a quote.',
          ],
        },
        {
          h2: 'What changes the price of an app',
          list: [
            'Platforms: iOS only, Android only, both, or a web version too.',
            'The number and complexity of features: sign-in, payments, notifications, offline use, maps.',
            'Integrations with existing systems, such as an ERP, a CRM or third-party APIs.',
            'Design: adapting an existing design system costs less than creating an identity from scratch.',
            'Server and admin area: many apps need a backend and a dashboard to manage content and users.',
            'Security, accessibility and compliance requirements, such as the GDPR.',
          ],
        },
        {
          h2: 'How long it takes to build an app',
          p: [
            'A simple app usually takes 3 to 5 months, from the first conversation to publishing in the app stores. Apps with more screens, features or integrations take longer.',
            'The timeline also depends on you: when answers are slow, or when the content and data the app needs aren’t ready on time, the project slips. Having text, images and access ready from the start is the simplest way to stay on schedule.',
          ],
        },
        {
          h2: 'Costs after launch',
          p: ['Development isn’t the only cost. Also budget for:'],
          list: [
            'Developer accounts: Apple charges an annual fee and Google a one-off registration fee.',
            'Backend hosting and third-party services, such as email, notifications or maps.',
            'Maintenance: updates for new iOS and Android versions, fixes and small improvements. At VirtusPromPT, maintenance for smaller projects runs on a monthly retainer, and for bigger projects on time and materials.',
          ],
        },
        {
          h2: 'How to lower the cost without lowering the quality',
          list: [
            'Start with a first version that has only the essential features, and validate it with real users.',
            'Define the scope before asking for quotes: proposals are only comparable if they start from the same scope.',
            'Consider a cross-platform approach when the app doesn’t depend on features specific to each system.',
            'Invest in the architecture from the start: fixing a badly designed foundation costs more than getting it right the first time.',
          ],
        },
        {
          h2: 'Getting a quote',
          more: 'contact',
          p: [
            'For a useful quote, share a short description of the project, your goals and your intended timeline. We usually reply within 1–2 business days.',
          ],
        },
      ],
    },
  },

  'guide-custom-vs-ready-made': {
    kind: 'guide',
    slug: { pt: 'software-a-medida-ou-pronto-a-usar', en: 'custom-vs-off-the-shelf-software' },
    related: ['custom-software', 'technology-consulting'],
    published: '2026-11-25',
    updated: '2026-11-27',
    pt: {
      eyebrow: 'Guia',
      title: 'Software à Medida ou Pronto a Usar: Qual Escolher?',
      description:
        'Software à medida ou software pronto a usar: diferenças de custo, tempo de implementação, flexibilidade e dependência do fornecedor, e quando faz sentido escolher cada um.',
      h1: 'Software à medida ou software pronto a usar: qual escolher?',
      lede: 'A maioria das empresas deve começar por software pronto a usar. O software à medida compensa quando os processos são uma vantagem competitiva, ou quando as ferramentas existentes obrigam a trabalhar à volta delas.',
      sections: [
        {
          h2: 'Resposta curta',
          p: [
            'Escolha software pronto a usar quando o processo é comum no seu setor, como faturação, contabilidade ou email, e uma ferramenta existente cobre a maior parte das necessidades. Escolha software à medida quando o processo é específico da empresa, quando o software faz parte do que vende aos clientes, ou quando já paga várias ferramentas e passa dados entre elas à mão.',
          ],
        },
        {
          h2: 'Software pronto a usar: vantagens e limites',
          list: [
            'Começa a funcionar em dias, não em meses.',
            'O custo inicial é baixo, normalmente uma subscrição mensal por utilizador.',
            'A manutenção, o alojamento e as atualizações ficam a cargo do fornecedor.',
            'Limite: é a empresa que se adapta ao processo da ferramenta, e não o contrário.',
            'Limite: o custo cresce com o número de utilizadores, e os dados ficam no sistema do fornecedor.',
          ],
        },
        {
          h2: 'Software à medida: vantagens e limites',
          list: [
            'Funciona exatamente como os processos da empresa.',
            'Integra-se com os sistemas que a empresa já usa.',
            'A empresa controla as prioridades de evolução e, normalmente, é dona do código.',
            'Limite: o investimento inicial é maior e demora mais tempo a chegar a produção.',
            'Limite: precisa de manutenção contínua, por uma equipa interna ou por um parceiro.',
          ],
        },
        {
          h2: 'Uma terceira via: combinar os dois',
          p: [
            'Muitas vezes a melhor solução é manter ferramentas prontas a usar para o que é comum e desenvolver à medida apenas a parte que diferencia o negócio, ligando tudo através de integrações. Assim o investimento concentra-se onde gera mais valor.',
          ],
        },
        {
          h2: 'Perguntas para ajudar a decidir',
          list: [
            'Este processo é igual ao dos meus concorrentes, ou é parte do que me diferencia?',
            'Quanto tempo a equipa perde hoje a contornar as ferramentas atuais?',
            'Quanto vou pagar em subscrições daqui a três anos, com a equipa que espero ter?',
            'O que acontece se o fornecedor mudar o preço, mudar as funcionalidades ou deixar de existir?',
          ],
        },
        {
          h2: 'Ainda tem dúvidas?',
          more: 'technology-consulting',
          p: [
            'Uma conversa de consultoria tecnológica, antes de qualquer desenvolvimento, ajuda a decidir com base nos números e nos processos da sua empresa.',
          ],
        },
      ],
    },
    en: {
      eyebrow: 'Guide',
      title: 'Custom or Off-the-Shelf Software: Which Should You Choose?',
      description:
        'Custom versus off-the-shelf software: differences in cost, time to implement, flexibility and vendor lock-in, and when each one makes sense.',
      h1: 'Custom or off-the-shelf software: which should you choose?',
      lede: 'Most businesses should start with off-the-shelf software. Custom software pays off when your processes are a competitive advantage, or when existing tools force you to work around them.',
      sections: [
        {
          h2: 'The short answer',
          p: [
            'Choose off-the-shelf software when the process is common in your sector, such as invoicing, accounting or email, and an existing tool covers most of what you need. Choose custom software when the process is specific to your company, when software is part of what you sell, or when you already pay for several tools and move data between them by hand.',
          ],
        },
        {
          h2: 'Off-the-shelf software: pros and limits',
          list: [
            'It’s up and running in days, not months.',
            'The upfront cost is low, usually a monthly subscription per user.',
            'Maintenance, hosting and updates are the vendor’s job.',
            'Limit: your company adapts to the tool’s process, not the other way round.',
            'Limit: the cost grows with the number of users, and your data lives in the vendor’s system.',
          ],
        },
        {
          h2: 'Custom software: pros and limits',
          list: [
            'It works exactly the way your processes do.',
            'It integrates with the systems you already use.',
            'You control what gets built next and, usually, you own the code.',
            'Limit: the upfront investment is higher and it takes longer to reach production.',
            'Limit: it needs ongoing maintenance, by an in-house team or a partner.',
          ],
        },
        {
          h2: 'A third way: combine the two',
          p: [
            'Often the best answer is to keep off-the-shelf tools for what’s common, and build custom software only for the part that sets your business apart, connecting everything through integrations. That way the investment goes where it creates the most value.',
          ],
        },
        {
          h2: 'Questions to help you decide',
          list: [
            'Is this process the same as my competitors’, or part of what sets us apart?',
            'How much time does the team lose today working around the current tools?',
            'How much will I pay in subscriptions three years from now, with the team I expect to have?',
            'What happens if the vendor changes its prices or features, or shuts down?',
          ],
        },
        {
          h2: 'Still not sure?',
          more: 'technology-consulting',
          p: [
            'A technology consulting conversation, before any development, helps you decide based on your own numbers and processes.',
          ],
        },
      ],
    },
  },
};

const TODO = /\[TODO:[^\]]*\]/;

/** True while the page still has a [TODO: ...] marker in either language. */
export const isDraft = (id: string): boolean =>
  id in PAGES && TODO.test(JSON.stringify(PAGES[id as PageId]));

export const isPublished = (id: PageId): boolean => !isDraft(id);

/** Split a string into plain text and TODO markers, so drafts can highlight what is missing. */
export const splitTodos = (text: string): { text: string; todo: boolean }[] =>
  text
    .split(/(\[TODO:[^\]]*\])/)
    .filter(Boolean)
    .map((part) => ({ text: part, todo: TODO.test(part) }));
