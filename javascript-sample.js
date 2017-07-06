
((state, timeLeftFn) => {
    var i;
    
    if (i === null) {
        i = 1;
    } else {
        i = i + 1;
    }
    
    
 
 const index = Math.floor(Math.random() * 17);
  


 const command = index % 2 === 0 ? {
         action: 'shoot', metadata: {} 
       
   } : {action: 'turn', metadata: { direction: 'right'}}

function goThrough() {
    
    i = i + 1;
    console.log(i);
    return i;
}


 i = i + 1;
    return {
        command,
        state: {
            hello: 'world'
        }
    };
});

