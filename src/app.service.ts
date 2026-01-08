import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async testDatabaseConnection(): Promise<object> {
    try {
      // 尝试查询数据库，测试连接
      const users = await this.prisma.user.findMany({
        take: 5, // 最多查询5条记录
      });
      
      return {
        success: true,
        message: 'Database connection successful!',
        users: users,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Database connection failed!',
        error: error.message,
      };
    }
  }
}
