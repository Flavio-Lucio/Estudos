function tratarerroelancar(erro) {
    //throw new error('...')
    //throw 10
    //throw tre
    //throw 'message'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirnomegritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarerroelancar(e)
    } finally {
        console.log('final')
    }
} 

const obj = { nome: 'Roberto'}
imprimirnomegritado(obj)