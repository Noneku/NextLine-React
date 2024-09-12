// src/services/apiService.ts
import axios from "axios";
import { User } from "../models/User";

const API_BASE_URL = "http://localhost:8081/api-nextline"; // Change l'URL selon ton API

// Crée une instance Axios avec la configuration par défaut
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Ajoute un intercepteur pour injecter le token dans chaque requête
apiClient.interceptors.request.use(
  (config) => {
    // Récupère le token depuis le localStorage
    const token = localStorage.getItem("authToken");

    if (token) {
      // Ajoute le token dans les en-têtes d'autorisation si disponible
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Fonction pour mettre à jour les informations d'un utilisateur
export const updateUser = async (user: User): Promise<User> => {
  try {
    const response = await apiClient.put(`/user/update-user/${user.id}`, user);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'utilisateur:", error);
    throw error;
  }
};

// Fonction pour l'authentification de l'utilisateur
export const loginUser = async (
  login: string,
  password: string
): Promise<{ user: User; token: string }> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      login,
      password,
    });

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

// Fonction pour créer un utilisateur
export const createUser = async (newUser: User): Promise<void> => {
  try {
    const response = await apiClient.post(`/user/create-user`, newUser);
    console.log("Voici la réponse de l'api", response);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'enregistrement de l'utilisateur", error);
    throw error;
  }
};

// Fonction pour récupérer tous les stagiaires
export const getAllInterns = async (): Promise<User[]> => {
  try {
    const response = await apiClient.get(`/user/all-users`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des stagiaires", error);
    throw error;
  }
};

// Fonction pour envoyer un e-mail d'entreprise
export const sendEmailBusiness = async (
  idUser: string | null | undefined,
  emailBusiness: string
): Promise<void> => {
  const dataEmail = {
    id_utilisateur: idUser,
    email_entreprise: emailBusiness,
  };

  try {
    await apiClient.post(`/liens-formulaires/generate`, dataEmail);
    console.log("Psartek frr");
  } catch (error) {
    console.error("Erreur envoie du mail", error);
    throw error;
  }
};

export default apiClient; // Exporter l'instance d'apiClient pour une utilisation globale
