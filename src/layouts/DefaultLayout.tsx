import { Outlet, NavLink } from "react-router";

export default function DefaultLayout() {
  return (
    <div className="h-dvh w-full">
      {/* header */}
      <div className="grid grid-cols-[1fr_auto] px-4 py-2 gap-x-2 border border-b border-slate-100">
        <div className="my-auto">
          {/* icon */}
          <h1 className="font-medium text-xl">SnipSnap</h1>
        </div>
        <div className="grid place-items-center gap-x-2">
          <NavLink
            to="/auth/login"
            className="font-medium text-white bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors"
          >
            Sign In
          </NavLink>
        </div>
      </div>
      {/* content */}
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
