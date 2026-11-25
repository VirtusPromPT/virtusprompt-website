// Content for the inner pages: services, about, case studies and guides, in Portuguese (pt) and English (en).
//
// Anything written as [TODO: ...] is a fact only you can fill in (prices, stack, client results...).
// A page that still contains a TODO is a draft: it is built so you can preview it, but it is
// noindex, left out of the sitemap, llms.txt and every menu or link. Remove its last TODO and it goes live.

export interface Section {
  h2: string;
  p?: string[];
  list?: string[];
  ordered?: boolean;
  link?: { label: string; href: string };
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
  updated: string; // YYYY-MM-DD, shown on guides and used in the structured data
  pt: Copy;
  en: Copy;
}

const caseStudy = (pt: boolean, name: string): Section => ({
  h2: name,
  p: pt
    ? [
        `Desafio: [TODO: o problema de partida de ${name}]`,
        '[TODO: o que fizemos: âmbito, equipa e duração]',
        '[TODO: o resultado, de preferência com números]',
      ]
    : [
        `Challenge: [TODO: the problem ${name} came to us with]`,
        '[TODO: what we did: scope, team and duration]',
        '[TODO: the outcome, ideally with numbers]',
      ],
  list: pt
    ? ['Serviço: [TODO: desenvolvimento, consultoria ou entrevistas técnicas]', 'Tecnologias: [TODO]']
    : ['Service: [TODO: development, consulting or technical interviews]', 'Technologies: [TODO]'],
});

export const PAGES: Record<PageId, PageDef> = {
  'technical-interviews': {
    kind: 'service',
    slug: { pt: 'entrevistas-tecnicas', en: 'technical-interviews' },
    related: ['technology-consulting', 'about'],
    updated: '2026-11-25',
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
            'Conduzimos a entrevista técnica. [TODO: formato e duração, por exemplo 60 a 90 minutos por vídeo, com exercício prático ou revisão de código]',
            'Entregamos a avaliação. [TODO: o que o cliente recebe no fim, por exemplo um relatório com pontuação por critério e uma recomendação]',
          ],
        },
        {
          h2: 'O que avaliamos',
          p: ['Cada grelha de avaliação é adaptada à função, mas cobre normalmente:'],
          list: [
            'Fundamentos e resolução de problemas.',
            'Domínio das tecnologias da função. [TODO: tecnologias que avaliam, por exemplo Android, iOS, web ou backend]',
            'Qualidade de código e capacidade de rever o código de outros.',
            'Comunicação e capacidade de explicar decisões técnicas.',
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
        { q: 'Quanto custa uma entrevista técnica?', a: 'O preço de uma entrevista técnica da VirtusPromPT é [TODO: preço por entrevista ou por pacote, e se inclui a preparação da grelha].' },
        { q: 'Em quanto tempo recebo a avaliação do candidato?', a: '[TODO: prazo habitual entre a entrevista e a entrega da avaliação].' },
        { q: 'Em que línguas são feitas as entrevistas técnicas?', a: '[TODO: línguas, por exemplo português e inglês].' },
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
            'We run the technical interview. [TODO: format and length, for example 60 to 90 minutes by video, with a practical exercise or code review]',
            'We hand over the assessment. [TODO: what the client receives, for example a report with a score per criterion and a recommendation]',
          ],
        },
        {
          h2: 'What we assess',
          p: ['Each framework is tailored to the role, but usually covers:'],
          list: [
            'Fundamentals and problem solving.',
            'Command of the role’s technologies. [TODO: technologies you assess, for example Android, iOS, web or backend]',
            'Code quality and the ability to review other people’s code.',
            'Communication, and the ability to explain technical decisions.',
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
        { q: 'How much does a technical interview cost?', a: 'A VirtusPromPT technical interview costs [TODO: price per interview or per package, and whether it includes preparing the framework].' },
        { q: 'How soon do I get the candidate assessment?', a: '[TODO: usual time between the interview and the assessment].' },
        { q: 'Which languages are the technical interviews held in?', a: '[TODO: languages, for example Portuguese and English].' },
      ],
    },
  },

  'mobile-apps': {
    kind: 'service',
    slug: { pt: 'desenvolvimento-apps-mobile', en: 'mobile-app-development' },
    related: ['custom-software', 'technology-consulting', 'guide-app-cost'],
    updated: '2026-11-25',
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
          p: ['[TODO: abordagem e tecnologias: nativo (por exemplo Kotlin e Swift) e/ou multiplataforma (por exemplo Kotlin Multiplatform ou Flutter), e quando recomendam cada uma]'],
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
          p: [
            'Se a ideia ainda está a ganhar forma, começar por consultoria tecnológica (requisitos, validação da ideia e roadmap) evita pagar funcionalidades de que ninguém precisa.',
          ],
        },
      ],
      faq: [
        { q: 'Quanto custa desenvolver uma app mobile?', a: 'Depende sobretudo do âmbito. Na VirtusPromPT, uma app mobile custa normalmente entre [TODO: intervalo de preços típico].' },
        { q: 'Quanto tempo demora a desenvolver uma app?', a: '[TODO: prazo típico, por exemplo de uma primeira versão até à publicação].' },
        { q: 'O código da app fica a ser meu?', a: '[TODO: confirmar se o código e a propriedade intelectual passam para o cliente no fim do projeto].' },
        { q: 'Fazem manutenção depois do lançamento da app?', a: 'Sim. Depois do lançamento continuamos disponíveis para evoluir e manter a app, e para passar conhecimento à sua equipa. [TODO: modelo de manutenção, por exemplo contrato mensal ou por horas]' },
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
          p: ['[TODO: approach and technologies: native (for example Kotlin and Swift) and/or cross-platform (for example Kotlin Multiplatform or Flutter), and when you recommend each]'],
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
          p: [
            'If the idea is still taking shape, starting with technology consulting (requirements, idea validation and a roadmap) saves you paying for features nobody needs.',
          ],
        },
      ],
      faq: [
        { q: 'How much does it cost to build a mobile app?', a: 'It mostly depends on scope. At VirtusPromPT a mobile app usually costs between [TODO: typical price range].' },
        { q: 'How long does it take to build an app?', a: '[TODO: typical timeline, for example from first version to publishing].' },
        { q: 'Do I own the app’s code?', a: '[TODO: confirm whether the code and intellectual property pass to the client at the end of the project].' },
        { q: 'Do you maintain the app after launch?', a: 'Yes. After launch we stay available to evolve and maintain the app, and to hand knowledge over to your team. [TODO: maintenance model, for example monthly retainer or hourly]' },
      ],
    },
  },

  'custom-software': {
    kind: 'service',
    slug: { pt: 'software-a-medida', en: 'custom-software-development' },
    related: ['mobile-apps', 'technology-consulting', 'guide-custom-vs-ready-made'],
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
          p: ['[TODO: linguagens, frameworks e infraestrutura com que trabalham, por exemplo Kotlin, TypeScript, React, .NET, cloud]'],
        },
      ],
      faq: [
        { q: 'Quanto custa desenvolver software à medida?', a: 'Depende do âmbito. Na VirtusPromPT, um projeto de software à medida custa normalmente entre [TODO: intervalo de preços típico].' },
        { q: 'Quanto tempo demora um projeto de software à medida?', a: '[TODO: prazo típico de uma primeira versão em produção].' },
        { q: 'O código do software fica a ser meu?', a: '[TODO: confirmar se o código e a propriedade intelectual passam para o cliente].' },
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
          p: ['[TODO: languages, frameworks and infrastructure you work with, for example Kotlin, TypeScript, React, .NET, cloud]'],
        },
      ],
      faq: [
        { q: 'How much does custom software development cost?', a: 'It depends on scope. At VirtusPromPT a custom software project usually costs between [TODO: typical price range].' },
        { q: 'How long does a custom software project take?', a: '[TODO: typical time to a first version in production].' },
        { q: 'Do I own the software’s code?', a: '[TODO: confirm whether the code and intellectual property pass to the client].' },
        { q: 'Can you take over a project another team started?', a: 'Yes. We start with an audit of the existing code and architecture, to understand where the project stands before proposing how to continue.' },
      ],
    },
  },

  'technology-consulting': {
    kind: 'service',
    slug: { pt: 'consultoria-tecnologica', en: 'technology-consulting' },
    related: ['custom-software', 'mobile-apps', 'technical-interviews'],
    updated: '2026-11-25',
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
            'Começamos com uma conversa para perceber o contexto e os objetivos, e definimos juntos o âmbito da consultoria. [TODO: o que o cliente recebe no fim, por exemplo um documento de arquitetura, um roadmap ou um relatório de auditoria, e a duração típica]',
          ],
        },
        {
          h2: 'Da consultoria ao desenvolvimento',
          p: [
            'Muitas vezes a consultoria é o melhor ponto de partida, antes de escrever código. Pode começar por aqui e passar para o desenvolvimento quando fizer sentido, com a mesma equipa e sem perder contexto.',
          ],
        },
      ],
      faq: [
        { q: 'Quanto custa a consultoria tecnológica?', a: 'Na VirtusPromPT, a consultoria tecnológica é cobrada [TODO: à hora, ao dia ou por projeto, e valores de referência].' },
        { q: 'Faz sentido pedir consultoria antes de desenvolver?', a: 'Sim, e muitas vezes é o melhor ponto de partida: requisitos, validação de ideias, arquitetura, tecnologia e roadmap ficam definidos antes de escrever código.' },
        { q: 'Podem auditar uma aplicação desenvolvida por outra empresa?', a: 'Sim. A auditoria avalia a qualidade do código, a arquitetura e os riscos da aplicação, e termina com recomendações concretas. [TODO: formato e duração típica da auditoria]' },
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
            'We start with a conversation to understand your context and goals, and agree the scope of the work together. [TODO: what the client receives, for example an architecture document, a roadmap or an audit report, and the typical duration]',
          ],
        },
        {
          h2: 'From consulting to development',
          p: [
            'Consulting is often the best place to start, before any code is written. You can start here and move on to development when it makes sense, with the same team and no loss of context.',
          ],
        },
      ],
      faq: [
        { q: 'How much does technology consulting cost?', a: 'At VirtusPromPT, technology consulting is charged [TODO: hourly, daily or per project, and reference rates].' },
        { q: 'Does it make sense to get consulting before development?', a: 'Yes, and it’s often the best place to start: requirements, idea validation, architecture, technology and roadmap are settled before any code is written.' },
        { q: 'Can you audit an app built by another company?', a: 'Yes. The audit assesses the app’s code quality, architecture and risks, and ends with concrete recommendations. [TODO: format and typical length of an audit]' },
      ],
    },
  },

  about: {
    kind: 'about',
    slug: { pt: 'sobre', en: 'about' },
    related: ['case-studies', 'custom-software', 'technical-interviews'],
    updated: '2026-11-25',
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
            'A VirtusPromPT é a marca da Virtuous Prompts, Lda, uma empresa portuguesa de desenvolvimento de software e consultoria tecnológica. [TODO: ano de fundação e cidade da sede]',
            'Trabalhamos lado a lado com cada cliente: primeiro percebemos o problema, depois propomos o que cria valor hoje e daqui a uns anos.',
          ],
        },
        {
          h2: 'Rodrigo Fernandes, sócio-gerente',
          p: ['[TODO: percurso profissional: anos de experiência, empresas e projetos relevantes, especialidade técnica]'],
          list: [
            'Tecnologias principais: [TODO]',
            '[TODO: certificações, palestras ou contribuições open source, se houver]',
            '[TODO: link para o perfil de LinkedIn e GitHub]',
          ],
        },
        {
          h2: 'Como trabalhamos',
          p: [
            'Começamos com uma conversa, definimos a abordagem, o âmbito e o plano de execução, e trabalhamos em proximidade, com comunicação clara e entregas faseadas. Trabalhamos remotamente e presencialmente, em Portugal, e respondemos normalmente em 24–48h úteis.',
          ],
        },
        {
          h2: 'Clientes e parceiros',
          p: ['Já trabalhámos com a Appning by Forvia, a Mindera, a We Are Meta e a Custo Marginal. Também desenvolvemos produtos próprios, como o Sim, vou.'],
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
            'VirtusPromPT is the brand of Virtuous Prompts, Lda, a Portuguese software development and technology consulting company. [TODO: year founded and city of the registered office]',
            'We work side by side with every client: first we understand the problem, then we propose what creates value today and for years to come.',
          ],
        },
        {
          h2: 'Rodrigo Fernandes, managing partner',
          p: ['[TODO: career: years of experience, relevant companies and projects, technical speciality]'],
          list: [
            'Main technologies: [TODO]',
            '[TODO: certifications, talks or open-source contributions, if any]',
            '[TODO: link to LinkedIn and GitHub profiles]',
          ],
        },
        {
          h2: 'How we work',
          p: [
            'We start with a conversation, define the approach, scope and delivery plan, and work closely with you, with clear communication and phased deliveries. We work remotely or in person in Portugal, and usually reply within 1–2 business days.',
          ],
        },
        {
          h2: 'Clients and partners',
          p: ['We have worked with Appning by Forvia, Mindera, We Are Meta and Custo Marginal. We also build our own products, such as Sim, vou.'],
        },
      ],
    },
  },

  'case-studies': {
    kind: 'cases',
    slug: { pt: 'casos-de-estudo', en: 'case-studies' },
    related: ['custom-software', 'mobile-apps', 'about'],
    updated: '2026-11-25',
    pt: {
      eyebrow: 'Casos de estudo',
      title: 'Casos de Estudo: Projetos de Software e Apps',
      description:
        'Projetos de desenvolvimento de software, apps e consultoria tecnológica da VirtusPromPT, incluindo o Sim, vou, o nosso produto de convites digitais.',
      h1: 'Projetos que desenvolvemos',
      lede: 'Alguns dos projetos em que trabalhámos: o problema de partida, o que fizemos e o resultado.',
      sections: [
        {
          h2: 'Sim, vou: convites digitais com confirmação de presenças',
          p: [
            'O Sim, vou é um produto próprio da VirtusPromPT: convites digitais com confirmação de presenças, para casamentos, batizados e festas.',
            'Desafio: [TODO: o problema que o Sim, vou resolve para quem organiza um evento]',
            '[TODO: o que fizemos: design, desenvolvimento, gestão de confirmações, envio de convites]',
            '[TODO: o resultado, por exemplo data de lançamento, eventos criados ou convidados]',
          ],
          list: ['Tecnologias: [TODO]'],
          link: { label: 'simvou.pt', href: 'https://simvou.pt/?utm_source=virtusprompt&utm_medium=referral' },
        },
        caseStudy(true, 'Appning by Forvia'),
        caseStudy(true, 'Mindera'),
        caseStudy(true, 'We Are Meta'),
        caseStudy(true, 'Custo Marginal'),
      ],
    },
    en: {
      eyebrow: 'Case studies',
      title: 'Case Studies: Software and App Projects',
      description:
        'Software development, app and technology consulting projects by VirtusPromPT, including Sim, vou, our digital invitations product.',
      h1: 'Projects we’ve built',
      lede: 'Some of the projects we’ve worked on: the starting problem, what we did and the outcome.',
      sections: [
        {
          h2: 'Sim, vou: digital invitations with RSVPs',
          p: [
            'Sim, vou is VirtusPromPT’s own product: digital invitations with RSVPs, for weddings, baptisms and parties.',
            'Challenge: [TODO: the problem Sim, vou solves for people organising an event]',
            '[TODO: what we did: design, development, RSVP management, sending invitations]',
            '[TODO: the outcome, for example launch date, events created or guests]',
          ],
          list: ['Technologies: [TODO]'],
          link: { label: 'simvou.pt', href: 'https://simvou.pt/?utm_source=virtusprompt&utm_medium=referral' },
        },
        caseStudy(false, 'Appning by Forvia'),
        caseStudy(false, 'Mindera'),
        caseStudy(false, 'We Are Meta'),
        caseStudy(false, 'Custo Marginal'),
      ],
    },
  },

  'guide-app-cost': {
    kind: 'guide',
    slug: { pt: 'quanto-custa-desenvolver-uma-app', en: 'how-much-does-an-app-cost' },
    related: ['mobile-apps', 'technology-consulting'],
    updated: '2026-11-25',
    pt: {
      eyebrow: 'Guia',
      title: 'Quanto Custa Desenvolver uma App em Portugal?',
      description:
        'O que determina o custo de desenvolver uma app em Portugal: plataformas, funcionalidades, design, integrações e manutenção, com intervalos de preço indicativos.',
      h1: 'Quanto custa desenvolver uma app em Portugal?',
      lede: 'Não há um preço único: o custo de uma app depende sobretudo do âmbito. Este guia explica o que pesa no orçamento e como reduzir o risco antes de investir.',
      sections: [
        {
          h2: 'Resposta curta',
          p: [
            'Desenvolver uma app em Portugal custa entre [TODO: valor] para uma app simples e [TODO: valor] ou mais para uma app com várias integrações e uma área de administração. [TODO: confirmar que estes são os intervalos com que a VirtusPromPT trabalha]',
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
          h2: 'Custos depois do lançamento',
          p: ['O desenvolvimento não é o único custo. Conte também com:'],
          list: [
            'Contas de programador: a Apple cobra uma taxa anual e a Google uma taxa única de registo.',
            'Alojamento do backend e serviços de terceiros, como envio de emails, notificações ou mapas.',
            'Manutenção: atualizações para novas versões do iOS e do Android, correções e pequenas melhorias. [TODO: valor ou percentagem anual de manutenção que recomendam]',
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
        'What drives the cost of building an app in Portugal: platforms, features, design, integrations and maintenance, with indicative price ranges.',
      h1: 'How much does it cost to build an app in Portugal?',
      lede: 'There’s no single price: an app’s cost depends mostly on its scope. This guide explains what drives the budget and how to reduce the risk before you invest.',
      sections: [
        {
          h2: 'The short answer',
          p: [
            'Building an app in Portugal costs between [TODO: amount] for a simple app and [TODO: amount] or more for an app with several integrations and an admin area. [TODO: confirm these are the ranges VirtusPromPT works with]',
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
          h2: 'Costs after launch',
          p: ['Development isn’t the only cost. Also budget for:'],
          list: [
            'Developer accounts: Apple charges an annual fee and Google a one-off registration fee.',
            'Backend hosting and third-party services, such as email, notifications or maps.',
            'Maintenance: updates for new iOS and Android versions, fixes and small improvements. [TODO: yearly maintenance amount or percentage you recommend]',
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
    updated: '2026-11-25',
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
