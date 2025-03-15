import {useState} from 'react'
import {Link} from 'react-router'

function Login(){
    const [credentials,setCredentials]=useState(
{
    username:"",
    password:""
})
    const[error,setError]=useState()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await login(credentials);
        } catch (err) {
          setError(err.message || "Invalid credentials");
        }
      };

      return (
        <div className="min-h-screen flex items-center justify-center  bg-[#232C33]">
          <div className="bg-[#5A7D7C] p-8 rounded-lg shadow-lg w-96">
            <h1 className="text-2xl font-bold mb-6 text-white text-center">
              Login
            </h1>
            {error && (
              <div className="bg-red-500/20 text-red-400 p-3 mb-4 rounded">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white text-semibold  mb-1">
                  Username
                </label>
                <input
                  type="text"
                  value={credentials.username}
                  onChange={(e) =>
                    setCredentials({ ...credentials, username: e.target.value })
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
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                  className="w-full p-2 rounded bg-[#B5B2C2] text-[#232C33]  border-[#A0C1D1] focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#232C33] text-white p-2 rounded hover:bg-[#141c22]"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-center text-white">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#232C33] hover:text-[#B5B2C2]">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      );



}

export default Login;
