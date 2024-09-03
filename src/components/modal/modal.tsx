export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed z-10 inset-0 bg-black-primary  bg-opacity-50 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-30 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white p-2 ">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
