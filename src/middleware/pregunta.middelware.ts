import axios from "axios";
import { Question } from "../types/Question";

const token = import.meta.env.VITE_API_TOKEN;
const tenant = import.meta.env.VITE_TENANT;

const apiQuestion = axios.create({
    baseURL: import.meta.env.VITE_API_URL
  })


export const postQuestion = async (pregunta: Question) => {
    try {
    
      const response = await apiQuestion.post(`/${tenant}/admin/ai/corrigePregunta`,pregunta,{
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        }
      );

      return response.data;
    } catch (error) {
      console.error('Error al evaluar pregunta:', error);
      throw error;
    }
}