const balence = (req,res) =>{
    let {diccionario} = req.body;
    diccionario.balance = [];

    let newObject = {};
    let result = [];
    const result2 = [];
    try {
        diccionario.mes.forEach((element,index) => {
            diccionario.balance[index] = diccionario.ventas[index] - diccionario.gastos[index];     
            for(i in diccionario){
                newObject[i] = diccionario[i][index];
            }
            return newObject
        });
        
        res.status(201).json({status:`success`,newObject});        
        
    } catch (error) {
        return res.status(400).json({status:"Provide a object"})
    }
    
};

module.exports = balence;


