export function Header() {
  return (
    <div className="bg-orange-500 flex gap-2 items-center p-1 text-xl md:text-sm">
      <a href="#" className=" flex gap-1">
        <img
          className="border-white border-[1px]"
          height={20}
          width={20}
          src="ycombinator-icon.svg"
        />
        <p className="font-bold">Hacker news</p>
      </a>
      <a href="#">new</a>
      <p> | </p>
      <a href="#">past</a>
      <p> | </p>
      <a href="#">comments</a>
      <p> | </p>
      <a href="#">show</a>
      <p> | </p>
      <a href="#">jobs</a>
    </div>
  );
}
