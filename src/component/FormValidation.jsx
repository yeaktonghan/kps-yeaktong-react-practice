import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const signInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[~!@#$%^&*()_+])(?=.*[A-Z]).{6,20}$/, 'Please enter 6 to 20 characters which contain at least 1 digit, 1 uppercase and 1 lowercase letter')
        .required('Password required')
});

export default class FormValidation extends Component {
    render() {
        return (
            <div>
                <h1>Sign up</h1>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={signInSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <Field name="email" type="email" className="border"/><br />
                            {errors.email && touched.email ? <div>{errors.email}</div> : null} <br />

                            <Field name="password" type="text" className="border"/> <br />
                            {errors.password && touched.password ? <div>{errors.password}</div> : null} <br />

                            <button type="submit" className="bg-black text-white p-2">Submit</button> <br />
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}
