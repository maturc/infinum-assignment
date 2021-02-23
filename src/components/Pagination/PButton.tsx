import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

type IPButton = {
  label: number;
  disabled?: boolean;
}

function PButton( {label, disabled=false}: IPButton ) {
  // @ts-ignore
  let { page } = useParams();
  const currentPage = Number(page) ?? 1;
  
  const history = useHistory();

  // -3 = "<"
  // -2 = "..."
  // -1 = ">"
  let handleClick: any;
  let switchedLabel;
  let renderButton;
  switch (label) {
    case -3:
      handleClick = () => history.push(`/${(currentPage-1)}`);
      switchedLabel = "<";
      renderButton = <button disabled={disabled} onClick={() => handleClick()}>{switchedLabel}</button>;
      break;
    case -2:
      switchedLabel = "...";
      renderButton = <button>{switchedLabel}</button>;
      break;
    case -1:
      handleClick = () => history.push(`/${currentPage+1}`);
      switchedLabel = ">";
      renderButton = <button disabled={disabled} onClick={() => handleClick()}>{switchedLabel}</button>;
      break;
    default:
      handleClick = () => history.push(`/${label}`);
      switchedLabel = label.toString();
      renderButton = <button onClick={() => handleClick()}>{switchedLabel}</button>;
  }


  return (
    <>
      { renderButton }
    </>
  );
}

export default PButton;