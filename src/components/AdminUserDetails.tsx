
export interface UserData {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  roles: string;
  watchlist: string;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const AdminUserDetails = ( user: UserData) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-between border-b border-gray-200 last:border-0">
      <div className="flex items-center gap-3">
        <img
          src={user.image || "https://via.placeholder.com/100"}
          alt={user.firstname}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div>
          <h4 className="font-semibold text-sm text-black">{`${user.firstname} ${user.lastname}`}</h4>
          <p className="text-xs text-gray-500">{user.email}</p>
          <p className="text-xs text-gray-400">User</p>
          
        </div>
      </div>
      <div className="flex gap-2">
        
      </div>
    </div>
  );
};
