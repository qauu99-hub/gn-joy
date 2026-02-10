import HeroHeader from "./components/HeroHeader";
import VideoRow from "./components/VideoRow";
import PostCard from "./components/PostCard";

export default function HomePage() {
  return (
    <>
      <HeroHeader />

      <main className="container">
        <VideoRow />

        <section className="section">
          <div className="section-title">🏝️ ที่เที่ยวแนะนำ</div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 16,
            }}
          >
            <PostCard
              title="เกาะพีพี น้ำใส"
              location="กระบี่"
              image="/mock/post1.jpg"
            />
            <PostCard
              title="คาเฟ่วิวเขา"
              location="เชียงใหม่"
              image="/mock/post2.jpg"
            />
            <PostCard
              title="หาดสวย เงียบสงบ"
              location="ตรัง"
              image="/mock/post1.jpg"
            />
          </div>
        </section>
      </main>
    </>
  );
}