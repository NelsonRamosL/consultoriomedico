function Consultorio(nombre, paciente) {
    var _nombre = nombre;
    var _paciente = paciente || [];
    Object.defineProperty(this, "_getNombre", {
        get: function () {
            return _nombre;
        }
    });
    Object.defineProperty(this, "_setNombre", {
        set: function (nombre) {
            _nombre = nombre;
        }
    });


    Object.prototype.setBucarPaciente = function (paciente_buscar) {
        var consulto = this._getNombre;
        this._getPaciente.forEach(function (element, indice) {

            if (element._getNombre == paciente_buscar) {
                console.log(element._getNombre + " - " + consulto)
               
            }

        })

    }

    Object.prototype.setPacientetodos = function () {
        var consulto = this._getNombre;
        this._getPaciente.forEach(function (element, indice) {

            console.log("Nombre : " + element._getNombre + " Rut : " + element._getRut + " Edad : " + element._getEdad + " Diagnostico : " + element._getDiagnostico + " Dependencia : " +consulto)

        })

    }


    Object.defineProperty(this, "_getPaciente", {
        get: function () {
            return _paciente
        }
    });

    Object.defineProperty(this, "_setPaciente", {
        set: function (paciente) {
            _paciente = paciente;
        }

    });

}



function Paciente(nombre, edad, rut, diagnostico) {

    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;

    Object.defineProperty(this, "_getNombre", {
        get: function () {
            return _nombre;
        }
    });
    Object.defineProperty(this, "_setNombre", {
        set: function (nombre) {
            _nombre = nombre;
        }
    });


    Paciente.prototype.getNombre = function () {
        return this._getNombre;
    };

    Paciente.prototype.setNombre = function (nombre) {
        this._setnombre = nombre;
    };



    Object.defineProperty(this, "_getEdad", {
        get: function () {
            return _edad;
        }
    });

    Object.defineProperty(this, "_setEdad", {
        set: function (edad) {
            _edad = edad;
        }
    });


    Object.defineProperty(this, "_getRut", {
        get: function () {
            return _rut;
        }
    });

    Object.defineProperty(this, "_setRut", {
        set: function (rut) {
            _rut = rut;
        }
    });


    Object.defineProperty(this, "_getDiagnostico", {
        get: function () {
            return _diagnostico;
        }
    });

    Object.defineProperty(this, "_setDiagnostico", {
        set: function (diagnostico) {
            diagnostico = diagnostico;
        }
    });


}

// Requerimiento 5) Instanciar cada objeto utilizando New

// Instancial Pacientes Consultorio 1
pacien1 = new Paciente("Pedro Donoso", 51, "1234307-4", "fractura")
pacien2 = new Paciente("Alberto Donoso", 61, "34652307-4", "trombosis")
pacien3 = new Paciente("Alejandra Perez", 34, "3484773-7", "golpe")
consul1 = new Consultorio("consultorio Rotario", [pacien1, pacien2,pacien3]);

// Instanciar Pacientes Consultorio 2
pacien4 = new Paciente("pedro hernandez", 33, "23454507-6", "policontuso")
pacien5 = new Paciente("Maria kass", 44, "34434307-5", "Diabetes")
pacien6 = new Paciente("Mauricio gorta", 55, "11135773-9", "Gota")
consul2 = new Consultorio("consultorio Santiago", [pacien4, pacien5, pacien6]);





// Requerimiento 4)  propiedad prototype que permita buscar los datos de
// los usuarios por nombre y otro método que permita mostrar todos los datos

// Buscar Maria kass en consul1 y consul2
consul1.setBucarPaciente("Maria kass")
consul2.setBucarPaciente("Maria kass")
console.log("-------------------------------------")// separacion 
// listar los pacientes de consul1 y consul2 
consul1.setPacientetodos();
consul2.setPacientetodos();
