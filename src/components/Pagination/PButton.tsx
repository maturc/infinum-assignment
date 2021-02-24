import { useHistory, useParams } from "react-router-dom";

type IPButtonProps = {
  label: number;
  disabled?: boolean;
}

function PButton( {label, disabled=false}: IPButtonProps ) {
  const { page, search } = useParams<IParamTypes>();
  const currentPage = Number(page ?? 1);
  const searchQuery = search ?? "";

  const history = useHistory();

  // -3 = "<"
  // -2 = "..."
  // -1 = ">"
  let handleClick: any;
  let switchedLabel;
  let renderButton;
  switch (label) {
    case -3:
      handleClick = () => history.push(`/${(currentPage-1)}/${searchQuery}`);
      switchedLabel = "<";
      renderButton = <button disabled={disabled} onClick={() => handleClick()}>{switchedLabel}</button>;
      break;
    case -2:
      switchedLabel = "...";
      renderButton = <button>{switchedLabel}</button>;
      break;
    case -1:
      handleClick = () => history.push(`/${currentPage+1}/${searchQuery}`);
      switchedLabel = ">";
      renderButton = <button disabled={disabled} onClick={() => handleClick()}>{switchedLabel}</button>;
      break;
    default:
      handleClick = () => history.push(`/${label}/${searchQuery}`);
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