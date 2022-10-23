import { readFileSync, writeFileSync } from 'fs';
import { parse } from 'bibtex-bibjson';

// Read file as string
let bibTexStr = readFileSync('./ref.bib').toString();

let bibJson = parse(bibTexStr)




let idx = Object.keys(bibJson)


let result = {publication: idx.map(x => bibJson[x])};


writeFileSync("output.json", JSON.stringify(result, null, 4), (err) => {
    if (err) throw err;
    console.log('ファイルが正常に出力されました。');
  });

