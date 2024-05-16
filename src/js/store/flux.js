const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
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
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }

			// GET Single Agenda
			loadAgendaContacts: async () => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/JavierRuisanchez/contacts")
				if(!response.ok) {
					throw new Error(response.status, response.statusText)
				}
				const data = await response.json();
				setStore({contacts: data.contacts});
			},
            
			//You will need functions to:
			//POST new contacts trough the API
            createNewContact: async () => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/JavierRuisanchez/contacts", {
					method: "POST",
					body: JSON.stringify(contactObject),
					headers: {
						'Content-Type': 'application/json'
					}
				});
				if (response.ok) {
					const data = await response.json();
					return data;
				} else {
					console.log('error: ', response.status, response.statusText);
					return {error: {status: response.status, statusText: response.statusText}};
				}
			},


			//PUT (update) contacts through the API
			
			// DELETE contacts
			deleteContact: async (contactId) => {
				const response = await fetch(`https://playground.4geeks.com/contact/agendas/JavierRuisanchez/contacts/${contactId}`, {
					method: "DELETE",
				});
				if(!response.ok) {
                      throw new Error(response.status, response.statusText)
				}
                 getActions().loadAgendaContacts();
			},
		}
	};
};

export default getState;
