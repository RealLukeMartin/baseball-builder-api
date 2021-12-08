import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamsModule } from './teams/teams.module';
import { PlayersModule } from './players/players.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TeamsModule,
    PlayersModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
