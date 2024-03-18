var date = new Date()
let day = date.getDay()
async function getJsonData() {
    try {
      const resposta = await fetch('data.json');

      if (!resposta.ok) {
        throw new Error('Was not possible to get the data');
      }
      const dados = await resposta.json();
      return dados;
    }
    catch {
      console.error('Erro', erro);
  }
}
  
getJsonData()
.then((data) => {

    var total_amount = 0
    var total_percent = 0
    total_amount += data[0].amount + data[1].amount + data[2].amount + data[3].amount + data[4].amount + data[5].amount + data[6].amount
    for(var i = 0; i<data.length; i++){
        let percent = data[i].amount * 100 / total_amount
        total_percent += percent
        if(day == i){
          document.getElementById(data[i].day + '-bar').classList.remove('bg-soft-red')
          document.getElementById(data[i].day + '-bar').classList.add('bg-cyan')
        }
        document.getElementById(data[i].day + '-amount').innerText = '$'+data[i].amount 
        document.getElementById(data[i].day + '-bar').classList.add(`h-[${percent}%]`)
    }


})
.catch((erro) => {
    console.error('Erro', erro);
});
  