import { useEffect, useState } from "react";
import { getTopStories, loadStoriesData } from "../services/stories-api";
import { useParams } from "react-router";
import { splitIntoChunks } from "@utils";
import { StoryItemType } from "../types";

function UseTopStories() {
  const [storiesList, setStoriesList] = useState<number[]>([]);

  useEffect(() => {
    async function fetchTopStories() {
      try {
        const stories = await getTopStories();
        setStoriesList(stories);
      } catch (error) {
        console.error("fail to load top stories:", error);
      }
    }

    fetchTopStories();
  }, []);

  return storiesList;
}

export function UseTopStoriesPagination() {
  const storiesList = UseTopStories();
  const [currentStories, setCurrentStories] = useState<StoryItemType[]>([]);
  const { page } = useParams();
  const pageSize = 30;
  const currentPage = page ? parseInt(page!) - 1 : 0;

  useEffect(() => {
    if (!storiesList.length) return;
    const pages = splitIntoChunks({
      inputArray: storiesList,
      perChunk: pageSize,
    });

    async function fetchStoriesData() {
      try {
        const stories = await loadStoriesData(pages[currentPage]);
        const StoryItemList = stories.map((story, indx): StoryItemType => {
          return {
            // just calculate serial number of stories in list
            index: currentPage * pageSize + 1 + indx,
            story,
          };
        });
        setCurrentStories(StoryItemList);
      } catch (error) {
        console.error("fail to load stories data:", error);
      }
    }

    fetchStoriesData();
  }, [storiesList, currentPage]);

  console.log("storiesList.length: ", storiesList.length);
  return {
    currentStories,
    page: currentPage + 1,
    maxPage: Math.ceil(storiesList.length / pageSize),
  };
}
