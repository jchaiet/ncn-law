import React from "react";

const portableTextComponents = {
  types: {
    break: (props: any) => {

      const { style } = props.value;
      if (style === "hr") {
        return <hr className="hr" />;
      }
      return null;
    }
  }
}

export default portableTextComponents