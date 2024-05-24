import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const AddContact = () => {
    const { store,actions } = useContext(Context);
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState(""); 
   
    let navigate = useNavigate();

    const submitContact = (e) => {
        e.preventDefault()
        console.log(name,email,phone,address)
        actions.setNewContact(name,email,phone,address)
        setName("")
        setEmail("")
        setPhone("")
        setAddress("")
        navigate("/") 
    }

   return (
       <>
           <form>
                <div className="mb-3">
                   <label  htmlFor="exampleInputName1" className="form-label">Name</label>
                   <input onChange={(e)=> setName(e.target.value)} value={name} type="text" className="form-control" id="exampleInputName1"/>
               </div>
               <div className="mb-3">
                   <label  htmlFor="exampleInputAddress1" className="form-label">Address</label>
                   <input onChange={(e)=> setAddress(e.target.value)} value={address} type="text" className="form-control" id="exampleInputAddress1"/>
               </div>
               <div className="mb-3">
                   <label  htmlFor="exampleInputPhone1" className="form-label">Phone</label>
                   <input onChange={(e)=> setPhone(e.target.value)} value={phone} type="tel" className="form-control" id="exampleInputPhone1"/>
               </div>
               <div className="mb-3">
                   <label  htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                   <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                   <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
               </div>
               <button onClick={(e) => submitContact(e)} type="submit" className="btn btn-primary mb-2">Submit</button>
           </form>
           <Link to={"/"}>Or get back to contacts</Link>
       </>
   );
}

export default AddContact;