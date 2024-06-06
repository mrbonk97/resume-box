export type workType = {
  startYear: string;
  startMonth: string;
  endYear: string;
  endMonth: string;
  isWorking: boolean;
  name: string;
  department: string;
};

export type linkType = {
  order: number;
  desc: string;
  url: string;
};

export type languageType = {
  order: number;
  language: string;
  test: string;
  score: string;
};

export type certiType = {
  order: number;
  date: string;
  title: string;
  desc: string;
};

export type educationType = {
  order: number;
  startYear: string;
  startMonth: string;
  endYear: string;
  endMonth: string;
  isWorking: boolean;
  school: string;
  major: string;
};
