var mynode = document.getElementById("div1");
var mynode2 = document.getElementById("div3");

function change() {
  var Name = mynode.children[1].children[0].value;
  var Age = mynode.children[2].children[0].value;
  var Birthday = mynode.children[3].children[0].value;

  var output = " I am " + Name + " currently " + Age + " Years old, I was born on " + Birthday + ".";
  document.getElementById("outputtext").innerText = output;

}
function hider(){
  var nodestyle = mynode2.style.display;
  var status = (nodestyle == "none") ? "block" : "none";
  mynode2.style.display= status;

  status == "block" ? alert("Section shown") : alert("Section shown");

}






