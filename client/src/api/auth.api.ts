import { SignupProps } from "../pages/Signup";
import { httpClient } from "./http";

export const signup = async (userData: SignupProps) => {
  const response = await httpClient.post('/signup', userData);

  return response.data;
}

export const resetRequest = async (data: SignupProps) => {
  const response = await httpClient.post('/reset', data);

  return response.data;
}

export const resetPassword = async (data: SignupProps) => {
  const response = await httpClient.put('/reset', data);

  return response.data;
}
