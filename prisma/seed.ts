import { prisma } from "../src/lib/prisma";

async function seed() {
    await prisma.event.create({
        data: {
            id: '875b60c7-2e22-48f6-bdc5-bbf72a201011',
            title: 'Unite Sumit!',
            slug: 'unite-sumit',
            details: 'Um evento para devs apaixonados(as) por codigo!',
            maximumAttendees: 120,

        }

    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})