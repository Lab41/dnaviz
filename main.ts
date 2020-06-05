function squiggle(sequence: string): Array<Array<number>> {
    let x: Array<number> = [0.0]
    let y: Array<number> = [0.0]
    let yCoord: number = 0.0

    for (let _i = 0; _i < sequence.length; _i++) {
        let character: string = sequence[_i]
        x.push(x[x.length - 1] + 0.5)
        x.push(x[x.length - 1] + 0.5)
        if (character == "A") {
            y.push(yCoord + 0.5)
            y.push(yCoord)
        } else if (character == "C") {
            y.push(yCoord - 0.5)
            y.push(yCoord)
        } else if (character == "T") {
            y.push(yCoord - 0.5)
            y.push(yCoord - 1)
            yCoord -= 1.0
        } else if (character == "G") {
            y.push(yCoord + 0.5)
            y.push(yCoord + 1)
            yCoord += 1.0
        } else {
            y.push(yCoord)
            y.push(yCoord)
        }
    }
    let result: Array<Array<number>> = []
    result.push(x)
    result.push(y)
    return result
}

//yau
function yau(sequence: string): Array<Array<number>> {
    let x: Array<number> = [0.0]
    let y: Array<number> = [0.0]
    let xCoord: number = 0.0
    let yCoord: number = 0.0

    for (let _i = 0; _i < sequence.length; _i++) {
        let character: string = sequence[_i]
        if (character == "A") {
            xCoord = xCoord + 0.5
            yCoord = yCoord - ((3 ** 0.5) / 2)
        } else if (character == "C") {
            xCoord = xCoord + ((3 ** 0.5) / 2)
            yCoord = yCoord + 0.5
        } else if (character == "T") {
            xCoord = xCoord + 0.5
            yCoord = yCoord + ((3 ** 0.5) / 2)
        } else if (character == "G") {
            xCoord = xCoord + ((3 ** 0.5) / 2)
            yCoord = yCoord - 0.5
        }
        x.push(xCoord)
        y.push(yCoord)
    }
    let result: Array<Array<number>> = []
    result.push(x)
    result.push(y)
    return result
}
//yau-bp
function yau_bp(sequence: string): Array<Array<number>> {
    let x: Array<number> = [0.0]
    let y: Array<number> = [0.0]
    let xCoord: number = 0.0
    let yCoord: number = 0.0

    for (let _i = 0; _i < sequence.length; _i++) {
        let character: string = sequence[_i]
        xCoord++
        x.push(xCoord)
        if (character == "A") {
            yCoord = yCoord - 1
        } else if (character == "C") {
            yCoord = yCoord + 0.5
        } else if (character == "T") {
            yCoord = yCoord + 1
        } else if (character == "G") {
            yCoord = yCoord - 0.5
        }
        y.push(yCoord)
    }
    let result: Array<Array<number>> = []
    result.push(x)
    result.push(y)
    return result
}
//randic
function randic(sequence: string): Array<Array<number>> {
    let x: Array<number> = [0.0]
    let y: Array<number> = [0.0]
    let key = {
        'A': 3,
        'T': 2,
        'G': 1,
        'C': 0,
        'N': 4
    }
    for (let i = 0; i < sequence.length; i++) {
        x.push(i)
        y.push(key[sequence[i]])
    }
    let result: Array<Array<number>> = []
    result.push(x)
    result.push(y)
    return result
}
//qi
function qi(sequence: string): Array<Array<number>> {
    let x: Array<number> = [0.0]
    let y: Array<number> = [0.0]
    let key = {
        'AA': 12,
        'AC': 4,
        'GT': 6,
        'AG': 0,
        'CC': 13,
        'CA': 5,
        'CG': 10,
        'TT': 15,
        'GG': 14,
        'GC': 11,
        'AT': 8,
        'GA': 1,
        'TG': 7,
        'TA': 9,
        'TC': 3,
        'CT': 2
    }
    for (let i = 0; i < sequence.length; i++) {
        x.push(i)
        y.push(key[sequence[i] + sequence[i + 1]])
    }
    let result: Array<Array<number>> = []
    result.push(x)
    result.push(y)
    return result
}
//gates
function gates(sequence: string): Array<Array<number>> {
    let x: Array<number> = [0.0]
    let y: Array<number> = [0.0]
    let xCoord: number = 0.0
    let yCoord: number = 0.0
    for (let _i = 0; _i < sequence.length; _i++) {
        let character: string = sequence[_i]
        if (character == "A") {
            yCoord--
        } else if (character == "C") {
            xCoord--
        } else if (character == "T") {
            yCoord++
        } else if (character == "G") {
            xCoord++
        }
        x.push(xCoord)
        y.push(yCoord)
    }
    let result: Array<Array<number>> = []
    result.push(x)
    result.push(y)
    return result
}