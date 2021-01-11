/* eslint-disable no-console */
import querystring from 'querystring';
import path from 'path';
import express from 'express';

export default class Server {
  constructor() {
    const app = express();
    app.get('/api', this.handleRequest);
    app.use('/', express.static(path.join(__dirname, 'public')));
    app.listen(9500);
  }

  private handleRequest = (req: express.Request, res: express.Response) => {
    const params = (req?.url ?? '').replace('/api?', '');
    console.log(querystring.parse(params));
    res.json({
      status: 'OK',
      data: ['Monitor1', 'Monitor2'],
    });
    res.send();
  };
}
