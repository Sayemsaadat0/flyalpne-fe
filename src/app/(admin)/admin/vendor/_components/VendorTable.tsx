import Image from 'next/image';

type THeaderData = {
  id: string;
  label: string;
};

type TBodyData = {
  logo: string;
  name: string;
  location: string;
  address: string;
  tinNumber: string;
  license: string;
  totalReviews: number;
  averageRating: number;
  details: string;
  totalProducts: number;
  totalOrders: number;
  completed: number;
  cancelled: number;
  returned: number;
};

type TVendorTableProps = {
  headerData: THeaderData[];
  bodyData: TBodyData[];
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
          {Array.from({ length: 5 }).map((_, repeatIdx) =>
            bodyData.map((bodyItem: TBodyData, idx: number) => {
              return (
                <tr
                  key={`${repeatIdx}-${idx}`}
                  className="bg-white border-b last:border-b-0 dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Image
                      className="rounded-xl"
                      src={bodyItem.logo}
                      width={500}
                      height={500}
                      alt={bodyItem.name}
                    />
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.address}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.tinNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.license}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.totalReviews}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.averageRating}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.details}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.totalProducts}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.totalOrders}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.completed}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.cancelled}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.returned}</td>
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
