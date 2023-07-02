

// Lista de Unidades Federativas

async function getUF() {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    
    const data = await response.json()

    return data.map((uf) => uf.sigla)
}

getUF().then((ufs) => {
    const listaEfs = document.getElementById('uf')

    for (let i = 0; i < ufs.length; i++) {
        const unidadeFed = ufs[i]
        
        const option = document.createElement('option')
        option.innerHTML = unidadeFed
        
        listaEfs.appendChild(option)
    }
})