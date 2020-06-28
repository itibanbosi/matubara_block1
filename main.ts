//% color="#3943c6" block="体育Ver0.90"
namespace matubara_blocks {


  //% weight=30 blockId=sport_habatobi_x
  //% block="X角度" group="体育"
  export function axis_x():number{
    return input.acceleration(Dimension.X)/1100*90;
  }

 //% weight=29 blockId=sport_habatobi_y
  //% block="Y角度" group="体育"
  export function axis_y():number{
    return input.acceleration(Dimension.Y)/1100*90;
  }

 //% weight=28 blockId=sport_habatobi_z
  //% block="Z角度" group="体育"
  export function axis_z():number{
    return input.acceleration(Dimension.Z)/1100*90;
  }


 //% weight=19 block="腕をふる角度が |%limit| 度より大きく" group="体育"
 //% limit.min=0 limit.max=90
  export function ude_more(limit: number): boolean {
        if ((input.acceleration(Dimension.X)/1100*90) > limit ){
            return true;
            }else{
            return false;
        }
    }    

 //% weight=18 block="腕をふる角度が |%limit| 度より小きく" group="体育"
 //% limit.min=0 limit.max=90
  export function ude_small(limit: number): boolean {
        if ((input.acceleration(Dimension.X)/1100*90) < limit ){
            return true;
            }else{
            return false;
        }
    }   

}