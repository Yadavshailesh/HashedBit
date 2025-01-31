 function scopeDemo() {
    if (true) {
      let blockScoped = "I am block-scoped (let)";
      const blockScopedConst = "I am block-scoped (const)";
      var functionScoped = "I am function-scoped (var)";
      
      console.log(blockScoped); // Accessible
      console.log(blockScopedConst); // Accessible
      console.log(functionScoped); // Accessible
    }
    
    // Outside the block:
    // console.log(blockScoped); // Error: blockScoped is not defined
     //console.log(blockScopedConst); // Error: blockScopedConst is not defined
    console.log(functionScoped); // Accessible because var is function-scoped
  }
  
  scopeDemo();