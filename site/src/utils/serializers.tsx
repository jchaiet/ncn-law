import React
 from "react";
const serializers = {
  types: {
    break: (props: any) => {
      const { style } = props.node;
      if (style === "hr") {
        return <hr className="hr" />;
      }
      return null;
    }
  }
}

export default serializers