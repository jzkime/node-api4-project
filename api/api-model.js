const users = [
    {username: "elevenSuper", password: "asdfghj8", id: "1"},
    {username: "max-skater", password: "12345678", id: "2"},
    {username: "willthewise", password: "87654321", id: "3"}
]

let id = 3;
const mkId = () => {
    return ++id
}

module.exports = {
    async getAll() {
        return users;
    },

    async addUser(user) {
        return new Promise((res) => {
            const nUser = {...user, id: mkId()}
            users.push(nUser)
            res(nUser)
        })
    }
}