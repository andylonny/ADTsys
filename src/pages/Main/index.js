import React, { Component } from 'react'
import { Form, Row, Col, Container, Button, Card } from 'react-bootstrap'
import './styles.css'
import axios from "axios"
import ReactDOM from 'react-dom'

const baseURL = "https://api.openweathermap.org/data/2.5/weather?q="
const APPID = "2c0eb3e51bfcdbf14b1569ec65900a92"
const pokeURL = "https://pokeapi.co/api/v2/type/"

export default class Main extends Component {
    state = {
        pokemonByTemp: {},
        city: ""
    }

    loadPokemon = async (city) => {
        try {
            const responseWeather = await axios.get(`${baseURL}${city}&appid=${APPID}&units=metric`)
            const responseWeatherData = responseWeather.data
            const temperature = responseWeatherData.main.temp
            const isRaining = responseWeatherData.weather[0].main === "Rain"
            const pokeType = this.getPokemonType(temperature, isRaining)

            const responsePokemon = await axios.get(`${pokeURL}${pokeType.type}`)
            const responsePokemonData = responsePokemon.data
            const pokemonsResponse = responsePokemonData.pokemon
            const pokemons = []
            for (let i = 0; i < 3; i++) {
                const index = Math.floor(Math.random() * pokemonsResponse.length)
                const pokemon = pokemonsResponse[index].pokemon
                const url = pokemon.url
                const pokemonResponse = await axios.get(url)
                const pokemonResponseData = pokemonResponse.data
                const sprites = pokemonResponseData.sprites
                const img = sprites.front_default
                if (img === null) {
                    this.handleClick()
                } else {
                    pokemons.push({
                        name: pokemon.name,
                        img
                    })
                }                
            }

            this.setState({
                pokemonByTemp: {
                    pokemons,
                    temperature,
                    raining: isRaining ? "Sim" : "Não",
                    pokeType,
                    city
                }
            })
        } catch (err) {
            alert("Erro. Tente novamente", err)
        }
    }

    getPokemonType = (temperature, isRaining) => {
        if (isRaining) {
            return { type: "electric", translate: "Elétrico" }
        }
        if (temperature < 5) {
            return { type: "ice", translate: "Gelo" }
        } else if (temperature >= 5 && temperature < 10) {
            return { type: "water", translate: "Água" }
        } else if (temperature >= 12 && temperature < 15) {
            return { type: "grass", translate: "Grama" }
        } else if (temperature >= 15 && temperature < 21) {
            return { type: "ground", translate: "Terra" }
        } else if (temperature >= 23 && temperature < 27) {
            return { type: "bug", translate: "Inseto" }
        } else if (temperature >= 27 && temperature <= 33) {
            return { type: "rock", translate: "Pedra" }
        } else if (temperature > 33) {
            return { type: "fire", translate: "Fogo" }
        } else {
            return { type: "normal", translate: "Normal" }
        }
    }

    handleClick = () => {
        const city = this.state.city
        this.loadPokemon(city)
        ReactDOM.findDOMNode(this.formControlRef).focus();
    }

    handleChange = (event) => {
        const city = event.target.value
        this.setState({ city })
    }

    renderCards = () => {
        const { pokemonByTemp } = this.state
        const { pokemons } = pokemonByTemp
        if (!pokemons) {
            return
        }
        return pokemons.map((pokemon, index) => (
            <Col key={index} sm={4}>
                <Card className="cards">
                    <Card.Img variant="top" src={pokemon.img} />
                    <Card.Body>
                        <Card.Title>{pokemon.name}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>

        ))
    }

    render() {
        const { pokemonByTemp } = this.state
        const { pokeType } = pokemonByTemp
        const translateType = pokeType ? pokeType.translate : ""
        return (
            <Container className="container">
                <Form>
                    <Row>
                        <Col>
                            <Form.Control autoFocus
                                type='text'
                                ref={(c) => this.formControlRef = c}
                                value={this.state.city}
                                placeholder="Digite a cidade"
                                onChange={this.handleChange}
                            />
                        </Col>
                        <Col>
                            <Button
                                variant="primary"
                                onClick={this.handleClick}
                            > Pesquisar
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <Row>
                    <Col>
                        <p>
                            <b>Temperatura:</b> <span>{pokemonByTemp.temperature} ºC</span>
                        </p>
                        <p>
                            <b>Está chovendo?</b> <span>{pokemonByTemp.raining}</span>
                        </p>
                        <p>
                            <b>Tipo:</b> <span>{translateType}</span>
                        </p>
                    </Col>
                </Row>
                <Row className="card-group">
                    {this.renderCards()}
                </Row>
            </Container>
        )
    }
}

