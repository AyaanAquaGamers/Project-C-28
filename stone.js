class Stone{
    constructor(x,y,d){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.circle(x,y,d/2,options)
        this.diametre=d
        this.image=loadImage("stone.png")
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,0,0,this.diametre*2,this.diametre*2)
        pop()
    }
}