import { Link, useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    role: "user", // Default role
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/booklog/register",
        {
          username: formData.username,
          password: formData.password,
          role: formData.role,
        }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/login");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#232C33]">
      <div className="bg-[#5A7D7C] p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-white text-center">
          Sign Up
        </h1>
        {error && (
          <div className="bg-red-500/20 text-red-400 p-3 mb-4 rounded">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Username
            </label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              className="w-full p-2 rounded bg-[#B5B2C2] text-[#232C33] border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full p-2 rounded bg-[#B5B2C2] text-[#232C33] border-[#A0C1D1] focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              className="w-full p-2 rounded bg-[#B5B2C2] text-[#232C33] border-[#A0C1D1] focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Role
            </label>
            <select
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              className="w-full p-2 rounded bg-[#B5B2C2] text-[#232C33] border-[#A0C1D1] focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              <option value="user">User</option>
              <option value="author">Author</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#232C33] text-white p-2 rounded hover:bg-[#141c22]"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-white">
          Already have an account?{" "}
          <Link to="/login" className="text-[#232C33] hover:text-[#B5B2C2]">
            Go to Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
