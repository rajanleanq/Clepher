import { InputContainer } from "../input/input-container";
import SearchTickerModal from "./search-ticker/search-ticker";
import SearchIcon from "../../assets/svg/search.svg";
import { useState } from "react";

function Header() {
  const [searchModal, setSearchModal] = useState<boolean>(false);
  return (
    <>
      <nav className="sticky h-16 inset-x-0 top-0 z-10 w-full border-b backdrop-blur-lg bg-white transition-all">
        <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-10">
          <div className="">
            <div className="flex h-16 items-center justify-between">
              <a
                href="/"
                className="flex z-40 font-semibold items-center gap-2"
              >
                <div className={"text-xl space-x-1"}>
                  <span>Interview</span>
                </div>
              </a>
              <div className="xs:w-[150px] md:w-[300px] cursor-pointer" onClick={() => setSearchModal(true)}>
                <InputContainer
                  leadingIcon={
                    <img src={SearchIcon} alt="icon" className="w-4 mr-2" />
                  }
                >
                  <p className="text-gray-400 xs:text-[12px] md:text-13">Search Company</p>
                </InputContainer>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {searchModal && <SearchTickerModal onClose={() => setSearchModal(false)} />}
    </>
  );
}

export default Header;
