## Chapter 1 - Repository vulnerabilities walkthrough

The repository contains listed below a selection of popular vulnerabilities.

### Hardcoded credentials

```typescript
const API_KEY =
  'd87e842811e3c2086d1f6cfe6eede0c44b3a62d78e3e7c17050ee77d0f83f5bc';
```

```typescript
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'sqlite',
        database: './test.db',
        // port: 3306,
        // username: 'root',
        // password: 'root',
        // database: 'test',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
```

```python
  password="my_secret_password"
```

### SQL Injection

```typescript
  findByName(name: string) {
    return this.bookRepository.query(
      `SELECT * FROM book WHERE name = '${name}'`,
    );
  }
```

### XSS

```typescript
  @Get('title/:title')
  returnParsedTitle(@Param('title') title: string) {
    return `<div>${title}</div>`;
  }
```

### Path traversal

```typescript
  @Post('read-files')
  readFile(@Body() data: any) {
    const filePath = path.join(__dirname, 'files', data.pathname);
    return fs.readFileSync(filePath, 'utf8');
  }
```

### Not validated Redirects and Forwards

```typescript
  @Get('redirect')
  redirectTo(@Query('url') url: string, @Res() res: Response) {
    res.redirect(url);
  }
```

### Not validated Redirects and Forwards

```typescript
  @Get('redirect')
  redirectTo(@Query('url') url: string, @Res() res: Response) {
    res.redirect(url);
  }
```

### Other - Not readable code

```python
  def ssq(l):
    s = 0
    for i in range(len(l)):
      if l[i] % 2 == 0:
        s += l[i] ** 2
    return s

  print(ssq([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
```

### Other - Not used code and imports

```typescript
import fs from 'fs';

export const calculateRectangleArea = (
  length: number,
  width: number,
): number => {
  /**
   * Calculate the area of a rectangle given its length and width.
   *
   * @param length - The length of the rectangle
   * @param width - The width of the rectangle
   * @returns The area of the rectangle
   */

  const area = length * width;
  return area;
};
```
