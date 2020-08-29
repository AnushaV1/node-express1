# Broken App Issues

1. The variables declared in lines 2,3 could be const instead of var, let
2. The catch was missing parameter passing - catch(err)
3. async keyword was missing while trying to await inside the callback function
4. return should not be JSON.stringify for output, instead the app.use(json()) would return json format output in express.
