export interface TeamMember {
  name: string;
  role: string;
  tag: string;
  details: readonly string[];
  initials: string;
  gradient: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  requirements: string;
  message: string;
}
