import * as Yup from 'yup';
import { FormikProvider, Form, useFormik } from 'formik';
import { RecieverPersonalInfoBlock } from './RecieverPersonalInfoBlock';
import { limits } from "./constants/constants";

export const DeliveryOrderForm = () => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: ValidationSchema,
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <RecieverPersonalInfoBlock />
        <div>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </Form>
    </FormikProvider>
  );
}

const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
}

const initialValues = {
  receiverFirstName: '',
  receiverLastName: '',
  receiverMiddleName: '',
  receiverBirthDate: '',
  receiverRegistrationAddress: '',
  senderFirstName: '',
  senderLastName: '',
  senderMiddleName: '',
  senderBirthDate: '',
  senderRegistrationAddress: '',
}

const ValidationSchema = Yup.object().shape({
  receiverFirstName: Yup.string()
    .min(limits.min.Name, 'Must be at least ' + limits.min.Name + ' characters')
    .max(limits.max.Name, 'Must be less than ' + limits.max.Name + ' characters')
    .required('First name is required')
    .matches(
      /^[a-zA-Zа-яА-Я]+$/,
      'Cannot contain numbers, special characters or spaces'
    ),
  receiverLastName: Yup.string()
    .min(limits.min.Name, 'Must be at least ' + limits.min.Name + ' characters')
    .max(limits.max.Name, 'Must be less than ' + limits.max.Name + ' characters')
    .required('Last name is required')
    .matches(
      /^[a-zA-Zа-яА-Я]+$/,
      'Cannot contain numbers, special characters or spaces'
    ),
  receiverMiddleName: Yup.string()
    .min(limits.min.Name, 'Must be at least ' + limits.min.Name + ' characters')
    .max(limits.max.Name, 'Must be less than ' + limits.max.Name + ' characters')
    .matches(
      /^[a-zA-Zа-яА-Я]+$/,
      'Cannot contain numbers, special characters or spaces'
    ),
});

