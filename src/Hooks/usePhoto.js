import React from "react";
import { Context } from "../Context/Photos";

const usePhotos = (setterOnly = false)=>{

const ctx = React.useContext(Context)

return setterOnly ? [ctx.setPhotos] : [ctx.photos, ctx.setPhotos]
}

export default usePhotos;