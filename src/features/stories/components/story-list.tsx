import { DateTime } from "luxon";
import { StoryItemType } from "../types";
import { StoryItem } from "./story-item";

type StoryListProps = {
  list: StoryItemType[];
};

export function StoryList({ list }: StoryListProps) {
  return (
    <ol>
      {list.map((item) => (
        <StoryItem
          key={item.story.id}
          index={item.index}
          title={item.story.title}
          url={item.story.url}
          pointCount={item.story.score}
          creatorName={item.story.by}
          time={
            DateTime.fromSeconds(item.story.time).toRelative({
              locale: "en",
            })!
          }
          commentCount={item.story.descendants}
        />
      ))}
    </ol>
  );
}
