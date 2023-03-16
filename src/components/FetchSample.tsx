import {useEffect, useState} from 'react'
// useEffekt sie uruchamia ZAWSZE przy pierwszym renderoaniu komponentu oraz zmianie stanu kazdego []
// lub konkretnego stanu [loading] lub stanow (wystarczy, ze choc jeden jest zmieniony to sie uruchomi)
// [loading,timeState]

const FetchSample = () => {
const [dataState, setDataState] = useState([])
    const getData = async()=>{
      const response = await fetch(`https://dummyjson.com/products`);
      const data = await response.json()
      console.log(data);
    }

    getData();

    // nastepne zajecia, zrobic fetch z then i z async dwa sposoby ******
    // fetch zawsze zwraca promisa, ktory jest zwiazany z asynchronicznoscia
    // promis moze miiec statusy, przy uruchamianiu promisa jest pendig, jesli sie udalo fullfilled lub reject
    // metoda json zwraca promisa
    // json() zamienia jsona na strukture js-owa czyli odwrotnie niz sie wydaje, json jest STRINGIEM 
    // ale zapisanym w jednym formacie!
    // json, text, blob moze zwrocic API zalezy jak backendowiec to utworzyl
    useEffect(()=>{
        // fetch(`https://dummyjson.com/products`)
        // .then(response=> response.json())
        // .then(data => { 
        //   console.log(data);
        // })
        
        // console.log('test')
        getData();
    }
   
    ,[])

  return (
    <div>
  
     
    </div>
  )
}

export default FetchSample


// const sum = (a:number ,b: number) => {
//   // return a + b;
//   console.log(a + b);
// }

// const sum = (a: number, b: number) => a + b;
// tu jest return ukryty bo jedna linia i bez klamer

// funkcje typu event nie zwracaja nic wiec returna nie potrzebuja, ale kazda
// co ma wynik zwrocic musi miec RETURN!

// const getDataFromAPI = async () => {
//   const response = await fetch(`https://dummyjson.com/products`);
//   const data = await response.json();
//   return data;
// }
// funkcja async zawsze zwraca promise, a bez async bylaby undefined, string lub inne, gdy return nie damy

// console.log(getDataFromAPI())

