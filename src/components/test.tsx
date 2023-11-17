import React from "react";

import css from './Test.module.scss';

interface Props {
  test: boolean;
}

interface Stuffs {
  stuff: string;
}

export default function Test(props: Props) {
  const [stuff, setStuff] = React.useState<Stuffs>({stuff:  ''});
  return (
    <div className = {css.test}>
      This is another test: {props.test}
    </div>
  );
}