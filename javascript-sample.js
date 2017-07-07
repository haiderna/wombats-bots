
((state, timeLeftFn) => {
    var i;
    
    if (i === null) {
        i = 1;
    } else {
        i = i + 1;
    }
    
    
 
 const index = Math.floor(Math.random() * 17);
  
    const smokeDirections = ['forward', 'backward', 'left', 'right', 'drop'];
    const smokeDirection = smokeDirections[Math.floor(Math.random() * 5)];

 const command = index % 2 === 0 ? {
         action: 'shoot', metadata: {} 
       
   } :
   index % 3 == 0 && index % 2 != 0? 
   {action: 'move', metadata: { direction: 'forward'}}: 
       index % 5 == 0 && index % 3  != 0 && index % 2 != 0 ?
    {action: 'smoke', metadata: {direction: smokeDirection }}: 
   {action: 'turn', metadata: { direction: direction() }}
         


function direction() {
    const dir_index = Math.floor(Math.random() * 10);
    if (dir_index % 2 == 0) {
        return 'right';
        
    }
    if (dir_index % 2 != 0 && dir_index % 5 == 0){
        return 'about-face'
    } 
    
     if (dir_index % 2 != 0 && dir_index % 5 != 0){
        return 'left'
    } 
    
}

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


