// Using text-2xl for a larger logo
export function Logo({ className, ...props }) {
  return (
    // Changed text-lg to text-2xl
    <div className={`flex flex-row text-2xl ${className}`} {...props}>
      <span className="font-bold text-red-600">ERP</span>
      <span className="font-medium">rompt.lt</span>
    </div>
  )
}