import React from "react";
import Button from "@material-ui/core/Button";
import useStyle from "./../../../style";

export default function DemoMaterialPage() {
  const classes = useStyle();

  return (
    <div className={classes.content}>
      <h1 className={classes.title}>DemoMaterialPage</h1>
      <span>Hello</span>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
}
