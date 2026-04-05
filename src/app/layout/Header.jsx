import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";

const Header = ({ onMenuClick }) => {
  const { user, logout, setUser } = useAuthStore();
  const navigate = useNavigate();

  const handleRoleChange = (role) => {
    setUser({
      email:
        role === "admin"
          ? "admin@example.com"
          : "viewer@example.com",
      role,
    });
  };

  return (
    <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4 sm:px-6">
      
      <div className="flex items-center gap-3">

        <button
          onClick={onMenuClick}
          className="lg:hidden text-gray-700 dark:text-gray-300 text-lg"
        >
          ☰
        </button>

        <h1 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
          Finance Dashboard
        </h1>

      </div>

      <div className="flex items-center gap-2 sm:gap-4">

        <span
          className={`hidden sm:inline text-xs px-2 py-1 rounded font-medium ${
            user?.role === "admin"
              ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
              : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
          }`}
        >
          {user?.role?.charAt(0).toUpperCase() +
            user?.role?.slice(1)}
        </span>

        <select
          value={user?.role || "admin"}
          onChange={(e) => handleRoleChange(e.target.value)}
          className="px-2 py-1 text-xs sm:text-sm border border-gray-300 dark:border-gray-700 rounded-md 
          bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          <option value="admin">Admin</option>
          <option value="viewer">Viewer</option>
        </select>

        <Button
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2"
        >
          Logout
        </Button>

      </div>
    </header>
  );
};

export default Header;