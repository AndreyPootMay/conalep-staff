import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfficesService {
  private offices: Office[] = [
      {
        "id": 1,
        "name": "Talleres y Laboratorios",
        "details": "Responsable de coordinar el uso de los talleres y laboratorios.\r\nCoordinar al personal de los puestos de carácter operativo y de servicios del área.\r\nRealizar y supervisar la realización de las prácticas tecnológicas de acuerdo a lo programado. Supervisar el uso adecuado y aprovechamiento del mobiliario y equipo de los talleres y laboratorios.\r\nCoordinar las actividades relativas a la conservación y mantenimiento de  la infraestructura de bienes muebles e inmuebles. Coordinar los procesos del Sistema de Gestión de Calidad y del PC-SiNEMS.",
        "img": "lhKTbHxX-G4rEIgwY9PM0TRNMSkhJuSl.jpg",
        "schedules": "Lunes a Viernes de 7:30 a 14:00 y 14:30 a 20:30",
        "email": "talleres.cancun2@qroo.conalep.edu.mx",
        "assigned_admin": "Lic. Jorge Noe Ricalde Pak",
        "active": 1,
        "created_at": "2020-12-09 10:21:35",
        "created_by": 1,
        "updated_at": "2021-02-03 12:30:41",
        "updated_by": 1,
        "officeServices": [
          {
            "id": 7,
            "services_detail": "1. Coordinar a los estudiantes de servicio social de apoyo en talleres y laboratorios en turno matutino. \r\n2. Atención de incidencias de los talleres y laboratorios.\r\n3. Atención docentes y estudiantes en la solución de problemas técnicos en talleres, laboratorios y sala audiovisual.",
            "team_member_name": "Lic. Jose Luis Chable Peraza",
            "team_member_email": "jchablep.adm286@conalepqroo.edu.mx"
          },
          {
            "id": 8,
            "services_detail": "1. Coordinar a los estudiantes de servicio social de apoyo en talleres y laboratorios en turno vespertino.\r\n2. Atención de incidencias de los talleres y laboratorios.\r\n3. Atención docentes y estudiantes en la solución de problemas técnicos en talleres, laboratorios y sala audiovisual.",
            "team_member_name": "Lic. Niger Andrey Poot May",
            "team_member_email": "niger.p@conalepqroo.edu.mx"
          },
          {
            "id": 9,
            "services_detail": "1. Coordinar y supervisar el trabajo del personal de mantenimiento bajo su mando.\r\n2. Realizar mantenimiento preventivo y correctivo a la infraestructura (pintura, eléctrico, plomería, albañilería, jardinería, soldadura).\r\n3. Realizar mantenimiento preventivo y correctivo de mobiliario y equipo.\r\n4. Montaje de mobiliario y equipo para eventos y actividades.",
            "team_member_name": "P.T Enrique Santiago Castillo Chan",
            "team_member_email": "-@_._"
          },
          {
            "id": 10,
            "services_detail": "1. Realizar mantenimiento preventivo y correctivo a la infraestructura (pintura, eléctrico, plomería, albañilería, jardinería).\r\n2. Realizar mantenimiento preventivo y correctivo de mobiliario y equipo.\r\n3. Limpieza de salones, oficinas, áreas públicas, talleres y laboratorios.\r\n4. Montaje de mobiliario y equipo para eventos y actividades.",
            "team_member_name": "C. Ernesto Amilcar Ojeda Gongora / C. Luis Alberto Hernandez",
            "team_member_email": "-@_._"
          },
          {
            "id": 11,
            "services_detail": "1. Realizar mantenimiento preventivo y correctivo a la infraestructura (pintura, eléctrico, plomería, albañilería, jardinería).\r\n2. Realizar mantenimiento preventivo y correctivo de mobiliario y equipo.\r\n3. Limpieza de salones, baños administrativos, oficinas, áreas públicas, talleres y laboratorios.\r\n4. Montaje de mobiliario y equipo para eventos y actividades.",
            "team_member_name": "C. Juan Gabriel Valdez Vazquez / P.T Vladimir Yael Cob Centurion",
            "team_member_email": "-@_._"
          },
          {
            "id": 12,
            "services_detail": "1. Limpieza profunda diaria  de sanitarios de estudiantes.\r\n2. Suministrar insumos a los sanitarios (papel y jabón de manos).\r\n3. Apoyo en eventos y actividades.",
            "team_member_name": "C. Marcela Sosa Sanchez",
            "team_member_email": "-@_._"
          }
        ]
      },
      {
        "id": 2,
        "name": "Servicios Escolares",
        "details": "Oficina destinada al levantamiento de becas, constancias de autentificaciones, titulaciones e inscripciones.",
        "img": "",
        "schedules": "Lunes a Viernes de 9:00 a 14:00",
        "email": "lvargass.adm286@qroo.conalep.edu.mx",
        "assigned_admin": "M. Leticia Vargas Salto",
        "active": 1,
        "created_at": "2020-12-16 12:16:18",
        "created_by": 1,
        "updated_at": "2020-12-18 12:39:25",
        "updated_by": 1,
        "officeServices": [
          {
            "id": 1,
            "services_detail": "Inscripción, constancias, seguro",
            "team_member_name": "Lic. Vanessa S. Castillo Canché",
            "team_member_email": "vcastilloc.adm286@qroo.conalep.edu.mx"
          },
          {
            "id": 2,
            "services_detail": "Certificados, títulos y autentificaciones.",
            "team_member_name": "Lic. Wendy Areli May Moo",
            "team_member_email": "wmaym.adm286@qroo.conalep.edu.mx"
          },
          {
            "id": 3,
            "services_detail": "Becas diversas",
            "team_member_name": "Lic. Martha Beatriz Burgos Martínez.",
            "team_member_email": "mburgosmadm286@qroo.conalep.edu.mx"
          }
        ]
      },
      {
        "id": 3,
        "name": "Promoción y vinculación",
        "details": "​El departamento de Promoción y Vinculación, tiene como objetivo dar a conocer el mejor contenido generado a través de la oferta educativa a las y los benitojuarenses, así mismo, generar y crear vías de colaboración y cooperación con los diversos sectores; público, social y privado, con la finalidad de vincular de manera directa a nuestra comunidad de estudiantes en su desarrollo de formación integral.",
        "img": "",
        "schedules": "Lunes a Viernes de 9 am a 1 pm",
        "email": "vinvulacion.cancun2@qroo.conalep.edu.mx",
        "assigned_admin": "LCC. Francelia Lidieth Hernández Mendoza",
        "active": 1,
        "created_at": "2021-01-21 09:35:51",
        "created_by": 1,
        "updated_at": "2021-01-21 09:35:51",
        "updated_by": 1,
        "officeServices": [
          {
            "id": 4,
            "services_detail": "Seguimiento de prácticas profesionales, seguimiento de egresados, Comité de vinculación.",
            "team_member_name": "Mtra. Elsa Pérez Alejandro",
            "team_member_email": "correo@correo.com"
          },
          {
            "id": 5,
            "services_detail": "Seguimiento al programa de atención a la comunidad, servicio comunitario y capacitación social. Atención al seguimiento de servicio social generación 2017-2020. Apoyo a encuestas y aplicación de actividades de promoción y difusión.",
            "team_member_name": "C. Paola Martínez Montaño",
            "team_member_email": "correo@correo.com"
          },
          {
            "id": 16,
            "services_detail": "Seguimiento de convenios, Seguimiento a convocatorias, seguimiento en colaboración con formación técnica para el programa de emprendimiento.",
            "team_member_name": "Lic. Ynel Cutz Alayón",
            "team_member_email": "-@_._"
          }
        ]
      },
      {
        "id": 4,
        "name": "Orientación educativa",
        "details": " Acompañamiento e integración de los alumnos al nuevo entorno escolar. Apoyo psico-pedagógico para atender problemáticas particulares mediante atención individual y/o grupal. La orientación vocacional cuando proceda para elegir con mayor certeza las opciones profesionales o académicas.",
        "img": "",
        "schedules": "Lunes a Viernes de 9:30 a 4:30",
        "email": "orientacioneducativa.ccd@gmail.com",
        "assigned_admin": "Lic. Nelsy Jazmín Can Núñez",
        "active": 1,
        "created_at": "2021-01-26 11:00:56",
        "created_by": 1,
        "updated_at": "2021-01-26 11:00:56",
        "updated_by": 1,
        "officeServices": [
          {
            "id": 6,
            "services_detail": "Seguimiento de lideres de grupo, vida Saludable, consejo de mujeres, atención individualizada, reuniones y talleres de padres/madres de familia.",
            "team_member_name": "Ángela Dalia Campos Jimenez / Karina Franco Ramirez",
            "team_member_email": "orientacioneducativa.ccd@gmail.com"
          }
        ]
      },
      {
        "id": 5,
        "name": "Capacitación",
        "details": "Coordinador de capacitación.\r\n\r\nCoordinador de certificaciones.",
        "img": "",
        "schedules": "Lunes a Viernes de 9 am a 5 pm.",
        "email": "hjhernandez@conalepcancun2.edu.mx",
        "assigned_admin": "Lic. Hiram Javier Hernández Navarrete",
        "active": 1,
        "created_at": "2021-01-28 10:03:01",
        "created_by": 1,
        "updated_at": "2021-01-28 10:03:01",
        "updated_by": 1,
        "officeServices": []
      },
      {
        "id": 6,
        "name": "Paraescolares",
        "details": "Atención a los alumnos de paraescolares y actividades deportivas y culturales.",
        "img": "",
        "schedules": "Martes y Jueves de 9:00 a 13:00",
        "email": "deporteyculturaconalepcancun2@hotmail.com",
        "assigned_admin": "Dirección",
        "active": 1,
        "created_at": "2021-01-28 10:55:07",
        "created_by": 1,
        "updated_at": "2021-01-28 10:55:07",
        "updated_by": 1,
        "officeServices": []
      },
      {
        "id": 7,
        "name": "Servicios Administrativos",
        "details": "Área de gestión de recursos y planeación de recursos destinados para funcionamiento del Plantel Cancún II.",
        "img": "",
        "schedules": "Lunes a Viernes de 9:00 a 5:00",
        "email": "serviciosadministrativos.cancun2@qroo.conalep.edu.mx",
        "assigned_admin": "Lic. Eulogio Pool Tah",
        "active": 1,
        "created_at": "2021-02-02 08:49:49",
        "created_by": 1,
        "updated_at": "2021-02-02 08:49:49",
        "updated_by": 1,
        "officeServices": [
          {
            "id": 13,
            "services_detail": "Recursos Financieros, registros y captura de ingresos-egresos; registro de inventarios, étc.",
            "team_member_name": "Lic. David Bernardo Briceño Perera",
            "team_member_email": "bernardojuridicolegal@outlook.com"
          },
          {
            "id": 14,
            "services_detail": "Recursos Humanos (Control y seguimiento de incidencias y prestaciones docentes, así como control de expediente, actualización de Sentre).",
            "team_member_name": "Lic. Brenda Chavez Martinez",
            "team_member_email": "vrenda7@live.commx"
          },
          {
            "id": 15,
            "services_detail": "Recursos Humanos (Control y seguimiento de incidencias y prestaciones personal administrativo, así como control y actualización de expediente, seguimiento a convenios de pago de alumnos).\r\nRecursos Materiales (recepción, control y entrega de materiales papelería a las áreas del plantel).",
            "team_member_name": "Lic. Mirza Yadira Ruiz Garcia",
            "team_member_email": "yadiruga@hotmail.com"
          }
        ]
      }
  ];

  constructor() {
    console.log("Listo para servir!");
  }

  getOffices(): Office[] {
    return this.offices;
  }

  getOffice(id: number) {
    return this.offices[id-1];
  }

  searchOffices(term: string): Office[] {
    let officesArr: Office[] = [];
    term = term.toLowerCase();

    for (let i = 0; i < this.offices.length; i++) {

      let office = this.offices[i];

      let name = office.name.toLowerCase();

      if (name.indexOf(term) >= 0) {
        office.id = i;
        officesArr.push(office)
      }
    }

    return officesArr;
  }
}

export interface Office {
  id?: number;
  name: string;
  details: string;
  img: string;
  active: number;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  schedules: string;
  email: string;
  assigned_admin: string;
  officeServices: any;
}