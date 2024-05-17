import { useState } from 'react'
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button,Image} from "@nextui-org/react";
import { Link as LinkR } from 'react-router-dom';

import logo from '../assets/img/logo2.png'
function NavbarHome() {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <>
    <Navbar isBordered height='6rem'  >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          
          <img fill="none" height="46" viewBox="0 0 32 32" width="106" src={logo}></img>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
         
        <img  fill="none"   width="106" src={logo} ></img>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            <LinkR to={"/"}> Home</LinkR>
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" >
            <LinkR to={"/about"}> About</LinkR>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            cosas
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarMenu>
      
          <NavbarMenuItem >
            <LinkR to={"/"}> Home</LinkR>
          </NavbarMenuItem>
          <NavbarMenuItem >
            <LinkR to={"/about"}> About</LinkR>
          </NavbarMenuItem>
      
      </NavbarMenu>
    </Navbar>
    </>
  )
}

export default NavbarHome
