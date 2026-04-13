export function Logo() {
  return (
    <strong className="mx-1 flex items-center gap-2 text-xl font-semibold text-zinc-900">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-at-sign-icon lucide-at-sign"
      >
        <circle cx={12} cy={12} r={4} />
        <path d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-4 8" />
      </svg>
      <span>Untitled UI</span>
    </strong>
  );
}
