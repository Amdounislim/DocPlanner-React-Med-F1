import React from 'react'
import CardClinic from './Cards/CardClinic'
import CardDoctor from './Cards/CardDoctor'
import CardPatient from './Cards/CardPatient'
import Card from './Cards/Card'
import Introduction from './Introduction/Introduction'
import Sponsor from './sponsor/Sponsor'

const Main = (props) => {
    return (
        <div>
            <Introduction />
            <section style={{display:"flex", justifyContent:"space-around", margin: "0% 14%"}}>
                {props.clients.map((el, i)=><Card el={el} key={i} />)}
                {/* <CardPatient />
                <CardDoctor />
                <CardClinic /> */}
            </section>
            <Sponsor />
        </div>
    )
}

export default Main
