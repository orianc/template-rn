import api from '@/Services'

interface newsResponse {
    data: Object
}

export async function fetchNews(token: string): Promise<newsResponse> {
    console.log('in fetchNews token:', token)

    const config = {
        headers: { Authorization: `Bearer ${token}` },
    }

    try {
        return await api.get('/news', config)
    } catch (e) {
        console.error('Error on fetchNews ', e)
    }
}
