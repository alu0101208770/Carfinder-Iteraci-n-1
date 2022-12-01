type Surname = {
  first_surname: string,
  second_surname: string
};

type Gender = 'Masculino' | 'Femenino' | 'No especificado';
  
export class User {
  constructor (private id: number, private email: string, 
    private password: string, private name: string,
    private surname: Surname, private date_of_birth: string,
    private gender: Gender, private phone: number) {}
}