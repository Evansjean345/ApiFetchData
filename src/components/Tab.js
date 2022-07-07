import React from "react";
import { Table } from "react-daisyui";
import { useState, useEffect } from "react";

function Tab() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    function fecthData1() {
      fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => console.log(err.message));
    }
    fecthData1();
  }, []);
  console.table(data);
  return (
    <>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <span />
            <span>Name</span>
            <span>Email</span>
            <span>Company</span>
            <span>Phone</span>
            <span>City</span>
            <span>Suite</span>
          </Table.Head>

          <Table.Body>
            {data.map((datas, key) => {
              return (
                <Table.Row>
                  <span key={key}>{datas.id}</span>
                  <span>{datas.name}</span>
                  <span>{datas.email}</span>
                  <span>{datas.company.name}</span>
                  <span>{datas.phone}</span>
                  <span>{datas.address.city}</span>
                  <span>{datas.address.suite}</span>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}

export default Tab;
