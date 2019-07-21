import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class AssetsService {

  /* IMAGENES */
  public static URL_IMAGEN_USER_MENU = 'https://firebasestorage.googleapis.com/v0/b/men-acvis.appspot.com/o/imagenes%2FEnmascarar%20grupo%203.jpg?alt=media&token=4e7f31bf-cfd6-49a4-99c6-19f9740e6808';
  public static URL_IMAGEN_PRUEBA_JPG = 'https://firebasestorage.googleapis.com/v0/b/men-acvis.appspot.com/o/imagenes%2Fprueba.JPG?alt=media&token=6431ebf6-1006-4ec2-844c-0e56a00ac14b';
  public static URL_IMAGE_GRUPO_2x = 'https://firebasestorage.googleapis.com/v0/b/acvis-90404.appspot.com/o/imagenes%2FGrupo%209592%402x.png?alt=media&token=360ccd28-836b-49fa-a4d8-08b4e87274a5';
  public static URL_IMAGE_GRUPO = 'https://firebasestorage.googleapis.com/v0/b/acvis-90404.appspot.com/o/imagenes%2FGrupo%209592.png?alt=media&token=699a0518-3e6b-4fb9-ae38-a0d49f3e3177';
  public static URL_IMAGEN_FONDO_INICIO = 'https://firebasestorage.googleapis.com/v0/b/men-acvis.appspot.com/o/imagenes%2FGrupo%209646.png?alt=media&token=56cd063e-e50b-4e40-968a-a41796f1e2d2';

  /* ICONOS */
  public static URL_ICONO_DEMO_JPG = 'https://firebasestorage.googleapis.com/v0/b/men-acvis.appspot.com/o/imagenes%2Ficon-demo.jpg?alt=media&token=2888d7a3-6f88-4b8f-9495-0b5658165666';
  public static URL_ICONO_DEMO_BLACK_PNG = 'https://firebasestorage.googleapis.com/v0/b/men-acvis.appspot.com/o/imagenes%2Ficon-demo-black.png?alt=media&token=81d3009d-20b2-4e9a-86a9-93f6312bc635';
  public static URL_ICONO_DEMO_PINK_PNG = 'https://firebasestorage.googleapis.com/v0/b/men-acvis.appspot.com/o/imagenes%2Ficon-demo-black.png?alt=media&token=81d3009d-20b2-4e9a-86a9-93f6312bc635';
  public static URL_ICONO_DEMO_GRAY_PNG = 'https://firebasestorage.googleapis.com/v0/b/men-acvis.appspot.com/o/imagenes%2Ficon-demo-black.png?alt=media&token=81d3009d-20b2-4e9a-86a9-93f6312bc635';

  /* VIDEOS */
  public static URL_VIDEO_PRUEBA_MP4 = 'https://firebasestorage.googleapis.com/v0/b/men-acvis.appspot.com/o/videos%2Fprueba.mp4?alt=media&token=4e2871f9-6a94-4781-89d7-3e8e8d8912f2';

  /* AUDIOS */
  public static URL_VIDEO_PRUEBA_OGG = 'https://firebasestorage.googleapis.com/v0/b/men-acvis.appspot.com/o/audios%2Fprueba.ogg?alt=media&token=16b1d570-dc49-465b-97b3-59bfc231ae6e';
  public static URL_VIDEO_PRUEBA_MP3 = 'https://firebasestorage.googleapis.com/v0/b/men-acvis.appspot.com/o/audios%2Fprueba.mp3?alt=media&token=9a23387f-1aa6-4cf3-a3cf-d9817038f449';

  /* CONSTANTES */

  public static HORAS_DIA = ['06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30',
    '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00',
    '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00'];

  public static MESES = new Array('ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO',
    'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE');
  public static DIAS_SEMANA = new Array('Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado');

}
