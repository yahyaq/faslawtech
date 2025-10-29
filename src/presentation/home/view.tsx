"use client"

import React from "react";
import HeaderView from "@/presentation/common/header/view"
import HeroBackgroundView from "@/presentation/heroBackground/view"
import AboutUsView from "@/presentation/aboutUs/view"
import OurPhilosophyView from "@/presentation/OurPhilosophy/view"
import OurValuesView from "@/presentation/ourValues/view"
import OurServicesView from "@/presentation/OurSerivces/view"
import LicensesAndPartnersView from "@/presentation/licensesAndPartners/view"

export default function View(){
    return (
    <main id="home" className="">
      <HeaderView/>
      <HeroBackgroundView/>
      <AboutUsView/>
      <OurPhilosophyView/>
      <OurValuesView/>
      <LicensesAndPartnersView/>
      <OurServicesView/>
    </main>
  );
}