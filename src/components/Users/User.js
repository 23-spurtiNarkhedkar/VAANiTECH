import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: ""
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);
  
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    console.log(id);
    setUser(res.data);
  };
  
  return (
    <Container className="py-4">
      <Link className="btn btn-primary" to="/">
        Back 
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-75 d-flex m-auto">
        <li className="list-group-item"><b>Name:</b> {user.name}</li>
        <li className="list-group-item"><b>User_name:</b> {user.username}</li>
        <li className="list-group-item"><b>Email:</b> {user.email}</li>
        <li className="list-group-item"><b>Phone:</b> {user.phone}</li>
        <li className="list-group-item"><b>Website:</b> {user.website}</li>
      </ul>
    </Container>
  );
};

export default User;