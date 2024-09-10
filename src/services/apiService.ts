// src/services/apiService.ts
import axios from "axios";
import { User } from "../models/User";

const API_BASE_URL = "http://localhost:8081/api-nextline"; // Change l'URL selon ton API

// Crée une instance Axios avec la configuration par défaut
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Ajoute d'autres headers si nécessaire
  },
});

// Fonction pour mettre à jour les informations d'un utilisateur
export const updateUser = async (user: User): Promise<User> => {
  try {
    const response = await apiClient.put(
      `http://localhost:8081/api-nextline/user/update-user/${user.id}`,
      user
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'utilisateur:", error);
    throw error;
  }
};

// Les autres fonctions restent inchangées
export const loginUser = async (
  login: string,
  password: string
): Promise<{ user: User; token: string }> => {
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
export const fetchUserById = async (userId: number): Promise<User> => {
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

export const createUser = async (newUser: User): Promise<void> => {
  try {
    const response = await apiClient.post(
      "http://localhost:8081/api-nextline/user/create-user",
      newUser
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'enregistrement de l'utilisateur", error);
  }
};

export const getAllInterns = async (): Promise<User[]> => {
  try {
    const response = await apiClient.get(
      "http://localhost:8081/api-nextline/user/all-users"
    );

    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des stagiaires", error);
    throw error;
  }
};
