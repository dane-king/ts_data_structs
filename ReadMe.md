# Debugging in Jest
### start up jest 
    node --inspect-brk node_modules/.bin/jest --runInBand [any other arguments here]
or on Windows
    
    node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand [any other arguments here]

### Add a debugger statement
    const myDecorator = (target: any, propertyKey: string, descriptor: PropertyDescriptor) =>  {
    debugger;
    console.log(`logging ${target}`);
  }


### In VS code add launch.json
    {
    "version": "0.2.0",
    "configurations": [
      {
        "type": "node",
        "request": "attach",
        "name": "Attach",
        "port": 9229
      }
    ]
  }      

### Run debugger  