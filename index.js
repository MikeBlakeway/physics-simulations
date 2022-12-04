import { CANVAS } from './config.js'

const main = document.getElementById('main')
const canvas = document.createElement('canvas')

class Environment {
    constructor(width = 400, height = 400, config) {
        const { dimension = '2d', bg_color = 'black' } = config

        this.width = width
        this.height = height
        this.canvas = main.appendChild(canvas)
        this.draw = canvas.getContext(dimension)

        this._setupCanvas = () => {
            // canvas
            this.canvas.width = this.width
            this.canvas.height = this.height
            this.draw.fillStyle = bg_color
            this.draw.fillRect(0, 0, this.width, this.height)
        }
        this._setupCanvas()
    }

    setup = callBack => {
        callBack()
    }

    // shape methods are grouped under Shape

    Shape = {
        Circle: (x, y, r, color = 'white') => {
            this.draw.beginPath()
            this.draw.fillStyle = color
            this.draw.arc(x, y, r, 0, 2 * Math.PI)
            this.draw.fill()
        },
    }

    // vector methods are grouped under Vector
    Vector = {
        add() {
            console.log('Vector.add')
        },
    }

    // force methods are grouped under Force
    Force = {
        gravity() {
            console.log('Force.gravity')
        },
    }
}

const canvasConfig = {
    bg_color: 'RGB(0,25,51)',
}
const {
    setup,
    Shape: { Circle },
} = new Environment(CANVAS.WIDTH, CANVAS.HEIGHT, canvasConfig)

setup(() => {
    Circle(50, 50, 10)
})
