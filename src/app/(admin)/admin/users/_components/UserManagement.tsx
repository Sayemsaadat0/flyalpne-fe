import { userTableData, userTableHeader } from '@/data/admin.user.dummy.data';
import UserTable from './UserTable';

const UserManagement = () => {
  return (
    <div className="max-w-[100vw]">
      <h2 className="text-2xl font-semibold">Users List</h2>
      <div className="my-14 overflow-x-hidden">
        <UserTable headerData={userTableHeader} bodyData={userTableData} />
      </div>
    </div>
  );
};

export default UserManagement;
