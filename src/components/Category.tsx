export default function Category() {
  return (
    <div className="mt-12 flex flex-col items-center justify-between rounded py-6  hover:bg-red-500 transition-all hover:text-white max-w-full max-h-36">
      <div className="img">
        <img src="/CellPhone.png" alt="" />
      </div>
      <div className="title text-xl font-medium">
        <p>Phones</p>
      </div>
    </div>
  );
}
