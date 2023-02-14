import React, { useEffect, useState } from 'react'
import RootLayout from '../Layout/RootLayout'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { ListItemAvatar, Divider } from '@mui/material/';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from 'react-bootstrap/Button';
import { useDispatch,useSelector } from 'react-redux';
import { counterActions } from "../store/store";

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

function Shop() {
  const { counterObject } = useSelector((state) => state);
  const dispatch = useDispatch();
  const inc=()=>{
    dispatch(inc);
  }
  const [array, setArray] = useState([]);
  useEffect(() => {
    axios.get("https://imtihon-84bec-default-rtdb.firebaseio.com/card.json")
      .then((res) => {
        let arr = Object.keys(res.data).map(item => {
          return { ...res.data[item], Itemid: item }
        })
        setArray(arr);
      })
  }, [])
  const deleteCart = (id) => {
    axios.delete(`https://imtihon-84bec-default-rtdb.firebaseio.com/cart/${id}.json`)
      .then(res => {
        console.log(res);
      })
  }
  return (
    <>
      <RootLayout />
      <div className='d-flex justify-content-center align-items-center flex-column gap-3' style={{ height: "350px", backgroundColor: "#f6f6f6" }}>
        <h2 style={h2}>Cart</h2>
        <div style={line}></div>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Cart</Typography>
        </Breadcrumbs>
      </div>
      <div className="content container">
        <h2 style={h2}>Your Cart Items</h2>
        <Divider />
        <div className="column d-flex justify-content-around align-item-center" style={{ backgroundColor: "#5A5AC9", color: "white" }}>
          <div>Product Image</div>
          <div>Product Name</div>
          <div>Stock Status</div>
          <div>Qty</div>
          <div>Price</div>
          <div>Action</div>
        </div>
        {array.map(item => (
          <>
            <div className="d-flex justify-content-between align-items-center ps-5 pe-5 pt-5">
              <img src={item.url} style={{ maxWidth: "150px" }} alt="" />
              <p>{item.title}</p>
              <span style={{ color: "white", backgroundColor: "#5A5AC9", padding: "2px", borderRadius: "10px" }}>In Stock</span>
              {console.log(+item.price)}
              <div>{counterObject.counterActions*(+item.price)}
              </div>
              <div className=""></div>
              <Button variant='' className=' border-0' onClick={() => { deleteCart(item.objId) }} >
                <DeleteIcon />
              </Button>

            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default Shop