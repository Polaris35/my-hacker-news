import { Routes, Route } from "react-router";
import { TopStoriesList } from "../features/stories";
import { MainPageLayout } from "../layouts";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPageLayout />}>
        <Route path="/:page" element={<TopStoriesList />} />
      </Route>
    </Routes>
  );
}
