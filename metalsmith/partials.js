import fs from 'fs';
import handlebars from 'handlebars';
import path from 'path';

export default function() {
  handlebars.registerPartial('header', fs.readFileSync(path.join(__dirname, '../source/layouts/partials/header.hbs')).toString());
  handlebars.registerPartial('footer', fs.readFileSync(path.join(__dirname, '../source/layouts/partials/footer.hbs')).toString());
}
