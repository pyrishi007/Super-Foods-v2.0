import {
  SWIGGY_RESTAURANTS_API_URL,
  SWIGGY_RESTAURANTS_MENU_API_URL,
} from "../utils/constants";


// Restro_API
export const fetchRestrouantshApi = async () => {
  try {
    const response = await fetch(SWIGGY_RESTAURANTS_API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return (data = await response.json());
  } catch (error) {
    console.error("Fetch API error:", error);
    return { error: true, message: "Fatal Response" };
  }
};


// Menu_API
export const fetchRestrouantsMenu_Api = async (resID) => {
  try {
    const response = await fetch(SWIGGY_RESTAURANTS_MENU_API_URL + resID);

    if (!response.ok) {
      throw new Error();
    }

    return (data = await response.json());
  } catch (error) {
    console.error("Fetch API error:", error);
    return { error: true, message: "Fatal Response" };
  }
};
