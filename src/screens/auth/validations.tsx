import * as yup from 'yup';

export const validationSchemaLogin = yup.object({
    email: yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup.string()
        .min(8, "Password must contain at least 8 characters")
        .required("Enter your password")
});
export const validationSchemaRegister = yup.object({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup.string()
        .min(8, "Password must contain at least 8 characters")
        .required("Enter your password"),
    confirmPassword: yup.string()
        .oneOf([yup.ref("password")], "Password does not match")
        .required("Confirm your password"),
});