

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

function handleSubmit() {
    
    
    
        async function getMunicipio(UF) {
            const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`)
            const data = await response.json()
            
            return data.map((i) => i.nome)
        }

    const ufVal = document.getElementById('uf')
    const UF = ufVal.value

    getMunicipio(UF).then((muns) => {
    
    const tabela = document.getElementById('tabela')
    tabela.innerHTML = ''
        
        for (let i = 0; i < muns.length; i++) {
            const nomeMun = muns[i]

            const celula = document.createElement('div')
            celula.textContent = nomeMun
            
            tabela.appendChild(celula)

            celula.classList.add('cel-tabela')
            
            if ((i + 1) % 3 === 0) {
                celula.classList.add('nova-linha')
            }
        }
        tabela.classList.add('tabela-padding')
    })
}