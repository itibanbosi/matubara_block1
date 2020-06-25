enum eureka_IO {
  Aﾎﾟｰﾄ,
  Bﾎﾟｰﾄ,
  Cﾎﾟｰﾄ
}




//% color="#3943c6" block="ﾕｰﾚｶ車" icon="\uf1b9"
namespace eureka_blocks_car {


  //% blockId=servos_backward
  //% block="幅跳び" group="スポーツテスト"
  export function backward(): void {
    Math.map(input.acceleration(Dimension.Y), 0, 1100, 0, 90)
  }


}
