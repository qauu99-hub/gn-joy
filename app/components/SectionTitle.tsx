export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-xl font-bold text-gray-800 border-l-4 border-sky-400 pl-3">
      {title}
    </h2>
  )
}