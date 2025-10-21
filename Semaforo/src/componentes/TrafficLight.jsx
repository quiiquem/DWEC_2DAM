function LightButton({color, onClick, mensajecolor, contenido}){
        let bgColor ='';
        switch(color){
            case "rojo":
                console.log('selecciona rojo')
                bgColor = "#FF0000";
            break;
            case "amarillo":
                bgColor = "#d39b00ff";
            break;
            case "verde":
                bgColor = "#00ff00ff";
            break;
        }

return(
    <div style={{
            display : "block",
            backgroundColor: bgColor,
            color: "black",
            border: "none",
            borderRadius: "999999px",
            height: "100px",
            margin: "20px",
            cursor: "pointer",
            textAlign: "center",
            color: "#ffffffff",
            fontSize: "25px"
        }} 
        onClick={(event) => {
            event.stopPropagation();
            alert(contenido);
        }}></div>
)
}

export default function TrafficLightFuncion(){
    return(
        <div onClick={() => alert("Wow un semaforo!")} style={{backgroundColor: "black", cursor: "pointer", 
        width:"200px",height:"390px", borderRadius:"17px", padding: "20px",  color:'#FFFFFF'}}>
        <LightButton color="rojo" contenido="🚫 Detente" mensajecolor="Stop"/>
        <LightButton color="amarillo" contenido="⏳ Espera un momento" mensajecolor="Espera"/>
        <LightButton color="verde" contenido="✅ Adelante" mensajecolor="Adelante"/>
        </div>
    )
}
