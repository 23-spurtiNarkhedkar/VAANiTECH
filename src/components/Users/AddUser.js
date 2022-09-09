import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const AddUser = () => {
//   let history = useNavigate();
  let history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",  
    phone: "",
    website: ""
  });

  const { name, username, email, phone, website } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try{
      await axios.post("http://localhost:3001/users", user);
      history("/home");
    }
    catch(err)
    {
      alert("Alert");
      console.log(err);
    }
    // await axios.post("https://jsonplaceholder.typicode.com/users", user);
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)} >
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group my-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group my-2">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group my-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div>
          <Button className="btn-primary btn-block my-2" type="submit">Add User</Button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;


// import axios from 'axios';
// import React, { useState } from 'react'
// import { Button, Container, Form } from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom';

// function AddUser() {
//     let history = useNavigate();
//     const [user, setUsers] = useState({
//         name: "",
//         username: "",
//         email: ""
//         // city: ""
//     });

//     const { name, username,  email } = user;

//     const onInputChange = e => {
//         console.log(e.target.value)
//        setUsers({...user,[e.target.name]:e.target.value});
//     }

//     const onSubmit = async (e) => {
//         e.preventDefault();
//         await axios.post("https://jsonplaceholder.typicode.com/users", user);
//         history.push('/');
//     }
//     return (
//         <Container>
//             <h1>Add User</h1>
//             <Form className='m-2' onSubmit={(e) => onSubmit(e)}>
//                 <Form.Control onChange={e => onInputChange(e)} name="name" type="text" value={name} placeholder="First name" />
//                 <Form.Control onChange={e => onInputChange(e)} name="username" type="text" className='my-2' value={username} placeholder="User name" />
//                 {/* <Form.Control onChange={e => onInputChange(e)} className='my-2' type="text" value={city} placeholder="City" /> */}
//                 <Form.Control onChange={e => onInputChange(e)} name="email" type="email" value={email} placeholder="Enter email" />
//                 <Button>Submit</Button>
//             </Form>
//         </Container>
//     )
// }

// export default AddUser
