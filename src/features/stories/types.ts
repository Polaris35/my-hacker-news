export type Story = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  url: string;
};

export type StoryItemType = {
  index: number;
  story: Story;
};
