import { Book } from "./Book";
import { Person } from "./Person";
import { Repository } from "./Repository";

const persons = new Repository<Person | Book>();
persons.add(new Person("Bob Martin", 60));
persons.add(new Book("The Code Book"));
console.log(persons);
