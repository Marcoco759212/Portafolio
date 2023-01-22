import Atoron from '../../utils/config/Atoron.config.js'

export const getUsers = () => {
    return Atoron.get(`/users/users`)
}

export const editUser = (user) => {
    return Atoron.put(`/users/edit`, user)
} 