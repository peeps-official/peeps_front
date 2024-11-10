export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center space-x-2">
      {[0, 1, 2, 3].map((index) => (
        <div
          key={index}
          className={`h-2 w-2 animate-bounce rounded-full bg-gray-500`}
          style={{
            animationDelay: `${index * 0.1}s`,
            animationDuration: '0.8s',
          }}
        ></div>
      ))}
    </div>
  )
}
