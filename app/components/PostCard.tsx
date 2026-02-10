type Props = {
  title: string;
  image: string;
  location: string;
};

export default function PostCard({ title, image, location }: Props) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <img src={image} alt={title} />
      <div style={{ padding: 12 }}>
        <div style={{ fontWeight: 600 }}>{title}</div>
        <div style={{ fontSize: 14, color: "#666" }}>{location}</div>
      </div>
    </div>
  );
}