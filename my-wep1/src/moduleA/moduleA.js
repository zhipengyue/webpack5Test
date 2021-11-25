export const moudleA ={
  name: 'moduleA',
  time: 3000,
  init: function(){
    setTimeout(()=>{
      console.log(this.name+' Bo Bo Bo !!!')
    },this.time)
  }
}