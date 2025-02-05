import { useEffect, useState } from "react";
import {
  getNewStories,
  getTopStories,
  loadStoriesData,
} from "../services/stories-api";
import { useParams } from "react-router";
import { splitIntoChunks } from "@utils";
import { StoryItemType } from "../types";

interface useStoriesParam {
  fetchCallback: () => Promise<number[]>;
}

export const UseTopStories = () =>
  UseStoriesPagination({ fetchCallback: getTopStories });

export const UseNewStories = () =>
  UseStoriesPagination({ fetchCallback: getNewStories });

function UseStories({ fetchCallback }: useStoriesParam) {
  const [storiesList, setStoriesList] = useState<number[]>([]);

  useEffect(() => {
    async function fetchStories() {
      try {
        const stories = await fetchCallback();
        setStoriesList(stories);
      } catch (error) {
        console.error(`fail when executing ${fetchCallback.name}:`, error);
      }
    }

    fetchStories();
  }, [fetchCallback]);

  return storiesList;
}

function UseStoriesPagination({ fetchCallback }: useStoriesParam) {
  const storiesList = UseStories({ fetchCallback });
  const [currentStories, setCurrentStories] = useState<StoryItemType[]>([]);
  const { page } = useParams();
  const pageSize = 30;
  const currentPage = page ? parseInt(page) - 1 : 0;

  useEffect(() => {
    if (!storiesList.length) return;
    const pages = splitIntoChunks({
      inputArray: storiesList,
      perChunk: pageSize,
    });

    async function fetchStoriesData() {
      setCurrentStories([]);
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

  return {
    currentStories,
    page: currentPage + 1,
    maxPage: Math.ceil(storiesList.length / pageSize),
  };
}
