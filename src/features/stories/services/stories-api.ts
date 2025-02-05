import { Story } from "../types";

export async function getTopStories(): Promise<number[]> {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  return response.json();
}

export async function getNewStories(): Promise<number[]> {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/newstories.json"
  );
  return response.json();
}

export async function getBestStories(): Promise<number[]> {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/beststories.json"
  );
  return response.json();
}

export async function loadStoriesData(list: number[]): Promise<Story[]> {
  const stories = await Promise.all(
    list.map(async (id) => {
      const storyResponse = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      const story = await storyResponse.json();
      return story;
    })
  );
  return stories;
}
