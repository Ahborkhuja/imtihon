import * as React from 'react';
import {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from "../../../utils/image_imports";
import "./header.css";
import { NavDropdown } from 'react-bootstrap';
import { ShoppingOutlined, UserOutlined, HeartOutlined, PullRequestOutlined, SearchOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';
import CartModal from './Drawer';

function HeaderB(props) {
  const [sticky,setSticky]=React.useState(false)
  const navigate=useNavigate();
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    if (scrollPosition>50) {
      setSticky(true);
    }else{
      setSticky(false);
    }
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);
  return (
    <div className={sticky ? "position-fixed top-0":""} style={{ transition:"2000",  width: "100%",zIndex:"100", backgroundColor: "white" }}>
      <div className="container">
        <div className="d-flex justify-content-between p-3">
          <Link to={""}><img src={image.logo} alt="" /></Link>
          <div className="center d-flex justify-content-between gap-4">
            <NavDropdown
              className="linksB"
              id="nav-dropdown-dark-example"
              title="HOME"
              menuVariant="white"
            >
              <NavDropdown.Item href="#action/3.1">home 1</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">home 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="linksB"
              id="nav-dropdown-dark-example"
              title="SHOP"
              menuVariant="white"
            >
              <div className="d-flex">
                <div className="">
                  <NavDropdown.Item href="#action/3.1"><b>SHOP GRID</b></NavDropdown.Item><br />
                  <NavDropdown.Item href="#action/3.3">Shop Grid 3 Coloumn</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Shop Grid 4 Coloumn</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Shop Grid Left Sidebar</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Shop Grid Right Sidebar</NavDropdown.Item>
                </div>
                <div className="">
                  <NavDropdown.Item href="#action/3.1"><b>SHOP LIST</b></NavDropdown.Item><br />
                  <NavDropdown.Item href="#action/3.3">Shop List</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Shop List Left Sidebar</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Shop List Right Sidebar</NavDropdown.Item>
                </div>
                <div className="">
                  <NavDropdown.Item href="#action/3.1"><b>SHOP SINGLE</b></NavDropdown.Item><br />
                  <NavDropdown.Item href="#action/3.3">Shop Single</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Shop Variable</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Shop Affiliate</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Shop Group</NavDropdown.Item>
                </div>
                <div className="">
                  <NavDropdown.Item href="#action/3.1"><b>OTHER PAGES</b></NavDropdown.Item><br />
                  <NavDropdown.Item href="#action/3.3">About Page</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Cart Page</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Checkout Page</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Compare Page</NavDropdown.Item>
                </div>
              </div>
            </NavDropdown>
            <NavDropdown
              className="linksB"
              id="nav-dropdown-dark-example"
              title="PAGES"
              menuVariant="white"
            >
              <NavDropdown.Item href="#action/3.1">About Page</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Cart Page</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Checkout Page</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Compare Page</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Login & Register Page</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Account Page</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Wishlist Page</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="linksB"
              id="nav-dropdown-dark-example"
              title="BLOG"
              menuVariant="white"
            >
              <NavDropdown.Item href="#action/3.1">Blog Grid</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Blog List</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Blog Single</NavDropdown.Item>
            </NavDropdown>
            <Link className={'linksB'} to={""}>CONTACT US</Link>
          </div>
          <div className="right d-flex gap-4" >
            <Link className='linksB'>
              <Space size={50}>
                <SearchOutlined style={{ fontSize: "30px" }} />
              </Space>
            </Link>
            <Space size={50}>
              <Badge count={props.compare}>
                <Link className='linksB'>
                  <PullRequestOutlined style={{ fontSize: "30px" }} shape="square" icon={<UserOutlined />} />
                </Link>
              </Badge>
            </Space>
            <Space size={50}>
              <Badge count={props.wishlist}>
                <Link className='linksB'>
                  <HeartOutlined style={{ fontSize: "30px" }} shape="square" icon={<UserOutlined />} />
                </Link>
              </Badge>
            </Space>

            <CartModal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderB;