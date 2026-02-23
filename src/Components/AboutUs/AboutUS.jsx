import { useNavigate } from "react-router-dom";

const AboutUS = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f6f7fb]">
      {/* HERO */}
      <section className="py-32 bg-gradient-to-r from-amber-100 via-orange-100 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* TEXT */}
          <div>
            <h1 className="text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
              Crafted for
              <span className="text-amber-500"> Food Lovers</span>
            </h1>

            <p className="mt-8 text-lg text-gray-600 max-w-xl leading-relaxed">
              Discover restaurants, explore menus, and order food with a modern,
              fast, and beautiful experience.
            </p>

            <button
              onClick={() => navigate("/")}
              className="mt-10 bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg"
            >
              Explore Food
            </button>
          </div>

          {/* CLEAN IMAGE GRID */}
          <div className="grid grid-cols-2 gap-6">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              className="w-full aspect-square object-cover rounded-2xl shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
              className="w-full aspect-square object-cover rounded-2xl shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
              className="w-full aspect-square object-cover rounded-2xl shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
              className="w-full aspect-square object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE GRID */}
          <div className="grid grid-cols-2 gap-6">
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349"
              className="w-full aspect-square object-cover rounded-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              className="w-full aspect-square object-cover rounded-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
              className="w-full aspect-square object-cover rounded-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
              className="w-full aspect-square object-cover rounded-xl"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Why
              <span className="text-amber-500"> Super Food’s </span>
              <span className="text-gray-900">Exists</span>
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-xl">
              <span className="font-semibold text-black">Super Food’s</span> is
              a modern food discovery experience built with{" "}
              <span className="text-amber-500 font-semibold">
                React, Redux, Firebase
              </span>{" "}
              and a clean scalable architecture. Designed to feel like a real
              production-level food platform.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              From browsing restaurants to adding items into your cart, every
              interaction is crafted to deliver a fast, smooth, and visually
              rich experience for food lovers.
            </p>

            {/* small accent line */}
            <div className="mt-8 h-1 w-20 bg-amber-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="py-32 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20">
            What Makes It Special
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white/5 backdrop-blur-xl p-4 rounded-3xl border border-white/10 hover:scale-[1.03] transition">
              <img
                src="https://images.unsplash.com/photo-1550547660-d9450f859349"
                className="rounded-xl mb-6 h-48 w-full object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Real UI Flow</h3>
              <p className="text-gray-300">
                Experience real restaurant browsing and menu interactions.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl p-4 rounded-3xl border border-white/10 hover:scale-[1.03] transition">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
                className="rounded-xl mb-6 h-48 w-full object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Fast Performance</h3>
              <p className="text-gray-300">
                Optimized React architecture and lazy loading.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl p-4 rounded-3xl border border-white/10 hover:scale-[1.03] transition">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                className="rounded-xl mb-6 h-48 w-full object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Modern Stack</h3>
              <p className="text-gray-300">
                Built with React, Redux, Firebase & Tailwind.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUS;
