export default function Card({ title, description, children }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition-transform">
      {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
      {description && (
        <p className="text-gray-400 text-sm mb-4">{description}</p>
      )}
      {children}
    </div>
  )
}
