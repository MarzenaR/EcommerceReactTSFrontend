import React, { useState, SyntheticEvent } from 'react'

const ShowName = () => {
    const [firstnameValue, setFirstnameValue] = useState<string>("");
    const [surnameValue, setSurnameValue] = useState<string>("");

    const handleFirstname = (e: SyntheticEvent)=>{
     const target = e.target as HTMLInputElement;
// czyli konwertujemy go na klase HTMLInputElement, wskazuje mu, ze to input element a nie ogolny element HTMLa
     setFirstnameValue(target.value)
    }

    const handleSurname = (e: SyntheticEvent)=>{
        const target = e.target as HTMLInputElement;
        setSurnameValue(target.value)
    }

  return (
    <div>
        <label>Podaj Imie</label>
     
        <input onChange={handleFirstname} value={firstnameValue}/>
        {firstnameValue.length < 3 && <div>you must enter minimum 3 letters</div>}
        <label>Podaj Nazwisko</label>
        <input onChange={handleSurname} value={surnameValue}/>
        {surnameValue.length < 3 && <div>you must enter minimum 3 letters</div>}
        {
          firstnameValue.length >= 3 && surnameValue.length >=3   && <p>{firstnameValue} {surnameValue}</p>
        }
        
    
       
        
    </div>
  )
}

export default ShowName
