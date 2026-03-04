import { PrismaClient } from '@prisma/client'

// Создаем один экземпляр клиента для всего приложения
const prisma = new PrismaClient()

export default prisma
