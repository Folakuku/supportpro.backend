import { Types } from "mongoose";

export interface IJob {
  role: string;
  description: string;
  maxSalary: number;
  minSalary: number;
  experienceLevel: string;
  location: ILocation;
  address?: string;
  remote: boolean;
  responsibilities?: Types.Array<string>;
  skills?: Types.Array<string>;
  goals?: Types.Array<string>;
}

export interface ILocation {
  city: string;
  state: string;
  country: string;
}
