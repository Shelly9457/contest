AOS.init()
const q = document.querySelector.bind(document)
const qall = document.querySelectorAll.bind(document)
// robot
const robot__container = q('.robot__container')
const robot__input = q('.robot__input')
const robot__body = q('.robot__body')
function open_robot() {
    robot__container.classList.toggle('active')
}
function close_robot() {
    robot__container.classList.remove('active')
}
function robot__btn(e) {
    robot__input.value = ROBOT_BTN[e]
    send__robot()
}
function inkey(e) {
    e.keyCode == 13 && send__robot()
}
function send__robot() {
    if (robot__input.value == '') {
        return
    } else {
        robot__body.innerHTML += `
        <p class="d-flex justify-content-end">
            <span class="admin__message">${robot__input.value}</span>
        </p>
        `
        var ans = '您好，我是本網站的聊天機器人，很高興為您服務，請留下您的聯絡資訊，或是來電(02)-1234-5678由專人客服人員為您服務。'
        x = Object.keys(ANS).filter(k => robot__input.value.includes(k)).at(-1)
        if (x) {
            ans = ANS[x]
        }
        setTimeout(() => {
            robot__body.innerHTML += `
            <p>
                <span class="robot__message">${ans}!</span>
            </p>
        `
            robot__body.scrollTop = 1000000000000000000
        }, 700);
        robot__input.value = ''
    }
}
anime({
    targets: '.about__box',
    translateX: '-100%',
    loop: true,
    duration: 10000,
    easing: 'linear'
})
// how
anime({
    targets: '.how__imgbox',
    translateY: [8, -8],
    loop: true,
    duration: 1000,
    easing: 'easeInOutSine',
    direction: 'alternate',
})
const how__item = qall('.how__item')
const how__imgbox = q('.how__imgbox')
const how__name = q('.how__name')
const how__text = q('.how__text')
const how__centerimg = q('.how__centerimg')
how__item.forEach((data, index) => {
    data.onclick = () => {
        how__name.innerText = TT_DATA[index].name
        how__text.innerText = TT_DATA[index].text
        how__centerimg.src = TT_DATA[index].img
        how__imgbox.classList.add('active')
        setTimeout(() => {
            how__imgbox.classList.remove('active')
        }, 700);
    }
})
// item
const item__container = q('.item__container')
ITEM_DATA.forEach((data, index) => {
    item__container.innerHTML += `
    <div class="item">
        <img src="${data.img}" class="item__img rounded-circle">
        <h3 class="text-light my-3">${data.name}</h3>
        <h5 class="text-light my-3">${data.text}</h5>
    </div>
    `
})

const items = qall('.item')
const item_le = items.length
let count = 0
function getIndex(i) {
    if (i % item_le === 0) return 0
    if (Math.sign(i) >= 0) {
        return i % item_le
    } else {
        return i % item_le + item_le
    }
}
function upclass(n) {
    count += n
    let index = getIndex(count)
    let nextcount = Math.floor(item_le / 2)
    items.forEach(data => {
        data.classList = 'item'
    })
    items[index].classList.add('active')
    let i = getIndex(index + 1)
    items[i].classList.add('next')
    while (nextcount > 1) {
        i = (i + 1) % item_le
        items[i].classList.add('next2')
        nextcount -= 1
    }
    Math.sign(n) === 1 && trs(i)
    i = getIndex(index - 1)
    items[i].classList.add('prve')
    let lassindex = -1
    items.forEach((data, index) => {
        if (data.className == 'item') {
            data.classList.add('prve2')
            lassindex = index
        }
    })
    Math.sign(n) === -1 && trs(lassindex)
}
function trs(index) {
    items[index].classList.add('nono')
    setTimeout(() => {
        items[index].classList.remove('nono')
    }, 0);
}

upclass(0)
window.addEventListener('click', e => {
    e.target.classList.contains('next') && upclass(1)
    e.target.classList.contains('prve') && upclass(-1)
})
// chart
const chartone = q('.mychart')
Chart.defaults.font.size = 18
Chart.defaults.color = '#59b'
const abc = new Chart(chartone, {
    type: 'pie',
    data: {
        labels: ['重要商用電話', '推銷電話', '詐騙電話'],
        datasets: [{
            label: '國民APP whoscall 2021年',
            data: [83.5, 40.4, 4.4],
            backgroundColor: [
                '#5d9b84',
                '#f59b55',
                '#f56255'
            ]
        }]
    },
})
// const mychart = new Chart(chartone, {
//     type: 'pie',
//     data: {
//         labels: ['重要商用電話', '推銷電話', '詐騙電話'],
//         datasets: [{
//             label: '國民APP whoscall 2021年',
//             data: [83.5, 40.8, 4.4],
//             backgroundColor: [
//                 '#5d9b84',
//                 '#f59b55',
//                 '#eaa56c'
//             ]
//         }]
//     }
// })
// color
const sun = q('.sun')
const wave = q('.wave')
let c = 'light'
const themes = {
    light: {
        '--colorone': '#5d9b84',
        '--colortwo': '#f59b55',
        '--bs-body-bg': '#fff',
        '--bs-body-color': 'rgb( 33, 37, 41)',
    },
    dark: {
        '--colorone': '#f59b55',
        '--colortwo': '#5d9b84',
        '--bs-body-bg': '#5d5d5d',
        '--bs-body-color': '#fff',
    },
}
function color() {
    if (c === 'light') {
        sun.src = './images/moon.png'
        wave.style.backgroundImage = 'url(./images/wave2.png)'
        c = 'dark'
    } else {
        sun.src = './images/sun.png'
        wave.style.backgroundImage = 'url(./images/wave.png)'
        c = 'light'
    }
    setcolor(themes[c])
}
function setcolor(theme) {
    for (let key in theme) {
        document.documentElement.style.setProperty(key, theme[key])
    }
}
// footer
const borad__container = q('.borad__container')
const name__input = q('.name__input')
const gmail__input = q('.gmail__input')
const message__input = q('.message__input')
const footer__input = qall('.footer__input')

function footer() {
    window.event.preventDefault()
    borad__container.innerHTML += `
    <div class="borad__box">
        <p class="mb-1">${name__input.value}</p>
        <p class="mb-1">${gmail__input.value}</p>
    </div>
    <p class="fs-4 borad__message position-relative ps-2">${message__input.value}</p>
    </div>
    `
    footer__input.forEach(data => {
        data.value = ''
    })
}
// three
const threecontianer = q('.three')
const scene = new THREE.Scene()
let camera = new THREE.PerspectiveCamera(
    75,
    1,
    0.1,
    1000
)
const renderer = new THREE.WebGLRenderer({
    alpha: true
})
const size = threecontianer.clientWidth * 0.8
renderer.setSize(size, size)
const control = new THREE.OrbitControls(camera, renderer.domElement)
threecontianer.appendChild(renderer.domElement)
const geometry = new THREE.SphereGeometry(1, 32, 32)
const textureloader = new THREE.TextureLoader()
const texture = textureloader.load('./images/t1.jpg')
const material = new THREE.MeshBasicMaterial({
    map: texture
})
const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)
camera.position.z = 2
function animate() {
    requestAnimationFrame(animate)
    control.update()
    control.autoRotate = true
    control.autoRotateSpeed = 3
    control.enableZoom = false
    renderer.render(scene, camera)
}
animate()