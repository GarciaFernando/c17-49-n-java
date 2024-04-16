package com.medilatam.backend.Utils;

import com.medilatam.backend.Entity.EstadoConsulta;
import com.medilatam.backend.Entity.TipoConsulta;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class UtilMethods {
    public static Date convertStringToSqlDate(String fecha) {
        try {
            DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
            Date fechaRecibida = formatter.parse(fecha);
            return fechaRecibida;
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
    }
    public static EstadoConsulta setEstadoConsulta(Integer estadoConsulta){
        switch (estadoConsulta){
            case 1:
                return EstadoConsulta.NO_ATENDIDO;
            case 2:
                return EstadoConsulta.ATENDIDO;
            case 3:
                return EstadoConsulta.CANCELADA;
            default:
                return null;
        }
    }
    public static TipoConsulta setTipoConsulta(Integer tipoConsulta){
        switch (tipoConsulta){
            case 1:
                return TipoConsulta.PRESENCIAL;
            case 2:
                return TipoConsulta.VIRTUAL;
            default:
                return null;
        }
    }
}
