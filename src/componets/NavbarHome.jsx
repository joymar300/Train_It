import { useState } from 'react'
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button,Image} from "@nextui-org/react";
import { Link as LinkR } from 'react-router-dom';
import logo from '../assets/img/Train it!.png';
import casa from '../assets/img/casa3.png';
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

      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          
          <img fill="none" height="46" viewBox="0 0 32 32" width="106" src={logo}></img>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand>
         
        <LinkR to={"/"}><img  fill="none"   width="106" src={logo} ></img></LinkR>
        </NavbarBrand>
        <NavbarItem>
          <Link href="#">
            <LinkR to={"/"}> <img  fill="none" width="25" src={casa} ></img> </LinkR>
          </Link>
        </NavbarItem>
        <NavbarItem isActive >
          <Link color="foreground" href="#" aria-current="state" >
            <LinkR to={"/about"} style={{ fontSize: '25px'}}> About</LinkR>
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/*<NavbarContent justify="end">
         <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
  </NavbarContent> */}

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
