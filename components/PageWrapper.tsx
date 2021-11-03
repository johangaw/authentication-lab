import { CSSProperties, FC } from "react";

interface Props {
  style?: CSSProperties;
}

export const PageWrapper: FC<Props> = (props) => (
  <main
    style={{
      maxWidth: 800,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      ...props.style,
    }}
  >
    {props.children}
  </main>
);
