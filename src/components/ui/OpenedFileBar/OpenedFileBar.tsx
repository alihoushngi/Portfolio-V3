"use client";

import { useFileStore } from "@/store/fileStore";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { RxCross2 } from "react-icons/rx";

const OpenedFileBar = () => {
  const files = useFileStore((state) => state.files);
  const deleteFile = useFileStore((state) => state.deleteFile);
  const pathname = usePathname();
  const router = useRouter();

  const handleDelete = (file: { href: string; accessKey: string }) => {
    const filePath = new URL(file.href, window.location.origin).pathname;

    const currentIndex = files.findIndex((f) => {
      const fPath = new URL(f.href, window.location.origin).pathname;
      return fPath === filePath;
    });

    deleteFile(file);

    if (filePath === pathname) {
      const remainingFiles = files.filter((f) => {
        const fPath = new URL(f.href, window.location.origin).pathname;
        return fPath !== filePath;
      });

      if (remainingFiles.length > 0) {
        const nextFile =
          remainingFiles[currentIndex] || remainingFiles[currentIndex - 1];
        if (nextFile) {
          const nextPath = new URL(nextFile.href, window.location.origin)
            .pathname;
          router.push(nextPath);
        }
      } else {
        router.push("/about");
      }
    }
  };

  return (
    <div
      className={`max-md:${files.length <= 0 && "hidden"} border-b border-Appearance-Slate-700 w-full text-1 min-h-[46px] flex gap-2 overflow-x-auto max-md:text-xs max-md:min-h-0`}
    >
      {files.map((file, index) => {
        const filePath = new URL(file.href, window.location.origin).pathname;
        const isActive = filePath === pathname;

        return (
          <Link
            href={file.href}
            key={index}
            className="p-4 border-r border-Appearance-Slate-700 flex items-center justify-between gap-3 min-w-40 max-md:min-w-28 "
          >
            <span
              className={
                isActive
                  ? "text-Appearance-Slate-50"
                  : "text-Appearance-Slate-600 hover:text-Appearance-Slate-300 transition-all duration-200 ease-linear"
              }
            >
              {file.accessKey || file.href}
            </span>
            <span
              className={
                isActive
                  ? "text-Appearance-Slate-50 cursor-pointer"
                  : "text-Appearance-Slate-600 cursor-pointer hover:text-Appearance-Slate-300 transition-all duration-200 ease-linear"
              }
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleDelete(file);
              }}
            >
              <RxCross2 />
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default OpenedFileBar;
