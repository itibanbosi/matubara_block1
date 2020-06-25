//% color="#3943c6" block="幅跳び" icon="\uf1b9"
namespace matubara_blocks {


  //% blockId=sport_habatobi
  //% block="幅跳び" group="スポーツテスト"
  export function habatobi():number{
    return input.acceleration(Dimension.Y);

  }
}

