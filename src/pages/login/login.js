
import { getSession, signOut } from "next-auth/react"
import { signIn } from "next-auth/react"
import Router from "next/router"
import Link from "next/link"
// import dynamic from 'next/dynamic';
import { useState } from "react"

const Page = () => {
  // const Countries = dynamic(() => import('../components/Countries'), {
  //   ssr:false
  // });

  const [forgetPWD, setForgetPWD] = useState(false)
  return (
    <>
      {!forgetPWD && (
        <section className="bg-login py-4">
          <div className="container">
            <div className="row">
              <h3 className="text-center pb-3 text-white">
                LOGIN OR REGISTER AN ACCOUNT
              </h3>
              <div className="col-lg-12 col-xl-10 mx-auto">
                <div className="d-flex align-items-strech flex-wrap flex-xl-nowrap">
                  <div className="bg-secondary p-4 flex-fill w50">
                    <div className="text-center">
                      <div className="mb-4">
                        <h4 className="card-title">Login</h4>
                      </div>
                    </div>
                    <form onSubmit={login} method="post">
                      <div className="mb-2">
                        <input
                          type="email"
                          className="form-control text-muted form-control-lg rounded-0 border p-3"
                          name="email"
                          placeholder="email@address.com"
                          maxLength={50}
                          required
                        />
                        <span
                          id="login-email-error"
                          className="invalid-feedback"
                        ></span>
                      </div>
                      <div className="mb-2">
                        <div className="position-relative">
                          <input
                            type="password"
                            className="form-control text-muted form-control-lg rounded-0 border p-3"
                            name="password"
                            placeholder="8+ characters required"
                            minLength={8}
                            maxLength={30}
                            required
                          />
                          <a
                            className="position-absolute top-50 end-0 translate-middle me-2"
                            href="javascript:;"
                          >
                            <i id="changePassIcon" className="bi-eye-slash"></i>
                          </a>
                          <span
                            id="login-pwd-error"
                            className="invalid-feedback"
                          ></span>
                        </div>
                      </div>
                      {/* <div className="text-center my-4">
                        <span
                          className="form-label-link"
                          style={{ cursor: "pointer" }}
                          onClick={() => setForgetPWD(true)}
                        >
                          Forgot Password?
                        </span>
                      </div> */}
                      <div className="d-grid pt-3">
                        <button
                          type="submit"
                          className="btn primary-btn bg-success text-white"
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                    <div className="d-flex gap-2 align-items-center justify-content-center mt-4">
                      {/* <button onClick={() => signIn("google")} type="button" className="btn btn-white border rounded-0 p-3 flex-fill">
                      <Image src="/img/svg/google-icon.svg" alt="" width={20} height={20} /> Log in with Google
                    </button>
                    <button onClick={() => signIn("facebook")} type="button" className="btn btn-white border rounded-0 p-3 flex-fill">
                      <Image src="/img/svg/fb-icon.svg" alt="" width={20} height={20} />Log in with Facebook
                    </button> */}
                    </div>
                  </div>
                  <div className="bg-white p-4 flex-fill w50">
                    <div className="text-center">
                      <div className="mb-4">
                        <h4 className="card-title">Sign Up</h4>
                      </div>
                    </div>
                    <form onSubmit={register} method="post">
                      <div className="my-2">
                        <input
                          type="text"
                          className="form-control text-muted form-control-lg rounded-0 border p-3"
                          name="name"
                          minLength={3}
                          maxLength={20}
                          placeholder="Your Full Name"
                          required
                        />
                        <span
                          id="name-error"
                          className="invalid-feedback"
                        ></span>
                      </div>
                      <div className="mb-2">
                        <input
                          type="email"
                          className="form-control text-muted form-control-lg rounded-0 border p-3"
                          name="email"
                          maxLength={50}
                          placeholder="email@address.com"
                          required
                        />
                        <span
                          id="reg-email-error"
                          className="invalid-feedback"
                        ></span>
                      </div>
                      <div className="mb-2">
                        <div className="position-relative">
                          <input
                            type="password"
                            className="form-control text-muted form-control-lg rounded-0 border p-3"
                            name="password"
                            minLength={8}
                            maxLength={12}
                            placeholder="8+ characters required"
                            required
                          />
                          <a
                            className="position-absolute top-50 end-0 translate-middle me-2"
                            href="javascript:;"
                          >
                            <i id="changePassIcon" className="bi-eye-slash"></i>
                          </a>
                          <span
                            id="reg-pwd-error"
                            className="invalid-feedback"
                          ></span>
                        </div>
                      </div>
                      <div className="mb-2">
                        {/* <Countries /> */}
                        <span
                          id="country-error"
                          className="invalid-feedback"
                        ></span>
                      </div>
                      <div className="d-grid">
                        <button
                          type="submit"
                          className="btn primary-btn bg-success text-white"
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>

                    {/* <div className='d-flex gap-2 align-items-center justify-content-center mt-4'>
                    <button onClick={() => signIn("google")} type="button" className="btn btn-white border rounded-0 p-3 flex-fill">
                      <Image src="/img/svg/google-icon.svg" alt="" width={20} height={20} /> Log in with Google
                    </button>
                    <button onClick={() => signIn("facebook")} type="button" className="btn btn-white border rounded-0 p-3 flex-fill">
                      <Image src="/img/svg/fb-icon.svg" alt="" width={20} height={20} /> Log in with Facebook
                    </button>
                  </div> */}
                  </div>
                </div>
              </div>
              <div className="col-12 text-center mt-4">
                <Link href="/">Back to Home</Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {forgetPWD && (
        <section className="container-fluid bg-login">
          <div className="container">
            <div className="row justify-content-center align-items-center g-0">
              <h3 className="text-center pb-3 text-white">FORGOT PASSWORD</h3>
              <div className="col-lg-5">
                <div className="bg-primary p-4">
                  <div className="text-center">
                    <div className="mb-4">
                      <p>
                        Please enter email address of your account and we will
                        send you a link in email to reset your password.
                      </p>
                    </div>
                  </div>
                  <form
                    onSubmit={forgotPassword}
                    method="post"
                    name="forget-pwd-form"
                  >
                    <label className="form-label">ForgotPassword</label>
                    <div className="my-3">
                      <input
                        type="email"
                        className="form-control text-muted form-control-lg rounded-0 border p-3"
                        name="email"
                        placeholder="email@address.com"
                        maxLength={50}
                        required
                      />
                      <span className="invalid-feedback">
                        Please enter a valid email address.
                      </span>
                    </div>
                    <div className="d-grid pt-3 mb-2">
                      <button type="submit" className="btn primary-btn">
                        Submit
                      </button>
                    </div>
                    <div className="text-center mt-3">
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => setForgetPWD(false)}
                      >
                        Back to Sign In
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

// const forgotPassword = async e => {
//   e.preventDefault()

//   const email = e.target.email.value.trim()

//   if (!email || !email.includes("@")) return alert("Invalid email address")

//   const form = document.querySelector('[name="forget-pwd-form"]')

//   const formData = new FormData(form)

//   const res = await fetch("/api/auth/forgot-password", {
//     method: "POST",
//     body: formData
//   })

//   const data = await res.json()

//   if (res.status != 201) return alert(data.message)

//   if (res.status == 201) {
//     alert(data.message)
//     Router.reload()
//   } else {
//     alert("An error occured. Please try again!")
//   }
// }

const login = async e => {
  e.preventDefault()

  const email = e.target.email.value
  const password = e.target.password.value
  if (!email || !email.includes("@"))
    return (document.getElementById("login-email-error").innerHTML =
      "Please enter a valid email address")

  if (!password)
    return (document.getElementById("login-pwd-error").innerHTML =
      "Please enter a valid password")

  const status = await signIn("credentials", {
    redirect: false,
    email: email,
    password: password
  })

  if (status?.error) return alert(status.error)

  Router.push("/front/onefront") //signin (login)
}

const register = async e => {
  e.preventDefault()

  const name = e.target.name.value
  const email = e.target.emzail.value
  const password = e.target.password.value
  // const country = e.target.country.value;

  if (!name)
    return (document.getElementById("name-error").innerHTML =
      "Please enter a valid name.")

  if (!email || !email.includes("@"))
    return (document.getElementById("reg-email-error").innerHTML =
      "Please enter a valid email address")

  if (!password)
    return (document.getElementById("reg-pwd-error").innerHTML =
      "Please enter a valid password")

  // if (!country)
  // return document.getElementById('country-error').innerHTML='Please select your country';

  const res = await fetch("/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password
      //  country: country
    })
  })

  const data = await res.json()

  if (res.status != 201) return alert(data.message)
  
  const status = await signIn("credentials", {
    redirect: false,
    email: email,
    password: password
  })

  Router.push("/profile") //SignUp first time
}


// when SignUp
export const getServerSideProps = async req => {
  const session = await getSession(req)
  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: "/profile" //SignUp after signup
      }  //second time
    }
  }
  

  return { props: {} }
}

export default Page
