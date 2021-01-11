/* eslint-disable no-console */
import querystring from 'querystring';
import path from 'path';
import express from 'express';
import { exec } from 'child_process';

export default class Server {
  constructor() {
    const app = express();
    app.get('/api', this.handleRequest);
    app.use('/', express.static(path.join(__dirname, 'public')));
    app.listen(9500, '192.168.50.218');
  }

  private handleRequest = (req: express.Request, res: express.Response) => {
    const paramsString = (req?.url ?? '').replace('/api?', '');
    const params = querystring.parse(paramsString);
    if (params?.screenMode) {
      // Do something
      exec(`DisplaySwitch.exe /${params?.screenMode}`);
    }
    res.json({
      status: 'OK',
    });
    res.send();
  };
}
