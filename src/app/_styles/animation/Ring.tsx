export default function Ring({ styles }: { styles?: string }) {
  return (
    <div className={`relative h-5 w-5 ${styles}`}>
      <svg className="animate-spin" viewBox="0 0 40 40" height="20" width="20">
        <circle
          className="stroke-current opacity-10"
          cx="20"
          cy="20"
          r="17.5"
          pathLength="100"
          strokeWidth="5"
          fill="none"
        />
        <circle
          className="stroke-current"
          cx="20"
          cy="20"
          r="17.5"
          pathLength="100"
          strokeWidth="5"
          fill="none"
          strokeDasharray="25 75"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
