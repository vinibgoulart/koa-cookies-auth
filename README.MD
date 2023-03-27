<h1 align="center">
  KoaJS and NextJS session management
</h1>
<h4 align="center">A session manager by httpOnly cookies using <a href="https://koajs.com" target="_blank">KoaJS</a> and <a href="https://nextjs.org/" target="_blank">NextJS</a>.</h4>

[//]: # (![screenshot]&#40;https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.gif&#41;)

## How To Use

```bash
# Clone this repository and go into
git clone https://github.com/vinibgoulart/koa-cookies-session
cd koa-cookies-session

# Install dependencies
yarn

# Run the server
yarn server

# Run the app
yarn app
```

### API Routes
| method | endpoint | protected | what it do |
| --- | --- | --- | --- |
| GET | / | true | access events data |
| POST | /set-session | false | set session cookie |
