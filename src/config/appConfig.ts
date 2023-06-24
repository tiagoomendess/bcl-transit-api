const AppConfig = {
  app: {
    name: process.env.APP_NAME,
    server: process.env.SERVER,
    isDevelopment: ["development", "dev", "local"].includes(
      <string>process.env.SERVER
    ),
    port: parseInt(<string>process.env.PORT, 10) || 3000,
    apiVersion: process.env.API_VERSION || "v1",
    secret: process.env.SECRET || "abc123",
  },
  db: {
    host: process.env.DB_HOST || "127.0.0.1",
    database: process.env.DB_DATABASE || "tasks_api",
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "password",
    port: parseInt(<string>process.env.DB_PORT, 10) || 5432,
    dialect: process.env.DB_DIALECT || "mysql",
    timezone: process.env.DB_TIMEZONE || "utc",
    isLogging: process.env.DB_LOG === "true",
  },
  pubSub: {
    projectId: process.env.PUB_SUB_PROJECT_ID || "local-proton-339521",
    taskCompletedTopicId:
      process.env.PUB_SUB_TASK_COMPLETED_TOPIC_ID || "task-completed",
  },
};

export default Object.freeze(AppConfig);
