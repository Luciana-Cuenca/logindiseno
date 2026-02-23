import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-300 to-purple-500 flex items-center justify-center p-6">
      
      <div className="w-full max-w-6xl bg-white rounded-[36px] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        
        {/* ================= LADO IZQUIERDO ================= */}
        <div className="relative lg:w-2/5 aspect-[4/5] lg:aspect-auto overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700">
          
          {/* Imagen */}
          <Image
            src="/astronauta.svg"
            alt="Astronaut"
            fill
            priority
            className="object-cover z-0"
          />

          {/* Logo */}
          <h3 className="absolute top-8 left-8 z-20 text-white font-semibold text-lg">
            Astro
          </h3>

          {/* Texto principal*/}
          <div className="absolute top-24 left-8 z-20 max-w-xs text-white">
            <h2 className="text-2xl lg:text-3xl font-bold leading-snug">
              Exploring new frontiers, one step at a Time.
            </h2>
          </div>

          {/* Texto inferior */}
          <p className="absolute bottom-8 left-8 z-20 text-sm text-white opacity-90">
            Beyond Earth's grasp
          </p>
        </div>

        {/* ================= LADO DERECHO ================= */}
        <div className="lg:w-3/5 p-8 lg:p-14 flex flex-col justify-center">
          
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Create Account
            </h1>

            <p className="text-xs text-gray-600 hidden sm:block">
              Already a member?{" "}
              <a href="#" className="font-semibold text-gray-900 hover:underline">
                Sign in ↑
              </a>
            </p>
          </div>

          {/* Botones */}
          <div className="flex gap-4 mb-6">
            <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full font-semibold text-sm transition">
              Sign up with Google
            </button>

            <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-full font-semibold text-sm transition">
              with Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-xs text-gray-500 whitespace-nowrap">
              Or sign up using your email address
            </span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Formulario */}
          <div className="space-y-5 mb-6">

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email or Phone no.
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2 mb-6">
            <input type="checkbox" className="accent-purple-600" />
            <span className="text-xs text-gray-600">
              I agree to all terms and Privacy Policy
            </span>
          </div>

          {/* Boton principal */}
          <button className="w-full bg-purple-900 hover:bg-purple-950 text-white font-bold py-3 rounded-full transition mb-4">
            Sign up
          </button>

          {/* Mobile login */}
          <p className="text-center text-xs text-gray-600 sm:hidden">
            Already have an account?{" "}
            <a href="#" className="font-semibold text-gray-900 hover:underline">
              Log in
            </a>
          </p>

        </div>
      </div>
    </div>
  );
}