import * as React from 'react';
import Component from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Logo from '../img/pocketMonsters.png';
import SearchBar from './SearchBar';


// class SearchApp extends Component {
//   constructor() {
//       super();
//       this.state = {
//       searchTerm: ``,
//       };

//       this.handleSearchChange = this.handleSearchChange.bind(this);
//       this.handleSearchClick = this.handleSearchClick.bind(this);
//       this.getPokeData = this.getPokeData.bind(this)
//   }
//       getPokeData(searchTerm) {
//           console.log(searchTerm, "getPokeData")
//           const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
//           fetch(url).then(res => res.json()).then(data => { console.log(data) })
//       }

//   handleSearchClick(e) {
//       //actually search for pokemon here
//       console.log("handle Search click");
//       let searchBar = document.querySelector('Search');
//       console.log('You Searched', this.state.searchTerm);

//       searchBar.value = '';
//       e.preventDefault();
//   }

//   handleSearchChange(e) {
//       console.log(e.target.value);
//       this.setState({ searchTerm: e.target.value });
//   }
// }


const Title = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 0),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'center',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '50%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '50%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '50%',
      },
    },
  },
}));

export default function TopMenu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >

          <img alt="The Thicc One" src={Logo.toString()}></img>
          </IconButton>


          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          <SearchBar />

          </Typography>

        </Toolbar>
      </AppBar>
    </Box>
  );
}