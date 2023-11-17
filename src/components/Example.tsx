import React from "react";

import css from './Example.module.scss';

interface Props {
  test: boolean;
}

interface Stuffs {
  stuff: string;
}

export default function Example(props: Props) {
  const [stuff, setStuff] = React.useState<Stuffs>({stuff:  ''});
  return (
    <div className = {css.test}>
      This is another test: {props.test}
    </div>
  );
}