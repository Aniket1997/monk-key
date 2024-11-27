import axios from "axios"; // Import Axios

interface RegisterUserData {
  name: string;
  email: string;
  password: string;
  phone: string;
}

interface LoginUserData {
  email: string;
  password: string;
}

// Define types for the response data
interface ApiResponse {
  message: string;
  token?: string;
  user?: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}

// Register function using Axios
export const registerUser = async (
  userData: RegisterUserData,
): Promise<ApiResponse> => {
  try {
    const response = await axios.post("/api/auth/register", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Return the data from the response
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

// Login function using Axios
export const loginUser = async (
  userData: LoginUserData,
): Promise<ApiResponse> => {
  try {
    const response = await axios.post("/api/auth/login", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Return the data from the response
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};
