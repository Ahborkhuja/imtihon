import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios';
import Section from './main/Section';
import images from "../../utils/image_imports"
import { Link } from 'react-router-dom';
const h2 = {
  marginBottom: "14.7px",
  fontWeight: "700",
  fontSize: "30px",
  lineHeight: "38px",
  textTransform: "capitalize",
  color: "#111111",
}
const line = {
  width: "60px",
  height: "2px",
  background: "#5A5AC9",
}
const text = {
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "24px",
  color: "#565656",
}
const title = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  gap: "15px",
  marginBottom: "70px",
}
function Product() {
  const [array, setArray] = React.useState([]);
  const [tmp, setTmp] = React.useState([]);
  const [cartList, setCartList] = React.useState([]);
  let temp = [];
  useEffect(() => {
    let arr2 = []
    axios.get("https://imtihon-84bec-default-rtdb.firebaseio.com/cart.json")
      .then(res => {
        arr2 = Object.keys(res.data).map(item => {
          return { ...res.data[item], Objid: item, }
        })
        setCartList(arr2);
      })
    axios.get("https://imtihon-84bec-default-rtdb.firebaseio.com/card.json")
      .then((res) => {
        let arr = Object.keys(res.data).map(item => {
          return { ...res.data[item], Itemid: item, saved: !!arr2.find(value => value.key === item) }
        })
        console.log(arr);
        setArray(arr);
        setTmp(arr.filter(item => item.category === "New Products"))
      })
  }, []);

  const categorySort = (e) => {
    let temp = array.filter(item => item.category === e.target.labels[0].innerText);
    setTmp(temp);
  }
  const AddToCart = (val) => {
    console.log(val);
    val.saved = true;
    axios.post("https://imtihon-84bec-default-rtdb.firebaseio.com/cart.json", { ...val, key: val.Itemid })
      .then(res => {

      })
  }
  return (
    <>
      <div className="container">
        <div style={title}>
          <h2 style={h2}>Our Products</h2>
          <div style={line} />
          <p style={text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, culpa?</p>
        </div>
        <div onChange={categorySort} className="m-5 p-3 d-flex justify-content-center">
          <input type="radio" className="link" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
          <label className="links" htmlFor="btnradio1"><b>new products</b></label>

          <input type="radio" className="link" name="btnradio" id="btnradio2" autoComplete="off" />
          <label className="links" htmlFor="btnradio2"><b>onsale</b></label>

          <input type="radio" className="link" name="btnradio" id="btnradio3" autoComplete="off" />
          <label className="links" htmlFor="btnradio3"><b>upcoming products</b></label>
        </div>
        <div className="d-flex flex-wrap gap-4 m-5">
          {tmp.map(item => (
            <>
              <Card key={item.Itemid} sx={{ maxWidth: 280 }}>
                <CardMedia
                  sx={{ height: 340 }}
                  image={item.url}
                  title={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Rating name="read-only" value={item.rate >= 5 ? 5 : item.rate} readOnly />
                </CardContent>
                <CardActions className='d-flex justify-content-between w-100 pe-4 ps-4'>
                  <b>${item.price}</b>
                  <Button variant="contained" disabled={item.saved} onClick={() => { AddToCart(item) }}>
                    <ShoppingCartIcon />
                  </Button>
                </CardActions>
              </Card>
            </>
          ))}
        </div>
        <Section styled={{ flexDirection: "row-reverse" }} img1={images.Ikkini3chisi} img2={images.Ikkini2chisi} img3={images.Ikkini1chisi} />
        <div style={title}>
          <h2 style={h2}>New Arrival Products</h2>
          <div style={line} />
          <p style={text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, culpa?</p>
        </div>
        <div className="d-flex flex-wrap gap-4 m-5">
          {array.slice(tmp.length - 4, tmp.length).map(item => (
            <>
              <Link to={"item-"+item.id}>
                <Card key={item.Itemid} sx={{ maxWidth: 280 }}>
                  <CardMedia
                    sx={{ height: 340 }}
                    image={item.url}
                    title={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.title}
                    </Typography>
                    <Rating name="read-only" value={item.rate >= 5 ? 5 : item.rate} readOnly />
                  </CardContent>
                  <CardActions className='d-flex justify-content-between w-100 pe-4 ps-4'>
                    <b>${item.price}</b>
                    <Button variant="contained" disabled={item.saved} onClick={() => { AddToCart(item) }}>
                      <ShoppingCartIcon />
                    </Button>
                  </CardActions>
                </Card>
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Product