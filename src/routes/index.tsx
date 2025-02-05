import { Routes, Route } from "react-router";
import { NewestStoriesList, TopStoriesList } from "@features/stories";
import { MainPageLayout } from "@layouts";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPageLayout />}>
        <Route path="/:page?" element={<TopStoriesList />} />
        <Route path="/newest/:page?" element={<NewestStoriesList />} />
      </Route>
    </Routes>
  );
}
