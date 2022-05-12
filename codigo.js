//Este sistema permite prender y apagar un dispositivo e instalar y desintalar un app, tambien podremos hacer una comparativa entre especificasiones tales como cantidad de descargas, puntuacion y peso de la app

class App {
    cosntructor(descargas,puntuacion,peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    } 
    instalar(){
        if (this.instalada == false){
            alert("app instalada correctamente");
            this.instalada = true;
          
        }
    }
    desintalar(){
        if (this.instalada == true){
            alert("app desintalada correctamente");
            this.instalada = false;
            
        }
    }
    abrir(){
        if (this.iniciada == false && this.instalada == true){
            alert("app iniciada");
            this.iniciada = true;
            
        }
    }
    cerrar(){
        if (this.iniciada == true && this.instalada == true){
            alert("app cerrada");
            this.iniciada = false;
            
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b></br>
        Puntuacion: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>
        `;
    }
}

let app = new App("16.000", "5 estrellas", "500 mb");
let app1 = new App("12.000", "2 estrellas", "865 mb");
let app2 = new App("10.000", "4 estrellas", "385 mb");
let app3 = new App("8.000", "3 estrellas", "123 mb");

document.write(`
    ${app.appInfo()} <br>
    ${app1.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
`)

//app.instalar()
//app.abrir()
//app.cerrar()
//app.desintalar()



