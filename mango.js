class Mango{
    constructor(x,y,d){
        var options={
            isStatic:true,
            restitution:0.5,
            friction:1
        }
        this.body=Bodies.circle(x,y,d/2,options)
        this.diametre=d
        this.image=loadImage("mango.png")
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,0,0,this.diametre*2,this.diametre*2)
        pop()
        //console.log()
    }
}