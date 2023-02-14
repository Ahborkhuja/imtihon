import React, { Component,Suspense } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, NavDropdown } from 'react-bootstrap';
import "./header.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTranslation, Trans,withTranslation } from 'react-i18next';

function HeaderT() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const onclick = () => {
    navigate('/admin')
  }
  axios.get("https://imtihon-84bec-default-rtdb.firebaseio.com/card.json")
    .then(res => {
      console.log(res);
    })
  const langChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    i18n.changeLanguage(e.target.value);
  }
  return (
    <div className="p-2 wrap position-static">
      <div className="container">
        <div className='d-flex justify-content-between align-items-center' >
          <div className="icon_phone d-flex gap-4 align-items-center">
            <div className="icon_brands d-flex gap-3">
              <a href="www.facebook.com" className='facebook'>
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="www.twitter.com" className='twitter'>
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="www.youtube.com" className='youtube'>
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a href="www.instagram.com" className='instagram'>
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
            <a className="linksW d-flex align-items-center gap-3" href='tel:(+123)4567890'>
              <div style={{ fontSize: "20px" }}>
                <i class="fa-solid fa-phone"></i>
              </div>
              <p>(+123)4567890</p>
            </a>
          </div>
          <div className="setting_money_lang">
            <a className=" d-flex align-items-center gap-3" href="">
              <NavDropdown
                className='linksW'
                id="nav-dropdown-dark-example"
                title=" Settings "
                menuVariant="light"
              >
                <NavDropdown.Item href="#action/3.1" className='option'> My Account</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.1" className='option'> {t('hello')} </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={onclick}>Admin</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" className='option'> Sign out </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className='linksW'
                id="nav-dropdown-dark-example"
                title=" USD $"
                menuVariant="light"
              >
                <NavDropdown.Item href="#action/3.1" className='option'> USD $</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" className='option'>EUR €</NavDropdown.Item>
              </NavDropdown>
                <select onChange={langChange}>
                  <option value="en">English</option>
                  <option value="uz">Uzbek</option>
                </select>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderT

