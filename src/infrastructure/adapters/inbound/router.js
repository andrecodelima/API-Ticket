import { Router } from "express";
import { insereTicket, getAllTicket } from "./TicketController.js";

const router = Router()

router.get('/',(req, resp)=> resp.status(200).send('Home Ticket'))
router.get('/ticket', getAllTicket)
router.post('/ticket', insereTicket)

export default router
