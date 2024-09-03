import { useNavigate } from "react-router";
import { ITopGainerLoserData, ITopGainerLoserResponse } from "../../../services/interface/top-gainer-loser.interface";

export default function GainerLoserDataTable({
  data,
  isLoading,
}: {
  data: ITopGainerLoserData['data'],
  isLoading: boolean;
}) {
  const router = useNavigate();
  return (
    <table className="w-full border border-s rounded-[10px] overflow-hidden shadow-sm mt-4">
      <thead className="border-b border-solid border-gray-200 bg-orange-50">
        <th className="py-3 font-nunito font-medium text-gray-600 xs:text-[12px] md:text-14 px-2">
          Ticker
        </th>
        <th className="py-3 font-nunito font-medium text-gray-600 xs:text-[12px] md:text-14 px-2 text-end">
          Price
        </th>
        <th className="py-3 font-nunito font-medium text-gray-600 xs:text-[12px] md:text-14 px-2 text-end">
          Change Amount
        </th>
        <th className="py-3 font-nunito font-medium text-gray-600 xs:text-[12px] md:text-14 px-2 text-end">
          Change Percentage
        </th>
        <th className="py-3 font-nunito font-medium text-gray-600 xs:text-[12px] md:text-14 px-2 text-end">
          Volume
        </th>
      </thead>
      <tbody>
        {!isLoading && (
          <>
            {data?.map((p: ITopGainerLoserData["data"][0]) => (
              <tr
                onClick={() =>
                  router(`/company/${p?.ticker}?price=${p?.price}`)
                }
                className="border-b border-solid border-gray-200 cursor-pointer"
                key={p?.ticker}
              >
                <td className="py-4 px-2 font-nunito xs:text-[12px] md:text-14 text-center">
                  {p?.ticker}
                </td>
                <td className="py-4 px-2 font-nunito xs:text-[12px] md:text-14 text-end">
                  {p?.price}
                </td>
                <td className="py-4 px-2 font-nunito xs:text-[12px] md:text-14 text-end">
                  {p?.change_amount}
                </td>
                <td
                  className={
                    "py-4 px-2 font-nunito xs:text-[12px] md:text-14 text-end flex gap-2 justify-end"
                  }
                >
                  {p?.change_percentage}
                </td>
                <td className="py-4 px-2 font-nunito xs:text-[12px] md:text-14 text-end">
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
