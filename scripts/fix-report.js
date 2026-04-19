const fs = require('fs');
const path = './playwright-report/index.html';

if(!fs.existsSync(path)){
    console.log('Report não encontrado');
    process.exit(1);
}

let content = fs.readFileSync(path, 'utf-8');

//Forçar o light mode
content = content.replace(
    /<meta name="color-scheme".*?>/,
    '<meta name="color-scheme" content = "light">'
);

//Fallback (garantia extra)
if(!content.includes('color-sheme: light')){
    content = content.replace(
        '<head>',
        `<head><style>html { color-scheme: light !important; }</style>`
    );
}

fs.writeFileSync(path, content);

console.log('Report ajustado para o modo claro!');