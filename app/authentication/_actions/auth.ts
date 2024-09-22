import { list } from "@/app/_services/api";

export const signUp = async (formData: FormData): Promise<any> => {
  try {
    const response: Response = await list('LOGIN_API');
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return Response.json(json);
  } catch (error: any) {
    console.error(error.message);
  }
};
