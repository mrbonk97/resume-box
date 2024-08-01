import { api } from "../api";

export const getResumes = async () => api.get("/resumes");

export const createResume = async () => api.post("/resumes");

export const getResumeDetail = async (id: string) => api.get(`/resumes/${id}`);

export const saveResume = async (data: any) =>
  api.put(`/resumes/${data.id}`, data);
