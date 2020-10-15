/*console.log("Starting");
function handleAddTodo(){
    console.log("Handling Add New Todo Button");
}*/

window.onload = function(){
    console.log("Bindings");
    var btn = document.getElementById("btnAdd")
   // btn.onclick = handleAddTodo;
    btn.onclick = function(){
    console.log("Handling Add New Todo Button");
   };
    
};

/*function doBindings(){
    console.log("Bindings");
    var btn = document.getElementById("btnAdd")
    btn.onclick = handleAddTodo;
}*/

//window.onload = doBindings;
//console.log("Finished");

//doBindings();
//Error is that during execution html documentation is lodding at the time