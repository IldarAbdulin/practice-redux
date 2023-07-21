export const API = {
    GETPHOTOS: 'https://jsonplaceholder.typicode.com/photos?_limit=10',
    GETODOS: 'https://jsonplaceholder.typicode.com/todos',
    GETTODO: (id) => {
        return `https://jsonplaceholder.typicode.com/todos/${id}`
    },
    GETUSERS: 'https://jsonplaceholder.typicode.com/users',
    GETUSER: (id) => {
        return `https://jsonplaceholder.typicode.com/users/${id}`
    }
}