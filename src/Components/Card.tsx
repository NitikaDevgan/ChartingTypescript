type Props = {
  title: string;
  value: string;
};

const Card = ({ title, value }: Props) => {
  return (
    <div style={cardStyle}>
      <p style={{ color: "#6b7280", marginBottom: "8px" }}>{title}</p>
      <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>{value}</h2>
    </div>
  );
};

export default Card;

// styles (keep inside same file for now)
const cardStyle = {
  background: "#ffffff",
  padding: "16px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};
