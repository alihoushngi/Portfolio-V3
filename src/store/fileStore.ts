import { create } from "zustand";
import { persist } from "zustand/middleware";

interface File {
  href: string;
  accessKey: string;
}

interface FileStore {
  files: File[];
  addFile: (file: File) => void;
  deleteFile: (file: File) => void;
}

export const useFileStore = create<FileStore>()(
  persist(
    (set, get) => ({
      files: [],
      addFile: (file) => {
        const exists = get().files.some((f) => f.href === file.href);
        if (!exists) {
          set({ files: [...get().files, file] });
        }
      },
      deleteFile: (file) => {
        set({
          files: get().files.filter((f) => f.href !== file.href),
        });
      },
    }),
    { name: "opened-files" },
  ),
);
