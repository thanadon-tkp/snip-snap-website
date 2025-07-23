import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaLogin } from "../schemas/authSchema";
import type { FormLogin } from "../schemas/authSchema";
import { useAuthStore } from "../store/auth";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLogin>({
    resolver: zodResolver(schemaLogin),
  });

  const { postLogout, postSignIn, setUser, user } = useAuthStore((state) => state);

  const onSubmit = async (data: FormLogin) => {
    const res = await postSignIn(data);
    console.log("Response from postSignIn:", res);
    setUser(`Hello: ${data.email}`);
  };


  return (
    <div className="py-12 max-w-4xl mx-auto px-4">
      <h1 className="text-center font-medium text-2xl">Sign up for free</h1>
      <button onClick={() => postLogout()}>Logout</button>
      {/* form */}
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto mt-8 space-y-4"
      >
        <p>{user}</p>
        {/* email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">
              {errors.email.type === "required"
                ? "Email is required"
                : "Invalid email"}
            </p>
          )}
        </div>
        {/* password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "min 8", minLength: 8 })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.password && (
            <p className="mt-2 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>
        {/* button submit */}
        <button
          type="submit"
          className="mt-2 w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign Up
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:text-blue-500">
            Log in
          </a>
        </p>
        <p className="mt-2 text-sm text-center text-gray-600">
          By signing up, you agree to our{" "}
          <a href="/terms" className="text-blue-600 hover:text-blue-500">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-blue-600 hover:text-blue-500">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  );
}
