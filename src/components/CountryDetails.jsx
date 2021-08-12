import React from 'react'
import countriesFromFile from "./../countries.json"
import { Link } from "react-router-dom"

const CountryDetails = (props) => {
    // console.log("here")

    const countrySelected = countriesFromFile.find((item) => {
        return item.cca3 === props.match.params.id;
    })

    console.log(countrySelected, props.match.params)

    return (
        <div className="col-7">
            {/* <pre>Props in child: {JSON.stringify(props, null, 2)}</pre> */}

            <h1>{countrySelected.flag + " " + countrySelected.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ "width": "30%" }}>Capital</td>
                        <td>{countrySelected.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {countrySelected.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {
                                    countrySelected.borders.map((item) => {
                                        return (<li>
                                            <Link key={item} to={"/countries/" + item}>
                                                {countriesFromFile.find((country) => country.cca3 === item).name.common}
                                            </Link>
                                        </li>)
                                    })
                                }

                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails
