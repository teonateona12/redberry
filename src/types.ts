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

export interface EducationData {
  university: string;
  degree: any;
  universityEnd: string;
  educationDesc: string;
}
