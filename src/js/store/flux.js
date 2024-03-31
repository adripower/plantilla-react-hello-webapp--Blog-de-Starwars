const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],

      
        //! aqui es donde se almacena la info
	  personajes:[
		
	  ],
    planetas:[

    ],
    vehiculos:[

    ],

    },




    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },


        //! aqui hacemos la llamda a la API para los personajes

      obtenerPersonajes: () => {
        fetch("https://www.swapi.tech/api/people/")
          .then((res) => res.json())
          .then(data => setStore({personajes:data.results}))
          .catch((err) => console.error(err));
      },

      //! aqui hacemos la llamada a la API para los planetas

      obtenerPlanetas: ()=>{
        fetch("https://www.swapi.tech/api/planets/")
        .then(res => res.json())
        .then(data => setStore({planetas:data.results}))
        .catch(err => console.error(err));
      },

      //! aqui hacemos la llamda a la API para los vehivulos
      
      obtenerVehiculos:()=>{
        fetch("https://www.swapi.tech/api/vehicles/")
        .then(res => res.json())
        .then(data => setStore({vehiculos:data.results}))
        .catch(err => console.error(err))
      },




      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
