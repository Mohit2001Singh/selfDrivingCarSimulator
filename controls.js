class Controls {
    constructor(type) {
        this.forward = false
        this.left = false
        this.right = false
        this.reverse = false
        switch (type) {
            case "KEYS":
                this.#addKeyBoardListener()
                break
            case "DUMMY":
                this.forward = true
                break
        }
    }
    #addKeyBoardListener() {
        document.onkeydown = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = true
                    break
                case "ArrowRight":
                    this.right = true
                    break
                case "ArrowDown":
                    this.reverse = true
                    break
                case "ArrowUp":
                    this.forward = true
                    break
            }
        }
        document.onkeyup = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = false
                    break
                case "ArrowRight":
                    this.right = false
                    break
                case "ArrowDown":
                    this.reverse = false
                    break
                case "ArrowUp":
                    this.forward = false
                    break
            }
        }
    }
}