import { FormikProvider, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import FormBlock from './FormBlock';

const initialValues = {
  username: '',
}

const onSubmit = (values) => {
  alert(JSON.stringify(values));
}

const Schema = Yup.object().shape({
  username: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .max(20, 'Must be less than 20 characters')
    .required('Username is required')
    .matches(
      /^[a-zA-Z0-9]+$/,
      'Cannot contain special characters or spaces'
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
        <FormBlock label="" />
        <div>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </Form>
    </FormikProvider>
  );
}