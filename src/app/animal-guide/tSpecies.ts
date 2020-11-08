export class tSpecies {
    //nome popular português
    port_name:string

    //taxonomia
    species:string
    genus:string
    family:string
    order:string
    class:string
    phylo:string
    kingdom:string
    
    //classificações quanto a risco
    iucn:string
    cites:string

    //imagem habitat
    map_pic:string

    //imagens
    pictures:[{
        img_url:string
    }]
     
    //caracteristicas
    characteristics:[{
       type:string
       description:string
    }]
}