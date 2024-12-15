import { StoryItem } from "./features/stories/components/story-item";
import { MainPageLayout } from "./layouts/main-page";

function App() {
  return (
    <MainPageLayout>
      <StoryItem
        index={0}
        title={"bla bla made somthhing incredible..."}
        url={"https://chatgpt.com/c/675ac06a-ae4c-8009-b33e-8b5ac9dbfd43"}
        pointCount={3}
        commentCount={2}
        creatorName={"bobyTheWitcher"}
        time={""}
      />
    </MainPageLayout>
  );
}

export default App;
