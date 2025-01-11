import { THeaderData, TUserBodyData } from '@/types/types';

type TUserTableProps = {
  headerData: THeaderData[];
  bodyData: TUserBodyData[];
};

const UserTable = ({ headerData, bodyData }: TUserTableProps) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headerData.map((headerItem: THeaderData) => (
              <th key={headerItem.id} scope="col" className="px-6 py-3 whitespace-nowrap">
                {headerItem.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((idx) =>
            bodyData.map((bodyItem: TUserBodyData) => {
              return (
                <tr
                  key={idx as number}
                  className="bg-white border-b last:border-b-0 dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.address}</td>
                </tr>
              );
            }),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
