enum vibrater_onoff {
    ON,
    OFF,
}
enum vibrater_kanketu {
    間欠,
    連続,
}




//% color="#3943c6" block="体育Ver0.91"
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


 //% weight=19 block="X軸＿腕をふる角度が |%limit| 度より大きく" group="センサー"
 //% limit.min=0 limit.max=90
  export function x_ude_more(limit: number): boolean {
        if ((input.acceleration(Dimension.X)/1100*90) > limit ){
            return true;
            }else{
            return false;
        }
    }    

 //% weight=18 block="X軸＿腕をふる角度が |%limit| 度より小きく" group="センサー"
 //% limit.min=0 limit.max=90
  export function x_ude_small(limit: number): boolean {
        if ((input.acceleration(Dimension.X)/1100*90) < limit ){
            return true;
            }else{
            return false;
        }
    }   
 //% weight=17 block="ｙ軸＿腕をふる角度が |%limit| 度より大きく" group="センサー"
 //% limit.min=0 limit.max=90
  export function y_ude_more(limit: number): boolean {
        if ((input.acceleration(Dimension.Y)/1100*90) > limit ){
            return true;
            }else{
            return false;
        }
    }    

 //% weight=16 block="ｙ軸＿腕をふる角度が |%limit| 度より小きく" group="センサー"
 //% limit.min=0 limit.max=90
  export function y_ude_small(limit: number): boolean {
        if ((input.acceleration(Dimension.Y)/1100*90) < limit ){
            return true;
            }else{
            return false;
        }
    }   
 //% weight=15 block="ｚ軸＿腕をふる角度が |%limit| 度より大きく" group="センサー"
 //% limit.min=0 limit.max=90
  export function z_ude_more(limit: number): boolean {
        if ((input.acceleration(Dimension.Z)/1100*90) > limit ){
            return true;
            }else{
            return false;
        }
    }    

 //% weight=14 block="ｚ軸＿腕をふる角度が |%limit| 度より小きく" group="センサー"
 //% limit.min=0 limit.max=90
  export function z_ude_small(limit: number): boolean {
        if ((input.acceleration(Dimension.Z)/1100*90) < limit ){
            return true;
            }else{
            return false;
        }
    }   

 //% color="#ffa800" weight=13 blockId=vib_kanketu block="間欠しん動" group="機能"
  export function vib_kanketu() {
    let i=0;
    for (let i=1 ; i<3 ;i++)　{
            basic.pause(100); 
            pins.digitalWritePin(DigitalPin.P1, 1); 
            basic.pause(400);  
            pins.digitalWritePin(DigitalPin.P1, 0);
            basic.pause(400); 
        }
    }

 //% color="#ffa800" weight=13 blockId=vib_kanketu_oto block="間欠しん動（音付き）" group="機能"
  export function vib_kanketu_oto() {
    let i=0;
    for (let i=1 ; i<3 ;i++)　{
            basic.pause(100); 
            pins.digitalWritePin(DigitalPin.P1, 1); 
            music.ringTone(698)
            basic.pause(400);  
            pins.digitalWritePin(DigitalPin.P1, 0);
            music.rest(music.beat(BeatFraction.Sixteenth))           
            basic.pause(400); 
        }
    }



 //% color="#ffa800" weight=12 blockId=vib block="しん動 |%mode|" group="機能"
  export function vib(mode: vibrater_onoff) {
            if (mode == vibrater_onoff.ON ) {
            return pins.digitalWritePin(DigitalPin.P1, 1);
            } else {
            return pins.digitalWritePin(DigitalPin.P1, 0);
        }
    }   

  
    
 //% color="#ff3d03" weight=11 blockId=oto block="音を鳴らす" group="機能"
  export function oto() {
        music.playTone(659, music.beat(BeatFraction.Eighth))
  }

  //% color="#1E90FF" weight=51 block="待ち時間（秒）|%second|" group="機能"
  //% second.min=0 second.max=10
  export function driveForwards(second: number): void {
    basic.pause(second * 1000);
  }



}