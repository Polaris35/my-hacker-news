import { NavLink } from "react-router";
import { UseTopStories } from "../hooks/use-stories";
import { StoryList } from "./story-list";

export function TopStoriesList() {
  const { maxPage, page, currentStories } = UseTopStories();
  if (!currentStories.length) return <div>Loading...</div>;
  return (
    <div className="flex flex-col gap-2">
      <StoryList list={currentStories} />
      {page < maxPage ? <NavLink to={`/${page + 1}`}>More...</NavLink> : <></>}
    </div>
  );
}
