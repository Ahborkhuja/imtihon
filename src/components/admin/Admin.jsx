import axios from 'axios'
import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { InputGroup, Form, Button } from 'react-bootstrap/';
import { useNavigate } from 'react-router-dom';
const style = {
  position: "absolute",
  left: "40%",
  top: "30%",
}
function Admin() {
  const navigate = useNavigate();
  const [data,setdata]=useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.rate);

    setdata({
      url:e.target.url.valueOf().value,
      title:e.target.title.valueOf().value,
      rate:e.target.rate.valueOf().value,
      price:e.target.price.valueOf().value,
      category:e.target.category.valueOf().value,
    });
    console.log(data);
    axios.post("https://imtihon-84bec-default-rtdb.firebaseio.com/card.json", data)
      .then((res) => {
        console.log(res);
      })
  }
  const back = () => {
    localStorage.setItem("isLoggedin", false);
    navigate('/');
  }
  return (
    <>
      <div className="m-3">
        <Button type='button' onClick={back}>Back</Button>
      </div>
      <div style={style}>
        <Form onSubmit={submitHandler}>
          <h2 style={{ display: "flex", justifyContent: "center" }} className='m-3'>Adding product</h2>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Product Img URL</InputGroup.Text>
            <Form.Control
              name='url'
              placeholder="URL"
              aria-label="URL"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Product Title</InputGroup.Text>
            <Form.Control
              name="title"
              placeholder="Title"
              aria-label="Title"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Rate</InputGroup.Text>
            <Form.Control
              name="rate"
              type="number"
              placeholder="max rate is 5 from 0"
              aria-label="Rate"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Product Price</InputGroup.Text>
            <Form.Control
              name="price"
              placeholder="Price in dollars"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Form.Text id="basic-addon1">Product Category</Form.Text>
          <Form.Select name='category' aria-label="Default select example">
            <option value="New Products">New Products</option>
            <option value="Onsale">Onsale</option>
            <option value="Upcoming Products">Upcoming Products</option>
          </Form.Select>
          <div className="m-3 d-flex justify-content-center">
            <Button type="submit">  Add  </Button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default Admin