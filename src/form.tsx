import React from "react";

import * as C from "@nexys/react-bootstrap";

import * as V from "@nexys/validation";
import { FormData } from "./type";

const shape: V.Type.Shape = {
  price: { type: "number" },
  annualRevenue: { type: "number" },
  equity: { type: "number" },
};

const FormUI = ({ onSuccess }: { onSuccess: (v: FormData) => void }) => {
  const [data, setData] = React.useState<Partial<FormData>>({});
  const [errors, setErrors] = React.useState<{
    [field: string]: V.Type.ErrorOut;
  }>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = V.Main.checkObject(data, shape);

    if (Object.keys(validation).length > 0) {
      //  alert(JSON.stringify(validation));
      setErrors(validation as any);
      return;
    }

    setErrors({});

    onSuccess(data as FormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <C.Form.Wrapper label={"Price"} errors={errors["price"]}>
        <C.Form.Input.Number
          errors={errors["price"]}
          value={data.price}
          onChange={(price) => setData({ ...data, price })}
        />
      </C.Form.Wrapper>

      <C.Form.Wrapper label={"Annual Revenue"} errors={errors["annualRevenue"]}>
        <C.Form.Input.Number
          errors={errors["annualRevenue"]}
          value={data.annualRevenue}
          onChange={(annualRevenue) => setData({ ...data, annualRevenue })}
        />
      </C.Form.Wrapper>
      <C.Form.Wrapper label={"Equity"} errors={errors["equity"]}>
        <C.Form.Input.Number
          errors={errors["equity"]}
          value={data.equity}
          onChange={(equity) => setData({ ...data, equity })}
        />
      </C.Form.Wrapper>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormUI;
