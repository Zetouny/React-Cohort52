import { useState, useEffect } from "react";
import Person from "./Person.jsx";

function PersonController() {
  const getPerson = async () => {
    try {
      const fetchPerson = await fetch(
        "https://www.randomuser.me/api?results=1"
      );
      if (!fetchPerson.ok) {
        throw Error(`Unable to fetch a person: ${fetchPerson.status}`);
      }
      const person = await fetchPerson.json();
      const result = person.results[0];

      return {
        firstName: result.name.first,
        lastName: result.name.last,
        email: result.email,
      };
    } catch (error) {
      console.log(error.message);
    }
  };

  const [person, setPerson] = useState(null);

  useEffect(() => {
    const loadPerson = async () => {
      const result = await getPerson();
      setPerson(result);
      console.log(result);
    };
    loadPerson();
  }, []);

  return <Person person={person} />;
}

export default PersonController;
