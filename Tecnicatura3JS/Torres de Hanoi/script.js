const torres = [
    [],
    [],
    []
];

let movimientos = [];
let animacion = null;

function hanoi(n, origen, auxiliar, destino){

    if(n === 1){
        movimientos.push([origen, destino]);
        return;
    }

    hanoi(
        n - 1,
        origen,
        destino,
        auxiliar
    );

    movimientos.push([
        origen,
        destino
    ]);

    hanoi(
        n - 1,
        auxiliar,
        origen,
        destino
    );
}

function dibujar(){

    document
        .querySelectorAll(".disco")
        .forEach(disco => disco.remove());

    const torresHTML =
        document.querySelectorAll(".torre");

    torres.forEach((torre, indiceTorre) => {

        torre.forEach((disco, indice) => {

            const nuevoDisco =
                document.createElement("div");

            nuevoDisco.classList.add("disco");

            nuevoDisco.style.width =
                (disco * 20 + 60) + "px";

            nuevoDisco.style.bottom =
                (indice * 26 + 32) + "px";

            torresHTML[indiceTorre]
                .appendChild(nuevoDisco);
        });

    });
}

function iniciar(){

    if(animacion){
        clearInterval(animacion);
    }

    const cantidad =
        parseInt(
            document.getElementById(
                "cantidadDiscos"
            ).value
        );

    movimientos = [];

    torres[0] = [];
    torres[1] = [];
    torres[2] = [];

    for(let i = cantidad; i >= 1; i--){
        torres[0].push(i);
    }

    dibujar();

    hanoi(
        cantidad,
        0,
        1,
        2
    );

    const total =
        Math.pow(2, cantidad) - 1;

    document.getElementById(
        "totalMovimientos"
    ).textContent =
        `Total de movimientos: ${total}`;

    document.getElementById(
        "contador"
    ).textContent =
        "Movimiento: 0";

    document.getElementById(
        "estado"
    ).textContent =
        "Resolviendo...";

    let contador = 0;
    let paso = 0;

    animacion = setInterval(() => {

        if(paso >= movimientos.length){

            document.getElementById(
                "estado"
            ).textContent =
                "✅ Problema resuelto";

            clearInterval(animacion);
            return;
        }

        const [
            origen,
            destino
        ] = movimientos[paso];

        const disco =
            torres[origen].pop();

        torres[destino].push(disco);

        contador++;

        document.getElementById(
            "contador"
        ).textContent =
            `Movimiento: ${contador}`;

        document.getElementById(
            "estado"
        ).textContent =
            `Moviendo disco de ${String.fromCharCode(65 + origen)} hacia ${String.fromCharCode(65 + destino)}`;

        dibujar();

        paso++;

    }, 500);
}

iniciar();