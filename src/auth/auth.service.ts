// src/auth/auth.service.ts
import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(dto: RegisterDto) {
    // 1. Хешируем пароль (10 - это количество раундов соли)
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(dto.password, salt);

    try {
      // 2. Сохраняем пользователя и создаем пустой профиль в одной транзакции
      const newUser = await this.prisma.user.create({
        data: {
          email: dto.email,
          password: hash,
          profile: {
            create: {} // Создаем пустую запись в UserProfile
          }
        },
        include: {
          profile: true // Включаем профиль в ответ, чтобы проверить создание
        }
      });

      // Вместо delete newUser.password; return newUser; пишем:
      const { password, ...userWithoutPassword } = newUser;
        return userWithoutPassword;


    } catch (error) {
     // Код ошибки P2002 в Prisma означает нарушение уникальности (Unique constraint)
      if (error.code === 'P2002') {
        throw new ForbiddenException('Пользователь c таким email уже существует');
      }
      throw error;
    }
  }

    // Метод заглушка для логина (на будущее)
  async login(dto: any) {
    return { message: 'Логика входа будет здесь' };
  }
}
