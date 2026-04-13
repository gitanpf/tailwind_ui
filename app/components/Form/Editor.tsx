"use client";

import { Bold, Italic, Link, List, ListOrdered } from "lucide-react";
import { useRef } from "react";

interface EditorProps {
  id: string;
  defaultValue?: string;
}

export function Editor({ id, defaultValue = "" }: EditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);

  function handleFormat(command: string, value?: string) {
    document.execCommand(command, false, value);

    if (editorRef.current) {
      editorRef.current.focus();
    }
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2"></div>

        <div className="flex items-center justify-end gap-1">
          <button
            type="button"
            onClick={() => handleFormat("bold")}
            className="rounded-full p-2 text-violet-500 transition-colors hover:bg-violet-100 hover:text-violet-600"
          >
            <Bold className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => handleFormat("italic")}
            className="rounded-full p-2 text-violet-500 transition-colors hover:bg-violet-100 hover:text-violet-600"
          >
            <Italic className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => {
              const url = prompt("Digite a URL:");
              if (url) handleFormat("createLink", url);
            }}
            className="rounded-full p-2 text-violet-500 transition-colors hover:bg-violet-100 hover:text-violet-600"
          >
            <Link className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => handleFormat("insertUnorderedList")}
            className="rounded-full p-2 text-violet-500 transition-colors hover:bg-violet-100 hover:text-violet-600"
          >
            <List className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => handleFormat("insertOrderedList")}
            className="rounded-full p-2 text-violet-500 transition-colors hover:bg-violet-100 hover:text-violet-600"
          >
            <ListOrdered className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={editorRef}
        contentEditable
        id={id}
        className="min-h-[120px] w-full overflow-y-auto rounded-lg border border-gray-300 px-3 py-2 text-sm text-zinc-500 shadow-sm transition-all outline-none focus-within:ring-2 focus-within:ring-violet-600"
        dangerouslySetInnerHTML={{ __html: defaultValue }}
        onInput={(e) => {}}
      />

      <span className="text-sm text-zinc-500">123 characters remaining</span>
    </div>
  );
}
