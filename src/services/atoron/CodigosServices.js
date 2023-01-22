import Atoron from '../../utils/config/Atoron.config.js'

export const getCodigos = () => {
    return Atoron.get(`/descuentos/descuentos`)
}

export const editEstatusCodigo = (code, est) => {
    return Atoron.put(`/descuentos/editEstatus?code=${code}&est=${est}`)
} 