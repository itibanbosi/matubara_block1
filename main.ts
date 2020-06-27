//% color="#3943c6" block="幅跳び"
namespace matubara_blocks {


  //% blockId=sport_habatobi_x
  //% block="X角度" group="体育"
  export function axis_x():number{
    return input.acceleration(Dimension.X)/1100*90;
  }

 //% blockId=sport_habatobi_y
  //% block="Y角度" group="体育"
  export function axis_y():number{
    return input.acceleration(Dimension.Y)/1100*90;
  }

 //% blockId=sport_habatobi_z
  //% block="Z角度" group="体育"
  export function axis_z():number{
    return input.acceleration(Dimension.Z)/1100*90;
  }
}

