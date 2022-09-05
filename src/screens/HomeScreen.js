import React from 'react'
import { Fade } from 'react-awesome-reveal'
import './HomeScreen.css'
import { Link } from 'react-router-dom'
// import Heading from '../Heading'
import Featured from '../Featured'
import Info from '../Info'
import FeaturedFree from '../FeaturedFree'
import FeaturedInfo from '../FeaturedInfo'




function HomeScreen() {
    return (
        <div  className="homeScreen">
            <Fade>
                <div className="homeScreen__top">
                    <h4>Facial coverings are now optional in our stores for our fully vaccinated customers,
                         following CDC guidance, except where local regulations require it by law. <Link> Learn more </Link> </h4>
                </div>
            </Fade>
            <Fade>
                <div className="homeScreen__bottom">
                <div className="homeScreen__bottomLeft">
                        <h4>MAY IS MILITARY APPRECIATION MONTH</h4>
                        <p>For each Military eGift Card sold in May,
                            we’ll donate $5 to support the mental health
                            and well-being of our military community.*</p>
                        <button>Send an eGift</button>
                    </div>
                    <div className="homeScreen__bottomRight">
                        <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71291.jpg" alt="Net issue"/>
                    </div>
                </div>
            </Fade>
            {/* <Fade>
                <Heading heading='TODAY IS YOURS'/>
            </Fade> */}
            <div className="homeScreen__featured">
            <Fade>
                <Featured 
                title="GOOD MOOD MADE"
                info="Sip your way to a summer of so much yes. Try our fun new Strawberry Funnel Cake Frappuccino® drink."
                link="Order Frappuccino® drink"
                path=''
                order="2"
                image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71054.jpg"
                background="#f2f0eb"
                color="#1e3932"
                className="featured__hoverLight"
                />
            </Fade>
            <Fade>
                <Featured 
                title="REFRESHINGLY RADIANT"
                info="Explore thirst-quenching Starbucks Refreshers® beverages: Mango Dragonfruit, Strawberry Açaí and Kiwi Starfruit."
                link="Order iced beverage"
                path=''
                
                image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71055.jpg"
                background="#f2f0eb"
                color="#1e3932"
                className="featured__hoverLight"
                />
            </Fade>
            <Fade>
                <FeaturedFree
                title="FREE COFFEE IS A TAP AWAY"
                info="Join now to start earning Rewards.**"
                link="Join now"
                path=''
                image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71056.png"
                background="#f1f8f6"
                color="#1e3932"
                className="featured__hoverLight"
                />
            </Fade>
            </div>
            <Fade>
                <div className="homeScreen__discover">
                    <Info
                    title="Order and pick up. Easy as that."
                    info="Just open the app, order your favorites, and enjoy contactless pay. From there, choose whichever pickup method is best for you."
                    link="See pickup options"
                    path=''
                    image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70203.jpg"
                    background="#d4e9e2"
                    color="#1e3932"
                    className="info__hoverLight"
                    />
                    <Info
                    title="Earning 4,500 Bonus Stars is Super Starifying"
                    info="With a $0 intro annual fee for your first year, earn more Stars and even more Rewards with the Starbucks® Rewards Visa® Card."
                    link="Learn more"
                    path=''
                    image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71361.jpg"
                    background="#d4e9e2"
                    color="#1e3932"
                    className="info__hoverLight"
                    />
                </div>
            </Fade>
            <div className="homeScreen__featured">
            <Fade>
                <FeaturedFree
                title="Support for military community"
                info="These partners (employees) further our work with Operation Gratitude and Blue Star Families to support the mental health of our military community."
                link="Learn more"
                path=''
                image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71300.jpg"
                background="#d4e9e2"
                color="#1e3932"
                className="featured__hoverLight"
                />
            </Fade>
            <Fade>
                <FeaturedInfo
                info2="*For every Starbucks eGift Card in our Military Appreciation Month category sold May 1-31, we’ll donate $5 to Blue Star Families and Operation Gratitude to support the mental health and well-being of our military community. Donations will be evenly divided between the two organizations. Learn more at bluestarfam.org and operationgratitude.com."                
                info3="**At participating stores. Some restrictions apply."
                path=''
                background="#ffffff"
                color="#1e3932"
                className="featured__hoverLight"
                />
            </Fade>
            </div>
        </div>
    )
}

export default HomeScreen
