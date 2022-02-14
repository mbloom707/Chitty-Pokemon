import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import PokemonCard from './PokemonCard';
import OldPokedex from './OldPokedex';
// import Pokedex from './Pokedex'

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fullWidth: {
    // margin: '10%',
    paddingTop: '5%',
    width: '100%',
  },

  pokedexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px"
  },

  cardPicture:{
    margin: "right"
  },

  cardName:{
    margin: "left"
  },
}));



function MainContent() {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
      <div className={classes.toolbar} />

        <Typography variant='h6'>WELCOME TO THE POKEDEX</Typography>

      <div className={classes.content}>
        <Typography header>
          PLEASE SEARCH A POKEMON TO LEARN MORE ABOUT IT
          <br />
          RELEASE ME FROM THIS MORTAL COIL
          <br />
          <br />
          Send Help
        </Typography>
        {/* <PokemonCard name="jason" imgUrl='https://bit.ly/3oJVUyd' /> */}
        <OldPokedex />
        {/* <Pokedex /> */}

        {/* {testList.map((obj, i) => (
          <pokemonCard key={i} name={obj.name} />
        ) )} */}


      </div>
    </main>
  );
}

export default MainContent;