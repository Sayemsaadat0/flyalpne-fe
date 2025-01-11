import { THeaderData, TVendorBodyData } from '@/types/types';
import Image from 'next/image';

type TVendorTableProps = {
  headerData: THeaderData[];
  bodyData: TVendorBodyData[];
};

const VendorTable = ({ headerData, bodyData }: TVendorTableProps) => {
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
            bodyData.map((bodyItem: TVendorBodyData) => {
              return (
                <tr
                  key={idx as number}
                  className="bg-white border-b last:border-b-0 dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Image
                      className="rounded-xl"
                      src={bodyItem.logo}
                      width={100}
                      height={100}
                      alt={bodyItem.name}
                    />
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.address}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.tinNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.license}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.totalProducts}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.totalOrders}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.completed}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.cancelled}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.returned}</td>
                  {/* <td className="px-6 py-4 whitespace-nowrap">
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a value" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Action</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </td> */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="bg-blue-500 hover:bg-blue-700 duration-500 px-6 py-2 rounded-full text-white">
                      Action
                    </button>
                  </td>
                </tr>
              );
            }),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default VendorTable;
