type StoryItemProps = {
  index: number;
  title: string;
  url: string;
  pointCount: number;
  creatorName: string;
  time: string;
  commentCount: number;
};

export function StoryItem(props: StoryItemProps) {
  return (
    <div className="flex gap-1">
      <p className="text-gray-400">{props.index}.</p>
      {/* <button className="flex pt-2">
        <img width={10} height={10} src="/upvote-arrow.svg" />
      </button> */}
      <div className="flex flex-col text-gray-400 text-sm">
        <div className="flex">
          <a href={props.url} className="text-black">
            {props.title}
          </a>
          (
          <a href={props.url} className="hover:underline">
            {props.url ? new URL(props.url).hostname : ""}
          </a>
          )
        </div>
        <p className="text-xs">
          {props.pointCount + " points by "}
          <a className="hover:underline" href="#">
            {props.creatorName}
          </a>
          <a href="#" className="hover:underline">
            {" " + props.time}
          </a>
          {" | "}
          <a href="#" className="hover:underline">
            {props.commentCount} comments
          </a>
        </p>
      </div>
    </div>
  );
}
