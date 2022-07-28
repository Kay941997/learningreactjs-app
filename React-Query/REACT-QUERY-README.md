#################################### REACT QUERY ####################################
###### Settings:
$ npx create-react-app react-query-app (cài create react app)
$ yarn add json-server (cài json-server)
- Thêm file fakedatabase.json (tạo fake database)
- Thêm vào file packagejson "serve-json": "json-server --watch fakedatabase.json --port 4000" (chạy json-server)
$ yarn add react-router-dom (cài react router dom để route)
$ yarn add axios (cài axios để fetch data)
$ yarn add @tanstack/react-query  (cài react-query)
$ npm i --save-dev @types/react-query (cài react-query)

###### Run:
- $ yarn serve-json (chạy file fakedatabase.json)
- $ yarn start (chạy app)

###### Code:
# 1. Fetch Data qua useState và useEffect: (ví dụ File Superheroes)
- SuperHeroes.page.js:
    + fetch data qua useState và useEffect 

# 2. Fetch Data qua useQuery từ React Query : (ví dụ File RQSuperheroes)
$ yarn add @tanstack/react-query
- App.js:
    +   import { QueryClientProvider, QueryClient } from 'react-query'
        import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
    +   return (
            <QueryClientProvider client={queryClient}>
                <Router>
                </Router>
            </QueryClientProvider>
- RQSuperheroes.page.js:
    + fetch data qua useQuery

# 3. React Query Devtools:
- App.js:
    + Thêm ReactQueryDevtools
    +   import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
    +   return (
            <QueryClientProvider client={queryClient}>
                <Router>
                </Router>
                <ReactQueryDevtools initialIsOpem={false} position='bottom-right' />
            </QueryClientProvider>

# 4. Query Cache:
- F12 web -> Mở network -> Fast 3G
- RQSuperheroes.page.ts:
    + Thêm cacheTime: 5000
    +   const { isLoading, data, isError, error, isFetching } = useQuery(
            ['super-heroes'], 
            fetchSuperHeroes,
            {
                cacheTime: 5000,
            } 
        )

