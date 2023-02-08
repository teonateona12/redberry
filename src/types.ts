export interface PersonalInformation {
  firstName: string;
  lastName: string;
  about?: string;
  email: string;
  number: string;
  image: File | null;
}
