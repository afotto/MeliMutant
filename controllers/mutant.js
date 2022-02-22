/*
    Andrés Ottonello
    Examen MeLi
    25-8-21
    boolean isMutant(String[] dna);
    String[] dna = {"ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"};
*/
const { json } = require("express");


const mutant = {

    isMutant: (req, res) => {
        
        // let dna1= req.body.dna;
        // console.log('body: ' + req.body.dna);
        // console.log('dna1: ' + dna1);
        // let dna=["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];
        let dna = req.body.dna;
        let dnaMatriz = [[]];

        for (let i=0; i<6; i++){
            dnaMatriz[i]= dna[i].split('');
        }
        // console.log(dnaMatriz);
        
        // console.log(mutant.comparoDiagonal(dnaMatriz));
        // console.log(mutant.comparoOblicua(dnaMatriz));
        // console.log(mutant.comparoFilas(dnaMatriz));
        // console.log(mutant.comparoColumnas(dnaMatriz));

        if (!mutant.comparoDiagonal(dnaMatriz)) {
            if (!mutant.comparoOblicua(dnaMatriz)){
                if (!mutant.comparoFilas(dnaMatriz)){
                    if (!mutant.comparoColumnas(dnaMatriz)){
                        res.status(403).json('Forbidden');
                    }
                }
            }
        }

        res.status(200).json('Ok');

    },
    comparoDiagonal: (dnaMatriz) => {
        let diagonal=[];
        for(let i = 0; i <6; i++){
            diagonal[i]=dnaMatriz[i][i];
        }
        return mutant.secuencia(diagonal);
    },
    comparoOblicua: (dnaMatriz) => {
        let oblicua=[];
        for(let i = 0; i<6; i++){
            oblicua[i]=dnaMatriz[i][5-i];
        }
        // console.log(oblicua);
        return mutant.secuencia(oblicua);
    },
    comparoFilas: (dnaMatriz)=> {
        let fila=[];
        for(let i = 0; i<6; i++){
            for(let j=0; j<6; j++){
                fila[i]= dnaMatriz[i][j];
                if (mutant.secuencia(fila) == true) return true;
            }
        }
        return false;
    },
    comparoColumnas:(dnaMatriz)=>{
        let columna=[];
        for(let j=0;j<6;j++){
            for(let i=0;i<6;i++){
                columna[j]=dnaMatriz[i][j];
                if (mutant.secuencia(columna) == true) return true;
            }
        }
        return false;
    },
    secuencia: (secuencia) => {
        let igual=false;

        for(let j=0; j<2; j++){
            if (secuencia[j]==secuencia[j+1] && secuencia[j+1]== secuencia[j+2] && secuencia[j+2]==secuencia[j+3]) igual=true;
        }

        return igual;
    }

}


module.exports = mutant;