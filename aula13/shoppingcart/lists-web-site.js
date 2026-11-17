const token = "abcd"


export function webSiteFunction(services) {
    async function home(request, response) {
        response.send(`
        <html>
            <head>
                <title>Shopping Lists</title>
            </head>
            <body>
                <!-- Header -->
                <a href="/"> Home </a>
                <a href="lists"> Lists </a>

                <h1> Shopping Lists Home</h1>

                <!-- Footer -->
                <p>ISEL 2026</p>
            </body>
        </html>
        `)
    }

    async function getLists(request, response) {
        const user = await services.getUser(token)
        const lists = await services.getLists(user.id)
        response.send(`
        <html>
            <head>
                <title>Shopping Lists</title>
            </head>
            <body>
                <!-- Header -->
                <a href="/"> Home </a>
                <a href="lists"> Lists </a>

                <h1> Shopping Lists </h1>

                <table border="true">
                    <tr>
                        <th>Identifier</th>
                        <th>name</th>
                    </tr>
                    ${buildTableLines(lists)}
                </table>


                <!-- Footer -->
                <p>ISEL 2026</p>

            </body>
        </html>
        `)

    }

    function buildTableLines(lists) {
        return lists.map(buildLine).join('')
    }

    function buildLine(list) {
        return `<tr>
                <td><a href="lists/${list.id}">${list.id}</a></td>
                <td>${list.name}</td>
            </tr>`
    }


    async function getList(request, response) {
        const user = await services.getUser(token)
        const list = await services.getList(user.id, request.params.listId)
        response.send(`
        <html>
            <head>
                <title>Shopping Lists</title>
            </head>
            <body>
               <!-- Header -->
                <a href="/"> Home </a>
                <a href="lists"> Lists </a>

                <h1> Shopping List </h1>
                <p>id    : ${list.id}</p>
                <p>name  : ${list.name}</p>
                <p>items : ${list.items}</p>
               
                <!-- Footer -->
                <p>ISEL 2026</p>
                
            </body>
        </html>
        `)

    }

    return {
        getLists,
        getList,
        home
    }

}



