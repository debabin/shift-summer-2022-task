import { FormikProvider, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import { PersonalInfoBlock } from './PersonalInfoBlock';
import { limits } from "./constants/constants";

const initialValues = {
  firstName: '',
  middleName: '',
  lastName: '',
}

const onSubmit = (values) => {
  alert(JSON.stringify(values));
}

const Schema = Yup.object().shape({
  firstName: Yup.string()
    .min(limits.min.Name, 'Must be at least 2 characters')
    .max(limits.max.Name, 'Must be less than 30 characters')
    .required('First name is required')
    .matches(
      /^[a-zA-Z]+$/,
      'Cannot contain numbers, special characters or spaces'
    ),
});

export const DeliveryOrderForm = () => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: Schema,
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <PersonalInfoBlock />
        <div>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </Form>
    </FormikProvider>
  );
}