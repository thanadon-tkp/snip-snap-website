import { NavLink } from "react-router";
import { CodeXml, ExternalLink, Search, Copyright } from "lucide-react";

export default function Index() {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4">
      {/* title */}
      <section className="grid grid-cols-1 md:grid-cols-[minmax(16rem,20rem)_1fr] gap-12">
        <img
          src="/landing-page.png"
          alt="landing-page"
          className="h-full w-auto object-contain rounded-lg hidden md:block"
        />
        <div className="flex flex-col space-y-4">
          <h1 className="text-5xl font-bold mb-4">
            Organize, Share, and Reuse Your Code Snippets
          </h1>
          <p>
            CodeMark is the ultimate tool for developers to manage their code
            snippets efficiently. Save time and stay organized with our
            intuitive interface.
          </p>
          <NavLink
            to="/"
            className="w-fit md:w-full text-center px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors !mt-auto"
          >
            Get Started
          </NavLink>
        </div>
      </section>
      {/* Key Features */}
      <section className="space-y-2 mt-12">
        <h1 className="text-2xl font-bold">Key Features</h1>
        <p>
          CodeMark offers a range of features designed to streamline your
          workflow and enhance productivity.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Snippet Management */}
          <div className="p-4 border rounded-lg border-slate-200">
            <CodeXml className="mb-2" />
            <p className="font-medium">Snippet Management</p>
            <span className="text-sm text-slate-500">
              Easily save, organize, and categorize your code snippets for quick
              access.
            </span>
          </div>
          {/* Collaboration */}
          <div className="p-4 border rounded-lg border-slate-200">
            <ExternalLink className="mb-2" />
            <p className="font-medium">Collaboration</p>
            <span className="text-sm text-slate-500">
              Share snippets with your team and collaborate on projects
              seamlessly.
            </span>
          </div>
          {/* Powerful Search */}
          <div className="p-4 border rounded-lg border-slate-200">
            <Search className="mb-2" />
            <p className="font-medium">Powerful Search</p>
            <span className="text-sm text-slate-500">
              Find the snippets you need instantly with our advanced search
              capabilities.
            </span>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className="flex items-center text-sm justify-center gap-1 text-center mt-12 text-slate-600">
        <Copyright className="size-4" />
        <span>{new Date().getFullYear()} SnipSnap. All rights reserved.</span>
      </footer>
    </div>
  );
}
