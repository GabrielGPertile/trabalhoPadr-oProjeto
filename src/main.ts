import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { resolve } from 'path';
import { AppModule } from './Module/app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  /*
   * Caminhos absolutos para as pastas do trabalho
   * A variavel staticDir contém o caminho para a pasta que contém o HTML's e JavaScripts.
   * A variavel viewsDir contém o caminho para a pasta que contém arquivos .hbs para 
   * caregar html de forma dinamica.
  */
  const staticDir = resolve('src/static');
  const viewsDir = resolve('src/views');

  app.useStaticAssets(staticDir);
  app.setBaseViewsDir(viewsDir);

  /*
   * Configura o mecanismo de visualização
  */
  app.setViewEngine('hbs');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  await app.listen(3000);
}
bootstrap();