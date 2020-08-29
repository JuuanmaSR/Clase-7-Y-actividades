function probarValidarNombre(){
    console.assert(
        validarNombre(``) === `Este campo debe tener al menos 1 caracter`,
         `validar Nombre no funciono con un string vacio`
    );
    
    console.assert(
        validarNombre(`111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111`) === `Este campo debe tener menos de 50 caracteres`,
        `validar Nombre no funciono con un string mayor a 50 caracteres`
    );
};
probarValidarNombre();

