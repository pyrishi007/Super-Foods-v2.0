// export const SWIGGY_RESTAURANTS_API_URL 
export const SWIGGY_RESTAURANTS_API_URL =
  "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";



//Menu_Page Component API
export const SWIGGY_RESTAURANTS_MENU_API_URL =
 "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&submitAction=ENTER&restaurantId=";

 

//Image CDN
export const CDN_LINK =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";


//Email Regex
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


//PassWord Regex
export const PASSWORD_REGEX =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;


//Sign-Up Success Toastify
export const AUTH_TOAST = {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeButton: false,
            style: {
              background: "linear-gradient(135deg, #000000, #2c2c2c)",
              color: "#ffffff",
              border: "1px solid #000",
              borderRadius: "14px",
              fontWeight: "500",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
            },
          }