"use client"

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useSelectedLayoutSegments } from 'next/navigation';
import { usePathname } from 'next/navigation';

import styles from './NavBar.module.scss'

import {useState,useEffect} from "react"


export default function NavBar() {

  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const segments = useSelectedLayoutSegments();
  const pathname = usePathname()

  console.log("search",search);
  console.log("segments",segments[0]);
  console.log("segments2",segments[1]);
  console.log("pathname",pathname);


  const [isOpen, setIsOpen ]=useState(false)

  const openNavigation=()=>{
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }


  const navBar = [
    {
      link: '/',
      name: 'home',
      id: 0,
      isActive:false
    },
    {
      link: '/pages',
      name: 'pages',
      id: 1,
      isActive:true
    },
    {
      link: '/product',
      name: 'product',
      id: 2,
      isActive:false
    },
    {
      link: '/product/list',
      name: 'productList',
      id: 3,
      isActive:false
    },
  ]

  const [data,setData]=useState(navBar)

  const navigationActive=()=>
  {
    const newData=data.map(nav=>{
      nav.isActive=nav.link==("/"+segments[0]) ? true :false
      return nav
    })

    console.log(newData);
    console.log("data",data);

    setData(newData)

  }


  useEffect(()=>{

    console.log("@@@@@@@@@ useEffect");
    navigationActive()

  },[segments[0]])

  
  
  return(
    <>
    <h1>{search}</h1>
      <div onClick={openNavigation}>Open Navigation</div>
      <nav className={`${styles.root} ${isOpen && 'open'}`}>

        { data && data.map((nav)=>
          <div key={nav.id}>
            {/* <div onClick={()=>listClass(nav)}>click</div> */}
            <Link href={nav.link} className={`${styles.list} ${nav.isActive && styles.active}`}>{nav.name}</Link>
          </div>) 
        }

      </nav>
    </>
  )
};
