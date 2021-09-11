import api from '@/Services'
import handleError from '@/Services/utils/handleError'
interface loginParamsProps {
    email: string
    password: string
}

export default async (params: loginParamsProps) => {
    console.log(params)
    try {
        if (!params.email) {
            return handleError({ message: 'Mail required' })
        }
        if (!params.password) {
            return handleError({ message: 'Password required' })
        }

        const response = await api.post('/auth/register', params)
        console.log(response)

        setTimeout(() => {
            console.log('Réponse: ', response.status)
        }, 3000)

        return response.data
    } catch (e) {
        console.log('error on RegisterService:', e)
    }
}
