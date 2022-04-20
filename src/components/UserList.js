import React, { useState, useEffect } from "react";
import axios from "axios";
function Userlist(props) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      console.log(persons);
      let arr = [];
      persons.forEach((element) => {
        console.log(element);

        arr.push(element);
      });
      setUser(arr);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return (
      <div style={{ width: "100%", textAlign: "center", margin: "5rem auto" }}>
        wait
      </div>
    );
  }

  return user.map((el) => {
    return (
       
      <div className = "container">
        <h1> {el.name} </h1>
        <h3> {el.email} </h3>
        <h3> {el.phone} </h3>
        <h3> {el.address.city} </h3>
        <h3> {el && el.address && el.address.city} </h3>
      </div>
      
    );
  });

}

export default Userlist;