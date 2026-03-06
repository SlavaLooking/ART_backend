import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    register(dto: RegisterDto): Promise<{
        profile: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            firstName: string | null;
            lastName: string | null;
            deliveryAddress: string | null;
            phone: string | null;
            userId: number;
        } | null;
        email: string;
        refreshToken: string | null;
        refreshTokenExpiresAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    login(dto: any): Promise<{
        message: string;
    }>;
}
