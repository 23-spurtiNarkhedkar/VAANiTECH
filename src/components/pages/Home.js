import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home=()=> {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
        console.log("UseEffect");
    }, [])

    const loadUsers = async () => {
        // const result = await axios.get("https://jsonplaceholder.typicode.com/users");
        const result = await axios.get("http://localhost:3001/users");
        setUsers(result.data.reverse());
        // console.log(result);  
    };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUsers();
    };

    return (
        <Container>
            <Link to='/user/add' className="btn btn-primary m-2 btn-outline-dark text-light">Add User</Link>
            <Row>
                {users.map((ele, index) => {
                    return <>
                        <Col md={3} className="my-2">
                            {/*  style={{height:"23rem"}} */}
                            <Card key={index}>
                                <Card.Body>
                                    <Card.Title>{ele.name}</Card.Title>
                                    <Card.Text>
                                        {ele.username}
                                    </Card.Text>
                                    <h6>email-id : {ele.email}</h6>
                                    <p>contact : {ele.phone}</p>
                                    {/* href={`${ele.website}`} */}
                                    <p>website : <a target="_blank">{ele.website}</a></p>
                                    <Link  to={`/user/${ele.id}`} className="btn btn-primary ">View</Link>
                                    <Link to={`/user/edit/${ele.id}`} className="btn btn-light btn-outline-primary m-2">Edit</Link>
                                    <Button onClick={() => deleteUser(ele.id)} className="btn btn-danger ">Delete</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </>
                })}
            </Row>
        </Container>
    )
}

export default Home