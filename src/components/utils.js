export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "/api"
    : import.meta.env.VITE_BASE_URL;

// // Update the production URL
// if (process.env.NODE_ENV === "production") {
//   BASE_URL = "https://hr-system-backend-1.onrender.com/";
// }
