const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			favorites: [
				{
					name: "R5-D4",
					type: "character",
					id: "8"
				},
				{
					name: "Bespin",
					type: "planet",
					id: "6"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			addFavorite: (name, type, id) => {
				const store = getStore();
				if (store.favorites.filter((item) => item.name === name).length === 0) {
					const newObj = {
						name: name,
						type: type,
						id: id
					}
					const newArr = [...store.favorites, newObj]
					setStore({favorites: newArr})
				} else console.log("That's already in here");
			},
			removeFavorite: (obj) => {
				const store = getStore();
				const newArr = store.favorites.filter((item) => item.name != obj.name)
				setStore({favorites: newArr})
			}
		}
	};
};

export default getState;
