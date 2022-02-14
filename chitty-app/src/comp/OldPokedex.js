import React, { useEffect, useState } from "react";
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CircularProgress,
    Toolbar,
    AppBar,
    Box,
    Modal,
    TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//import { toFirstCharUppercase } from "./constants";
//import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import SearchBar from './SearchBar';

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const useStyles = makeStyles((theme) => ({
    pokedexContainer: {
        paddingTop: "20px",
        paddingLeft: "50px",
        paddingRight: "50px",
    },
    cardMedia: {
        margin: "auto",
        main: '#DEBEBE',
    },
    cardContent: {
        textAlign: "center",
        //main: '#DEBEBE',
        // backgroundColor: fade(theme.palette.color.
    },

}));

const OldPokedex = (props) => {
    const classes = useStyles();
    const { history } = props;
    const [pokemonData, setPokemonData] = useState({});
    const [filter, setFilter, searchTerm] = useState("");



    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
            .then(function (response) {
                const { data } = response;
                const { results } = data;
                const newPokemonData = {};
                results.forEach((pokemon, index) => {
                    newPokemonData[index + 1] = {
                        id: index + 1,
                        name: pokemon.name,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1
                            }.png`,
                    };
                });
                setPokemonData(newPokemonData);
            });
    }, []);

    // const handleSearchChange = (e) => {
    //     setFilter(e.target.value);
    // };

    const toFirstCharUppercase = name =>
        name.charAt(0).toUpperCase() + name.slice(1);

    const getPokemonCard = ({pokemonId, searchTerm}) => {
        const { id, name, sprite } = pokemonData[pokemonId];

        return (


            <Grid item xs={4} key={pokemonId}>
                <Card onClick={() => history.push(`/${id}`)}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={sprite.toString()}
                        style={{ width: "130px", height: "130px" }}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography>{`${id}. ${toFirstCharUppercase(name)}`}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
    };

    return (
        <>
            {pokemonData ? (
                <Grid container spacing={2} className={classes.pokedexContainer}>

                  {Object.keys(pokemonData).map(
                    (pokemonId) =>
                    console.log("from pokedex: " + searchTerm) &&
                      pokemonData[pokemonId].name.includes(filter) &&
                      getPokemonCard(pokemonId)
                  )}


                </Grid>
                          )
            : (
                <CircularProgress />
            )}
        </>
    );
}

export default OldPokedex;

