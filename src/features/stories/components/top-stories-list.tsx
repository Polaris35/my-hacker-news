import { NavLink } from "react-router";
import { UseTopStoriesPagination } from "../hooks/use-top-stories";
import { StoryList } from "./story-list";

export function TopStoriesList() {
  const { maxPage, page, currentStories } = UseTopStoriesPagination();
  console.log("maxPage: ", maxPage);
  console.log("Page: ", page);
  return (
    <div className="flex flex-col gap-2">
      <StoryList list={currentStories} />
      {page < maxPage ? <NavLink to={`/${page + 1}`}>More...</NavLink> : <></>}
    </div>
  );
}
