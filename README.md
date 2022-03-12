
NPM WATCH
---------

source: https://www.npmjs.com/package/npm-watch

Installation de watch:  
```npm install -g watch```

compilation:   
```npm run build```

complilation en continue:  
```npm run watch```

Dans ```package.json```:
* ```"runOnChangeOnly": true``` -> il n'y a pas de build initial lors du lancement de ```npm run watch``` (la valeur par défaut est ```false```)
* ```"delay": 3000``` -> scrute les changements toutes les 3s

