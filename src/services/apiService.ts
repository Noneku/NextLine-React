// src/services/apiService.ts
import axios from "axios";
import { UserAuthentified } from "../Context/auth/AuthContextType"; // Assure-toi d'importer les bons types

const API_BASE_URL = "http://localhost:8081/api-nextline"; // Change l'URL selon ton API

// Crée une instance Axios avec la configuration par défaut
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Ajoute d'autres headers si nécessaire
  },
});

export const loginUser = async (
  login: string,
  password: string
): Promise<{ user: UserAuthentified; token: string }> => {
  try {
    const response = await axios.post(
      "http://localhost:8081/api-nextline/auth/login",
      { login, password }
    );

    if (response.data.token && response.data.user) {
      return { user: response.data.user, token: response.data.token };
    } else {
      throw new Error("Invalid response data");
    }
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

// Fonction pour obtenir le profil utilisateur
export const fetchUserById = async (
  userId: number
): Promise<UserAuthentified> => {
  try {
    const response = await apiClient.get(`/users/${userId}`);
    return response.data; // Assure-toi que la structure des données correspond à ce que tu attends
  } catch (error) {
    console.error(
      "Erreur lors de la récupération du profil utilisateur:",
      error
    );
    throw error;
  }
};

// Ajoute d'autres fonctions selon les besoins de ton application
