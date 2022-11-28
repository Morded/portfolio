export interface IMetaHead {
  title: string;
  description: string;
  ogImageUrl: string;
}

export interface IHeroProps {
  name: string;
  about: string[];
  title: string;
}

export interface IExperience {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  link?: string;
  linkText?: string;
}
export interface IExperiences {
  title: string;
  details: IExperience[];
}

export interface IProject {
  title: string;
  isFeatured: boolean;
  thumbnail: string;
  githubUrl: string;
  liveUrl: string;
  isBig?: boolean;
}
export interface IProjects {
  projects: IProject[];
  isBig?: boolean;
}

export interface IProjectDetails {
  projectDetail: IProject;
}

export interface ISkill {
  name: string;
  icon: string;
}
export interface ISkills {
  projects: IProject[];
}

export interface ISkillDetails {
  skillDetail: ISkill;
}
