"use client";

import { UploadCloud } from "lucide-react";
import { useFileInput } from "./Root";

export function Trigger() {
  const { id } = useFileInput();

  return (
    <label
      htmlFor={id}
      className="group flex flex-1 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-violet-100 px-6 py-4 text-center transition-colors hover:bg-violet-50"
    >
      <div className="rounded-full border border-violet-200 bg-violet-100 p-2 shadow-sm transition-colors group-hover:bg-violet-200">
        <UploadCloud className="h-5 w-5 text-violet-500" />
      </div>
      <p className="mt-2 text-sm text-violet-500">
        <span className="font-semibold text-violet-700">Click to upload</span>{" "}
        or drag and drop
      </p>
      <p className="mt-1 text-xs text-violet-500">SVG, PNG, JPG or GIF</p>
    </label>
  );
}
