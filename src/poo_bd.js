const {Pool} = require("pg");
 async function criarConexao() {
  const pool = new Pool({
      user: 'zoeyemewxtzvyr',
      password: '67d9b3ee66a9016bb2eb82df3e600078fdd57e9f6b71501f6d69496d1d4c98c8',
      port: '5432',
      host: 'ec2-35-174-118-71.compute-1.amazonaws.com',
      database: 'd9ks7p6r08br17',
      
      
        ssl: {
            rejectUnauthorized: false

        }

    });

    let conexao = await pool.connect();
    //await conexao.query("insert into fornecedor (nome) values ($1)",["Forn1"]);//
    // await conexao.query("insert into fornecedor (nome) values ($1)",["Forn1"]);//  
    // await conexao.query("update fornecedor set nome = $1 where id_fornecedor = $2",["Forn2", 2]);//
    // await conexao.query("insert into fornecedor (nome) values ($1), ($2), ($3), ($4)",["Forn3", "Forn4", "Forn5", "Forn6"]);//
    //await conexao.query("delete from fornecedor where nome like 'Forn6'");//
   
   let resul = await conexao.query("select * from fornecedor");
    let tuplas = resul.rows;
    for(let tupla of tuplas){
        console.log(tupla);
    }
    
    conexao.release();
}

criarConexao();