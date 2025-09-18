"use client";

import { useEffect } from "react";

export default function NoRightClick() {
  useEffect(() => {
    const onContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && e.key.toLowerCase() === "s") ||
        (e.ctrlKey && e.key.toLowerCase() === "u") ||
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") ||
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "c") ||
        e.key === "F12"
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const onDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("dragstart", onDragStart);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("dragstart", onDragStart);
    };
  }, []);

  return null;
}
