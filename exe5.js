function profissionalExperience(yearsExperiencia) {
    if (yearsExperiencia <= 1) 
        return 'Iniciante'
    else if (yearsExperiencia > 1 && yearsExperiencia <=3) 
        return 'Intermediário'
    else if (yearsExperiencia > 3 && yearsExperiencia <= 6)
        return 'Avançado'
    else if (yearsExperiencia >= 7)
        return 'Master'
    
}

var anosTrabalho = 3
console.log(profissionalExperience(anosTrabalho))