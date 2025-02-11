import http from "@/api/interceptors";
import { GetAll } from "@/types/product-types";

export const getAll = async (data: GetAll) => {
  try {
    const response = await http.get(
      `/products?page=${data.page}&limit=${data.limit}&name=${data.name}`
    );
    return response.data.products;
  } catch (error) {
    console.error("Products get error:", error);
    throw error;
  }
};
