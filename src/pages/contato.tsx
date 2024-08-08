import { HeadFC, PageProps } from "gatsby"
import Footer from "../components/sections/Footer"
import React from 'react'
import CTASectionHomePage from "../components/sections/CTASectionHomePage"
import HeroSectionContato from "../components/sections/HeroSectionContato"
import FormSection from "../components/Form"

const IndexPage: React.FC<PageProps> = () => {
    return (
      <main>
        <HeroSectionContato/>
        <FormSection/>
        <CTASectionHomePage/>
        <Footer/>
      </main>
    )
  }
  
  export default IndexPage
  
  export const Head: HeadFC = () => <title>Mais Sabor - Alimentação - Contato </title>