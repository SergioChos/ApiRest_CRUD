const matrizNumber = (req,res) =>{
    const {matriz} = req.body;

    if(!Array.isArray(matriz) && matriz.length > 0) return res.status(400).json({status: "Provide an array of numbers"})
    
    try {
    let clasificados = [];
    const sinClasificar = [];
    
    matriz.forEach(element => {
        if(!clasificados.includes(element)){
            clasificados.push(element)
        }else{
            sinClasificar.push(element);
        }
    });

    clasificados = [...clasificados.sort(), ...sinClasificar];
    
    return res.status(201).json({status:`success`,matriz,clasificados});
    } catch (error) {
        return res.status(400).json({status:"Provide an array of numbers"})
    }
    
};

module.exports = matrizNumber;

