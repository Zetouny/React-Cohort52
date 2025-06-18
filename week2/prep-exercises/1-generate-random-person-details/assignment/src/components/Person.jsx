function Person({ person }) {
  return (
    <>
      {person ? (
        <ul className="user-info">
          <li>
            <b>First Name: </b> {person.firstName}
          </li>
          <li>
            <b>Last Name: </b> {person.lastName}
          </li>
          <li>
            <b>E-mail: </b> {person.email}
          </li>
        </ul>
      ) : (
        ""
      )}
    </>
  );
}

export default Person;
