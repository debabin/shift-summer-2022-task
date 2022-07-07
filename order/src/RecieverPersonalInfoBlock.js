import { TextInputLiveFeedback } from "./TextInputLiveFeedback";

export const RecieverPersonalInfoBlock = (props) => {
  return (
    <>
      <div className="form-block-label">Personal information of the receiver</div>
      <TextInputLiveFeedback
        label="Enter first name:"
        id="receiverFirstName"
        name="receiverFirstName"
        // helpText={"Must be " + limits.min.Name + "-" + limits.max.Name + " characters and cannot contain special characters."}
        type="text"
      />
      <TextInputLiveFeedback
        label="Enter last name:"
        id="receiverLastName"
        name="receiverLastName"
        type="text"
      />
      <TextInputLiveFeedback
        label="Enter middle name:"
        id="receiverMiddleName"
        name="receiverMiddleName"
        type="text"
      />
    </>
  );
}