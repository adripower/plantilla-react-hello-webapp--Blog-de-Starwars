const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
      peoples: [],
			favorites: [],
      vehicles: [],			
			planets: [],
			
			info: []
		},
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			login: async (email, password, name) => {
                try {
                let response = await fetch("https://3000-adripower-plantillareac-10ebhbhb3eq.ws-eu114.gitpod.io/login", {
                    method: 'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({
                        email:email,
                        password:password,
                        name:name,
                    })  
            })
            let data = await response.json()
            if (response.status === 200) {
                localStorage.setItem("token", data.access_token);
                return true;
            }else{
                return false
            }
            } catch (error) {
                return false;
            }
        },

			getCharacter: () => {
				fetch("https://www.swapi.tech/api/people/", {
					method: 'GET'
				})
					.then(res => res.json())
					.then(data => setStore({ peoples: data.results }))
					.catch(err => console.error(err))

			},

			getFavorites: async () => {
                let token = localStorage.getItem("token")
                try{
                    let response = await fetch("https://bookish-palm-tree-7v9wqgx6vwg6frpw9-3000.app.github.dev/users/favorites", {
                        method: 'GET',
                        headers: {
                            'Content-Type':'application/json',
                            "Authorization": "Bearer "+token
                        },
                    })
                    let data = await response.json()
                    if (response.status === 200) {
                        setStore({favorites:data.results})
                    }else{
                        return [];
                    }
                }catch (error) {
                    return [];
                }
            },

			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/", {
					method: 'GET'
				})
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err))

			},

			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/", {
					method: 'GET'
				})
					.then(res => res.json())
					.then(data => setStore({ vehicles: data.results }))
					.catch(err => console.error(err))

			},

			getInfo: (type, id) => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch(`https://www.swapi.tech/api/${type}/` + id, requestOptions)
					.then((response) => response.json())
					.then((result) => setStore({ info: result.result }))
					.catch((error) => console.error(error));
			},

			addFavorite: (favorite) => {
					const store = getStore();
					const newArray= store.favorites.concat(favorite)
					setStore({ favorites: newArray })
		 	},

			deleteFavorite: (name) => {
				const arrayfiltered = getStore().favorites.filter((item, index) => item !== name)
				// console.log(arrayfiltered);
				setStore({ favorites: arrayfiltered })
		 	},

			favoriteList: (name) => {
				const listNames = getStore().favorites
				if (listNames.length == 0) {
					getActions().addFavorite(name)
				} else {
					if (listNames.includes(name)) {
						getActions().deleteFavorite(name)
					} else {
						getActions().addFavorite(name)
					}
				}
		 	}
		}
	};
};

export default getState;