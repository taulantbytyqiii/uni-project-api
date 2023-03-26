function create() {
  const user = fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userName: 'dalldyshjaa',
      email: 'taulantbytyqi22@gmail.com',
      password: 'taulantb11',
    }),
  });
}

create();
