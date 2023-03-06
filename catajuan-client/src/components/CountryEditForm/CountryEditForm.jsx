import countriesService from "../../services/countries.service"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import { Button, Form, Row, Col } from "react-bootstrap";


const CountryEditForm = ({ fireFinalActions }) => {

    const { id: countryId } = useParams()

    const [country, setCountry] = useState({
        name: '',
        description: '',
        img: '',
        capital: '',
        area: '',
        region: '',
        subregion: '',
        population: '',
        currencies: '',
        alpha3Code: '',
        languages: '',
        flag: '',
        maps: '',
        location: '',
        discriminationProtection: '',
        goodPlaceToLive: '',
        illegalSameSexRelationships: '',
        propaganda: '',
        safetyIndex: '',
        transMurderRates: '',
        transgenderLegal: '',
        violenceCriminalization: '',
        score: '',
    })



    useEffect(() => {

        countriesService
            .getOneCountry(countryId)
            .then(({ data }) => {
                const {
                    alpha3Code,
                    area,
                    capital,
                    currencies,
                    maps,
                    description,
                    discriminationProtection,
                    flag,
                    goodPlaceToLive,
                    illegalSameSexRelationships,
                    img,
                    languages,
                    location,
                    name,
                    population,
                    propaganda,
                    region,
                    safetyIndex,
                    score,
                    subregion,
                    transMurderRates,
                    transgenderLegal,
                    violenceCriminalization
                } = data

                setCountry({
                    alpha3Code,
                    area,
                    capital,
                    currencies,
                    maps,
                    description,
                    discriminationProtection,
                    flag,
                    goodPlaceToLive,
                    illegalSameSexRelationships,
                    img,
                    languages,
                    location,
                    name,
                    population,
                    propaganda,
                    region,
                    safetyIndex,
                    score,
                    subregion,
                    transMurderRates,
                    transgenderLegal,
                    violenceCriminalization
                })
            })
            .catch(err => console.log(err))


    }, [])



    const handleInputChange = e => {

        const { value, name } = e.target

        setCountry({ ...country, [name]: value })
    }

    const changeChecked = (type) => {

        setCountry({ ...country, [type]: !country[type] })

    }

    const handleCountrySubmit = e => {
        e.preventDefault()
        countriesService
            .editCountry(countryId, country)
            .then(() => {
                fireFinalActions()
            })
            .catch(err => console.log(err))
    }


    return (
        // currencies
        // languages
        // maps
        // location
        // violenceCriminalization
        // score

        <Form onSubmit={handleCountrySubmit}>
            <Row>

                <Form.Group as={Col} md={4} controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={country.name} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} md={4} controlId="capital">
                    <Form.Label>Capital</Form.Label>
                    <Form.Control type="text" name="capital" value={country.capital} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} md={4} controlId="area">
                    <Form.Label>Area (km)</Form.Label>
                    <Form.Control type="text" name="area" value={country.area} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} md={12} controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as='textarea' name="description" value={country.description} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} md={12} controlId="img">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="text" name="img" value={country.img} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} md={4} controlId="region">
                    <Form.Label>Region</Form.Label>
                    <Form.Control type="text" name="region" value={country.region} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} md={4} controlId="subregion">
                    <Form.Label>Sub Region</Form.Label>
                    <Form.Control type="text" name="subregion" value={country.subregion} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} md={4} controlId="population">
                    <Form.Label>Population</Form.Label>
                    <Form.Control type='number' name="population" value={country.population} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} md={4} controlId="alpha3Code">
                    <Form.Label>Alpha3Code</Form.Label>
                    <Form.Control type="text" name="alpha3Code" value={country.alpha3Code} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} md={4} controlId="flag">
                    <Form.Label>Flag (Emoji)</Form.Label>
                    <Form.Control type="text" name="flag" value={country.flag} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} md={4} controlId="discriminationProtection">
                    <Form.Label>Discrimination protection</Form.Label>
                    <Form.Control type='number' name="discriminationProtection" value={country.discriminationProtection} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} md={4} controlId="goodPlaceToLive">
                    <Form.Label>goodPlaceToLive</Form.Label>
                    <Form.Control
                        type="text"
                        name="goodPlaceToLive"
                        value={country.goodPlaceToLive}
                        onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} md={4} controlId="safetyIndex">
                    <Form.Label>safetyIndex</Form.Label>
                    <Form.Control type="text" name="safetyIndex" value={country.safetyIndex} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} md={4} controlId="transMurderRates">
                    <Form.Label>transMurderRates</Form.Label>
                    <Form.Control type="text" name="transMurderRates" value={country.transMurderRates} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} md={4} controlId="transgenderLegal">
                    <Form.Label>transgenderLegal</Form.Label>
                    <Form.Control type='number' name="transgenderLegal" value={country.transgenderLegal} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} md={4} controlId="violenceCriminalization">
                    <Form.Label>violenceCriminalization</Form.Label>
                    <Form.Control type="text" name="violenceCriminalization" value={country.violenceCriminalization} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} md={4} controlId="score">
                    <Form.Label>score</Form.Label>
                    <Form.Control type='text' name="score" value={country.score} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} md={4} controlId="illegalSameSexRelationships">
                    <Form.Check
                        type="switch"
                        id="illegalSameSexRelationships"
                        label="Illegal same sex relationships"
                        defaultChecked={country.illegalSameSexRelationships ? true : false}
                        onChange={() => { changeChecked('illegalSameSexRelationships') }} />
                </Form.Group>

                <Form.Group as={Col} md={4} controlId="propaganda">
                    <Form.Label>propaganda</Form.Label>
                    <Form.Check
                        type="switch"
                        id="propaganda"
                        label="Propaganda"
                        checked={country.propaganda ? true : false}
                        onChange={() => { changeChecked('propaganda') }} />

                </Form.Group>

            </Row>

            <Button variant="dark" type="submit">Save</Button>

        </Form >
    )
}

export default CountryEditForm