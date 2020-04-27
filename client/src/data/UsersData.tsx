
const UsersData = [
  {
    id: 1,
    pseudo: "IamRobinHood",
    nom: "Steve",
    prenom: "Jobs",
    email: "sjobs@icloud.com",
    tel: "0611111111",
    birthdate: "1998-07-30",
    birthplace: "Appleville",
    adress: "1 Mac avenue",
    zipcode: "11111",
    city: "InnovationVille",
    country: "Italy",
    password: "s1"
  },
  {
    id: 2,
    pseudo: "Jordy34",
    nom: "Jordan",
    prenom: "Belfort",
    email: "jbelford@gmail.com",
    tel: "0622222222",
    birthdate: "1984-02-12",
    birthplace: "Stattmont",
    adress: "1 Robbie avenue",
    zipcode: "22222",
    city: "Lemonville",
    country: "France",
    password: "j2"
  },
  {
    id: 3,
    pseudo: "magicTrick",
    nom: "Albus",
    prenom: "Dumbledore",
    email: "adumb@hogwards.com",
    tel: "0633333333",
    password: "a3"
  },
]

// Checks email and password for login
function login(email, password) {
  let user = UsersData.find( u => u.email===email && u.password===password );
  if (user!=null) { return true; } else { return false; }
}

// Checks if pseudo exists and if not adds a user to UserData
function signup(name, surname, pseudo, email, tel, password) {
  let samePseudo = UsersData.find( u => u.pseudo == pseudo );
  let newId = UsersData.length;
  if (samePseudo!=null) { return false; } else {
    UsersData.push({
      id: newId,
      pseudo: pseudo,
      nom: surname,
      prenom: name,
      email: email,
      tel: tel,
      password: password
    })
  }
}

// Returns the userdata for the given id
function getUser(id) {
  return UsersData.find(u => u.id==id);
}

export { login, signup, getUser };
