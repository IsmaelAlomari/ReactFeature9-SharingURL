// Styling
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  return (
    <DeleteButtonStyled className="btn btn-dark" onClick={props.deleteProduct}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
