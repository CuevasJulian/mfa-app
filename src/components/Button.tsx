interface IButton {
  text: string;
  onClick: () => void;
}

export default function Button({ onClick, text }: IButton) {
  return (
    <div
      style={{
        height: "30px",
        backgroundColor: "blue",
        color: "white",
        borderRadius: "18px",
        textAlign: "center",
        padding: "10px 25px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
