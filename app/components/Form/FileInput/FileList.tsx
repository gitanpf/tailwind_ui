"use client";

import { Trash2, UploadCloud } from "lucide-react";
import { useFileInput } from "./Root";
import { formatBytes } from "@/app/utils/format-bytes";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export function FileList() {
  const { files } = useFileInput();
  const [parent] = useAutoAnimate();

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <div
            key={file.name}
            className="group flex items-start gap-4 rounded-lg border border-violet-200 p-4"
          >
            <div className="rounded-full border border-violet-200 bg-violet-100 p-2 shadow-sm transition-colors group-hover:bg-violet-200">
              <UploadCloud className="h-5 w-5 text-violet-500" />
            </div>

            <div className="flex flex-1 flex-col items-start gap-1">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-violet-700">
                  {file.name}
                </span>
                <span className="text-sm text-violet-500">
                  {formatBytes(file.size)}
                </span>
              </div>

              <div className="flex w-full items-center gap-3">
                <div className="h-2 flex-1 rounded-full bg-violet-200">
                  <div
                    className="h-2 rounded-full bg-violet-600"
                    style={{ width: "80%" }}
                  />
                </div>
                <span className="text-sm font-medium text-violet-700">80%</span>
              </div>
            </div>

            <button
              type="button"
              className="ml-auto rounded-full p-2 hover:bg-violet-100"
            >
              <Trash2 className="h-5 w-5 text-violet-700" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
