    import { Global, Module } from '@nestjs/common';
    import { PrismaService } from './prisma.service';

    @Global() // Это сделает базу доступной во всем приложении
    @Module({
      providers: [PrismaService],
      exports: [PrismaService],
    })
    export class PrismaModule {}
    
