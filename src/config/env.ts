const validEnvs = ["dev", "production", "staging", "test"] as const;
type AppEnv = (typeof validEnvs)[number];

const getEnv = (): AppEnv => {
  return validEnvs.find((_) => _ === process.env.NODE_ENV) ?? "dev";
};

const optionalEnvVars = {
  app_env: getEnv(),
} as const;

const requiredEnvVars = {
  db_database: process.env.DB_URI,
  port: Number(process.env.PORT),
  jwt_secret: process.env.JWT_SECRET,
  salt_rounds: Number(process.env.SALT_ROUNDS) || 10,
} as const;

const env = {
  ...optionalEnvVars,
  ...requiredEnvVars,
} as const;

const missingEnvVars = Object.entries(requiredEnvVars)
  .filter(([key, value]) => {
    return !value;
  })
  .map(([key, _]) => key);

if (missingEnvVars.length > 0) {
  throw new Error(
    `Missing required environment variables: ${missingEnvVars.join(", ")}`
  );
}

export default env;
