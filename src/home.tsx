import React from "react";
import { title, github } from "./config";

import FormUI from "./form";
import Result from "./result";

export default () => {
  const [data, setData] = React.useState(undefined);

  return (
    <>
      <h1>{title}</h1>

      <FormUI onSuccess={(v) => setData(v)} />
      {data && <Result data={data} />}

      <p>
        <a href={github.url}>
          <i className="fa fa-code"></i> Source
        </a>
        &nbsp;available under MIT license. Contributions are welcome.
      </p>
    </>
  );
};
