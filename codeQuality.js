async function getUsers(users) {
    const new_users = [];

    for (let i = 0; i < users.length; i = i + 1) {
        //   const newUser = user[i];
        //   newUser.id = i;

        //   new_users.push(newUser);
        new_users.push({
            newUser: users[i],
            id: i
        })
    }

    return new_users;
}