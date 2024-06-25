import { getTokenFromCookie } from "./cookies";

export default async function generateTable() {
  const url = "http://localhost/PLC/Back/api/Routes/Match/getHistory/";
  const tk = getTokenFromCookie()
 
  try {
      const response = await fetch(url,{
        method: 'GET',
        headers:{
          'Content-Type':'application/json',
          'Authorization': 'bearer ' + tk
        }
      });
      const data = await response.json();
      
      
      
      const table = document.createElement("table") as HTMLTableElement;
      const thead = document.createElement("thead") as HTMLTableSectionElement;
      const tbody = document.createElement("tbody") as HTMLTableSectionElement;
      

      if (data.length > 0) {
        const tr_head = document.createElement("tr") as HTMLTableRowElement;
        Object.keys(data[0]).forEach((x) => {  
              if(x != 'win'){
                tr_head.innerHTML += `<th>${x}</th>`;
              }       
          });
          thead.append(tr_head);
          
          data.forEach((x:any) => {
            
            const tr_body = document.createElement("tr") as HTMLTableRowElement;
            
            tr_body.innerHTML = `
            <td><span style="color: ${x.win ? '' :'red'}">${x.Xp}</span></td>
            <td><span style="color: ${x.win ? '' :'red'}">${x.Modo}</span></td>
            <td><span style="color: ${x.win ? '' :'red'}">${x.Tempo } seg</span></td>
            <td><span style="color: ${x.win ? '' :'red'}">${x.Vidas}</span></td>
            <td><span style="color: ${x.win ? '' :'red'}">${x.Data}</span></td>`;
            tr_body.style.color = 'green'
            tbody.append(tr_body);
          });
          
          table.append(thead);
          table.append(tbody);
         
          return table
      } else {
          // Tratar caso não haja dados
          table.innerHTML = "<p>Nenhum dado disponível</p>";
      }
  } catch (error) {
      // Tratar erros de requisição
      console.error("Erro ao buscar dados do servidor:", error);
      return null;
  }
}
