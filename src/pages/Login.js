// create login component
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import secureLocalStorage from "react-secure-storage"
import { loginUser } from "../redux/actions/authActions"
import { useFormik } from "formik"
import { basicSchema } from "../schemas"
// import { loginUser } from "../redux/actions/authActions"

function Login(props){

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {isLogin} = useSelector(state => state.authReducer)
    const {auth} = useSelector(state => state.authReducer)

    const onSubmit = async (values, actions) => {
        console.log(values)
        console.log(actions)
        dispatch(loginUser(values))
        .then(res => {
            navigate("/")
        })

        await new Promise((resolve) => setTimeout(resolve, 1000))
        actions.resetForm()
        // e.preventDefault()
        // console.log("onsubmit")
        // console.log(user)
        // dispatch(loginUser(user))
        // .then(resp => {
        //     navigate("/")
        // })
    }

    const {values, errors, handleBlur, handleChange, handleSubmit, isSubmitting, resetForm} = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: basicSchema,
        onSubmit
    })

    console.log(errors)

    
    useEffect(() => {
      console.log(isLogin)
      console.log('in storage', secureLocalStorage.getItem('auth'))
    //   console.log('auth', auth.data.access_token)
    }, [])

    
    return(
        <main className="vh-100 d-flex justify-content-center align-items-center">
                <form onSubmit={handleSubmit} className="w-25">
                    {/* <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
                    <h1 className="h3 mb-3 mt-5">Please sign in</h1>

                    <div className="form-floating mb-3">
                        <input 
                            type="email" 
                            name="email"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.email ? "form-control border-danger": "form-control"}
                            placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                    {errors.email && <p className="text-danger">{errors.email}</p>}
                    </div>
                    <div className="form-floating mb-2">
                        <input 
                            type="password"
                            name="password" 
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="password"
                            className={errors.password ? "form-control border-danger": "form-control"}
                            placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                    {errors.password && <p className="text-danger">{errors.password}</p>}
                    </div>

                    <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                    </div>
                    <button
                        disabled={isSubmitting}
                         className="w-100 btn btn-lg btn-primary" type="submit">Sign In</button>
                    <p className="mt-5 mb-3 text-body-secondary text-center">© 2015 - 2023</p>
                </form>
        </main>
    )
}

export default Login