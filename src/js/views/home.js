import React from "react";
import Contacts from "./Contacts.jsx";
import AddContact from "./AddContacts.jsx";


import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
	    <div>
			<AddContact />
		</div>
		<div>
			<Contacts />
		</div>
	</div>
);
