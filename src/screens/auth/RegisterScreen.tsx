import React from 'react'
import { Avatar, Box, Button, Checkbox, Container, CssBaseline, Link, FormControlLabel, Grid, TextField, Typography } 
from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { Link as LinkRoute} from 'react-router-dom';
import useStylesRegister from '../../styles/auth/RegisterScreen-style'
import { Copyright } from '../../components/Copyright';
import { useFormik } from 'formik';
import { validationSchemaRegister } from './validations';

export const RegisterScreen = () => {
    const classes = useStylesRegister();
    const formik = useFormik({
        initialValues: {
            firstName : '',
            lastName : '',
            email : '',
            password : '',
            confirmPassword : ''
        },
        validationSchema: validationSchemaRegister,
        onSubmit: (values) =>{
            console.log(values);
        }
    });

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign up
            </Typography>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="Nombre"
                        autoFocus
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Apellido"
                        name="lastName"
                        autoComplete="lname"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirmación contraseña"
                        type="password"
                        id="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                Sign Up
                </Button>
                <Grid container justify="flex-end">
                <Grid item>
                    <Link variant="body2">
                        <LinkRoute to="/auth/login">
                            Already have an account? Sign in
                        </LinkRoute>
                    </Link>
                </Grid>
                </Grid>
            </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    )
}
