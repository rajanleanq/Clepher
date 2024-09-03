import { ChevronDown } from "lucide-react";
import { cn } from "../../../lib/utils";

export default function GainreLoserDataTable({ data, isLoading }: any) {
  return (
    <table className="w-full border border-s rounded-[10px] overflow-hidden shadow-sm mt-4">
      <thead className="border-b border-solid border-gray-200 bg-orange-50">
        <th className="py-3 font-nunito font-medium text-gray-600 text-14 px-2">
          Ticker
        </th>
        <th className="py-3 font-nunito font-medium text-gray-600 text-14 px-2 text-end">
          Price
        </th>
        <th className="py-3 font-nunito font-medium text-gray-600 text-14 px-2 text-end">
          Change Amount
        </th>
        <th className="py-3 font-nunito font-medium text-gray-600 text-14 px-2 text-end">
          Change Percentage
        </th>
        <th className="py-3 font-nunito font-medium text-gray-600 text-14 px-2 text-end">
          Volume
        </th>
      </thead>
      <tbody>
        {!isLoading && (
          <>
            {data?.map((p: any) => (
              <tr
                className="border-b border-solid border-gray-200"
                key={p?.ticker}
              >
                <td className="py-4 px-2 font-nunito text-14 text-center">
                  {p?.ticker}
                </td>
                <td className="py-4 px-2 font-nunito text-14 text-end">
                  {p?.price}
                </td>
                <td className="py-4 px-2 font-nunito text-14 text-end">
                  {p?.change_amount}
                </td>
                <td
                  className={(
                    "py-4 px-2 font-nunito text-14 text-end flex gap-2 justify-end"
                  )}
                >
                  {p?.change_percentage}

                  <ChevronDown
                    className={cn(
                      "w-4",
                      p?.change_percentage > 0
                        ? "rotate-180 text-green-500"
                        : "text-red-500"
                    )}
                  />
                </td>
                <td className="py-4 px-2 font-nunito text-14 text-end">
                  {p?.volume}
                </td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </table>
  );
}
