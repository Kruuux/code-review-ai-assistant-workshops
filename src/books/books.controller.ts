import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Res,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import * as fs from 'fs';
import * as path from 'path';
import { Response } from 'express';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Post('read-files')
  readFile(@Body() data: any) {
    const filePath = path.join(__dirname, 'files', data.pathname);
    return fs.readFileSync(filePath, 'utf8');
  }

  @Post('read-filess')
  readFilee(@Body() data: any) {
    const filePath = path.join(__dirname, 'filess', data.pathname);
    return fs.readFileSync(filePath, 'utf8');
  }

  @Get('redirect')
  redirectTo(@Query('url') url: string, @Res() res: Response) {
    res.redirect(url);
  }

  @Get('title/:title')
  returnParsedTitle(@Param('title') title: string) {
    return `<div>${title}</div>`;
  }

  @Get('name/:name')
  findByName(@Param('name') name: string) {
    return this.booksService.findByName(name);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}
