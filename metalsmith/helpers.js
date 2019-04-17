import handlebars from 'handlebars';
import moment from 'moment';

export default function() {
  handlebars.registerHelper('brDate', ctx => moment(ctx).format('MMM DD, YYYY'));

  handlebars.registerHelper('xmlDate', ctx => moment(ctx).format('ddd, DD MMM YYYY HH:mm:ss ZZ'));

  handlebars.registerHelper('dateToStr', ctx => moment(ctx).format('YYYY • MMMM, DD'));

  handlebars.registerHelper('specialTruncate', ctx => {
    return ctx.length > 28 ? `${ctx.substring(0, 15)}...${ctx.substring(ctx.length - 15, ctx.length)}` : ctx;
  });

  handlebars.registerHelper('menuActive', (v1, v2, options) => {
    const fnTrue = options.fn;
    const fnFalse = options.inverse;

    return v1[0] === v2 ? fnTrue(this) : fnFalse(this);
  });
}
