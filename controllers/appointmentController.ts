import {PrismaClient} from ".prisma/client"
import {Request, Response} from "express"

const prisma = new PrismaClient()



exports.createAppointment = async (req: Request, res: Response) => {
  const { startTime, patient_id, doctor_id, details} = req.body
  try {
        const { startTime, patient_id, doctor_id, details} = req.body
        const new_appointment = await prisma.appointment.create({
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

// id         Int         @id @default(autoincrement())
//   startTime  DateTime
//   endTime    DateTime
// details string
//   patient    Patient     @relation(fields: [patient_id], references: [id])
//   patient_id Int
//   doctor     Doctor      @relation(fields: [doctor_id], references: [id])
//   doctor_id  Int
//   // diagnosis Diagnosis
//   created_at DateTime    @default(now())
//   updated_at DateTime
//   Diagnosis  Diagnosis[]