import PostCard from "./PostCard"
import SectionTitle from "./SectionTitle"

export default function CategoryRow({ title }: { title: string }) {
  return (
    <>
      <SectionTitle title={title} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <PostCard key={i} />
        ))}
      </div>

      <p className="text-center text-sm text-gray-500 mt-4">
        เลื่อนดูเพิ่มเติมได้อีกหลายหน้า
      </p>
    </>
  )
}