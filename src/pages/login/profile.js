
import {findUserById} from '../../database/user';
import { getSession } from "next-auth/react";
//import Countries from "../components/Countries";
import Router from 'next/router';

import { signOut } from 'next-auth/react';


  const handleSignout = (e) => {
    e.preventDefault()
    signOut();

  }
const Page = (props) => {
  
    return (
      <>
      <section className='about-us clearfix mt-5'>
        <div className='container hero-bnr py-4'>
          <div className='row text-center'>
            <div className='col-10 mx-auto'>
              <div className="section-header">
                <h2>Profile</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container p-0'>
        <div className="row">
          <div className="col-md-6">
          <h3>Account Details</h3>
            <form onSubmit={update} method="post" name="submit-form">
            <div className="mb-3">
               <label className="form-label">Email :</label>
              <div className="form-control shadow-xn text-muted form-control-lg rounded-0 border">{props.user.email}</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Full Name :</label>
              <input name="name" className="form-control shadow-xn text-muted form-control-lg rounded-0 border" type="text" placeholder="Full Name" maxLength="20" defaultValue={props.user.name} required/>
           </div>
            {/* <div className="mb-3">
              <label className="form-label">Address :</label>
              <input name="address" className="form-control shadow-xn text-muted form-control-lg rounded-0 border"  type="text" placeholder="Address" maxLength="50" defaultValue={props.user.address}/>
            </div> */}

            {/* <div className="mb-3">
              <label className="form-label">City :</label>
              <input name="city" className="form-control shadow-xn text-muted form-control-lg rounded-0 border"  type="text" placeholder="City" maxLength="25" defaultValue={props.user.city}/>
            </div> */}
{/* 
            <div className="mb-3">
            <label className="form-label">State :</label>
            <input name="state" className="form-control shadow-xn text-muted form-control-lg rounded-0 border"  type="text" placeholder="State" maxLength="25" defaultValue={props.user.state}/>
            </div> */}
{/* 
            <div className="mb-3">
              <label className="form-label">Zip :</label>
              <input name="zip" className="form-control shadow-xn text-muted form-control-lg rounded-0 border"  type="text" placeholder="Zip" maxLength="15" defaultValue={props.user.zip}/>
            </div> */}

            {/* <div className="mb-3">
              <label className="form-label">Phone :</label>
              <input name="phone" className="form-control shadow-xn text-muted form-control-lg rounded-0 border"  type="text" placeholder="Phone" maxLength="20" defaultValue={props.user.phone}/>
            </div> */}
{/* 
            <div className="mb-3">
            {/* {props.user.country} 
            <label className="form-label">Country :</label>
            {/* <Countries selected={props.user.country}/> 
            </div> */}
            {/* <input name="id" className="form-control shadow-xn text-muted form-control-lg rounded-0 border"  type="hidden" value={props.user.id}/>
            <button type="submit" className='btn primary-btn'>Update</button> */}
            </form>
          </div>
          <div className='col-md-6'>
          <h3>Update Password</h3>
          <form onSubmit={updatePassword} method="post" name="pwd-form">
            <div className="mb-3">
              <label className="form-label">Enter Current Password :</label>
              <input name="curr_password" className="form-control shadow-xn text-muted form-control-lg rounded-0 border"  type="password" placeholder="Current Password" defaultValue=''  minLength="8" maxLength="12" required/>
            </div>
            <div className="mb-3">
              <label className="form-label">Enter New Password :</label>
              <input name="new_password" className="form-control shadow-xn text-muted form-control-lg rounded-0 border"  type="password" placeholder="New Password" defaultValue=''  minLength="8" maxLength="12" required/>
            </div>
            <div className="mb-3">
            <label className="form-label">Confirm New Password :</label>
            <input name="new_password_confirm" className="form-control shadow-xn text-muted form-control-lg rounded-0 border" type="password" placeholder="New Password Confirmation" defaultValue=''  minLength="8" maxLength="12" required/>
            <input name="id" className="form-control shadow-xn text-muted form-control-lg rounded-0 border"  type="hidden" value={props.user.id}/>
            </div>
            <button type="submit"  onClick={() => update()} className='btn primary-btn'>Update</button>
            <button onClick={() => signOut("facebook")} type="button" className="btn btn-white border rounded-0 p-3 flex-fill">
                    SignOut
                  </button>
          </form>
          </div>
        </div>
      </section>
      </>
    )
  }
  const update = async (e) => {
    e.preventDefault();
    const form = document.querySelector('[name="submit-form"]');
    const formData = new FormData(form);
    const res = await fetch('/api/auth/update-profile', {
        method: 'POST',
        body: formData,
    });

    //res.status==201 ? Router.reload() : alert('An error occured. Please try again!')

    if(res.status==201) {
    alert('Details updated successfully!')
    Router.reload();
    }
    else {
    alert('An error occured. Please try again!')
    }

  }
  const updatePassword = async (e) => {
   e.preventDefault();
    const id = e.target.id.value.trim();
    const curr_password = e.target.curr_password.value.trim();
    const new_password = e.target.new_password.value.trim();
    const new_password_confirm = e.target.new_password_confirm.value.trim();
    console.log("done");
    if (!curr_password || !new_password || !new_password_confirm)
    return alert('Invalid details');
    if (new_password != new_password_confirm)
    return alert('New password and password confirm do not match');
    const form = document.querySelector('[name="pwd-form"]');
    const formData = new FormData(form);
    const res = await fetch('/api/auth/update-password', {
      method: 'POST',
      body: formData,
  });
  const data = await res.json();
  if(res.status != 201)
  return alert(data.message)
  res.status==201 ? Router.reload() : alert('An error occured. Please try again!')
}
  export const getServerSideProps = async(context) => {
    const session = await getSession(context)
    if (!session){
      return {
        redirect: {
          permanent: false,
          destination: "/login"
        }
      }
    }
    const id=session.user.id;

    console.log(id)
      const user = await findUserById(id);
      console.log('user',user);
      
      return {props: {user: JSON.parse(JSON.stringify(user))}}
    }
    
  export default Page;