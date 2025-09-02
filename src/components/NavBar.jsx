import { Link } from "react-router";
import { useState } from "react";
import { Menu, Binary, UserStar, FileText, BookHeart } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-base-500 border-b border-base-content/10 fixed top-0 left-0 right-0 z-50 w-full">
      <div className="h-16 items-center flex justify-between bg-primary px-4 max-w-full overflow-hidden">
        {/* Logo */}
        <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono tracking-tight flex-shrink-0 min-w-0">
          <span className="hidden sm:inline">NATASHA.PORTFOLIO</span>
          <span className="sm:hidden">NATASHA.PORTFOLIO</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4 flex-shrink-0">
          <Link
            to="/"
            className="btn btn-sm lg:btn-md btn-primary bg-base-200 border-2"
          >
            <Binary className="size-4 lg:size-5 " />
            <span className="hidden lg:inline">Work</span>
          </Link>
          <Link
            to="/about"
            className="btn btn-sm lg:btn-md btn-primary bg-base-200 border-2"
          >
            <UserStar className="size-4 lg:size-5" />
            <span className="hidden lg:inline">About</span>
          </Link>
          <Link
            to="https://drive.google.com/file/d/1zCt7cB-_BRDeCDnAXwz4f2q9A2uZ-TIj/view?usp=sharing"
            className="btn btn-sm lg:btn-md btn-primary bg-base-200 border-2"
            target="_blank"
          >
            <FileText className="size-4 lg:size-5" />
            <span className="hidden lg:inline">Resume</span>
          </Link>
          <Link
            to="/hobbies"
            className="btn btn-sm lg:btn-md btn-primary bg-base-200 border-2"
          >
            <BookHeart className="size-4 lg:size-5" />
            <span className="hidden lg:inline">Alter Ego</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden p-2 flex-shrink-0"
          aria-label="Toggle menu"
        >
          <Menu className="size-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-primary bg-opacity-95 space-y-2 p-4 w-full`}
      >
        <Link
          to="/"
          className="btn btn-primary bg-base-200 border-2 w-full flex justify-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <Binary className="size-5" />
          <span>Work</span>
        </Link>
        <Link
          to="/about"
          className="btn btn-primary bg-base-200 border-2 w-full flex justify-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <UserStar className="size-5" />
          <span>About</span>
        </Link>
        <Link
          to="https://drive.google.com/file/d/1zCt7cB-_BRDeCDnAXwz4f2q9A2uZ-TIj/view?usp=sharing"
          target="_blank"
          className="btn btn-primary bg-base-200 border-2 w-full flex justify-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <FileText className="size-5" />
          <span>Resume</span>
        </Link>
        <Link
          to="/hobbies"
          className="btn btn-primary bg-base-200 border-2 w-full flex justify-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <BookHeart className="size-5" />
          <span>Alter Ego</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
