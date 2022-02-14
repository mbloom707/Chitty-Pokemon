import React from "react"

export default class SearchBar extends React.Component {
  constructor() {
      super();
      this.state = {
      searchTerm: ``,
      };

      this.handleSearchChange = this.handleSearchChange.bind(this);
      this.handleSearchClick = this.handleSearchClick.bind(this);
      this.getPokeData = this.getPokeData.bind(this)
  }
      getPokeData(searchTerm) {
          console.log(searchTerm, "getPokeData")
          const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
          fetch(url).then(res => res.json()).then(data => { console.log(data) })
      }

  handleSearchClick(e) {
      //actually search for pokemon here
      console.log("handle Search click");
      let searchBar = document.querySelector('Search');
      console.log('You Searched', this.state.searchTerm);

      searchBar.value = this.state.searchTerm;
      e.preventDefault();
  }

  handleSearchChange(e) {
      console.log(e.target.value);
      this.setState({ searchTerm: e.target.value });
  }

  render(){
    return (
        <div>
            <form>
                <input
                    id="Search"
                    type="text"
                    onChange={this.handleSearchChange}
                ></input>
                <button onClick={this.handleSearchClick}>SEARCH</button>
            </form>
        </div>
    );
  }


}


// export default function SearchBar({ handleSearchChange, handleSearchClick }) {
//     return (
//         <div>
//             <form>
//                 <input
//                     id="Search"
//                     type="text"
//                     onChange={handleSearchChange}
//                 ></input>
//                 <button onClick={handleSearchClick}>SEARCH</button>
//             </form>
//         </div>
//     );
// }