import { FC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

//関数コンポーネントの型指定にFC<>を使う
export const Text: FC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>textです</p>;
};
