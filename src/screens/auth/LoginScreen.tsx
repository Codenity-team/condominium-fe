import React from 'react'
import { Avatar, Button, Container, CssBaseline, FormControlLabel, 
    Grid, TextField, Typography, Link, Checkbox, Box  } from '@material-ui/core';
import {LockOutlined } from '@material-ui/icons';
import useStyleLogin from '../../styles/auth/LoginScreen-style';
import { Copyright } from '../../components/Copyright';
import { Link as LinkRoute} from 'react-router-dom';
import { useFormik } from 'formik';
import { validationSchemaLogin } from './validations';


export const LoginScreen = () => {
    const classes = useStyleLogin();

    const formik = useFormik({
        validationSchema: validationSchemaLogin,
        initialValues: {
            email : '',
            password : ''
        },
        onSubmit: (values)=>{
            console.log(values)
        }
    })
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        <Link variant="body2">
                            Forgot password?
                        </Link>
                        </Grid>
                        <Grid item>
                        <Link variant="body2">
                            <LinkRoute to="/auth/register">
                                {"Don't have an account? Sign Up"}
                            </LinkRoute>
                        </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    )
}
