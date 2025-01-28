import React, { useState } from 'react'

const ListRender = () => {

  const [list] = useState(["L", "Light Yagami", "Ryuuki", "Misa Amane"]);

  const [users, setUsers] = useState([{id: 1, name: "Jefferson", age: 28}, {id: 2, name: "Geovana", age: 36}, {id: 3, name: "Inaye", age: 30}]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * users.length);

    setUsers((prevUser) => {
        console.log(prevUser)
        return prevUser.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
            <li key={user.id}> {user.name} - {user.age}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}> Delete Random User</button>
    </div>
  );
};

export default ListRender
