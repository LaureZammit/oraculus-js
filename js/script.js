async function getDatas(){
    const req = await fetch('../json/horoscope.json')
    const datas = await req.json()

    console.log(datas)

    let signes = datas.find(sign => sign.id === 1);

    let amourSign = document.querySelector('#amour').append(signes['amour'])

    let travailSign = document.querySelector('#travail').append(signes['travail'])

    let argentSign = document.querySelector('#argent').append(signes['argent'])

    let santeSign = document.querySelector('#sante').append(signes['sante'])

    let familleSign = document.querySelector('#famille').append(signes['famille'])

    let conseilSign = document.querySelector('#conseil').append(signes['conseil'])

    let dateSign = document.querySelector('#date').append(signes['date'])

    let signName = document.querySelector('#title-sign').append(signes['signe'])

    // let signImage = document.querySelector('#sign-img').append(src=signes['sign-img'])

    let prevIdSign = datas.find(signPrev => signPrev.id === 12)

    let prevSign = document.querySelector('.prev-sign').append(prevIdSign['signe'])

    let prevDate = document.querySelector('.date-prev-sign').append(prevIdSign['date'])
}
getDatas()

// // Faire un addEventListener pour remplacer le contenu de next-sign avec une fonction next-sign().
// addEventListener('click', () => {
//     const nextSign = document.querySelector('.next-sign')
//     nextSign.addEventListener('click', nextSign)

//     const prevSign = document.querySelector('.prev-sign')
//     prevSign.addEventListener('click', prevSign)

//     const nextSignDate = document.querySelector('.date-next-sign')
//     const prevSignDate = document.querySelector('.date-prev-sign')
//     const nextSignSign = document.querySelector('.next-sign')
//     const prevSignSign = document.querySelector('.prev-sign')
    
//     nextSignDate.addEventListener('click', () => {
//         nextSignDate.textContent = getDatas([+1].date);
//     })
// })