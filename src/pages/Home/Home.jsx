import React from 'react'
// Composants
import Hero from '../../components/Hero/Hero'
import Feature from '../../components/Feature/Feature'

// Icônes
import IconChat from "../../assets/img/icon-chat.webp"
import IconMoney from "../../assets/img/icon-money.webp"
import IconSecurity from "../../assets/img/icon-security.webp"

function Home() {
  return (
    <>
    <main>
        <Hero />
        <section className="features">
        <h2 className="sr-only">Features</h2>
            <Feature 
            iconSrc={IconChat}
            title="You are our #1 priority"
            description="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
            />
            <Feature 
            iconSrc={IconMoney}
            title="More savings means higher rates"
            description="The more you save with us, the higher your interest rate will be!"
            />
            <Feature 
            iconSrc={IconSecurity}
            title="Security you can trust"
            description="We use top of the line encryption to make sure your data and money
            is always safe."
            />
        </section>
    </main>
    </>
  )
}

export default Home