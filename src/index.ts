import { User } from './modules/User';

let user = new User('John', 'Doe');

user.greet();

let main = document.getElementById('main-area');
console.log(main);
console.log(typeof main);
if (main) {
    let content = main.innerHTML;
    main.innerHTML = content + ', ' + user.getFullName();
}
