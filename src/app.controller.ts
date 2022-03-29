import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { Connection } from 'typeorm';

@Controller()
export class AppController {
  constructor(
    @Inject('Connection') public connection: Connection,
    private readonly appService: AppService) {
    // TODO:
  }

  @Get("/healthcheck/status")
  healcheckStatus(): any {
    return {status: 200,
            message: "Service is running"};
  }

  @Get("/healthcheck/status/all")
  healcheckStatusAll(): any {
    if (this.connection.isConnected===true){
      return {
        MySQLConnected: "success",
        message: "Service is running",
        status: 200};
    }
    else{
      return {
        MySQLConnected: "failed",
        message: "Service is not running",
        status: 401};
      }
    }
    
}
