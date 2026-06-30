namespace brazoRobotico {
    let velocidad = 10

    let pinBase = AnalogPin.P0
    let pinBrazo1 = AnalogPin.P1
    let pinBrazo2 = AnalogPin.P2
    let pinPinza = AnalogPin.P15

    let base_inicio = 70
    let base_fin = 120

    let brazo1_inicio = 80
    let brazo1_fin = 120

    let brazo2_inicio = 135
    let brazo2_fin = 90

    let pinza_abierta = 90
    let pinza_cerrada = 50

    function moverServo(pin: AnalogPin, inicio: number, fin: number): void {
        if (inicio < fin) {
            for (let pos = inicio; pos <= fin; pos++) {
                pins.servoWritePin(pin, pos)
                basic.pause(velocidad)
            }
        } else {
            for (let pos2 = inicio; pos2 >= fin; pos2--) {
                pins.servoWritePin(pin, pos2)
                basic.pause(velocidad)
            }
        }
    }

    /**
     * Configura los pines donde están conectados los servomotores.
     * @param base pin del servo de la base
     * @param brazo1 pin del servo del brazo 1
     * @param brazo2 pin del servo del brazo 2
     * @param pinza pin del servo de la pinza
     */
    //% block="configurar pines base %base brazo1 %brazo1 brazo2 %brazo2 pinza %pinza"
    //% base.defl=AnalogPin.P0
    //% brazo1.defl=AnalogPin.P1
    //% brazo2.defl=AnalogPin.P2
    //% pinza.defl=AnalogPin.P15
    export function configurarPines(base: AnalogPin, brazo1: AnalogPin, brazo2: AnalogPin, pinza: AnalogPin): void {
        pinBase = base
        pinBrazo1 = brazo1
        pinBrazo2 = brazo2
        pinPinza = pinza
    }

    /**
     * Configura la velocidad de movimiento.
     * Entre más grande el número, más lento se mueve.
     * @param nuevaVelocidad pausa entre grados en milisegundos
     */
    //% block="configurar velocidad %nuevaVelocidad ms"
    //% nuevaVelocidad.defl=10
    export function configurarVelocidad(nuevaVelocidad: number): void {
        velocidad = nuevaVelocidad
    }

    /**
     * Configura los grados de inicio y fin de la base.
     */
    //% block="configurar base inicio %inicio fin %fin"
    //% inicio.defl=70
    //% fin.defl=120
    export function configurarBase(inicio: number, fin: number): void {
        base_inicio = inicio
        base_fin = fin
    }

    /**
     * Configura los grados de inicio y fin del brazo 1.
     */
    //% block="configurar brazo 1 inicio %inicio fin %fin"
    //% inicio.defl=80
    //% fin.defl=120
    export function configurarBrazo1(inicio: number, fin: number): void {
        brazo1_inicio = inicio
        brazo1_fin = fin
    }

    /**
     * Configura los grados de inicio y fin del brazo 2.
     */
    //% block="configurar brazo 2 inicio %inicio fin %fin"
    //% inicio.defl=135
    //% fin.defl=90
    export function configurarBrazo2(inicio: number, fin: number): void {
        brazo2_inicio = inicio
        brazo2_fin = fin
    }

    /**
     * Configura los grados de la pinza abierta y cerrada.
     */
    //% block="configurar pinza abierta %abierta cerrada %cerrada"
    //% abierta.defl=90
    //% cerrada.defl=50
    export function configurarPinza(abierta: number, cerrada: number): void {
        pinza_abierta = abierta
        pinza_cerrada = cerrada
    }

    /**
     * Mueve todos los servos a la posición inicial.
     */
    //% block="ir a posición inicial"
    export function posicionInicial(): void {
        pins.servoWritePin(pinBase, base_inicio)
        pins.servoWritePin(pinBrazo1, brazo1_inicio)
        pins.servoWritePin(pinBrazo2, brazo2_inicio)
        pins.servoWritePin(pinPinza, pinza_abierta)
    }

    /**
     * Mueve la base desde inicio hasta fin.
     */
    //% block="base ida"
    export function baseIda(): void {
        moverServo(pinBase, base_inicio, base_fin)
    }

    /**
     * Mueve la base desde fin hasta inicio.
     */
    //% block="base regreso"
    export function baseRegreso(): void {
        moverServo(pinBase, base_fin, base_inicio)
    }

    /**
     * Mueve el brazo 1 desde inicio hasta fin.
     */
    //% block="brazo 1 ida"
    export function brazo1Ida(): void {
        moverServo(pinBrazo1, brazo1_inicio, brazo1_fin)
    }

    /**
     * Mueve el brazo 1 desde fin hasta inicio.
     */
    //% block="brazo 1 regreso"
    export function brazo1Regreso(): void {
        moverServo(pinBrazo1, brazo1_fin, brazo1_inicio)
    }

    /**
     * Mueve el brazo 2 desde inicio hasta fin.
     */
    //% block="brazo 2 ida"
    export function brazo2Ida(): void {
        moverServo(pinBrazo2, brazo2_inicio, brazo2_fin)
    }

    /**
     * Mueve el brazo 2 desde fin hasta inicio.
     */
    //% block="brazo 2 regreso"
    export function brazo2Regreso(): void {
        moverServo(pinBrazo2, brazo2_fin, brazo2_inicio)
    }

    /**
     * Abre la pinza.
     */
    //% block="abrir pinza"
    export function abrirPinza(): void {
        moverServo(pinPinza, pinza_cerrada, pinza_abierta)
    }

    /**
     * Cierra la pinza.
     */
    //% block="cerrar pinza"
    export function cerrarPinza(): void {
        moverServo(pinPinza, pinza_abierta, pinza_cerrada)
    }

    /**
     * Mueve un servo manualmente a cierto ángulo.
     * @param pin pin del servo
     * @param grados ángulo del servo
     */
    //% block="mover servo en pin %pin a %grados grados"
    //% grados.defl=90
    export function moverServoManual(pin: AnalogPin, grados: number): void {
        pins.servoWritePin(pin, grados)
    }
}
