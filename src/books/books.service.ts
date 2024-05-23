import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @Inject('BOOK_REPOSITORY')
    private bookRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto) {
    const book = await this.bookRepository.create(createBookDto);
    return this.bookRepository.save(book);
  }

  findByName(name: string) {
    // ===== 2 =====
    return this.bookRepository.query(
      `SELECT * FROM book WHERE name = '${name}'`,
    );
  }

  findAll() {
    return this.bookRepository.find();
  }

  findOne(id: number) {
    return this.bookRepository.findOne({ where: { id } });
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const book = await this.bookRepository.findOne({ where: { id } });
    if (!book) throw new NotFoundException(`Book #${id} not found`);

    book.name = updateBookDto.name;
    book.description = updateBookDto.description;

    return this.bookRepository.update({ id }, book);
  }

  async remove(id: number) {
    const book = await this.bookRepository.findOne({ where: { id } });
    if (!book) throw new NotFoundException(`Book #${id} not found`);

    return this.bookRepository.remove(book);
  }
}
