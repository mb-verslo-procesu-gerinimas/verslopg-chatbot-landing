// Using text-2xl for a larger logo
export function Logo({ className, ...props }) {
  return (
    // Changed text-lg to text-2xl
    <div className={`flex flex-row items-center text-2xl ${className}`} {...props}>
      <span className="font-bold text-blue-600">ERP</span>
      <span className="font-medium">rompt</span>
    </div>
  )
}