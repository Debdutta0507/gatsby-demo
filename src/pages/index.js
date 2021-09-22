import React from "react"

import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import {header} from "../Styles/home.module.css"
import Img from "gatsby-image"



export default function Home({ data }) {
  return (
    <Layout>
    <section className={header} >
   
    <div>
      <h2>Design</h2>
      <h3>Develop & Deploy</h3>
      <p>UX designer & web developer based in Manchester.</p>
  
    </div>
    <img src="/jrVDgNkZbDUyBcTEf8obFH-1200-80.jpg" alt="site banner" style={{ maxWidth: '100%' }} />
    
    
  </section>
  </Layout>
  )
}

/* 
export const query = graphql`
  query Banner {
    file(relativePath: {eq: "jrVDgNkZbDUyBcTEf8obFH-1200-80.jpg.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  } */
 
