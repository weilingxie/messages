import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { Message } from './type';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return [
      { content: 'message1' },
      { content: 'message2' },
      { content: 'message3' },
    ];
  }

  @Post()
  createMessage(@Body() body: Message) {
    console.log(body.content + ' created');
  }

  @Get('/:id')
  getMessageById(@Param() id: number) {
    const message: Message = { content: `message${id}` };
    console.log(id);
    return message;
  }
}
