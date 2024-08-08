import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import HeroSection from "../components/sections/HeroSection"
import MenuHome from "../components/Menu"
import Parceiros from "../components/sections/Parceiros"
import AboutHomePage from "../components/sections/AboutHomePage"
import FacilitiesHomePage from "../components/sections/FacilitiesHomePage"
import CardapioSectionHomePage from "../components/sections/CardapioSectionHomePage"
import EngineerSectionHomePage from "../components/sections/EngineerSectionHomePage"
import TeamHomePage from "../components/sections/TeamHomePage"
import CTASectionHomePage from "../components/sections/CTASectionHomePage"
import Footer from "../components/sections/Footer"
import { SEO } from "../components/Seo"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      
      <HeroSection/>
      <Parceiros/>
      <AboutHomePage/>
      <FacilitiesHomePage/>
      <CardapioSectionHomePage/>
      <EngineerSectionHomePage/>
      <TeamHomePage/>
      <CTASectionHomePage/>
      <Footer/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO title="Mais Sabor - Alimentação - Home" />;
