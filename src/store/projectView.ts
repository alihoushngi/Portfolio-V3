import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ProjectView {
  view: "grid" | "list";
  setView: (view: "grid" | "list") => void;
}

interface ProjectViewStore {
  projectView: ProjectView;
  setProjectView: (view: "grid" | "list") => void;
}

export const useProjectViewStore = create<ProjectViewStore>()(
  persist(
    (set) => ({
      projectView: {
        view: "grid",
        setView: (view: "grid" | "list") =>
          set((state) => ({ projectView: { ...state.projectView, view } })),
      },
      setProjectView: (view) =>
        set((state) => ({ projectView: { ...state.projectView, view } })),
    }),
    { name: "project-view" },
  ),
);
