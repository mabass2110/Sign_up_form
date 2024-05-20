
import { useFormik } from "formik";
import './App.css'
import { basicSchema } from "./validation";


function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert("Login Successful");
    },

    validate: (values) => {
      let errors = {};
      if (!values.email) errors.email = "field required";
      if(!values.email.includes('@')) errors.email = "Please fill your email correctly"
      if (!values.password) errors.password = "field required";
      return errors;
    },
  })

  

  return (
    <>

      <div className="flex min-h-full flex-1 flex-col justify-center dark:bg-slate-800  px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="data:image/png;base64,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"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  autoComplete="email"
                  onChange={formik.handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />

              {formik.errors.password ? (<div style={{ color: 'red' }}>{formik.errors.password}</div>) : null}
                
           
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-blue-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange = {formik.handleChange}
                  value={formik.values.password}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />

                
            {formik.errors.password ? (
                <div style={{ color: 'red' }}>{formik.errors.password}</div>
              ) : null}
               
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-green-600 hover:text-indigo-500">
              Start a 30 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  )

    
     
}

export default App