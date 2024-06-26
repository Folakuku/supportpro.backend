export const Roles = {
  Admin: "admin",
  Superadmin: "superadmin",
  Talent: "talent",
  Recruiter: "recruiter",
} as const;

export const Experience = {
  Junior: "junior",
  Intermediate: "intermediate",
  Senior: "senior",
};

export const Plan = {
  Basic: "basic",
  Business: "business",
  Enterprise: "enterprise",
} as const;

export const Objective = {
  Manage: "manage talents",
  Hire: "hire talents",
  Find: "find talents",
} as const;

export const CurrentHiringProcess = {
  Website: "website",
  Linkedin: "linkedin",
  Outsourced: "outsourced",
} as const;

export interface MakeResponse<T = any> {
  status: boolean;
  message: string;
  data?: Record<string, T>;
  statusCode?: number;
}
