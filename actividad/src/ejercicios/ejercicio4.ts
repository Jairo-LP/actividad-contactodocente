interface Alumno { 
    nombre: string; 
    edad: number; 
    calificacion: number;
 }
 const alumnos: Alumno[] = [ 
    { nombre: "Viviana", edad: 19, calificacion: 10 }, 
    { nombre: "Wendy", edad: 20, calificacion: 8 },
     { nombre: "Gerson", edad: 18, calificacion: 9 } 
    ];

    function calcularPromedio(alumnos: Alumno[]):
     number { let suma = 0; 
        for (let alumno of alumnos){
            suma = suma + alumno.calificacion;
            } 
        return suma / alumnos.length; 
        }
        const promedio = calcularPromedio(alumnos);
        console.log("El promedio es:", promedio);

