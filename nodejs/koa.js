const Koa = require('koa')
const app = new Koa()

app.use(async(ctx, next) => {
    if(ctx.path === '/') {
        ctx.body = `<h1>Ana Sayfaya Hoşgeldiniz</h1>`
    }else if (ctx.path === '/hakkimda') {
        ctx.body = `<h1>Hakkımda Sayfasına Hoşgeldiniz</h1>`
    }else if(ctx.path === '/iletisim'){
        ctx.body = `<h1>İletişim Sayfasına Hoşgeldiniz</h1>`
    }else {
        ctx.body = `<h1>Sayfa Bulunamadı 404</h1>`
    }
})

app.listen(3000)
