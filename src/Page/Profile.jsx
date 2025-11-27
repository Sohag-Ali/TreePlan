import React, { use } from "react";
import Navbar from "../Components/Navbar";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";




const Profile = () => {
  const { user, logOut,setUser } = use(AuthContext);
   const navigate = useNavigate();

  const handleLogOut = () => {
    logOut().then((result) => setUser(result.user));
    navigate('/')
    toast('LogOut succesful');
  };
  return (
   <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex flex-col items-center pt-20 px-4">

  <div className="bg-white w-full max-w-md shadow-xl rounded-3xl p-7 border border-emerald-200">

    {/* Top Badge */}
    <div className="flex justify-center mb-4">
      <span className="px-4 py-1 bg-emerald-100 text-emerald-600 text-sm font-semibold rounded-full">
        🌿 GreenNest Member
      </span>
    </div>

    {/* Profile Image */}
    <div className="flex justify-center">
      <div className="relative">
        <img
          src={user?.photoURL || userIcon}
          alt="User"
          className="w-32 h-32 rounded-full border-4 border-emerald-400 shadow-md"
        />

        {/* Small online indicator */}
        <span className="w-4 h-4 bg-green-500 border-2 border-white rounded-full absolute bottom-1 right-1"></span>
      </div>
    </div>

    {/* User Info */}
    <div className="mt-5 space-y-2">

      <h2 className="text-center text-2xl font-bold text-emerald-700">
        Name : {user?.displayName || "User Name"}
      </h2>

      <p className="text-center text-gray-600 text-sm">
        📞 Phone: <span className="text-gray-700">{user?.phoneNumber || "017XXXXXXXX"}</span>
      </p>

      <p className="text-center text-gray-600 text-sm">
        📧 Email: <span className="text-gray-700">{user?.email || "No Email Available"}</span>
      </p>

      <p className="text-center text-gray-600 text-sm">
        🔑 Provider: <span className="text-gray-700">{user?.providerId || "N/A"}</span>
      </p>

      <p className="text-center text-gray-600 text-sm">
        🆔 UID: <span className="text-gray-700">{user?.uid || "N/A"}</span>
      </p>
    </div>

    {/* Divider */}
    <div className="w-full h-[1px] bg-emerald-200 my-6"></div>

    {/* Buttons */}
    <div className="flex flex-col gap-4">

      {/* Edit Button */}
      <button
       onClick={() => toast("Edit is not working right now 😅")} 
       className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-2.5 rounded-lg font-semibold shadow-md transition">
        ✏️ Edit Profile
      </button>

      {/* Logout */}
      <button
        onClick={handleLogOut}
        className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 
                 text-white py-2.5 rounded-lg font-semibold shadow-md transition"
      >
        🚪 Log Out
      </button>
    </div>
  </div>
  <ToastContainer position="top-center" />
</div>

  );
};

export default Profile;
