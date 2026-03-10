import { Link } from "react-router-dom";
import { Star, TrendingUp } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 border-b border-base-200 px-6">
      <div className="flex-1">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <TrendingUp className="text-primary" size={22} />
          Orbit
        </Link>
      </div>
      <div className="flex-none">
        <Link to="/watchlist" className="btn btn-ghost btn-sm gap-2">
          <Star size={16} />
          Favoris
        </Link>
      </div>
    </nav>
  );
};