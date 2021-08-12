import React, { Component } from 'react'
import countriesFromFile from "./../countries.json"

import { NavLink, Link } from "react-router-dom"
export class CountriesList extends Component {



    render() {

        const links = countriesFromFile.map ((item) => {
            return (<div class = "linkContainer"><NavLink key = {item.cca3} to={"/countries/" + item.cca3}>{item.flag + " " +item.name.common}</NavLink> </div>)
        })

        return (
            <div>
                <div>
                    <div style={{maxHeight: "90vh", "overflow-y": "scroll"}}>
                        <div className="list-group">
                        {links}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CountriesList
