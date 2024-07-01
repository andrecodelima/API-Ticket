import { openDb } from "../../config/configDb.js";

export async function getAllTicket(req, resp){
    // const ticket = req.body
    try{
        const db = await openDb()
        const tickets = await db.all('SELECT * FROM ticket')
        
        console.log('Registro(s) recuperados com sucesso')
        resp.json(tickets)

        resp.status(200).json(
            {
                "statusCode":200
            }
        )


    }catch(e){
        console.log(`Erro ao recuperar registro -- ${e}`)
        resp.status(500).json(
            {
                "statusCode":500,
                "message":'Erro ao recuperar registro'
            }
        )
    }
}

export async function insereTicket(req, resp){
   
    try{
        const ticket = req.body
        const db = await openDb()
        await db.run(
            'INSERT INTO ticket (nome_evento, tipo) VALUES(?,?)',
            [ticket.nome_evento, ticket.tipo]
        )

        console.log('Registro adicionado com sucesso')
        resp.status(201).json(
            {
                "statusCode":201,
                "message":'Registro adicionado com sucesso'
            }
        )

    }catch(e){
        console.error('Erro ao inserir registro' + e)
        resp.status(500).json(
            {
                "statusCode":500,
                "message":'Erro ao inserir registro'
            }
        )
    }
}