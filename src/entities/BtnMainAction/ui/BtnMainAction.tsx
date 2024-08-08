import styles from "../ui/BtnMainAction.module.scss";

export default function BtnMainAction({
  btnText,
  btnColor,
}: {
  btnText: string;
  btnColor: "gradient" | "solid" | "red";
}) {
  let currColor = {};

  const gradient = {
    backgroundImage: `linear-gradient(90deg, #0069e5 0%, #00ddeb 100%)`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  const solid = {
    color: "#0069E5",
  };
  const red = {
    color: "#EC6446",
  };

  if (btnColor === "gradient") {
    currColor = gradient;
  } else if (btnColor === "solid") {
    currColor = solid;
  } else {
    currColor = red;
  }

  return (
    <button type="submit" className={styles.btnMainAction} style={currColor}>
      {btnText}
    </button>
  );
}
