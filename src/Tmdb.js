const API_KEY = '82bd9841e24c2adf7641f3ead363b488'
const API_BASE = 'https://api.themoviedb.org/3'


// FUNÇÕES ASSINCRONAS ESPERA A BUSCA SER COMPLETA PARA PULAR PARA OS PRÓXIMOS COMANDOS
const basicFetch = async(endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json() // CONVERTENDO PARA JSON
    return json
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
            

        ]
    },
    getMovieInfo: async (moviId, type) => {
        let info = {}
        if(moviId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${moviId}?language=pt-BR&api_key=${API_KEY}`)
                    break
                case 'tv':
                    info = await basicFetch(`/tv/${moviId}?language=pt-BR&api_key=${API_KEY}`)
                    break
                default:
                    info = null
                    break

            }
        }
        return info
    }
}