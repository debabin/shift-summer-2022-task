import * as Yup from 'yup';
import { limits } from "./constants/constants";
import { TextInputLiveFeedback } from "./TextInputLiveFeedback";

export const ReceiverValidationSchema = {
  firstName: Yup.string()
    .min(limits.min.Name, 'Must be at least 2 characters')
    .max(limits.max.Name, 'Must be less than 30 characters')
    .required('First name is required')
    .matches(
      /^[a-zA-Z]+$/,
      'Cannot contain numbers, special characters or spaces'
    ),
}

export const PersonalInfoBlock = (props) => {
  return (
    <>
      <div className="form-block-label">Personal information of the receiver</div>
      <TextInputLiveFeedback
        label="Enter first name:"
        id="firstName"
        name="firstName"
        helpText={"Must be " + limits.min.Name + "-" + limits.max.Name + " characters and cannot contain special characters."}
        placeholder="Type here..."
        type="text"
      />
    </>
  );
}