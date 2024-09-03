function Header() {
  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-b backdrop-blur-lg bg-white transition-all">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-10">
        <div className="">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="flex z-40 font-semibold items-center gap-2">
              <div className={"text-xl space-x-1"}>
                <span>Interview</span>
              </div>
            </a>
            <div className="hidden items-center space-x-4 sm:flex">
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
