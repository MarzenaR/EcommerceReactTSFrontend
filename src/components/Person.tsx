interface IDetails{
    idNumber: string,
    pesel: string
}

interface IHobby{
    title: string,
    price?: number
    // jesli price moze byc podana, ale rozniez moze jej nie byc to daje ?
    // interfejsami typujemy TYLKO obiekty
}

interface IPersonProps{
    firstname: string,
    lastname: string,
    details: IDetails,
    hobbies: IHobby[]
}

const Person = ({firstname, lastname, details, hobbies}: IPersonProps): JSX.Element => {
    return (
        <div>
            {firstname} {lastname} <br />
            {details.idNumber} {details.pesel}
            {hobbies[0].price?.toFixed()}
            {/* toFixed jest metoda tylko dla number czyli jesli price jest podana, ale jak nie jest to bedzie undefined */}
            {/* dlatego oniecznie musi byc ? */}
        </div>
    )
}

export default Person;