import { useState } from "react";
import Modal from "../../modal/modal";
import { useDebounce } from "../../../hooks/useDebounce";
import { useStockSearchData } from "../../../services/useStockSearchData";
import { InputContainer } from "../../input/input-container";
import { Input } from "../../input/input";
import SearchIcon from "../../../assets/svg/search.svg";
import CloseIcon from "../../../assets/svg/close.svg";
import Skeleton from "../../skeleton/skeleton";
import FilterButton from "./filter-button";
import SearchResult from "./search-result";
export default function SearchTickerModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectFilter, setSelectFilter] = useState<
    "all" | "stock" | "crypto" | "etf" | "Mutual Fund"
  >("all");

  const debouncedSearchTerm = useDebounce(searchValue, 500);
  const { data: searchData, isFetching } =
    useStockSearchData(debouncedSearchTerm);

  const filters = ["all", "stock", "etf", "Mutual Fund"];

  const handleNoResultFound = () => {
    return (
      searchValue.trim().length > 0 &&
      !isFetching &&
      (searchData?.length === 0)
    );
  };

  const filteredData = searchData?.filter((item) => {
    if (selectFilter === "all") {
      return (
        item["2. name"]
          ?.toLowerCase()
          ?.includes(debouncedSearchTerm?.toLowerCase()) ||
        item["1. symbol"]
          ?.toLowerCase()
          ?.includes(debouncedSearchTerm?.toLowerCase())
      );
    } else {
      return (
        (item["2. name"]
          ?.toLowerCase()
          ?.includes(debouncedSearchTerm?.toLowerCase()) &&
          item["3. type"] === selectFilter) ||
        (item["1. symbol"]
          ?.toLowerCase()
          ?.includes(debouncedSearchTerm?.toLowerCase()) &&
          item["3. type"] === selectFilter)
      );
    }
  });
  return (
    <Modal onClose={onClose}>
      <div className="p-3 flex flex-col gap-3">
        <InputContainer
          leadingIcon={<img src={SearchIcon} alt="icon" className="w-4 mr-2" />}
          trailingIcon={
            <img
              src={CloseIcon}
              alt="icon"
              className="w-5 cursor-pointer"
              onClick={onClose}
            />
          }
        >
          <Input
            placeholder="Search company"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </InputContainer>
        <div className="flex gap-2 mb-2 flex-col">
          <span className="text-sm font-medium">Filters</span>
          <div className="w-full flex gap-3">
            {filters.map((filter) => (
              <FilterButton
                key={filter}
                filter={filter}
                isActive={selectFilter === filter}
                onClick={() => setSelectFilter(filter as  "all" | "stock" | "crypto" | "etf" | "Mutual Fund")}
              />
            ))}
          </div>
        </div>
        <hr />
        <div className="flex gap-2 flex-col">
          {searchValue?.toString()?.trim().length > 0 && (
            <span className="text-sm font-medium">Best match: </span>
          )}
          {!isFetching && handleNoResultFound() && (
            <span className="text-sm font-medium text-red-500">
              No results found
            </span>
          )}
          <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto">
            {isFetching && <Skeleton />}
            {!isFetching &&
              filteredData?.map((item) => (
                <SearchResult
                  key={item["1. symbol"] + item["2. name"]}
                  item={item}
                />
              ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}
