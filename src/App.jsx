import React, { useState } from "react";

const App = () => {
  const [countries, setCountries] = useState([]);

  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  const checkExistingCountry = () => {
    return countries.find((eventCountry) => {
      if (eventCountry.name.toLowerCase() === country.toLowerCase()) {
        return true;
      } else {
        return false; 
      }
    });
  }

  const addCountry = (event) => {
    event.preventDefault();

    if (checkExistingCountry()) {
      alert("이미 등록된 국가입니다.");
    } else {
      const newCountry = {
        name: country,
        gold: gold,
        silver: silver,
        bronze: bronze,
      };
      setCountries([...countries, newCountry]) ;
    };
    }

  
  const updateCountries = (event) => {
    event.preventDefault();

    if (checkExistingCountry()) {
      setCountries(
        countries.map((eventCountry) => {
          if(eventCountry.name.toLowerCase() === country.toLowerCase()) {
            return {
              name: country.name,
              gold: gold,
              silver: silver,
              bronze: bronze,
            }
          } else {
            return country;
          }
        })
      )
    } else {
      alert("등록되지 않은 국가입니다.");
    }
  }

  const deleteCountry = (name) => {
    console.log(name);
    setCountries(countries.filter((country) => {
      if(country.name.toLowerCase() !== name) {
        return country;
      };
    }))
  }

  return (
    <div className="main-container">
      <h1>2024 파리 올림픽 메달 리스트</h1>
      <form className="input-form" onSubmit={addCountry}>
        <div className="input-field">
          <label htmlFor="country">국가명</label>
          <input
            id="country"
            onChange={(event) => {
              setCountry(event.target.value);
            }}
          />
        </div>
        <div className="input-field">
          <label htmlFor="gold">금메달</label>
          <input
            id="gole"
            onChange={(event) => {
              setGold(event.target.value);
            }}
          />
        </div>
        <div className="input-field">
          <label htmlFor="silver">은메달</label>
          <input
            id="silver"
            onChange={(event) => {
              setSilver(event.target.value);
            }}
          />
        </div>
        <div className="input-field">
          <label htmlFor="bronze">동메달</label>
          <input
            id="bronze"
            onChange={(event) => {
              setBronze(event.target.value);
            }}
          />
          <div className="button-group">
            <button type="submit">국가추가</button>
            <button onClick={updateCountries}>수정하기</button>
          </div>
        </div>
      </form>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => {
              return (
                <tr key={country.name}>
                  <td>{country.name}</td>
                  <td>{country.gold}</td>
                  <td>{country.silver}</td>
                  <td>{country.bronze}</td>
                  <td className="delete-btn" 
                  onClick={() => {
                    deleteCountry(country.name);
                  }}>삭제</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;