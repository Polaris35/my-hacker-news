export function Footer() {
  return (
    <div className="flex justify-center items-center border-t-2 border-orange-500 py-5 text-xl md:text-sm">
      <div className="flex flex-col gap-2">
        <div className="flex gap-1 text-md md:text-xs">
          <a href="#">Guidelines</a>
          <p> | </p>
          <a href="#">FAQ</a>
          <p> | </p>
          <a href="#">Lists</a>
          <p> | </p>
          <a href="#">API</a>
          <p> | </p>
          <a href="#">Security</a>
          <p> | </p>
          <a href="#">Legal</a>
          <p> | </p>
          <a href="#">Apply to YC</a>
          <p> | </p>
          <a href="#">Contacts</a>
        </div>
        <div className="mx-auto">
          Seacrh: <input className="border-black border-[1px]" type="text" />
        </div>
      </div>
    </div>
  );
}
