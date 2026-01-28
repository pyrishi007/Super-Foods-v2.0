# 🍔 Super Foods v2.0

**Super Foods v2.0** is a modern food delivery frontend web application inspired by Swiggy.  
Built using **React**, styled with **Tailwind CSS**, powered by **Redux** for state management, integrated with the **Swiggy API** for restaurant/menu data, and secured with **Firebase Authentication**.

## 📂 Folder Structure

Lets understand my folder structure.
SUPER_FOODV2.0/
│
├── node_modules/
│
├── src/
│   ├── api/
│   │   └── swiggy.js
│   │
│   ├── Assets/
│   │
│   ├── Components/
│   │   ├── AboutUs/
│   │   │   ├── AboutUS.css
│   │   │   ├── AboutUs.jsx
│   │   │   └── Error / RouteError/
│   │   │       └── RouteError.jsx
│   │   │
│   │   ├── Footer/
│   │   │   ├── footer.css
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── MenuPage/
│   │   │   ├── Banner.jsx
│   │   │   ├── MenuCardCategories.jsx
│   │   │   ├── MenuCategoriesItems.jsx
│   │   │   └── MenuPage.jsx
│   │   │
│   │   ├── Navigation/
│   │   │   ├── Header.jsx
│   │   │   └── Navigation.jsx
│   │   │
│   │   ├── PreLoader/
│   │   │   ├── preloader.css
│   │   │   └── PreLoader.jsx
│   │   │
│   │   ├── RestroCard/
│   │   │   ├── Restrocard.jsx
│   │   │   └── Search.jsx
│   │   │
│   │   ├── ShimmerUI/
│   │   │   ├── shimmer.css
│   │   │   └── Shimmer.jsx
│   │   │
│   │   ├── TopRatedRestro/
│   │   │   └── TopRatedRestro.jsx
│   │   │
│   │   ├── UserProfile/
│   │   │   └── UserClass.jsx
│   │   │
│   │   └── Body.jsx
│   │
│   ├── HOCS/
│   │   └── withLabel.jsx
│   │
│   ├── Hooks/
│   │   ├── isOnline.jsx
│   │   ├── useBody.jsx
│   │   ├── useRestroMenu.jsx
│   │   └── useRouteError.jsx
│   │
│   ├── Pipeline/
│   │   └── useState.jsx
│   │
│   ├── Store/
│   │   └── constants.jsx
│   │
│   ├── utils/
│   │   ├── constants.jsx
│   │   └── SharedUtilityBasedInfo.jsx
│   │
│   └── App.jsx
│
├── .gitignore
├── .postcssrc.json
├── Index.html
├── package-lock.json
├── package.json
├── README.md
├── Style.css
└── tailwind.config.js

## 🚀 Tech Stack

- ⚛️ **React** – Frontend Library  
- 🎨 **Tailwind CSS** – Styling & Responsive UI  
- 🔥 **Firebase** – Authentication (Login / Signup)  
- 🛒 **Redux** – State Management  
- 🟢 **Node.js** – Runtime Environment  
- 📦 **npm** – Package Manager  
- 🍽️ **Swiggy API** – Restaurant & Menu Data  
- ⚡ **Parcel** – Bundler  
- 🧩 **Babel** – JavaScript Compiler  
- 🔀 **React Router DOM** – Routing & Navigation  
- 🌐 **Fetch API** – API Calls  
- 🛠️ **Git & GitHub** – Version Control  

## ✨ Features (Detailed)

### 🏠 1) Restaurant Listing Page (Home)
- Displays restaurants dynamically by fetching data from Swiggy API
- Uses reusable **Restaurant Card UI**
- Includes restaurant image, name, cuisines, rating, and total ratings

**Code Highlights**
- Restaurant cards rendered using `.map()`
- Uses Swiggy CDN images via `CDN_LINK + cloudinaryImageId`

---

### 🔍 2) Search Restaurants
- Search bar allows users to search restaurants
- Controlled input state (`inputText`)
- Search button triggers search logic (`handleSearch`)

---

### ⭐ 3) Top Rated Restaurant Filter
- “Top Restro” button filters/sorts restaurants by rating
- Clean reusable filter component (`TopRatedRestro`)

---

### 🏷️ 4) Promoted Badge using Higher Order Component (HOC)
- Restaurants with rating `>= 4.5` show a **Promoted** label
- Implemented using HOC: `withLabel(RestroCard)`
- Keeps UI enhancement reusable without modifying original component

---

### 💀 5) Shimmer / Skeleton Loader
- Displays skeleton UI while API data loads
- Grid shimmer placeholders for restaurants
- Smooth loading effect using Tailwind animations

---

### 🎬 6) GSAP Animated Preloader
- Beautiful intro animation using **GSAP Timeline**
- Uses `forwardRef` + `useImperativeHandle` to expose a `fadeOut()` function
- Adds a polished UI experience

---

### 📶 7) Online/Offline Detection
- Uses custom hook (`status()` from `isOnline.jsx`)
- Shows fallback UI when user is offline  
> *(You mentioned: TODO - improve offline error screen)*

---

### 🍽️ 8) Restaurant Menu Page (Dynamic)
- Clicking a restaurant navigates to menu page using:
- Menu data fetched dynamically with restaurant id
- Menu categories filtered using Swiggy API response `@type`

---

### 📋 9) Menu Categories & Menu Items Rendering
- Filters menu categories:
- Displays food items with:
✅ name  
✅ price (converted to ₹)  
✅ description  
✅ food image  
✅ Add button UI (cart-ready)

---

### 🧭 10) Routing & Layout (React Router v6)
- Routing implemented using `createBrowserRouter`
- Uses common layout:
✅ Header  
✅ Footer  
✅ Outlet (page content)

✅ Lazy loading applied for:
- About page
- Menu page

---

### 🚨 11) Custom Route Error Page
- Custom error page using your `useRouteError` hook
- Shows:
✅ status code  
✅ status text  
- Better UX than default error page

---

### 🌐 12) API Layer with Error Handling
Separate API file to keep fetching logic clean:

- `fetchRestrouantshApi()` → restaurant list API  
- `fetchRestrouantsMenu_Api(resID)` → menu API  

Includes:
✅ `try/catch` error handling  
✅ returns fallback `{ error: true, message: "Fatal Response" }` on error  

---

## 🧭 Routes

| Route | Page |
|------|------|
| `/` | Home (Restaurant Listing) |
| `/About` | About Page (Lazy Loaded) |
| `/restaurant/Menupage/:resID` | Restaurant Menu Page |
| `/UserProfile.info` | User Profile Page |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
git clone https://github.com/pyriShi007/Super-Foods-v2.0.git


# git important cmds

## Seprate Folder 
- cd Super-Foods-v2.0

## To install the Project
- npm install

## To run the Project
- npm start


👨‍💻 Author
Made with ❤️ by Rishi aka Rohit Gorain