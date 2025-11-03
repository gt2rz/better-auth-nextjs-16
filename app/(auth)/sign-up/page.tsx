import { signUpEmail } from "@/server/auth";
import { redirect } from "next/navigation";

const SignUp = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      await signUpEmail({ email, password, name });
    } catch (error) {
      console.error("Error al crear cuenta:", error);
      return; // No redirigir si hay error
    }

    // Solo redirigir si el registro fue exitoso
    redirect("/sign-in");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Crear Cuenta
          </h2>
        </div>
        <form className="mt-8 space-y-6" action={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Crear Cuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
