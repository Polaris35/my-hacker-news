import { NavLink } from "react-router";
import { UseNewStories } from "../hooks/use-stories";
import { StoryList } from "./story-list";

export function NewestStoriesList() {
  const { maxPage, page, currentStories } = UseNewStories();
  return (
    <div className="flex flex-col gap-2">
      <StoryList list={currentStories} />
      {page < maxPage ? (
        <NavLink to={`/newest/${page + 1}`}>More...</NavLink>
      ) : (
        <></>
      )}
    </div>
  );
}
