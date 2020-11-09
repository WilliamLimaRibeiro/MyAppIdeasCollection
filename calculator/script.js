var viewBoxItens = [];
var elementViewr = '';

function storange(value){
  viewBoxItens.push(value)
}

function getClick(value){
  elementViewr = '';
  storange(value);
  console.log(value);
  returnView();
}

function returnView(){
  let element;

  for (let index = 0; index < viewBoxItens.length; index++) {
    element = viewBoxItens[index];
    elementViewr = elementViewr + element;
  }
  document.getElementById('viewBox').value = elementViewr;
}

function clearAll(){
  console.log('clear');
  viewBoxItens= [];
  elementViewr = '';
  console.log(viewBoxItens);
  returnView();
}

function clearMostRecent() {
  viewBoxItens.pop();
  elementViewr = '';
  returnView();
}

function calc() {
  
  aux = eval(elementViewr);
  clearAll()
  if (aux == "NaN") {
    aux = 'infinito'
  }
  viewBoxItens = [aux];
  if(viewBoxItens == "NaN"){
    viewBoxItens = 'infinito'
  }
  returnView();
  return aux;
}