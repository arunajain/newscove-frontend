import axios from "axios";

const API_BASE = "http://localhost:3000/api"; // Adjust for your backend

export interface Article {
  id: number;
  title: string;
  summary: string;
  published_at: string;
}

export const fetchArticles = async () => {
  const response = await axios.get<Article[]>(`${API_BASE}/news`);
  return response.data;
};
