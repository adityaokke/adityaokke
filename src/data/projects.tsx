export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: 'apollographql-sequelize',
    description: 'Published npm library that translates a GraphQL query AST into Sequelize find options, resolving nested associations, filters and ordering in a single query.',
    tech: ['TypeScript', 'GraphQL', 'Sequelize', 'npm'],
    github: 'https://github.com/adityaokke/apollographql-sequelize',
    live: 'https://www.npmjs.com/package/apollographql-sequelize',
  },
  {
    title: 'Loan Agreement Service',
    description: 'Loan lifecycle service built on a status state machine. Generates PDF agreement letters and emails investors once a loan is fully funded.',
    tech: ['Golang', 'Echo', 'GORM', 'SQLite'],
    github: 'https://github.com/adityaokke/loan-agreement-service',
  },
  {
    title: 'Real-time Chat Microservices',
    description: 'Chat system split into gateway, auth and chat services. Messages are written through a BullMQ queue with retries and a dead-letter queue, then delivered via Redis pub/sub.',
    tech: ['TypeScript', 'GraphQL', 'BullMQ', 'Redis', 'PostgreSQL'],
    github: 'https://github.com/adityaokke/realtime-chat-microservices',
  },
  {
    title: 'Helpdesk Ticketing',
    description: 'Helpdesk ticket system with an L1–L3 escalation workflow, role-based access control and activity logging.',
    tech: ['React', 'Express', 'MongoDB', 'TypeScript'],
    github: 'https://github.com/adityaokke/helpdesk-ticketing',
  },
  {
    title: 'Live Game Reviews',
    description: 'Game review app where new reviews appear instantly for every viewer through server-sent events. Layered Fastify backend, Docker Compose setup and 105 tests.',
    tech: ['React', 'Fastify', 'TypeScript', 'Docker'],
    github: 'https://github.com/adityaokke/live-game-reviews',
  },
  {
    title: 'User Service',
    description: 'gRPC microservice for user management on the Standku platform: user CRUD, JWT authentication and role-based access control.',
    tech: ['Golang', 'gRPC', 'PostgreSQL', 'GORM'],
    github: 'https://github.com/adityaokke/user',
  },
];
