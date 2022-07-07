import { TextInputLiveFeedback } from "./TextInputLiveFeedback";

function FormBlock() {

  return (
    <TextInputLiveFeedback
      label="Username"
      id="username"
      name="username"
      helpText="Must be 8-20 characters and cannot contain special characters."
      placeholder="Jane"
      type="text"
    />
  );
}

export default FormBlock;