import contributors from "../data/contributors.json"

export default function Contributors() {
  return (
    <div className="p-10 grid md:grid-cols-3 gap-6">
      {contributors.map((c, i) => (
        <div key={i} className="bg-gray-800 p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold">{c.name}</h3>
          <p className="text-gray-400">{c.role}</p>
        </div>
      ))}
    </div>
  )
}
