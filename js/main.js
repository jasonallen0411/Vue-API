const app = new Vue({

		el: "#CNFacts",
		data: {
				appTitle: "Chuck Norris Facts",
				searchTerm: "Search for Fact",
				searchResults:[]
		},

		methods: {
			searchFacts(){
				fetch(`https://api.chucknorris.io/jokes/search?query=${ this.searchTerm }`)
				.then((response) => {
					this.searchResults = response.Search;
					console.log(this.searchResults);
				});
			}
		}
	
});
		
















