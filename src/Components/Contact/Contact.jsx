import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f6f7fb] min-h-screen">

      <section className="relative py-36 bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#f59e0b,_transparent_60%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="text-white">Contact</span>{" "}
            <span className="text-amber-500">Super Food’s</span>
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Questions, feedback, or ideas?
            <span className="text-white font-medium">
              {" "}
              We’d love to hear from you.
            </span>
            Reach out and our team will get back quickly.
          </p>


          <div className="mt-10 flex justify-center mb-10">
            <div className="h-1 w-24 bg-amber-500 rounded-full"></div>
          </div>
               <button
          onClick={() => navigate("/")}
          className="bg-white text-black px-10 py-4 rounded-full font-semibold text-lg shadow-lg"
        >
          Explore
        </button>
        </div>
      </section>


      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <div className="bg-white p-12 rounded-3xl shadow-md">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Send a message
            </h2>

            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />

              <input
                type="email"
                placeholder="Email address"
                className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />

              <textarea
                rows="5"
                placeholder="Your message"
                className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />

              <button className="w-full bg-black hover:bg-gray-900 text-white py-4 rounded-xl font-semibold text-lg transition">
                Send Message
              </button>
            </div>
          </div>


          <div className="relative flex justify-center items-center">

            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
              className="w-full h-[550px] object-cover rounded-3xl"
            />


            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 rounded-3xl"></div>


            <div className="absolute right-15 bg-white p-10 rounded-3xl shadow-2xl w-[380px]">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Rohit Gorain{" "}<span className="text-amber-500">Full stack</span> 
              </h3>

              <div className="space-y-5 text-gray-700">
                <div>
                  <p className="text-sm text-amber-500 font-semibold">Email</p>
                  <a
                    href="mailto:gorai123n@gmail.com"
                    className="text-base hover:text-black transition"
                  >
                    gorai123n@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-sm text-amber-500 font-semibold">Phone</p>
                  <a
                    href="tel:+918210874695"
                    className="text-base hover:text-black transition"
                  >
                    +91 82108 74695
                  </a>
                </div>

                <div>
                  <p className="text-sm text-amber-500 font-semibold">
                    Location
                  </p>
                  <p className="text-base">Bangalore • Kolkata • Jharkhand</p>
                </div>
              </div>

              <div className="h-px bg-gray-200 my-6"></div>


              <a
                href="https://github.com/pyrishi007"
                target="_blank"
                rel="noreferrer"
                className="block text-center bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-900 transition"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
