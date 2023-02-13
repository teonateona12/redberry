export interface PersonalInformation {
  firstName: string;
  lastName: string;
  about?: string;
  email: string;
  number: string;
  image?: File | null;
}
export interface ExperienceData {
  position: string;
  description: string;
  employer: string;
  startTime: string;
  endTime: string;
}
export type ExperienceDataKey = keyof ExperienceData;
export type EducationDataKey = keyof EducationData;
export interface EducationData {
  university: string;
  degree: any;
  universityEnd: string;
  educationDesc: string;
}

export interface ResumeData {
  about_me?: string | null;
  educations: Educations[];
  email: string;
  experiences: Experiences[];
  id: number;
  image: string;
  name: string;
  phone_number: string;
  surname: string;
}
export interface Degree {
  id: number;
  title: string;
}
interface Experiences {
  description: string;
  due_date: string;
  employer: string;
  id: number;
  position: string;
  start_date: string;
}
interface Educations {
  degree: string;
  description: string;
  due_date: string;
  id: number;
  institute: string;
}
