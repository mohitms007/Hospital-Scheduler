import {PrismaClient} from ".prisma/client"
import {Request, Response} from "express"

const prisma = new PrismaClient()


exports.addUserDetails = (req: Request, res: Response ) => {

  const {email, phone_no, address, previous_history, prev_appointments, patient }  = req.body

  const { startTime, patient_id, doctor_id, details} = req.body
  try {
        const { startTime, patient_id, doctor_id, details} = req.body
        const new_appointment = await prisma.user.create({
            data: {
               startTime,
               patient_id,
               doctor_id,
               details,
               createdAt: Date.now()
            }
        })

    res.status(200).send('Appointment was created');
} catch (e) {
    res.status(401).send('Some error seems to have happened. Please check if your logged in and entered all the details required')
}
}
// user_id Int 
// email String  @unique
// phone_no String 
// address String
// previous_history String?
// prev_appointments String?
// patient Boolean