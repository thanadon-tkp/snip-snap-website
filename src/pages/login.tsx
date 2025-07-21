import { NavLink } from "react-router";

export default function Login() {
  return (
    <>
      <h1>Login Page</h1>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? `text-red-500 ${isActive}` : "text-slate-100"
        }
        end
      >
        Login
      </NavLink>
    </>
  );
}
