import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemAvatar, Divider } from '@mui/material/';
import ListItemIcon from '@mui/material/ListItemIcon';
import { ListItemText } from '@mui/material/';
import DeleteIcon from '@mui/icons-material/Delete';
import { ShoppingOutlined, UserOutlined, HeartOutlined, PullRequestOutlined, SearchOutlined } from '@ant-design/icons';
import { Badge, Space, } from 'antd';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import "../main/body.css";

export default function CartModal() {
  const [array, setArray] = React.useState([{
    title: "There is nothing to show",
    price: ""
  }]);
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  React.useEffect(() => {

    axios.get("https://imtihon-84bec-default-rtdb.firebaseio.com/cart.json")
      .then(res => {
        if (res.data) {

          console.log(res);
          let arr = Object.keys(res.data).map(item => {
            return { ...res.data[item], objId: item }
          })
          setArray(arr)
        }
      })
  }, [state])
  const deleteCart = (id) => {
    axios.delete(`https://imtihon-84bec-default-rtdb.firebaseio.com/cart/${id}.json`)
      .then(res => {
        console.log(res);
      })
  }
  let c = 0;
  array.forEach(item => {
    c += +(item.price);
    console.log(c);
  })
  localStorage.setItem("array",array);
  const [secondary, setSecondary] = React.useState(false);
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="d-flex justify-content-between align-items-center w-100 p-3">
          <h2>Cart</h2>
          <CloseIcon />
        </div>
        <Divider />

        {array.map((item) => (
          <>
            <ListItem key={item.objId} >
              <ListItemAvatar>
                <img src={item.url} alt="" style={{ width: "100px", margin: "10px" }} />
              </ListItemAvatar>
              <div className="d-flex flex-column">
                <ListItemText primary={item.title} secondary={secondary ? 'Secondary text' : null} />
                <ListItemText primary={"1 x " + item.price} secondary={secondary ? 'Secondary text' : null}
                />
              </div>
              <Button variant='' className=' border-0' onClick={() => { deleteCart(item.objId) }} >
                <DeleteIcon />
              </Button>
            </ListItem>
            <Divider />
          </>
        ))}
        <div className="subtotal p-3 d-flex justify-content-between">
          <p>Subtotal</p>
          <p className='price'>{c}</p>
        </div>
        <Divider />
        <div className=" d-flex justify-content-left align-items-center gap-3 p-4">
          <Link to={"/shop"}><Button className="rounded-0 view">View Chart</Button></Link>
          <Link to={"/checkout"}><Button className='rounded-0 checkout' >Checkout</Button></Link>
        </div>
        <p className='text'>Free Shipping on All Orders Over $100!</p>
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Space size={50} onClick={toggleDrawer(anchor, true)}>
            <Badge count={2}>
              <Link className='linksB' >
                <ShoppingOutlined style={{ fontSize: "30px" }} shape="square" icon={<UserOutlined />} />
              </Link>
            </Badge>
          </Space>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}